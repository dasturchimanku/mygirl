# Oynur Bouw B.V. — website + admin panel

Next.js 16 website (Dutch + English) with a built-in admin panel for the portfolio,
incoming quote requests, company details and social media links.

## Start (first time)

Requires **Node.js 20.9 or newer** (https://nodejs.org → LTS).

```bash
npm install
npm run setup      # creates .env.local with your admin login (only if it doesn't exist)
npm run dev        # http://localhost:3000
```

- Website: http://localhost:3000 (redirects to `/nl`, English is on `/en`)
- Admin panel: http://localhost:3000/admin — login is in `.env.local` (`ADMIN_EMAIL` / `ADMIN_PASSWORD`)

## First steps in the admin panel

1. **Settings** → fill in phone, WhatsApp, email, address, KvK/BTW.
2. **Settings → Social media profiles** → paste the links to Instagram, TikTok, Facebook, LinkedIn,
   YouTube, Pinterest, X, Google Business Profile, Werkspot. Filled-in profiles show up automatically
   in the footer, contact page, "Follow our work" section and in Google's structured data.
3. **Settings → Website photos** → upload a homepage photo and an about photo.
4. **Portfolio → New project** → title, texts, category, city, photos. Mark photos as *Before* / *After*
   to get an interactive before/after slider. Click **Save & publish**.

The dashboard shows a checklist of what's still missing.

## Going live

1. In `.env.local` set:
   - `NEXT_PUBLIC_SITE_URL=https://www.your-domain.nl` (important for SEO)
   - a strong `ADMIN_PASSWORD`
   - optional: SMTP settings to receive an e-mail for every new request
   - optional: `GOOGLE_SITE_VERIFICATION` for Google Search Console
2. `npm run build` then `npm start` (port 3000; use `PORT=8080 npm start` to change).
3. Host on any server that runs Node.js with a persistent disk (VPS, e.g. Hetzner/TransIP/DigitalOcean,
   with pm2 or Docker behind nginx/Caddy for HTTPS). Serverless hosts like Vercel are **not** suitable
   as-is, because content is saved to disk.
4. In Google Search Console, submit `https://www.your-domain.nl/sitemap.xml`.

## Where is the content stored?

Everything you enter in the admin panel lives in the `storage/` folder:
`storage/db.json` (projects, requests, settings) and `storage/uploads/` (photos, automatically
converted to optimized WebP). **Back up this folder regularly.** Copying it to another server moves all content.

## SEO features

- Dutch primary URLs (`/nl/diensten/badkamer-renovatie`) and English (`/en/services/bathroom-renovation`)
  with `hreflang` + canonical links
- Unique titles/descriptions per page, per project (editable in admin with Google preview)
- Automatic Open Graph / social share images (`/api/og`) and project cover images
- `sitemap.xml` (incl. images, updates automatically), `robots.txt`, web manifest, favicons
- Structured data: GeneralContractor (LocalBusiness) with social profiles (`sameAs`), Service, FAQPage,
  BreadcrumbList, ItemList, CreativeWork
- Static pre-rendering (very fast); pages are rebuilt instantly when you save in admin
- Optimized images (AVIF/WebP, responsive sizes), accessible markup, security headers

## Editing texts

- Service pages (descriptions, FAQs): `lib/services.ts`
- All other website texts (NL + EN): `lib/i18n.ts`
- Colors and fonts: `app/globals.css`
