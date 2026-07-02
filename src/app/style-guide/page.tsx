import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Heading from '@/components/ui/Heading';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Style Guide | Planet X Devs',
  description: 'Living reference for the Planet X Devs design system.',
  robots: { index: false, follow: false },
};

/**
 * Style Guide — a living, rendered view of the design system.
 *
 * IMPORTANT: All Tailwind classes here are written as LITERAL strings.
 * Tailwind v4 only generates utilities it can see in source, so never
 * build class names dynamically (e.g. `bg-${value}`) — the utility
 * won't be compiled and the demo will render blank. The canonical
 * tokens these classes reference live in `src/app/globals.css`.
 */

// --- Brand palette (canonical values from globals.css @theme) ---
const brandColors = [
  { name: 'nebula-black', hex: '#0A0A0B', className: 'bg-nebula-black', dark: true },
  { name: 'nebula-purple-dark', hex: '#5B21B6', className: 'bg-nebula-purple-dark', dark: true },
  { name: 'nebula-purple', hex: '#6B46C1', className: 'bg-nebula-purple', dark: true },
  { name: 'nebula-violet', hex: '#9333EA', className: 'bg-nebula-violet', dark: true },
  { name: 'nebula-blue', hex: '#312E81', className: 'bg-nebula-blue', dark: true },
  { name: 'stellar-blue', hex: '#0284C7', className: 'bg-stellar-blue', dark: true },
  { name: 'nebula-cyan', hex: '#06B6D4', className: 'bg-nebula-cyan', dark: false },
  { name: 'nebula-white', hex: '#FAFAFA', className: 'bg-nebula-white', dark: false },
] as const;

// --- Opacity / tint variants ---
const tintColors = [
  { name: 'violet-10', className: 'bg-nebula-violet-10' },
  { name: 'violet-20', className: 'bg-nebula-violet-20' },
  { name: 'violet-30', className: 'bg-nebula-violet-30' },
  { name: 'violet-40', className: 'bg-nebula-violet-40' },
  { name: 'violet-50', className: 'bg-nebula-violet-50' },
  { name: 'cyan-10', className: 'bg-nebula-cyan-10' },
  { name: 'cyan-20', className: 'bg-nebula-cyan-20' },
  { name: 'cyan-30', className: 'bg-nebula-cyan-30' },
  { name: 'cyan-40', className: 'bg-nebula-cyan-40' },
  { name: 'cyan-50', className: 'bg-nebula-cyan-50' },
  { name: 'purple-20', className: 'bg-nebula-purple-20' },
  { name: 'purple-30', className: 'bg-nebula-purple-30' },
  { name: 'purple-50', className: 'bg-nebula-purple-50' },
] as const;

// --- Semantic surfaces (globals.css utilities) ---
const surfaces = [
  { name: '.bg-surface-primary', className: 'bg-surface-primary' },
  { name: '.bg-surface-secondary', className: 'bg-surface-secondary' },
  { name: '.bg-surface-tertiary', className: 'bg-surface-tertiary' },
  { name: '.bg-surface-violet', className: 'bg-surface-violet' },
  { name: '.bg-surface-cyan', className: 'bg-surface-cyan' },
  { name: '.bg-surface-purple', className: 'bg-surface-purple' },
] as const;

// --- Glass utilities (need a busy backdrop to read) ---
const glassVariants = [
  { name: '.glass', className: 'glass' },
  { name: '.glass-elevated', className: 'glass-elevated' },
  { name: '.glass-gray', className: 'glass-gray' },
  { name: '.glass-violet', className: 'glass-violet' },
  { name: '.glass-cyan', className: 'glass-cyan' },
  { name: '.glass-purple', className: 'glass-purple' },
  { name: '.glass-gradient-violet', className: 'glass-gradient-violet' },
  { name: '.glass-gradient-cyan', className: 'glass-gradient-cyan' },
  { name: '.glass-gradient-nebula', className: 'glass-gradient-nebula' },
] as const;

// --- Gradient utilities ---
const gradients = [
  { name: '.bg-gradient-nebula', className: 'bg-gradient-nebula' },
  { name: '.bg-gradient-space', className: 'bg-gradient-space' },
  { name: '.bg-gradient-planet', className: 'bg-gradient-planet' },
  { name: '.bg-gradient-radial-nebula', className: 'bg-gradient-radial-nebula' },
  { name: 'gradients.primary', className: 'bg-gradient-to-r from-nebula-cyan to-nebula-violet' },
  { name: 'gradients.secondary', className: 'bg-gradient-to-r from-nebula-violet to-nebula-purple' },
] as const;

