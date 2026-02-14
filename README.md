# KlickSpark Media

A premium creative agency website featuring magnetic button interactions, 3D card transforms, and animated gradient backgrounds.

## Features

- 🧲 **Magnetic Buttons** - Interactive buttons that follow the cursor with spring physics
- 🎨 **Animated Gradients** - Dynamic gradient mesh backgrounds with continuous animations
- 📦 **3D Card Effects** - Service cards with perspective transforms and cursor-following effects
- ✨ **Premium Animations** - Smooth scroll-triggered animations throughout
- 🎯 **Modern Design** - Glassmorphism, blur effects, and gradient accents

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Advanced animations
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

Or manually:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Other Platforms

The built files are in the `dist` folder after running `npm run build`. You can deploy this folder to any static hosting service.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ui/
│   │   │   └── magnetic-button.tsx  # Reusable magnetic button
│   │   ├── Hero.tsx                 # Hero section with animated gradients
│   │   ├── Services.tsx             # 3D service cards
│   │   ├── Work.tsx                 # Project showcase
│   │   ├── About.tsx                # About section
│   │   ├── Navbar.tsx               # Navigation with blur effects
│   │   └── Footer.tsx               # Footer with magnetic CTA
│   └── App.tsx                      # Main app component
├── styles/
│   ├── index.css                    # Style imports
│   ├── global.css                   # Global styles & scrollbar
│   ├── theme.css                    # Theme variables
│   └── tailwind.css                 # Tailwind configuration
└── main.tsx                         # App entry point
```

## License

MIT