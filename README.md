# UofL SGA — Website Prototype

A real, clickable prototype for the University of Louisville Student Government
Association. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion,
built on the Stitch "Academic Governance System" design tokens and UofL's official
brand rules (Cardinal Red `#AD0000` + Black, never tinted).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
# or a production build:
npm run build && npm start
```

## Routes

| Route | What it is |
| --- | --- |
| `/` | Home — hero, "How Do I…" tiles, Meet Your Top 4, animated stats, news preview, campus-services grid |
| `/about` | Mission, values, org-structure diagram, governing documents |
| `/branches` + `/branches/[executive\|legislative\|judicial]` | Branch entity pages with side-nav, roster, responsibilities |
| `/get-involved` | Boards & councils grid + plain-English CPC funding explainer |
| `/elections` | Run-for-office CTA, process timeline, official documents/results/videos |
| `/resources` | Campus-services quick links + labeled document archive |
| `/news` + `/news/[slug]` | News listing + article template (placeholder bodies) |
| `/contact` | Address, hours, email, Instagram + working mailto contact form |

Every internal link resolves to a real route; every external link goes to a
verified `louisville.edu` / Engage / campus system URL. No dead `#` hrefs.

## Editing content — one-file changes

- **Officer roster** → [`data/officers.ts`](data/officers.ts). SGA's Top 4 change every
  term; edit this one file and the homepage + branch pages update automatically.
  Photos are `null` by default (branded monogram fallback) — drop an image path in
  `photo` when available.
- **Links** → [`data/links.ts`](data/links.ts). All external/internal URLs live here.
- **News** → [`data/news.ts`](data/news.ts). The only place placeholder/lorem copy lives.
- **Branch info** → [`data/branches.ts`](data/branches.ts).
- **Design tokens** → [`tailwind.config.ts`](tailwind.config.ts), mapped 1:1 from Stitch.

## Deploy

Deploy-ready as a static/edge Next.js app. From this directory:

```bash
vercel        # uses your existing Vercel login
```

> Note: this is a student-built prototype, not the official university website.
