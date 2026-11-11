# Adrin Joseph | Portfolio

Personal portfolio of **Adrin Joseph**, an AI / LLM / AI Backend Engineer based in Bangalore.

Built with **TypeScript, HTML, CSS and Tailwind CSS v4** on Vite. No JavaScript source files and no UI frameworks.

## Features

- Premium dark theme with an animated fluted-glass gradient hero (cream, teal and ember tones with film grain)
- Scroll-reveal animations, typewriter role rotator, scroll progress bar and active-section nav highlight
- Cursor-follow spotlight cards and a pointer-driven parallax gradient on desktop
- Fully responsive: mobile menu, stacked layouts and a gradient tuned for portrait screens
- Respects `prefers-reduced-motion`
- Data-driven skills and projects, edited from a single TypeScript file

## Tech stack

| Layer | Tool |
|---|---|
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) and custom CSS |
| Build tool | Vite |
| Fonts | Plus Jakarta Sans, Instrument Serif, JetBrains Mono |

## Project structure

```
adrin-portfolio/
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
├─ public/
│  ├─ favicon.svg
│  ├─ resume.pdf            # your resume (add this)
│  └─ images/
│     └─ profile.jpg        # your photo (add this)
└─ src/
   ├─ main.ts               # entry point
   ├─ styles/style.css      # theme, gradient, animations
   ├─ data/content.ts       # skills, projects, roles, marquee
   ├─ lib/icons.ts          # inline SVG icons
   └─ modules/
      ├─ render.ts          # renders skills, projects, marquee
      ├─ reveal.ts          # scroll-reveal observer
      ├─ nav.ts             # mobile menu, progress bar, active links
      ├─ typer.ts           # typewriter effect
      ├─ spotlight.ts       # cursor spotlight on cards
      └─ parallax.ts        # hero gradient parallax
```

## Getting started

Requires Node.js 18 or newer.

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check and build for production (outputs to dist/)
npm run build

# preview the production build locally
npm run preview
```

## Adding your assets

Place these files in `public/` using the exact names (lowercase, case-sensitive on most hosts):

| Asset | Path |
|---|---|
| Profile photo | `public/images/profile.jpg` |
| Resume | `public/resume.pdf` |

Recommended photo: portrait 4:5, around 1000 x 1250 px, under 300 KB. If the photo is missing, the site shows an "AJ" monogram instead.

## Customizing content

- **Skills, projects, roles and marquee:** edit `src/data/content.ts`
- **Project links:** add `repo` and/or `demo` URLs to a project and "View code" / "Live demo" buttons appear automatically
- **Text, contact details and sections:** edit `index.html`
- **Colors and fonts:** edit the `@theme` block at the top of `src/styles/style.css`
- **Gradient look:** tune the `.hero-bg` rules in `src/styles/style.css`

## Deployment

The build output is a static site in `dist/`, so it works on any static host.

**Vercel / Netlify / Cloudflare Pages**

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |

**GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.ts` if you deploy to a project page, then publish the `dist/` folder.

## Contact

- Email: adrinjosephkj@gmail.com
- LinkedIn: https://www.linkedin.com/in/adrin-joseph-84439a361/
- GitHub: https://github.com/adrinjoseph
- Location: Bangalore, India

## License

All rights reserved © 2026 Adrin Joseph. Source is shared for reference; please don't reuse the content or design without permission.