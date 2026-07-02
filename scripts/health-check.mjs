#!/usr/bin/env node
/**
 * Project health check.
 *
 * Automates the manual verification we run after dependency changes
 * (e.g. the postcss/npm-audit override):
 *   1. npm audit is clean (no vulnerabilities at/above the threshold)
 *   2. every public route returns HTTP 200
 *   3. Tailwind/postcss CSS actually compiles and is served
 *   4. the contact API validates input (rejects a bad body with 400)
 *
 * Usage:
 *   node scripts/health-check.mjs                 # audit + boot dev server + check routes
 *   node scripts/health-check.mjs --audit-only    # just the npm audit gate (fast, no server)
 *   node scripts/health-check.mjs --no-server     # assume a server is already running
 *   node scripts/health-check.mjs --base-url http://localhost:3000
 *
 * Exit code 0 = all checks passed, 1 = something failed (CI-friendly).
 */

import { spawn } from 'node:child_process';
import { setTimeout as sleep } from 'node:timers/promises';

// ---- config ----------------------------------------------------------------

const args = process.argv.slice(2);
const hasFlag = (name) => args.includes(name);
const getOpt = (name, fallback) => {
  const i = args.indexOf(name);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};

const AUDIT_ONLY = hasFlag('--audit-only');
const NO_SERVER = hasFlag('--no-server');
const BASE_URL = getOpt('--base-url', 'http://localhost:3000');
const PORT = new URL(BASE_URL).port || '3000';
// Fail the audit gate on this severity or higher.
const AUDIT_LEVEL = getOpt('--audit-level', 'low'); // low | moderate | high | critical

// Public routes that must render.
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/contact',
  '/white-label-web-development',
  '/website-audit-checklist',
  '/style-guide',
  '/privacy-policy',
];

const SEVERITY_ORDER = ['info', 'low', 'moderate', 'high', 'critical'];

// ---- reporting -------------------------------------------------------------

let failures = 0;
const pass = (msg) => console.log(`  \x1b[32m✓\x1b[0m ${msg}`);
const fail = (msg) => {
  failures++;
  console.log(`  \x1b[31m✗ ${msg}\x1b[0m`);
};
const section = (title) => console.log(`\n\x1b[1m${title}\x1b[0m`);

// ---- check 1: npm audit ----------------------------------------------------

function runNpmAuditJson() {
  return new Promise((resolve) => {
    const child = spawn('npm', ['audit', '--json'], { cwd: process.cwd() });
    let out = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', () => {}); // npm audit exits non-zero when vulns exist; we parse json instead
    child.on('close', () => {
      try {
        resolve(JSON.parse(out));
      } catch {
        resolve(null);
      }
    });
  });
}

async function checkAudit() {
  section('1. Dependency audit (npm audit)');
  const report = await runNpmAuditJson();
  if (!report || !report.metadata || !report.metadata.vulnerabilities) {
    fail('could not parse `npm audit --json` output');
    return;
  }
  const vulns = report.metadata.vulnerabilities;
  const threshold = SEVERITY_ORDER.indexOf(AUDIT_LEVEL);
  const offenders = SEVERITY_ORDER
    .map((sev, idx) => ({ sev, idx, count: vulns[sev] || 0 }))
    .filter(({ idx, count }) => idx >= threshold && count > 0);

  const total = Object.values(vulns).reduce((a, b) => a + b, 0);
  if (offenders.length === 0) {
    pass(`no vulnerabilities at/above "${AUDIT_LEVEL}" (total reported: ${total})`);
  } else {
    fail(
      `found vulnerabilities: ${offenders.map((o) => `${o.count} ${o.sev}`).join(', ')} ` +
        `(run \`npm audit\` for details)`
    );
  }
}

// ---- server lifecycle ------------------------------------------------------

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.status > 0) return true;
    } catch {
      // not up yet
    }
    await sleep(500);
  }
  return false;
}

