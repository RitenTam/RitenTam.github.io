# Riten Tam Portfolio Website

A modern personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## Live Links

- Portfolio: https://ritentam.github.io/
- GitHub: https://github.com/RitenTam
- LinkedIn: https://www.linkedin.com/in/ritendra-tamang
- Email: mailto:ritendratam404@gmail.com

## Overview

This project showcases personal projects, skills, hackathon experience, and contact details in a clean and responsive single-page interface.

## Features

- Responsive layout for desktop and mobile
- Section-based portfolio flow: hero, about, skills, projects, hackathons, contact, footer
- Smooth UI animations with Framer Motion
- Reusable UI component system using shadcn/ui + Radix primitives
- Fast development/build pipeline powered by Vite
- Basic unit testing setup with Vitest

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion
- React Router
- Vitest + Testing Library

## Project Structure

```text
src/
  components/
    About.tsx
    Contact.tsx
    Footer.tsx
    Hackathons.tsx
    Header.tsx
    Hero.tsx
    ProjectGrid.tsx
    Skills.tsx
    ui/
  pages/
    Index.tsx
    NotFound.tsx
  hooks/
  lib/
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will run at the local URL printed by Vite (usually http://localhost:5173).

## Available Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run build:dev` - build in development mode
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint
- `npm run test` - run tests once with Vitest
- `npm run test:watch` - run tests in watch mode

## Deployment

This project is suitable for static hosting providers such as:

- GitHub Pages
- Vercel
- Netlify

To deploy, build the project and publish the generated `dist/` directory.

GitHub Pages note: if this repository remains named `RitenTam.github.io`, the site is served at https://ritentam.github.io/.

```bash
npm run build
```

## Customization Guide

- Update section content in files under `src/components/`
- Update page composition in `src/pages/Index.tsx`
- Adjust colors and theme tokens in `src/index.css` and `tailwind.config.ts`
- Add or replace project cards in `src/components/ProjectGrid.tsx`

## License

This project is for personal portfolio use. Add a license if you plan to open-source it publicly.
