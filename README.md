# Alloy River — Website

> **Resuming in a new chat?** Point Claude to this file (`README.md` in the site root).
> It explains what the site is, how it's built, the decisions behind it, what's still
> a placeholder, and how to preview/share it.

---

## What this is

The marketing site for **Alloy River**, a holding company for the modern finance
function. Alloy River **acquires fractional finance & accounting firms and re-tools
them** — replacing the aging software they run on with its own, plus shared
operations — while the people who built each firm keep leading it.

**Primary audience:** finance/accounting **firm owners** (potential partners/sellers),
plus job candidates and investors. The site is written for them, not for end
business-owner customers.

**Contact / handles used across the site**
- Email: `hi@alloyriver.com`
- X: `@AlloyRiver` · LinkedIn: `company/alloyriver`
- Careers board: `jobs.ashbyhq.com/alloyriver`
- Locations: San Francisco · Toronto · Montréal

---

## How it's built

- **Plain static site**: hand-written HTML + one CSS file + one JS file. No framework,
  no build step. Open the files or host the folder as-is.
- **Shared header & footer are injected by JavaScript** (`assets/js/main.js`) on every
  page. Editing the nav, footer, or logo wordmark happens there, **not** in each HTML file.
- Google Fonts (Inter + Geist Mono) load from the web, so a hosted copy looks correct;
  opening locally also works but needs an internet connection for fonts.

### File structure
```
Website/
├─ index.html        Home: hero → logo marquee → product screenshots → metrics teaser → CTA
├─ about.html        About: mission/vision → belief → "who's behind it" (team) → backers → CTA
├─ strategy.html     Strategy: model (Meet/Partner/Scale) → criteria → traits → case studies → CTA
├─ team.html         Team grid (member data is the TEAM array near the bottom of this file)
├─ careers.html      Job postings (Hunters / Builders / Stewards), link out to Ashby
├─ approach.html     Redirect → about.html (legacy URL)
├─ mission.html      Redirect → about.html (legacy URL)
├─ firms.html        Redirect → strategy.html (legacy URL)
├─ assets/
│  ├─ css/styles.css Everything visual. Palette lives in :root variables at the top.
│  ├─ js/main.js     Header/footer injection, scroll-linked header, reveal-on-scroll,
│  │                 keyboard shortcuts, the NAV array, and the LOGO wordmark SVG.
│  └─ img/
│     ├─ logo.svg
│     ├─ team/       Headshots + a README. (gui-laliberte.png, jeremy-tupper.jpg)
│     └─ product/    Product UI mockups: dashboard.svg, pnl.svg, clients.svg
└─ README.md         This file.
```

---

## Brand palette (from Brandfetch)

Set as CSS variables in `:root` at the top of `assets/css/styles.css` — change them there
to reskin the whole site.

| Variable | Hex | Name | Use |
|---|---|---|---|
| `--bg` | `#FFFCEA` | Morning Mist | page background |
| `--ink` | `#3F3F3F` | Graphite | body text |
| `--accent` | `#156A46` | River Pine | primary accent (buttons, links, highlights) |
| `--accent-2` | `#2E47A0` | Deep Current | secondary accent |

> Note: the Brandfetch entry is user-submitted and its tagline was out of date, so
> confirm these four colors are still current before treating them as final.

---

## Page structure / content plan (the agreed skeleton)

- **Home** — hero, customer logo marquee, product screenshots, an **aggregate**
  improvement-metrics teaser (links to Strategy), CTA. Lean proof, no mission essay.
- **About** — the "why / who": mission/vision statement, belief ("good firms deserve
  better than the usual options"), "who's behind it" (team, links to Team page), backers.
- **Strategy** — the "how / fit": the model (Buy & hold → Meet/Partner/Scale),
  investment criteria (services, revenue range, geo, with an explicit "exceptions welcome"
  line), and **named** improvement-metrics case studies.
- **Team** — photo, one-line bio, and LinkedIn per person.
- **Careers** — job postings by group, linking to the Ashby board.
- **Media** — *not built yet*; keep as footer links until there's real content (funding
  news, posts).
- **Portfolio** — *later*, only after ~3–4 companies are acquired (will share data with
  the case studies / metrics).

**Why About and Strategy are separate and don't overlap:** About carries belief +
identity (mission ≈ why), Strategy carries the model + criteria + proof (how + fit).
Keep mission language out of Strategy and mechanics/criteria out of About.

---

## How to edit content

- **Page copy** → edit the text inside the relevant `.html` file.
- **Nav labels, footer, logo wordmark** → `assets/js/main.js` (the `NAV` array,
  `buildFooter()`, and the `LOGO` constant).
- **Team members** → the `TEAM` array near the bottom of `team.html`. Each entry takes
  `name`, `title`, `photo` (filename in `assets/img/team/`, or `""` for initials),
  `bio` (`""` to hide), and `li` (LinkedIn URL, `""` to hide).
- **Colors / look** → CSS variables in `:root` of `assets/css/styles.css`.
- **Product screenshots** → replace the SVGs in `assets/img/product/` with real captures
  (keep the same filenames, or point the `<img src>` at a `.png`).

---

## ⚠️ Placeholders to replace before publishing externally

1. **Customer logo marquee** (in `index.html`) — names are mock. Use real logos and get
   each company's permission first.
2. **Home aggregate metrics** — illustrative figures; replace with real measured numbers.
3. **Strategy case studies** (Neo Legal, Astro Bee) — confirm each firm's consent and use
   real before/after figures.
4. **Founders' LinkedIn links** (`team.html`) — currently point to the company page as a
   stand-in; swap for personal profiles.
5. **Remaining team cards** — several "Add Name" placeholders and missing photos.
6. **Product mockups** — swap the SVG mockups for real screenshots when available.

---

## Preview / share / deploy

- **Easiest shareable link:** Netlify Drop — go to `app.netlify.com/drop` and drag this
  `Website` folder onto the page. Instant public URL, free, no account needed for a
  temporary link.
- **Free permanent hosting (needs an account):** Netlify (free plan, $0), Cloudflare
  Pages, GitHub Pages, or Vercel.
- **Lowest-tech:** zip the folder and email it; recipient opens `index.html`.

---

## Style rules / conventions established

- **No em dashes anywhere** (style preference). Use commas, colons, or "to" for ranges.
- Grounded, plain language; avoid "AI-marketing" phrasing.
- Tasteful, minimal motion. A `prefers-reduced-motion` rule disables animations, **except**
  the logo marquee, which is intentionally kept scrolling.
- Sections alternate background shades down each page.

---

## Known gaps / possible next steps

- No Open Graph / Twitter Card meta tags yet → link previews are bare. Worth adding.
- Favicon is SVG-only; add a PNG/ICO fallback for broader browser support.
- No `sitemap.xml`, `robots.txt`, or custom 404 page.
- Could pull the real logo files from Brandfetch (4 variants) to replace the inline wordmark.
- Build the Media and Portfolio pages when there's content for them.
- A quick live visual pass is worth doing after any change (this environment couldn't
  render a screenshot; verification has been code-level).