function startDevServer() {
  const child = spawn('npm', ['run', 'dev'], {
    cwd: process.cwd(),
    env: { ...process.env, PORT },
    stdio: 'ignore',
    detached: true, // own process group, so finish() can kill the whole tree
  });
  child.unref();
  return child;
}

// ---- check 2: routes -------------------------------------------------------

async function checkRoutes() {
  section('2. Public routes return 200');
  for (const route of ROUTES) {
    try {
      const res = await fetch(`${BASE_URL}${route}`);
      if (res.status === 200) pass(`200  ${route}`);
      else fail(`${res.status}  ${route} (expected 200)`);
    } catch (err) {
      fail(`${route} — request failed: ${err.message}`);
    }
  }
}

// ---- check 3: CSS / Tailwind compiles --------------------------------------

async function checkCss() {
  section('3. Tailwind/postcss CSS compiles and is served');
  try {
    const html = await (await fetch(`${BASE_URL}/`)).text();
    // Match both dev (turbopack chunk) and prod (static/css) stylesheet URLs.
    const cssUrls = [...html.matchAll(/href="([^"]*\.css[^"]*)"/g)]
      .map((m) => m[1])
      .filter((u) => u.includes('/_next/'));

    if (cssUrls.length === 0) {
      fail('no /_next/*.css stylesheet linked in the homepage HTML');
      return;
    }

    let checked = false;
    for (const raw of cssUrls) {
      const url = raw.startsWith('http') ? raw : `${BASE_URL}${raw}`;
      const css = await (await fetch(url)).text();
      const twVars = (css.match(/--tw-/g) || []).length;
      if (css.length > 1000 && twVars > 0) {
        pass(`stylesheet compiled (${css.length} bytes, ${twVars} Tailwind vars)`);
        checked = true;
        break;
      }
    }
    if (!checked) fail('stylesheet(s) served but no Tailwind output detected');
  } catch (err) {
    fail(`CSS check failed: ${err.message}`);
  }
}

// ---- check 4: contact API validation ---------------------------------------

async function checkContactApi() {
  section('4. Contact API validates input');
  try {
    const res = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}), // empty body -> should be rejected by validation, no email sent
    });
    const body = await res.json().catch(() => ({}));
    if (res.status === 400 && body && body.success === false && body.errors) {
      pass(`POST /api/contact rejected empty body with 400 (${Object.keys(body.errors).length} field errors)`);
    } else {
      fail(`POST /api/contact returned ${res.status} (expected 400 with validation errors)`);
    }
  } catch (err) {
    fail(`contact API check failed: ${err.message}`);
  }
}

// ---- main ------------------------------------------------------------------

async function main() {
  console.log('\x1b[1mPlanet X Devs — health check\x1b[0m');

  await checkAudit();

  if (AUDIT_ONLY) {
    return finish();
  }

  let server = null;
  try {
    if (NO_SERVER) {
      section('Server');
      const up = await waitForServer(`${BASE_URL}/`, 5000);
      if (!up) {
        fail(`no server responding at ${BASE_URL} (start one, or drop --no-server)`);
        return finish();
      }
      pass(`server already running at ${BASE_URL}`);
    } else {
      section('Server');
      console.log(`  starting dev server on port ${PORT}...`);
      server = startDevServer();
      const up = await waitForServer(`${BASE_URL}/`, 60000);
      if (!up) {
        fail('dev server did not become ready within 60s');
        return finish(server);
      }
      pass(`dev server ready at ${BASE_URL}`);
    }

    await checkRoutes();
    await checkCss();
    await checkContactApi();
  } finally {
    finish(server);
  }
}

function finish(server) {
  if (server) {
    // Kill the whole process group started by `npm run dev`.
    try {
      process.kill(-server.pid, 'SIGTERM');
    } catch {
      try {
        server.kill('SIGTERM');
      } catch {}
    }
  }
  console.log(
    failures === 0
      ? '\n\x1b[32m\x1b[1mAll checks passed.\x1b[0m'
      : `\n\x1b[31m\x1b[1m${failures} check(s) failed.\x1b[0m`
  );
  process.exit(failures === 0 ? 0 : 1);
}

main();
