# Design Brief — J+R Immobilien

## Aesthetic
Professional luxury with Swiss precision. Navy + gold conveys trust, stability, premium positioning. Refined minimalism: generous whitespace, card-based layout, soft shadows.

## Tone
Authoritative yet approachable. Clear, structured, confident. Gold CTAs guide users through key actions (service exploration, contact submission).

## Differentiation
Intentional color pathway: navy anchors header/hero/footer; gold highlights CTAs and key labels across all sections. Card-based services showcase. Sticky header with responsive navigation.

## Color Palette

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| Navy | 0.2 0.08 265 | #0d2142 | Primary (nav, hero, buttons, footer) |
| Navy-Mid | 0.3 0.1 260 | #1e3a6e | Hover states, interactive |
| Gold | 0.65 0.16 70 | #c9a96e | Accent (CTAs, labels, highlights) |
| Anthracite | 0.15 0.02 250 | #2b2d35 | Footer depth |
| Slate | 0.5 0.06 250 | #6b7a99 | Body text, subtitles |
| Soft-Blue | 0.95 0.03 250 | #f4f6fb | Section backgrounds |
| White | 1.0 0 0 | #ffffff | Light backgrounds, logo on navy |
| Border | 0.9 0.04 250 | #e2e6ef | Card dividers, soft borders |

## Typography
- **Display**: General Sans 700 (geometric, bold, confident)
- **Body**: General Sans 400 (neutral, highly legible, 16px base)
- **Hierarchy**: Display for section titles (36–48px), body for copy (16–18px), muted for subtitles (14px)

## Elevation & Depth
- **Header**: Navy bg, white text, soft shadow-md on scroll
- **Hero**: Full-width navy, white headline, gold button
- **Services**: Alternating soft-blue sections, card grid (shadow-sm per card)
- **Contact**: Navy bg, form inputs with soft-blue, gold submit
- **Footer**: Anthracite bg, soft text, gold accents on links

## Structural Zones

| Zone | Background | Text | Border | Usage |
|------|------------|------|--------|-------|
| Header | Navy (primary) | White | Soft gold line bottom | Sticky nav, logo, contact link |
| Hero | Navy (primary) | White headline | Gold bottom accent line | Company name, value prop, CTA |
| Services | Soft-Blue / White alternating | Navy text | Soft border | 6-card grid, service descriptions |
| Contact | Navy (primary) | White labels | Gold accents | Form section with submit button |
| Footer | Anthracite | Slate text | Gold divider line | Company info, links, copyright |

## Spacing & Rhythm
- Base unit: 0.5rem (8px)
- Card padding: 24px
- Section vertical: 64–80px
- Content max-width: 1400px
- Mobile first: `sm:`, `md:`, `lg:` breakpoints

## Component Patterns
- **CTA Buttons**: `.cta-gold` — bg-gold, navy text, px-6 py-3, rounded-lg, hover:shadow-lg, transition-smooth
- **Service Cards**: `.section-card` — bg-card, border-border, p-6, shadow-xs, rounded-lg
- **Section Titles**: `.section-title` — navy text, 36–48px, font-bold, font-display
- **Form Inputs**: soft-blue bg, navy border, navy text, focus:ring-gold

## Motion
- **Transition default**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (smooth cubic)
- **Button hover**: shadow-lg, text brightness +5%
- **Link hover**: gold underline fade-in
- **Form focus**: ring-gold 2px, shadow-md

## Constraints
- No gradients (navy + gold is sufficient)
- No animations beyond transitions and focus states
- Card shadows always navy-tinted (not grey)
- Gold used sparingly: CTAs, labels, divider lines only
- All type in German

## Signature Detail
Gold accent line beneath hero section and footer divider. Consistent gold CTA pathway creates visual throughline from hero → services → contact form → footer.
