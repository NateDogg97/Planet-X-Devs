# Planet X Devs — Design System

Canonical reference for the visual language of the Planet X Devs site. This
document is the source of truth for design decisions; the code that implements
them lives in two places:

| Layer | File | Holds |
| --- | --- | --- |
| **Canonical tokens** | `src/app/globals.css` | Raw color values, the `nebula-*` palette, semantic CSS variables, glass / gradient / shadow utilities, keyframes & animations. Defined via Tailwind v4 `@theme` + `@layer utilities`. |
| **Semantic presets** | `src/config/theme.ts` | Reusable Tailwind utility **strings** (spacing scale, container widths, type scale, component tokens) that reference the canonical tokens by class name. Defines **no raw values**. |
| **Living demo** | `src/app/style-guide` | A rendered page showing every token/component. Route: `/style-guide`. |

> **Rule of thumb:** raw values live only in `globals.css`. `theme.ts` and
> components compose class names; they never hardcode hex colors. When adding
> anything new, extend the canonical layer first, then reference it.

Theme is `class`-based dark mode (`.dark` on a root element) with a
`prefers-color-scheme` fallback.

---

## 1. Color

### Brand palette (`nebula-*`)

Defined in `globals.css` `@theme`; available as `bg-*`, `text-*`, `border-*` utilities.

| Token | Hex | Usage |
| --- | --- | --- |
| `nebula-black` | `#0A0A0B` | Primary dark background |
| `nebula-purple-dark` | `#5B21B6` | Gradient anchor, deep accent |
| `nebula-purple` | `#6B46C1` | Secondary brand accent |
| `nebula-violet` | `#9333EA` | **Primary accent** (light mode) |
| `nebula-blue` | `#312E81` | Gradient / space depth |
| `stellar-blue` | `#0284C7` | Cyan hover / cool accent |
| `nebula-cyan` | `#06B6D4` | **Primary accent** (dark mode) |
| `nebula-white` | `#FAFAFA` | Primary light background / text on dark |

**Accent convention:** violet leads in light mode, cyan leads in dark mode
(`text-nebula-violet dark:text-nebula-cyan`). Keep this pairing consistent.

### Opacity / tint variants

Pre-mixed alpha tokens for glows, borders, and subtle fills:

- `nebula-violet-10/20/30/40/50`
- `nebula-cyan-10/20/30/40/50`
- `nebula-purple-20/30/50`

### Semantic colors (`theme.themeColors`)

Theme-aware class strings that resolve light/dark automatically. Prefer these
over raw palette tokens for text, surfaces, and borders.

- **Text:** `primary`, `secondary`, `tertiary`, `muted`, `accent`, `inverse`, `error`, `success`, `warning`
- **Background:** `primary`, `secondary`, `tertiary`, `card`, `cardHover`, `inverse`, `overlay`
- **Border:** `primary`, `secondary`, `accent`, `subtle`, `error`

### Surface utilities (`globals.css`)

CSS-variable-backed surfaces with light/dark values baked in:
`.bg-surface-primary`, `.bg-surface-secondary`, `.bg-surface-tertiary`,
`.bg-surface-violet`, `.bg-surface-cyan`, `.bg-surface-purple`.

---

## 2. Typography

**Font families:** Geist Sans (`--font-geist-sans`) and Geist Mono
(`--font-geist-mono`), loaded via `next/font/google` in `src/app/layout.tsx`
and mapped to `--font-sans` / `--font-mono` in `@theme`.

> ⚠️ **Known inconsistency:** `globals.css` sets `body { font-family: Arial, Helvetica, sans-serif }`,
> which overrides Geist on the base body. Tailwind's `font-sans` utility still
> resolves to Geist. Align these when convenient (drop the Arial rule or apply
> `font-sans` on `body`).

**Heading scale** (`theme.typography.heading`, via the `Heading` component):

| Level | Classes |
| --- | --- |
| h1 | `text-4xl md:text-5xl lg:text-6xl font-bold` |
| h2 | `text-3xl md:text-4xl font-bold` |
| h3 | `text-2xl md:text-3xl font-bold` |
| h4 | `text-xl md:text-2xl font-semibold` |
| h5 | `text-lg md:text-xl font-semibold` |
| h6 | `text-base md:text-lg font-semibold` |

**Paragraph scale** (`theme.typography.paragraph`): `small` `text-sm` ·
`base` `text-base` · `large` `text-lg` · `xlarge` `text-xl`.

---

## 3. Spacing & Layout

**Section vertical rhythm** (`theme.spacing.section`): `xsmall` `py-4` ·
`small` `py-12` · `medium` `py-16` · `large` `py-20` · `xlarge` `py-24 lg:py-32`.

**Containers** (`theme.spacing.container`): `DEFAULT` `container mx-auto px-6` ·
`small` `max-w-2xl` · `medium` `max-w-4xl` · `large` `max-w-6xl` · `full` `w-full`
(all with `mx-auto px-6`).

