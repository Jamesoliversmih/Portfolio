# James Oliver Smith — Portfolio

A minimal, professional portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design

- **Style:** minimal & clean, structured like a technical spec — hairline dividers, left-aligned content, tag-based skill groups instead of generic cards.
- **Palette:** paper white background, deep ink text, one deliberate accent — a muted teal (`#1E6F63`) rather than a default terracotta or neon.
- **Type:** IBM Plex Sans for headings/body, IBM Plex Mono for small labels — a nod to the technical/IT subject matter, self-hosted via `@fontsource` (no external font requests at runtime).
- **Motion:** one orchestrated entrance sequence on the hero, plus interactive (not autoplaying) motion — a mouse-follow spotlight behind the hero, and a 3D tilt effect on the profile photo and project cards that responds to cursor position.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.tsx      — fonts, metadata, root HTML
  page.tsx         — assembles all sections
  globals.css      — base styles, reduced-motion support
components/
  Nav.tsx          — sticky nav
  Hero.tsx         — intro + tilt photo + mouse-follow glow
  About.tsx        — bio + quick facts
  Skills.tsx       — grouped skill tags
  Projects.tsx     — tilt project cards
  Contact.tsx      — mailto-based contact form + direct links
  Footer.tsx
  TiltCard.tsx     — reusable 3D tilt/glare wrapper (Framer Motion)
public/
  profile.jpg      — your photo
  resume.pdf       — downloadable CV (linked from the hero button)
```

## Customizing

- **Content:** edit the arrays/text directly inside each component in `components/` — projects, skills, and contact links are all plain data at the top of their files.
- **Colors/fonts:** edit the tokens in `tailwind.config.ts` (`colors.accent`, `colors.paper`, etc.) and `app/globals.css`.
- **Contact form:** currently opens the visitor's email client via a `mailto:` link (no backend needed). If you want messages to land in an inbox without the visitor's email client opening, wire the form up to a service like Formspree, Resend, or a simple API route.
- **Resume:** replace `public/resume.pdf` with an updated CV any time — the filename must stay `resume.pdf`, or update the link in `components/Hero.tsx`.

## Deploying

The easiest path is [Vercel](https://vercel.com): push this to a GitHub repo and import it — no configuration needed. Netlify and any other Node-compatible host also work.

## Note on dependencies

This scaffold uses Next.js 14.2.34, the latest patched release in the 14.x line as of this build. Before deploying, run `npm outdated` and update to the latest stable Next.js release to pick up any newer security fixes.
