# Alloy River — Website

> **Resuming in a new chat?** Point Claude to this file (`README.md` in the site root).
> It explains what the site is, how it's built, the decisions behind it, what's still
> a placeholder, and how to preview/share it.

---

## What this is

The marketing site for **Alloy River**, a holding company for the modern finance
function. Alloy River builds AI-native software for finance and accounting, then
partners with great firms, brings them onto that platform to automate the busywork,
and holds and grows them for the long term. The founders keep leading their firms:
Alloy River provides the software and long-term capital, not day-to-day operations.

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
├─ index.html        Home: hero → "what we do" (Partner/Modernize/Compound) → one product
│                    screenshot → results (metrics + partner-client cards) → testimonials → CTA
├─ about.html        About: hero → "About Alloy River" narrative → "Why we exist" contrast
│                    (Software / Ownership) → backers
├─ strategy.html     Strategy: hero → "How it works" (Partner/Modernize/Compound) → "Why owners
│                    partner with us" → "Who we partner with" (traits + acquisition criteria) → CTA
├─ team.html         Team grid (member data is the TEAM array near the bottom of this file)
├─ careers.html      Job postings (Hunters / Builders / Stewards), link out to Ashby
├─ approach.html     Redirect → about.html (legacy URL)
├─ mission.html      Redirect → about.html (legacy URL)
├─ firms.html        Redirect → strategy.html (legacy URL)
├─ assets/
│  ├─ css/styles.css Everything visual. Palette lives in :root variables at the top.
│  ├─ js/main.js     Header/footer injection, scroll-linked header, reveal-on-scroll,
│  │                 the NAV array, and the LOGO wordmark SVG.
│  └─ img/
│     ├─ logo.svg
│     ├─ team/       Headshots + a README. (gui-laliberte.png, jeremy-tupper.jpg)
│     └─ product/    Product UI mockups. Only dashboard.svg is used on Home now;
│                    pnl.svg and clients.svg are currently unused.
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

## Page structure / content plan

- **Home** — hero, a short "what we do" band (Partner → Modernize → Compound), one
  product screenshot as proof, a results section (aggregate metrics + two named
  partner-client cards), a testimonials carousel, and a CTA.
- **About** — the "who / why": a three-paragraph "About Alloy River" narrative (mission
  plus the build/partner/grow model), a "Why we exist" before/after contrast
  (Software: legacy → AI-native; Ownership: sold for parts → a home, not a roll-up),
  and the backers section.
- **Strategy** — the "how / fit": the model (Partner → Modernize → Compound), "Why
  owners partner with us" (the owner upside: founders keep leading, brand stays, a
  permanent home), and "Who we partner with" (qualitative traits plus the hard
  acquisition criteria). Case studies now live on Home, not here.
- **Team** — photo, role, and a LinkedIn icon per person.
- **Careers** — job postings by group, linking to the Ashby board.
- **Media** — *not built yet*; keep as footer links until there's real content.
- **Portfolio** — *later*, once there are enough firms to show (will share data with
  the case studies / metrics).

**Why About and Strategy stay distinct:** About carries identity + mission + the model
narrative; Strategy carries the mechanics, the owner upside, and the fit criteria. Keep
detailed criteria out of About and heavy mission language out of Strategy.

The Home and Strategy "what we do / how it works" sections intentionally use the **same
three-step model and icons** (Partner / Modernize / Compound) for brand consistency.

---

## How to edit content

- **Page copy** → edit the text inside the relevant `.html` file.
- **Nav labels, footer, logo wordmark** → `assets/js/main.js` (the `NAV` array,
  `buildFooter()`, and the `LOGO` constant).
- **Team members** → the `TEAM` array near the bottom of `team.html`. Each entry takes
  `name`, `title`, `photo` (filename in `assets/img/team/`, or `""` for initials), and
  `li` (LinkedIn URL, `""` to hide; renders as a LinkedIn icon). A `bio` field still
  exists in the data but is not currently displayed.
- **Colors / look** → CSS variables in `:root` of `assets/css/styles.css`.
- **Product screenshot** → replace `assets/img/product/dashboard.svg` with a real capture
  (keep the same filename, or point the `<img src>` at a `.png`).

---

## ⚠️ Placeholders to replace before publishing externally

1. **Home metrics** (the 2.4× / +14% / 11 hrs figures and the per-card metrics) —
   illustrative; replace with real measured numbers.
2. **Partner-client cards** (Neo Legal, Astro Bee on Home) — confirm each client's
   consent and use real before/after figures.
3. **Testimonials** (`index.html`) — the lead quote (David Bureau, Finalytics) is real;
   the others are placeholders pending real, consented quotes.
4. **Founders' LinkedIn links** (`team.html`) — currently point to the company page as a
   stand-in; swap for personal profiles.
5. **Remaining team cards** — several "Add Name" placeholders and missing photos.
6. **Product mockup** — swap `dashboard.svg` for a real screenshot when available.

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

- **No em dashes anywhere** in site copy (style preference). Use commas, colons, or "to"
  for ranges. (Careers salary ranges use a hyphen.)
- **AI-native / applied-AI language is intentional** and used throughout. This overrides
  any earlier "avoid AI-marketing phrasing" guidance.
- Tasteful, minimal motion. A `prefers-reduced-motion` rule disables animations.
- Sections alternate background shades down each page.

### Messaging conventions
- **"Partner," not "acquire,"** in public copy. The one intentional exception is the
  "Acquisition criteria" heading on Strategy.
- **Firm-owner facing, with a holding-company feel** (we partner with, hold, and grow
  finance firms for the long term), not a SaaS product pitch. Avoid heavy PE jargon
  (no "portfolio companies," EBITDA, IRR, fund-speak), and don't lean too hard on the
  holding-company angle either.
- **Alloy River does not run firms' operations or back-office.** The platform automates
  the busywork; the firm's own staff still do the work, just faster. Never imply shared
  operations.
- **Software framing is legacy → AI-native.** Emphasize that the platform connects the
  tools firms already use; don't overclaim a fully novel, from-scratch rebuild.
- Use **"scale"** rather than "grow" for firm/positioning lines ("grow" is fine in a
  hiring/team context).

---

## Known gaps / possible next steps

- No Open Graph / Twitter Card meta tags yet → link previews are bare. Worth adding.
- Favicon is SVG-only; add a PNG/ICO fallback for broader browser support.
- No `sitemap.xml`, `robots.txt`, or custom 404 page.
- No **Privacy Policy / Terms** pages. A privacy policy is worth adding (the site collects
  IPs via host logs, Google Fonts, and email/Ashby). Consider self-hosting the Google
  Fonts to avoid sending visitor IPs to Google.
- Could pull the real logo files from Brandfetch (4 variants) to replace the inline wordmark.
- Build the Media and Portfolio pages when there's content for them.
- A quick live visual pass is worth doing after any change.
