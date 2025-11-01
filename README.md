# DeadW3 Landing Page

> Before it vanishes. Forever.

A mysterious, atmospheric landing page for DeadW3 Protocol - a decentralized archival platform for preserving ephemeral cultural moments using Arweave blockchain storage.

## Features

- **Atmospheric Design**: Dark, elegant interface with cryptic messaging that evokes archival vaults and digital preservation
- **Smooth Animations**: Built with Framer Motion for fluid, engaging user interactions
- **Responsive**: Mobile-first design that works beautifully on all devices
- **Email Waitlist**: Functional waitlist capture with form validation (localStorage for now)
- **Optimized Performance**: Fast load times with code splitting and optimized builds
- **SEO Ready**: Comprehensive meta tags for social sharing

## Tech Stack

- **React 18+** - Modern UI library
- **TypeScript** - Type-safe development with strict mode enabled
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Production-ready animation library
- **ESLint & Prettier** - Code quality and formatting

## Quick Start

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd DeadW3-Landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## Project Structure

```
DeadW3-Landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Hero section with animated background
│   │   ├── Features.tsx          # Three-column feature teaser
│   │   ├── Visualization.tsx     # Animated network visualization
│   │   ├── WaitlistModal.tsx     # Email capture modal
│   │   └── Footer.tsx            # Footer with social links
│   ├── styles/
│   │   └── index.css             # Global styles and Tailwind imports
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── vite-env.d.ts             # TypeScript environment declarations
├── .env.example                   # Environment variables template
├── netlify.toml                   # Netlify deployment configuration
├── package.json
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
└── README.md
```

## Environment Variables

Copy `.env.example` to `.env` and configure as needed:

```bash
# API Configuration (for future use)
VITE_API_ENDPOINT=https://api.deadw3.io
VITE_WAITLIST_ENDPOINT=https://api.deadw3.io/waitlist

# Analytics (optional)
VITE_GA_TRACKING_ID=

# Feature Flags
VITE_ENABLE_ANALYTICS=false
```

**Note**: Currently, the waitlist stores emails in `localStorage`. Update `WaitlistModal.tsx` to integrate with your backend API.

## Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy!**

The `netlify.toml` file is already configured with:
- Build settings
- Redirect rules for SPA routing
- Security headers
- Cache control for assets

### Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains your production-ready files
# Upload the contents to your hosting provider
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'deadw3-dark': '#0a0a0a',
  'deadw3-charcoal': '#1a1a1a',
  'deadw3-purple': '#6b46c1',
  'deadw3-amber': '#d4a574',
  // Add your custom colors
}
```

### Content

- **Hero text**: Edit `src/components/Hero.tsx`
- **Features**: Modify the `features` array in `src/components/Features.tsx`
- **Social links**: Update `socialLinks` in `src/components/Footer.tsx`

### Animations

All animations are configured in the component files using Framer Motion. Key animation parameters:

- **Duration**: Control animation speed
- **Delay**: Stagger animations for visual interest
- **Easing**: Customize motion curves

## Performance

The build is optimized for production with:

- Code splitting (React, Framer Motion in separate chunks)
- Minified assets
- Tree shaking
- Asset optimization
- Lazy loading where appropriate

**Target metrics**:
- Lighthouse score: >90 on all metrics
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Waitlist Integration

The current implementation stores emails in `localStorage`. To integrate with a backend:

1. Update `handleSubmit` in `src/components/WaitlistModal.tsx`
2. Replace the `setTimeout` mock with an actual API call:

```typescript
const response = await fetch(import.meta.env.VITE_WAITLIST_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email }),
});
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration: Liminal spaces, archival aesthetics, underground culture
- Built with modern web technologies
- Optimized for the Arweave ecosystem

---

**DeadW3 Protocol** - Preserving what was never meant to last.
