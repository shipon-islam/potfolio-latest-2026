# Shipon Islam — Portfolio

Modern one-page portfolio for a full-stack web developer.
Built with **Next.js 14 (App Router)**, **TypeScript** and **Tailwind CSS 3**, with a
dark/light theme, hand-made SVG animation and no UI library or CMS.

## Run it

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

## Sections

Hero → About → Experience → Stack → Services → Work → Reviews → Contact → Footer.
Every section reads its content from a single file, so you never touch JSX to edit text.

## Edit your content

Everything you'll change lives in **`lib/site.ts`**:

| Export | What it feeds |
| --- | --- |
| `site` | name, role, company, email, site URL, resume URL, and the profile links (`fiverr`, `github`, `linkedin`, `x`, `instagram`, `facebook`) |
| `nav` | header menu (anchors must match the section `id`s) |
| `socials` | the footer icon row: label, URL (taken from `site.links`) and which glyph to draw |
| `contactChannels` | the footer "Get in touch" column: label, URL and icon — add a line to add a channel |
| `facts` | the highlighted numbers next to the About copy |
| `heroSkills` | the skill chips under the hero buttons |
| `stack` | the Stack table, one row per layer (front end, back end, DevOps, automation, design) |
| `services` / `automation` | the Services grid and the n8n strip |
| `experience` | the Experience timeline (period, role, company, bullets, tech tags) |
| `projects` | the Work accordion (name, type, meta, description, tech tags, optional live link) |
| `reviews` | the Reviews slider cards (quote, optional `avatar`, name, `role`, rating, optional `source` link) |

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_CONTACT_EMAIL` — where the contact form sends messages (opens the visitor's email app) and the address shown in the footer.
- `NEXT_PUBLIC_CONTACT_PHONE` — your number for the footer's tap-to-call link. Write it however you want it displayed; the `tel:` link strips spaces and dashes.
- `NEXT_PUBLIC_SITE_URL` — your live domain. Used for canonical URLs, Open Graph/Twitter tags, `robots.txt` and `sitemap.xml`.
- `NEXT_PUBLIC_RESUME_URL` — e.g. `/resume.pdf` (the placeholder file that already ships in `public/`). It drives the "Download resume" button in the hero CTA row and the contact section; the button stays hidden while this is empty.

`NEXT_PUBLIC_*` values are baked in at build time, so set them **before** building (or pass them as Docker build args).

## Before you publish — quick checklist

- [ ] Replace the placeholder links in `lib/site.ts` (`links.fiverr`, `links.github`, `links.linkedin`, `links.x`, `links.instagram`, `links.facebook`) — the last three feed the footer icon row via `socials`.
- [ ] Set `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE` and `NEXT_PUBLIC_SITE_URL`.
- [ ] Check the `DevOps & Server Maintenance` entry in `experience` (period, org, bullets) against the servers you really run — it is written as self-managed VPS/shared hosting, so fold it into `awtomatig` or a hosting employer if that is where the work happened.
- [ ] Replace the six placeholder reviews in `reviews` with real ones. Drop square photos in
      `public/reviews/` and uncomment the matching `avatar` paths, and point each `source`
      label/URL at the individual review (delete the field for reviews with no public URL).
- [ ] Add a live URL to any project in `projects` to show the "Visit live site" link.
- [ ] Replace `public/portrait.jpg` with your own photo (square-ish, face near the top third; 520×642 keeps the layout as-is).
- [ ] Replace `public/logo.png` with your final logo (any 2:1 image works, it is drawn at `h-10`).
- [ ] Replace the placeholder `public/resume.pdf` with your real resume (delete it and clear `NEXT_PUBLIC_RESUME_URL` to hide the button instead).
- [ ] Update `app/icon.svg` if you want a different favicon monogram.

## SEO

- Full metadata (title template, description, keywords, canonical, Open Graph, Twitter card) in `app/layout.tsx`.
- Person + ProfilePage JSON-LD in `app/page.tsx` so Google shows the right name, job title and profiles.
- `app/robots.ts` and `app/sitemap.ts` generate `/robots.txt` and `/sitemap.xml` from `site.siteUrl`.
- `app/icon.svg` becomes the favicon automatically (App Router file convention).
- Security headers (`nosniff`, frame options, referrer policy, permissions policy) are set in `next.config.mjs`.

## Structure

```
src/
  app/
    layout.tsx      fonts, metadata, pre-paint theme script
    page.tsx        section order + JSON-LD
    globals.css     theme tokens (CSS variables), buttons, stroke/dot helpers
    robots.ts       generated robots.txt
    sitemap.ts      generated sitemap.xml
    icon.svg        favicon
  components/
    Header.tsx      sticky nav, logo, desktop links, theme toggle, "Hire me" CTA
    MobileNav.tsx   hamburger button + dropdown menu for screens below `md`
    Hero.tsx        animated SVG strokes, portrait, floating badges, skill chips
    About.tsx       intro copy + facts
    Experience.tsx  work timeline (awtomatig + DevOps/VPS hosting + Fiverr)
    Stack.tsx       tech layers
    Services.tsx    service grid + n8n automation strip
    Work.tsx        project accordion with type badges, tags and optional live link
    Reviews.tsx     reviews section shell (heading, slider, Fiverr link)
    ReviewsSlider.tsx the review carousel: arrows, dots, autoplay, swipe
    Contact.tsx     contact links + form
    ContactForm.tsx client-side validated mailto form
    ResumeButton.tsx "Download resume" button (hero call-to-action + contact)
    Footer.tsx      brand + Explore links + contact, social icon row, copyright
    SectionHead.tsx / Icon.tsx / SocialIcon.tsx / ThemeToggle.tsx
    ScrollToTop.tsx global back-to-top button (fixed, bottom right)
    Spotlight.tsx   cursor spotlight: the fixed page beam + the `spot` hover targets
  lib/site.ts       all content
