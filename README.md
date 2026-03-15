# CyberSafe Hub – Cybersecurity Awareness Site

High-impact, static cybersecurity awareness landing page built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Sections cover Common Threats, Safety Tips, Password Security (with generator), Real-life Cases, and Resources.

## Features
- Tailwind v4 theme with neon cyber palette and responsive grid layout
- Framer Motion interactions (hover lifts, reveal-on-scroll timeline)
- Strong password generator with copy-to-clipboard
- Reusable Section, Card, PasswordGenerator, and Timeline components

## Scripts
- `npm run dev` – start local dev server at `http://localhost:3000`
- `npm run lint` – lint code
- `npm run build` – production build (static prerender)
- `npm run start` – serve production build

## Getting Started
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser. Main entry: `src/app/page.tsx`. Global styles/theme: `src/app/globals.css`.

## Tech Stack
- Next.js App Router + TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss` pipeline)
- Framer Motion for animation
- Heroicons for icons

## Deploy
Any static-capable host works (app is prerendered). For Next.js deployment guidance, see the official docs: https://nextjs.org/docs/app/building-your-application/deploying
