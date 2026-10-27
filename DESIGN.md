# UI/UX Pro Max Design System & Architecture Specification (#1)

This specification defines the systemic rules, design tokens, typography scales, structural dashboard layouts, and component composition guidelines for Mahaveer K's portfolio redesign.

---

## 1. Systemic Principles & Philosophy

1. **Systemic Cohesion Over Ad-Hoc Styling**:
   - Every color, spacing, radius, and transition is governed by semantic tokens (e.g. `bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`), never raw hardcoded utility classes.
2. **Accessible High-Contrast Foundations**:
   - Default color contrast exceeds WCAG 2.1 AAA for body text and AA for large headings in both Obsidian Dark Mode and Porcelain Light Mode.
3. **Component Composition Over Reinvention**:
   - Leverage shadcn/ui and `@base-ui/react` primitives. Compose layouts using semantic structures (`Card`, `Badge`, `Button`, `Dialog`, `Tabs`, `Separator`) rather than arbitrary unstyled `div` tags.
4. **Information Architecture First**:
   - Structured portfolio data is decoupled from presentation (`@/data/portfolioData.js`), allowing rapid visual iteration without data corruption.

---

## 2. Color Palettes & Semantic Design Tokens

All colors use the perceptual `oklch` color space configured via CSS variables and Tailwind v4 inline theme mappings:

### Dark Mode (Default: Obsidian Midnight)
| Token | OKLCH / Value | Role & Usage |
| :--- | :--- | :--- |
| `--background` | `oklch(0.11 0.01 240)` | Deep space obsidian canvas background |
| `--foreground` | `oklch(0.98 0.005 240)` | Primary high-contrast typography |
| `--card` | `oklch(0.14 0.012 240)` | Elevated bento card and surface layer |
| `--card-foreground` | `oklch(0.98 0.005 240)` | Card body and header text |
| `--primary` | `oklch(0.78 0.17 165)` | Electric Hyper-Emerald/Mint accent for CTAs, active badges |
| `--primary-foreground`| `oklch(0.10 0.02 165)` | Inverted text on primary buttons/badges |
| `--secondary` | `oklch(0.18 0.015 240)` | Secondary buttons, tab backgrounds |
| `--muted` | `oklch(0.18 0.015 240)` | Subdued pill tags, inactive states |
| `--muted-foreground` | `oklch(0.68 0.015 240)` | Secondary metadata, descriptions, captions |
| `--border` | `oklch(0.22 0.012 240)` | Subtle card borders and divider lines |
| `--ring` | `oklch(0.78 0.17 165 / 45%)` | Focus rings and active interaction glows |

### Light Mode (Porcelain Alabaster)
| Token | OKLCH / Value | Role & Usage |
| :--- | :--- | :--- |
| `--background` | `oklch(0.985 0.002 240)` | Clean porcelain canvas |
| `--foreground` | `oklch(0.145 0.015 240)` | Crisp deep charcoal body text |
| `--card` | `oklch(1 0 0)` | Pure white elevated surfaces |
| `--primary` | `oklch(0.48 0.15 165)` | Deep tech emerald for buttons and highlights |
| `--border` | `oklch(0.90 0.008 240)` | Soft boundary lines |

### Atmosphere & Micro-Interactions
- `glass-card`: Glassmorphism with `backdrop-filter: blur(16px)` and subtle `1px` translucent border.
- `glow-primary`: Outer ambient box-shadow + inner soft glow using `--glow-ambient`.
- `glow-hover`: Smooth border illumination on hover using `--glow-border`.
- `bento-card`: Clean elevation with border transition and subtle `-2px` hover lift.

---

## 3. Typography Scales & Hierarchies

Mapped directly from Next.js Google Fonts (`Space_Grotesk`, `Inter`, `JetBrains_Mono`):

| Level | Size / Leading | Weight / Tracking | Recommended Font | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `5xl` to `8xl` (`3rem` – `6rem`) | Bold / `tracking-tight` (`-0.03em`) | Space Grotesk (`--font-heading`) | Name, Hero title |
| **Section Title** | `3xl` to `5xl` (`1.875rem` – `3rem`) | Bold / `tracking-tight` (`-0.025em`) | Space Grotesk (`--font-heading`) | Main section headers |
| **Card / Bento Title** | `xl` to `2xl` (`1.25rem` – `1.5rem`) | SemiBold / `tracking-tight` | Space Grotesk (`--font-heading`) | Project and milestone names |
| **Subheading** | `base` to `lg` (`1rem` – `1.125rem`) | Medium / `leading-snug` | Inter (`--font-sans`) | Roles, taglines, company titles |
| **Body Paragraph** | `sm` to `base` (`0.875rem` – `1rem`) | Light to Regular / `leading-relaxed` | Inter (`--font-sans`) | Descriptions, case studies |
| **Micro / Telemetry** | `10px` to `xs` (`0.625rem` – `0.75rem`) | Medium / `tracking-wider` Uppercase | JetBrains Mono (`--font-mono`) | Tech stack tags, badges, metrics |

---

## 4. Structural Dashboard & Bento Layout Grid

1. **Standard Containers**:
   - Full Canvas: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
   - Focused Narrative: `max-w-3xl mx-auto px-4`
   - Dashboard/Console: `max-w-6xl mx-auto px-4 sm:px-6`

2. **12-Column Asymmetric Bento Grid**:
   - `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6`
   - Primary Feature Card: `lg:col-span-7` or `lg:col-span-8`
   - Secondary Metric / Telemetry Card: `lg:col-span-5` or `lg:col-span-4`
   - 3-Column Balanced Bento: 3 cards of `lg:col-span-4`

3. **Corner Radius Scale**:
   - Compact elements (Pills, badges): `rounded-full` or `var(--radius-sm)` (`~0.5rem`)
   - Interactive controls (Buttons, inputs): `var(--radius-lg)` (`0.75rem`)
   - Cards & Bento containers: `var(--radius-2xl)` (`~1.3rem`)
   - Outer modal dialogs: `var(--radius-3xl)` (`~1.7rem`)

---

## 5. shadcn/ui Component Integration Rules

Enforced via the native `.agents/skills/shadcn` skill:

1. **Buttons & Controls**:
   - Use `Button` from `@/components/ui/button`.
   - Built-in variants: `default`, `outline`, `secondary`, `ghost`, `destructive`, `link`.
   - Sizes: `xs`, `sm`, `default`, `lg`, `icon`.
   - Icons within buttons: use `data-icon="inline-start"` or `data-icon="inline-end"`.
2. **Spacing & Flexbox**:
   - Never use `space-x-*` or `space-y-*`. Always use `flex gap-*` or `flex flex-col gap-*`.
3. **Icons**:
   - Sourced from `lucide-react`. Inside buttons and components, let the component handle sizing; avoid redundant `w-4 h-4` classes.
4. **Data Sourcing**:
   - All components consume from `@/data/portfolioData.js`.