**Card padding** (`theme.spacing.padding.card`): `small` `p-4` · `medium` `p-6` ·
`large` `p-8` · `xlarge` `p-8 md:p-12`.

**Button padding** (`theme.spacing.padding.button`): `small` `px-4 py-2` ·
`medium` `px-6 py-3` · `large` `px-8 py-4`.

**Gaps** (`theme.spacing.gap`): `small` `gap-4` · `medium` `gap-8` · `large` `gap-12`.

**Breakpoints:** `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`.
Mobile-first — layer responsive prefixes upward.

---

## 4. Border Radius & Shadows

**Radius** (`theme.borderRadius`): `small` `rounded` · `medium` `rounded-lg` ·
`large` `rounded-xl` · `xlarge` `rounded-2xl` · `full` `rounded-full`.

**Shadows** (`theme.shadow`): standard `sm/md/lg/xl/2xl`, plus theme-aware:
- `card` → `shadow-md dark:shadow-none dark:border dark:border-gray-700`
- `hover` → `hover:shadow-lg dark:hover:shadow-none dark:hover:border-gray-600`

**Nebula glow utilities** (`globals.css`, tuned per theme):
`.shadow-nebula`, `.shadow-nebula-lg`, `.shadow-glow`.

---

## 5. Glass (frosted surfaces)

Backdrop-blur utilities in `globals.css`, each theme-aware via CSS variables.
Use over gradient/imagery backgrounds.

- Neutral: `.glass`, `.glass-elevated` (adds elevation shadow), `.glass-gray`
- Colored: `.glass-violet`, `.glass-cyan`, `.glass-purple`
- Gradient: `.glass-gradient-violet`, `.glass-gradient-cyan`, `.glass-gradient-nebula`
- Modifiers: `.glass-strong` (blur 20px), `.glass-hover` (lift on hover),
  `.glass-overlay-light`, `.glass-overlay-dark`

---

## 6. Gradients

**Utilities** (`globals.css`): `.bg-gradient-nebula` (purple→violet→blue),
`.bg-gradient-space` (black→blue), `.bg-gradient-planet` (radial violet→blue),
`.bg-gradient-radial-nebula`, `.bg-gradient-conic` (avatar border).

**Preset strings** (`theme.gradients`): `hero`, `primary`, `secondary`, `dark`,
`light`, `nebula`, `radial`, `adaptive`.

---

## 7. Motion

Keyframes + `.animate-*` utilities in `globals.css`. Use sparingly (see
CLAUDE.md — minimize Framer Motion). All decorative motion respects
`prefers-reduced-motion: reduce`.

Common: `.animate-float`, `.animate-float-delayed`, `.animate-twinkle`,
`.animate-pulse-slow`, `.animate-spin-slow`, `.animate-fade-in`,
`.animate-fade-in-up`, `.animate-orbit`, `.animate-shimmer`, `.animate-glow-pulse`.
Timeline/avatar have dedicated animation classes.

Transitions (`theme.animation.transition`): `fast` 150ms · `medium` 300ms · `slow` 500ms.
Hover presets (`theme.animation.hover`): `scale`, `shadow`, `brightness`.

---

## 8. Components

Reusable UI lives in `src/components/ui/`. Core primitives:

- **`Button`** — variants `primary` (violet, cyan in dark) · `secondary`
  (white/violet) · `outline`; sizes `small/medium/large`; `fullWidth`,
  `disabled`; renders `<a>` when `href` is set, else `<button>`.
- **`Card`** — `padding` `none/small/medium/large`, `shadow` `none/small/medium/large`,
  `hover`, `rounded`. Uses `theme.backgrounds.gray` surface.
- **`Heading`** — `as` `h1`–`h6`, `color` `default/white/primary`, `centered`.
- **`Section`** (`components/layout/`) — `background`
  (`primary/secondary/tertiary/card/…/gradient/dark/transparent/gradient-adaptive/gradient-radial`),
  `spacing` (section scale), `container` (bool or size), semantic `as`/aria props.

Higher-level: `ServiceCard`, `RetainerPlanCard`, `TestimonialCarousel`,
`VerticalTimeline`/`TimelineItem`, `FAQItem`, `AlertBanner`, plus decorative
`StarField`, `FloatingParticles`, `NebulaGraphic`, etc.

---

## 9. Working with the system

1. **Need a value?** Use an existing token/utility. Don't hardcode hex.
2. **Adding a token?** Add it to `globals.css` `@theme`/utilities first, then
   surface a semantic preset in `theme.ts` if it's reused.
3. **Never build class names dynamically** (`` `bg-${x}` ``) — Tailwind v4 only
   compiles classes it can see literally in source.
4. **Verify** new tokens/components render on `/style-guide` and add them there.
5. Respect the light→violet / dark→cyan accent convention and
   `prefers-reduced-motion`.