// --- Nebula shadow / glow utilities ---
const shadowUtilities = [
  { name: '.shadow-nebula', className: 'shadow-nebula' },
  { name: '.shadow-nebula-lg', className: 'shadow-nebula-lg' },
  { name: '.shadow-glow', className: 'shadow-glow' },
] as const;

// --- Section spacing scale (theme.spacing.section) ---
const sectionSpacing = [
  { name: 'xsmall', className: 'py-4' },
  { name: 'small', className: 'py-12' },
  { name: 'medium', className: 'py-16' },
  { name: 'large', className: 'py-20' },
  { name: 'xlarge', className: 'py-24 lg:py-32' },
] as const;

// --- Border radius scale (theme.borderRadius) ---
const radii = [
  { name: 'small', className: 'rounded' },
  { name: 'medium', className: 'rounded-lg' },
  { name: 'large', className: 'rounded-xl' },
  { name: 'xlarge', className: 'rounded-2xl' },
  { name: 'full', className: 'rounded-full' },
] as const;

// --- Animation utilities ---
const animations = [
  { name: '.animate-float', className: 'animate-float' },
  { name: '.animate-pulse-slow', className: 'animate-pulse-slow' },
  { name: '.animate-twinkle', className: 'animate-twinkle' },
  { name: '.animate-spin-slow', className: 'animate-spin-slow' },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-4">
      {children}
    </p>
  );
}