public/             logo, portrait, resume
tailwind.config.ts  colors mapped to CSS variables, keyframes/animations
```

Imports use the `@/*` alias, which points at `./src/*` (see `tsconfig.json`), so moving
files inside `src/` never breaks an import path.


## Theme

Colours are RGB channels in CSS variables (`app/globals.css`) and mapped to Tailwind
colours in `tailwind.config.ts`, so `bg-panel`, `text-muted`, `border-line` etc. switch
with the theme and opacity modifiers like `bg-bg/80` keep working. Dark is the default;
the choice is stored in `localStorage` and applied by an inline script before first paint
so there is no flash.

## Spotlight

The site has a cursor spotlight everywhere, in two layers:

- **Page beam** — `components/Spotlight.tsx` (mounted once in `app/layout.tsx`) paints
  the fixed `.spotlight-glow` overlay that follows the pointer across the whole page.
- **Panel beam** — any element with the `spot` class lights up under the pointer, drawn by
  `.spot::before` from the two CSS variables the same component writes. Hero chips, service
  cards, stack rows, work rows, review cards, contact rows, footer social buttons, the header
  and mobile nav links, the theme/hamburger buttons and the outline buttons all carry it.

```tsx
<article className="spot rounded-2xl border border-line bg-panel p-7">…</article>
```

Nothing re-renders while the mouse moves: positions go straight to the DOM as `--spot-x` /
`--spot-y` inside a `requestAnimationFrame`, and one delegated `pointermove` listener serves
every target. Both beams take their colour from the `--spot` CSS variable in
`app/globals.css`, so they follow the dark/light theme, and both are hidden on touch-only
screens and for `prefers-reduced-motion: reduce`. Tune the strength with the alpha values of
the `.spot::before` / `.spotlight-glow` gradients.

## Reviews slider

The Reviews section is a carousel built with plain CSS and a handful of React state — no
slider library.

- **Cards per view** are set in `globals.css`, not in JS: `.reviews-track` carries
  `--per-view` (1 → 2 from `md` → 3 from `lg`) and each `.reviews-slide` is
  `flex: 0 0 calc(100% / var(--per-view))`. The track translates by
  `calc(-100% * var(--reviews-index) / var(--per-view))`, and the component only writes
  `--reviews-index`. Change a breakpoint by editing those two media queries.
- **Autoplay** moves one card every `AUTOPLAY_MS` (5.5s) in `ReviewsSlider.tsx` and wraps
  at the end. It pauses while the pointer or keyboard focus is inside the slider, stops for
  good once the visitor uses an arrow, a dot or a swipe, and never runs for
  `prefers-reduced-motion: reduce` or in a background tab.
- **Controls**: left/right arrow buttons (disabled at the ends), pagination dots, arrow-key
  support while focus is inside the slider, and a short horizontal swipe on touch.
- **Card content**: quote, star rating, client photo (a square image via `avatar`) with an
  initials fallback, name, company/role, and an optional link back to the original review
  (`source`).

## Docker

The app ships with a multi-stage Dockerfile (deps → build → small runtime as a non-root
user). Only the Docker build sets `BUILD_STANDALONE=1`, so the image uses Next's
standalone output while a plain `npm run build` stays untouched.

```bash
# build and run with compose (reads .env if present)
docker compose up --build          # http://localhost:3000

# or directly
docker build -t shipon-portfolio \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  --build-arg NEXT_PUBLIC_CONTACT_EMAIL=you@example.com \
  --build-arg NEXT_PUBLIC_CONTACT_PHONE="+880 1XXX-XXXXXX" .
docker run -p 3000:3000 shipon-portfolio
```

## Deploy

**Render** — Web Service from your repo: build `npm install && npm run build`, start `npm start`.
**Vercel** — import the repo; add the env vars from `.env.example` in the project settings.
**Any VPS** — `docker compose up -d --build` behind Nginx/Caddy, or run the Docker image.

