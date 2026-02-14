# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

KlickSpark Media - A creative agency website featuring magnetic button interactions, 3D card transforms, and animated gradient backgrounds. Built with Next.js 14 App Router, React 18, TypeScript, Tailwind CSS v4, and Framer Motion.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Run production server
```

## Architecture

### Entry Points
- `app/layout.tsx` - Root layout with metadata
- `app/page.tsx` - Client component that renders `src/app/App.tsx`

### Source Structure
- `src/app/App.tsx` - Main app component, composes page sections with dynamic imports for code splitting
- `src/app/components/` - Page section components (Hero, Navbar, Services, Work, About, Footer)
- `src/app/components/ui/` - Reusable UI component library (50+ components including shadcn/ui primitives)
- `src/styles/` - CSS organized as: `index.css` → imports `tailwind.css`, `theme.css`, `global.css`

### Key Patterns

**Animation Library**: Uses `motion/react` (Framer Motion v12). Import as:
```typescript
import { motion, AnimatePresence } from "motion/react";
```

**Magnetic Button** (`src/app/components/ui/magnetic-button.tsx`): Core interactive component using spring physics. The button follows cursor position with configurable strength parameter.

**3D Card Effects**: Service cards use perspective transforms that respond to mouse position (see `Services.tsx` for implementation pattern).

**Dynamic Imports**: Heavy components are lazy-loaded in `App.tsx`:
```typescript
const Services = dynamic(() => import("./components/Services").then((mod) => mod.Services));
```

**Path Alias**: `@/*` maps to `./src/*`

### Styling
- Tailwind CSS v4 with `tw-animate-css` for animation utilities
- Theme variables defined in `src/styles/theme.css` using CSS custom properties and oklch colors
- Dark mode supported via `.dark` class variant
- Global styles include custom scrollbar styling with gradient thumb

## Conventions

- Components use named exports, dynamic imports extract with `.then((mod) => mod.ComponentName)`
- Icons from `lucide-react`
- UI primitives from Radix UI (wrapped in `src/app/components/ui/`)
- Animation `initial={false}` used to disable SSR animation flicker
