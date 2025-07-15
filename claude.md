# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Goulding & Co Strategic Advisory** - Premium business consulting website for companies entering the Cambodian market. Built with React 18, TypeScript, and Vite.

## Development Commands

```bash
npm run dev        # Start development server (Vite HMR)
npm run build      # TypeScript check + production build
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

## Architecture & Structure

### Tech Stack
- **Framework**: React 18 + TypeScript (strict mode enabled)
- **Build**: Vite 5.4
- **Routing**: React Router v6
- **Styling**: CSS3 with CSS Variables (no Tailwind/CSS-in-JS)
- **Animations**: Framer Motion, AOS, Lottie, P5.js
- **State**: React Context (Theme + Animation preferences)

### Directory Structure
```
src/
├── components/
│   └── page-sections/    # Page-specific sections
│       ├── contact/      # Contact page components
│       ├── home/         # Home page components
│       ├── landing/      # Landing page components
│       └── services/     # Services page components
├── pages/               # Route pages
├── contexts/            # Theme & Animation contexts
├── data/                # Static data
└── assets/              # Images, SVGs
```

### Key Architectural Patterns
1. **Component Organization**: Components are organized by page section, not by type
2. **Theme System**: Dark/light mode via ThemeContext with CSS variables
3. **Animation Control**: Global animation toggle via AnimationContext
4. **Responsive Design**: Mobile-first with breakpoints at 768px and 1024px
5. **Performance**: Code splitting by route, optimized images, Lighthouse 95+

## Design System

### Color Palette
```css
--color-primary: #112d4e;    /* Navy - Trust */
--color-secondary: #a47864;  /* Mocha Mousse - Warmth */
--color-accent: #cc5500;     /* Terracotta - CTAs */
--color-bg-light: #f7e8d3;   /* Cream - Comfort */
--color-text: #333333;       /* Dark text */
```

### Typography
- **Headings**: Montserrat
- **Body**: Open Sans
- **Sizes**: H1 (3rem), H2 (2rem), H3 (1.5rem), base (1rem)

### Grid System
- Desktop (≥1024px): 12 columns
- Tablet (≥768px): 8 columns  
- Mobile (<768px): 4 columns

## Development Notes

### TypeScript Configuration
- Strict mode is enabled
- Composite configuration with separate app and node configs
- Build runs type checking via `tsc -b`

### Missing Infrastructure
- **No test framework** - Consider adding Vitest
- **No Prettier** - Code formatting relies on ESLint only
- **No pre-commit hooks** - Manual linting required

### Performance Considerations
- Images should be optimized before adding
- Use lazy loading for heavy components
- Animations can be globally disabled for performance

### Deployment
- Automatically deploys to Vercel on push to main
- Environment variables use `VITE_` prefix
- Build outputs to `dist/` directory

## Page-Specific Implementation Details

### Landing Page
- Hero with gradient background and glassmorphism
- Service cards with hover animations
- Client testimonials carousel (Swiper)
- Performance metrics section

### Services Page
- Grid layout for service offerings
- Interactive service cards
- Mid-page CTA banner
- "Why Choose Us" section with icon lists

### Contact Page
- Form with inline validation
- Google Maps integration
- Direct contact information
- Social media links with hover effects

## Common Patterns

### Adding a New Page Section
1. Create component in `src/components/page-sections/[page-name]/`
2. Import and use in corresponding page component
3. Follow existing animation patterns (AOS or Framer Motion)
4. Ensure responsive design with CSS Grid/Flexbox

### Working with Animations
- Check AnimationContext before adding animations
- Use CSS transitions for simple hover effects
- Use Framer Motion for complex animations
- AOS for scroll-triggered animations

### Styling Guidelines
- Use CSS variables for colors and spacing
- Follow BEM-like naming for CSS classes
- Maintain mobile-first approach
- Test on all breakpoints