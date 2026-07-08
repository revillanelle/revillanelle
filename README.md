# Rüzgâr Hiç — Website Clone

A React + Vite + Tailwind CSS recreation of https://revillanelle.wixsite.com/website,
built from full-page screenshots (desktop + mobile), a real Wix "Save As Complete
Webpage" export, and real image assets you supplied.

---

## 2. Blog backend setup (Supabase) — do this first

The blog is now a live, database-backed CMS: you add/edit/delete posts from an
`/admin` panel and every visitor sees the changes immediately. This requires a
free [Supabase](https://supabase.com) project.

1. **Create a project:** [supabase.com](https://supabase.com) → sign up (free) →
   "New project" → pick any name/password/region → wait ~2 min for it to provision.
2. **Run the schema:** In your project, go to **SQL Editor → New query**, paste the
   entire contents of `supabase-schema.sql` (in this folder), click **Run**. This
   creates the `posts` table, sets read/write permissions, and seeds your 5 original
   posts (with placeholder body text — see note below).
3. **Create your admin login:** Go to **Authentication → Users → Add user**. Enter
   an email + password — this is what you'll use to log into `/admin` on your site.
   Do **not** build or enable any public sign-up page; this is the only account that
   should exist.
4. **Get your API keys:** Go to **Project Settings → API**. Copy the **Project URL**
   and the **anon public** key.
5. **Add them to the project:** copy `.env.example` to `.env` and paste in those two
   values:
   ```
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGexcample...
   ```
6. When you deploy (Vercel/Cloudflare Pages, see below), add these same two values
   as environment variables in that platform's dashboard too — `.env` only works
   locally.

**Using it:** once deployed, go to `yoursite.com/admin`, log in with the account
from step 3, and you'll see a dashboard to add/edit/delete posts. Each post has a
title, slug (URL), date, read time, optional cover image URL, excerpt, and full body
text. This is also where you should paste your real blog text — the seeded posts
currently have a `[Buraya orijinal yazı/şarkı sözü metnini kendin ekle]` placeholder
in the body, since I intentionally didn't transcribe your original lyrics/poem text
(see the note at the top of this file).

---

## 3. What's accurate vs. approximated

**Accurate (pulled directly from your Wix export's CSS):**
- Colors: pure black background (`#000`), white text, `#CECECE` secondary grey,
  `#A26060` rose highlight (the "2017 – Kaderin Tanrıçaları" line)
- Fonts: **Montserrat** (headings), **Poppins** (body text), **Playfair Display**
  (discography years / CONTACTS / blog titles)
- Copy: biography list, discography list, contact info, service names/taglines,
  nav labels, form field labels — all transcribed exactly from your screenshots

**Real images used (extracted from your uploads):**
- `deer.avif`, `halloween-house.avif`, `tea-field.avif`, `localization-plant.avif` — the files you uploaded directly
- `hero-ney-player.jpg`, `video-thumb.jpg`, `gallery-1/2/3.jpg`, `rain-street.jpg`,
  `turntable-bg.jpg`, `ocean-bg.jpg`, `logo.png` — cropped directly out of your full-page
  screenshots (real photos from your site, not placeholders)

**Placeholders — you need to fill these in:**
- Blog post body text — see section 2 above. Now editable live from `/admin`, no
  code changes needed.
- `public/images/blog-signature.svg` — the recurring cursive "signature" graphic used
  as a video thumbnail on your blog posts is hand-approximated, not a real crop.
  Replace it with your real asset if you have one (or set a post's cover image URL
  to it from the admin panel).
- The antler `logo.png` is a real crop from your screenshot, but it's low-resolution
  (~190px). If you have the original vector/PNG from Wix Media Manager, swap it in for
  a sharper result at large sizes.

---

## 4. Project structure

```
ruzgarhic/
├── public/images/           # all image assets (see above)
├── src/
│   ├── components/          # Header, Icons, SubscriptionFooter, ProtectedRoute, Logo
│   ├── context/AuthContext.jsx   # tracks the logged-in admin session
│   ├── lib/supabaseClient.js     # Supabase connection (reads .env)
│   ├── pages/
│   │   ├── Home.jsx, Diskography.jsx, Bookings.jsx  # public pages
│   │   ├── Blog.jsx, BlogPost.jsx                    # public, fetch posts from Supabase
│   │   └── AdminLogin.jsx, AdminDashboard.jsx, AdminPostEditor.jsx  # /admin CMS
│   ├── data/content.js      # non-blog site copy (bio, discography, contact, services)
│   ├── App.jsx               # routes
│   ├── main.jsx
│   └── index.css
├── supabase-schema.sql       # run this in Supabase once — see section 2
├── .env.example               # copy to .env, fill in Supabase keys
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

Routes match the live site's URL slugs: `/`, `/diskografi`, `/services`, `/blog`,
`/blog/:slug`, plus the new `/admin`, `/admin/login`, `/admin/new`, `/admin/edit/:id`.

---

## 5. Run locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
cd ruzgarhic
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

> **Note:** I was not able to run `npm install` or a full build myself — my sandbox
> has no internet access to reach the npm registry. I syntax-checked every `.jsx`/`.js`
> file with esbuild (all 12 files pass with zero errors), but you'll want to run
> `npm run dev` yourself and eyeball it before deploying, in case anything needs a
> small tweak.

Build for production:
```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

---

## 6. Deploy

### Vercel
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`,
   output directory `dist` (both auto-filled).
4. Deploy.

Or via CLI:
```bash
npm i -g vercel
vercel
```

### Cloudflare Pages
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Build command: `npm run build`. Build output directory: `dist`.
4. Deploy.

Or via CLI:
```bash
npm i -g wrangler
npm run build
wrangler pages deploy dist
```

---

## 7. Known gaps / things to double check yourself

- The Wix "Play Video" / music-player widgets are built as static, styled UI here —
  they don't actually play video/audio (no video files or Spotify/streaming embed
  codes were provided). Swap in a real `<video>` source or embed code for full function.
- Language switcher (EN/TR) toggles button styling only; no actual i18n content swap
  is wired up, since only English copy was visible in the screenshots you sent.
- Contact and subscription forms are front-end only (no email backend). Wire them to
  a form service (Formspree, Netlify Forms, etc.) or your own API before relying on them.
- Mobile hamburger menu, gallery arrows, and player controls are functional UI but not
  pixel-matched frame-by-frame against the Wix mobile breakpoints — spot check on a
  real phone width and adjust Tailwind breakpoints if anything wraps oddly.
