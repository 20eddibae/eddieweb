# Personal Portfolio Website

A modern, minimalist personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Minimalist, typography-focused design
- 📱 Fully responsive (mobile-first)
- ⚡ Fast and optimized performance
- ♿ Accessible (WCAG 2.1 AA compliant)
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized

## Tech Stack

- **React 18+** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Personal-Website-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   ├── projects/
│   │   └── logos/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── common/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Tag.tsx
│   │       └── SectionTitle.tsx
│   ├── data/
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   └── useScrollPosition.ts
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## Updating Content

### Experience

Edit `src/data/experience.ts` to add or modify work experience entries.

### Education

Edit `src/data/education.ts` to add or modify education entries.

### Projects

Edit `src/data/projects.ts` to add or modify project entries.

### Skills

Edit `src/data/skills.ts` to update your skills list.

### Personal Information

Update the following files:
- `src/components/Hero.tsx` - Name, tagline, location, social links
- `src/components/About.tsx` - About section content
- `src/components/Contact.tsx` - Contact information

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:

```bash
npm run preview
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  background: {
    primary: '#FAFAFA',
    secondary: '#FFFFFF',
  },
  // ... more colors
}
```

### Fonts

Update the font imports in `index.html` and font families in `tailwind.config.js`.

### Animations

Modify animation properties in component files using Framer Motion.

## Performance Optimization

- Images are lazy-loaded by default
- Code splitting is handled by Vite
- Fonts are preloaded
- Minimal JavaScript bundle

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Skip to content link

## License

MIT

## Contact

For questions or suggestions, please open an issue or contact me directly.


