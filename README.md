# Planet X Devs

Marketing site for **Planet X Devs**, a web development service that helps
marketing agencies with technical implementation — WordPress development,
performance optimization, maintenance, and white-label work.

**Live:** [www.planetxdevs.com](https://www.planetxdevs.com)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion (used sparingly)
- **Forms:** React Hook Form + Zod
- **Email:** Resend
- **Newsletter:** ConvertKit
- **Hosting:** Vercel (auto-deploys from `main`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env` file in the project root:

```bash
# Contact form (Resend) — required
RESEND_API_KEY=
RESEND_FROM_EMAIL=
RESEND_TO_EMAIL=
SEND_AUTO_REPLY=        # "true" to send an auto-reply to the sender

# Website-audit newsletter signup (ConvertKit) — required for /website-audit-checklist
CONVERTKIT_API_KEY=
CONVERTKIT_FORM_ID=
```

## Scripts

```bash
npm run dev              # Local development (Turbopack)
npm run build            # Production build
npm run start            # Serve the production build
npm run lint             # ESLint

npm run audit:check      # Fast gate: npm audit only, no server (CI/pre-commit friendly)
npm run health           # Full check: boots a dev server, verifies routes/CSS/API, tears down
npm run health:running   # Full check against an already-running server (e.g. npm run dev)
```

## Project Structure

```
src/
  app/           # App Router pages and API routes
    api/         # contact (Resend), convertkit-subscribe (ConvertKit)
  components/
    ui/          # Reusable UI components (Button, Card, etc.)
    sections/    # Page sections (Hero, Services, etc.)
    forms/       # Form components with validation
    layout/      # Layout and navigation
  constants/     # Page content and site data
  emails/        # Email templates and components
  hooks/         # Custom React hooks
  lib/           # Shared utilities
  styles/        # Global and component styles
  types/         # Shared TypeScript types
```

### Pages

`/` · `/about` · `/services` · `/contact` · `/white-label-web-development` ·
`/website-audit-checklist` · `/style-guide` · `/privacy-policy`

## Health Check

`scripts/health-check.mjs` automates post-dependency-change verification
(dependency audit, every public route returns 200, Tailwind/postcss CSS
compiles, and the contact API validates input). No extra dependencies — it uses
Node's built-in `fetch`, and exits non-zero if any check fails.

```bash
npm run audit:check      # audit only
npm run health           # full check (boots and tears down a dev server)
npm run health:running   # full check against a running server
```

Options: `--base-url <url>`, `--audit-level <low|moderate|high|critical>`.

## Deployment

Pushing to `main` triggers an automatic deploy on Vercel.

```bash
git add .
git commit -m "feat: ..."
git push origin main
```
