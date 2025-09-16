# MRInvest - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium fintech platforms like Stripe, Coinbase Pro, and investment platforms like Robinhood's institutional pages. Focus on sophisticated dark themes with strategic accent colors.

## Core Design Elements

### A. Color Palette
**Dark Mode Primary:**
- Background: 220 25% 8% (deep charcoal)
- Surface: 220 20% 12% (elevated surfaces)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (muted gray)

**Brand Colors:**
- Primary Blue: 220 85% 45% (sophisticated navy)
- Secondary Red: 355 85% 55% (premium crimson)
- Gradient: Blue → Red for CTAs and highlights

**Accents:**
- Success: 142 76% 36% (emerald)
- Warning: 43 96% 56% (gold - used sparingly)

### B. Typography
**Primary:** Inter (Google Fonts)
- Headers: 600-700 weight, generous line-height (1.2-1.3)
- Body: 400-500 weight, optimal reading line-height (1.6)
- Accent text: 500 weight for emphasis

**Hierarchy:**
- Hero: 3xl-6xl responsive scaling
- Section headers: 2xl-4xl
- Body: base-lg sizes

### C. Layout System
**Spacing Units:** Tailwind 4, 8, 12, 16, 24
- Component padding: p-8, p-12
- Section spacing: py-16, py-24
- Element gaps: gap-4, gap-8

**Grid System:** 12-column responsive grid with generous gutters

### D. Component Library

**Navigation:**
- Fixed header with subtle backdrop blur
- White background with dark text for contrast
- Blue hover states (220 85% 45%)

**Cards:**
- Dark surfaces with subtle borders
- Gradient hover effects (blue → red)
- Rounded corners (rounded-xl)

**Buttons:**
- Primary: Gradient blue → red
- Secondary: Outline with blue border
- Ghost: Transparent with hover fill

**Forms:**
- Dark inputs with blue focus rings
- Consistent with dark theme

### E. Visual Treatments

**Gradients:**
- Hero background: Dark gradients (220 25% 8% → 220 20% 4%)
- CTA elements: Blue → Red diagonal gradients
- Subtle overlays on content sections

**Effects:**
- Backdrop blur on glass elements
- Subtle shadows for depth
- Smooth transitions (300ms ease)

## Images
**Hero Section:** Large background image or video of modern city skyline/luxury real estate properties with dark overlay for text readability

**Team Photos:** Professional headshots with consistent lighting and backgrounds

**Project Showcase:** High-quality property images with architectural focus

**Icons:** Minimal line icons from Heroicons, consistent stroke width

## Accessibility
- WCAG AA compliant contrast ratios in dark mode
- Focus indicators visible on all interactive elements
- Consistent dark theme across all form inputs
- Proper heading hierarchy for screen readers

## Key Principles
1. **Premium Feel:** Every element should convey luxury and trust
2. **Content Hierarchy:** Clear visual flow guiding users through investment journey
3. **Performance:** Optimized images and minimal animation overhead
4. **Sophistication:** Restrained use of gradients and effects for maximum impact