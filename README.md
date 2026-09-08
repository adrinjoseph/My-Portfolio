# Adrin — Portfolio Site

Personal portfolio site for Adrin — AI/ML Systems Engineer. Originally generated in
[Stitch](https://stitch.withgoogle.com), then restructured into a proper static project.

## Structure

```
portfolio-site/
├── index.html          # Page markup (Tailwind utility classes)
├── css/
│   └── style.css        # Base styles + font/selection overrides
├── js/
│   ├── tailwind-config.js  # Tailwind CDN theme config (colors, fonts)
│   └── script.js           # Mobile nav toggle
├── images/
│   └── profile.jpg      # ⚠️ Add your own portrait here (see below)
└── README.md
```

## Stack

Static HTML + [Tailwind CSS via CDN](https://tailwindcss.com) (no build step) + vanilla JS.
Fonts: Plus Jakarta Sans, Instrument Serif, JetBrains Mono, Material Symbols — loaded from Google Fonts.

## Before you deploy — things I fixed or flagged

- **Profile image**: the original export pointed at a local Windows path
  (`c:\Users\adrin\Downloads\profile.png`), which only works on your machine. It now points to
  `images/profile.jpg` — drop your actual photo in `images/` with that name (or update the `src`
  in `index.html`).
- **Mobile navigation**: the Stitch export hid the nav links below the `lg` breakpoint with no way
  to open them on mobile. Added a hamburger button + slide-down menu (`js/script.js`) so mobile
  visitors can actually navigate.
- **Placeholder links**: `github.com`, `linkedin.com`, `twitter.com`, the resume link (`href="#"`),
  and the `mailto:adrin@systems.ai` address are all still generic placeholders in the markup —
  swap them for your real profile URLs, resume link, and email before pushing this live.
- **Fake stats/projects**: sections like "Score AI Gateway" repo stars/forks, latency numbers, and
  the GitHub repo links are Stitch's placeholder content — replace with your real project data.

## Running locally

No build step needed — it's static HTML.

```bash
# Option 1: just open it
open index.html          # macOS
xdg-open index.html      # Linux

# Option 2: serve it (recommended, avoids file:// path issues)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

Works as-is on any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages.

For GitHub Pages: push to a repo, then enable Pages on the `main` branch (root) in
Settings → Pages.
