# React TypeScript Portfolio Website

A modern, responsive portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- ⚡ **Vite** - Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📘 **TypeScript** - Full type safety for better development experience
- 🎭 **React Icons** - Beautiful SVG icons for UI elements
- 📱 **Responsive Design** - Mobile-first approach with responsive breakpoints
- ⚙️ **ESLint** - Code quality and consistency checks
- 🔄 **Modern React** - Latest React 18 with hooks

## Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Hero.tsx         # Hero/landing section
│   ├── Projects.tsx     # Featured projects showcase
│   ├── Skills.tsx       # Skills and technologies section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with social links
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## Customization

### Colors and Theme

Edit `tailwind.config.js` to customize colors and theme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0F172A',
      secondary: '#1E293B',
      accent: '#3B82F6',
    },
  },
}
```

### Add Your Content

1. Update the hero section in [src/components/Hero.tsx](src/components/Hero.tsx)
2. Add your projects in [src/components/Projects.tsx](src/components/Projects.tsx)
3. Update skills in [src/components/Skills.tsx](src/components/Skills.tsx)
4. Add contact information in [src/components/Contact.tsx](src/components/Contact.tsx)
5. Update social links in [src/components/Footer.tsx](src/components/Footer.tsx)

## Dependencies

### Core
- **react** (^18.3.1) - React library
- **react-dom** (^18.3.1) - React DOM rendering
- **react-icons** (^5.0.1) - Icon library

### Development
- **vite** (^5.1.0) - Build tool
- **typescript** (^5.2.2) - TypeScript language
- **tailwindcss** (^3.4.0) - CSS framework
- **@vitejs/plugin-react** (^4.3.1) - React plugin for Vite
- **eslint** & **typescript-eslint** - Code quality

## Deployment

This project can be easily deployed to:

- **Vercel** - `vercel deploy`
- **Netlify** - Connect GitHub repo to Netlify
- **GitHub Pages** - Update vite config and push to gh-pages branch
- **Any static hosting** - Upload the `dist/` folder

## License

MIT

## Support

For questions or issues, please open an issue in the repository.