export default function StyleGuide() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <Section background="gradient" container spacing="large">
        <Heading as="h1" centered color="white">
          Design System
        </Heading>
        <p className="text-center text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
          A living reference for the Planet X Devs design system. Canonical
          tokens live in <code className="text-nebula-cyan">globals.css</code>;
          semantic class presets in <code className="text-nebula-cyan">config/theme.ts</code>.
        </p>
      </Section>

      {/* Brand palette */}
      <Section container spacing="medium">
        <Heading as="h2" className="mb-8">Brand Palette</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brandColors.map((c) => (
            <div key={c.name} className="text-center">
              <div
                className={`${c.className} h-24 rounded-xl mb-2 border border-gray-200 dark:border-gray-700 flex items-end p-2`}
              >
                <span className={`text-xs font-mono ${c.dark ? 'text-white/80' : 'text-black/70'}`}>
                  {c.hex}
                </span>
              </div>
              <p className="text-sm font-medium">{c.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <SectionLabel>Opacity &amp; tint variants</SectionLabel>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
            {tintColors.map((c) => (
              <div key={c.name} className="text-center">
                <div
                  className={`${c.className} h-14 rounded-lg mb-1 border border-gray-200 dark:border-gray-700`}
                />
                <p className="text-xs font-mono text-gray-500 dark:text-gray-400">{c.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Semantic colors */}
      <Section background="secondary" container spacing="medium">
        <Heading as="h2" className="mb-8">Semantic Colors</Heading>

        <SectionLabel>Text (theme.themeColors.text)</SectionLabel>
        <Card className="mb-8">
          <p className="text-nebula-black dark:text-nebula-white text-lg">Primary text</p>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Secondary text</p>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Tertiary text</p>
          <p className="text-gray-500 dark:text-gray-500 text-lg">Muted text</p>
          <p className="text-nebula-violet dark:text-nebula-cyan text-lg font-medium">Accent text</p>
          <p className="text-red-600 dark:text-red-400 text-lg">Error text</p>
          <p className="text-green-600 dark:text-green-400 text-lg">Success text</p>
          <p className="text-yellow-600 dark:text-yellow-400 text-lg">Warning text</p>
        </Card>

        <SectionLabel>Surfaces (globals.css .bg-surface-*)</SectionLabel>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {surfaces.map((s) => (
            <div
              key={s.name}
              className={`${s.className} h-20 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center`}
            >
              <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{s.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Typography */}
      <Section container spacing="medium">
        <Heading as="h2" className="mb-8">Typography</Heading>
        <div className="space-y-6">
          <Card>
            <SectionLabel>Headings (Heading component)</SectionLabel>
            <Heading as="h1">Heading 1</Heading>
            <Heading as="h2">Heading 2</Heading>
            <Heading as="h3">Heading 3</Heading>
            <Heading as="h4">Heading 4</Heading>
            <Heading as="h5">Heading 5</Heading>
            <Heading as="h6">Heading 6</Heading>
          </Card>

          <Card>
            <SectionLabel>Paragraph scale (theme.typography.paragraph)</SectionLabel>
            <p className="text-sm text-gray-700 dark:text-gray-300">Small — text-sm</p>
            <p className="text-base text-gray-700 dark:text-gray-300">Base — text-base</p>
            <p className="text-lg text-gray-700 dark:text-gray-300">Large — text-lg</p>
            <p className="text-xl text-gray-700 dark:text-gray-300">Extra large — text-xl</p>
          </Card>
        </div>
      </Section>

      {/* Buttons */}
      <Section background="secondary" container spacing="medium">
        <Heading as="h2" className="mb-8">Buttons</Heading>
        <div className="space-y-6">
          <Card>
            <SectionLabel>Variants</SectionLabel>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
          </Card>
          <Card>
            <SectionLabel>Sizes</SectionLabel>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="small">Small</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </div>
          </Card>
          <Card>
            <SectionLabel>States</SectionLabel>
            <div className="flex flex-wrap gap-4 items-center">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <div className="w-full">
                <Button fullWidth>Full width</Button>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Cards & shadows */}
      <Section container spacing="medium">
        <Heading as="h2" className="mb-8">Cards &amp; Shadows</Heading>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card shadow="small">
            <h3 className="text-lg font-semibold mb-2">Small shadow</h3>
            <p className="text-gray-600 dark:text-gray-400">shadow=&quot;small&quot;</p>
          </Card>
          <Card shadow="medium">
            <h3 className="text-lg font-semibold mb-2">Medium shadow</h3>
            <p className="text-gray-600 dark:text-gray-400">shadow=&quot;medium&quot;</p>
          </Card>
          <Card shadow="large" hover>
            <h3 className="text-lg font-semibold mb-2">Large + hover</h3>
            <p className="text-gray-600 dark:text-gray-400">shadow=&quot;large&quot; hover</p>
          </Card>
        </div>

        <SectionLabel>Nebula glow utilities</SectionLabel>
        <div className="grid md:grid-cols-3 gap-8 pt-2">
          {shadowUtilities.map((s) => (
            <div
              key={s.name}
              className={`${s.className} h-24 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center`}
            >
              <span className="text-sm font-mono text-gray-700 dark:text-gray-300">{s.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Glass */}
      <Section container spacing="medium" className="bg-gradient-nebula">
        <Heading as="h2" className="mb-2 text-white">Glass Effects</Heading>
        <p className="text-white/80 mb-8">Rendered over a nebula gradient so the frosting reads.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {glassVariants.map((g) => (
            <div
              key={g.name}
              className={`${g.className} glass-hover h-28 rounded-2xl flex items-center justify-center p-4`}
            >
              <span className="text-sm font-mono text-white drop-shadow">{g.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Gradients */}
      <Section background="secondary" container spacing="medium">
        <Heading as="h2" className="mb-8">Gradients</Heading>
        <div className="grid md:grid-cols-2 gap-6">
          {gradients.map((g) => (
            <div key={g.name} className={`${g.className} p-8 rounded-2xl min-h-28 flex items-end`}>
              <span className="text-sm font-mono text-white drop-shadow">{g.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Spacing */}
      <Section container spacing="medium">
        <Heading as="h2" className="mb-8">Spacing Scale</Heading>
        <SectionLabel>Section vertical rhythm (theme.spacing.section)</SectionLabel>
        <div className="space-y-3">
          {sectionSpacing.map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <span className="font-mono text-sm w-20 shrink-0">{s.name}</span>
              <div className={`${s.className} w-full rounded-lg bg-nebula-violet-20`}>
                <div className="text-center text-xs font-mono text-nebula-violet dark:text-nebula-cyan">
                  {s.className}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Border radius */}
      <Section background="secondary" container spacing="medium">
        <Heading as="h2" className="mb-8">Border Radius</Heading>
        <div className="flex flex-wrap gap-6">
          {radii.map((r) => (
            <div key={r.name} className="text-center">
              <div className={`${r.className} h-20 w-20 bg-nebula-violet mb-2`} />
              <p className="text-sm font-medium">{r.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Animations */}
      <Section container spacing="medium">
        <Heading as="h2" className="mb-8">Animations</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {animations.map((a) => (
            <div key={a.name} className="text-center">
              <div className="h-24 flex items-center justify-center">
                <div className={`${a.className} h-12 w-12 rounded-full bg-gradient-to-br from-nebula-violet to-nebula-cyan`} />
              </div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400">{a.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
