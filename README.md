# Daxson Next.js + Cloudflare Pages + Google Sheets

This rebuild uses:

- Next.js
- GitHub
- Cloudflare Pages
- Google Sheets CSV integration for tour dates

## 1. Google Sheet setup

Use the tour dates sheet template already created.

Required columns:

- Date
- Display Date
- Venue
- City
- Country
- Flag
- Ticket URL
- Visible

Example values:

- Date: `2026-08-29`
- Display Date: `AUG 29`
- Venue: `Creamfields`
- City: `Daresbury`
- Country: `UK`
- Flag: `🇬🇧`
- Ticket URL: `https://...`
- Visible: `TRUE`

## 2. Publish Google Sheet as CSV

In Google Sheets:

1. File → Share → Publish to web
2. Select the tour dates sheet/tab
3. Choose `Comma-separated values (.csv)`
4. Publish
5. Copy the CSV URL

## 3. Local setup

```bash
npm install
cp .env.example .env.local
```

Paste your CSV URL into `.env.local`:

```bash
NEXT_PUBLIC_TOUR_DATES_CSV_URL="https://docs.google.com/spreadsheets/..."
```

Run locally:

```bash
npm run dev
```

## 4. GitHub setup

1. Create a new GitHub repository, for example `daxsonmusic`.
2. Upload all files in this folder.
3. Commit to the `main` branch.

## 5. Cloudflare Pages setup

Cloudflare Pages:

1. Workers & Pages → Create → Pages
2. Connect to Git
3. Choose your GitHub repo
4. Framework preset: `Next.js`
5. Build command: `npm run build`
6. Build output directory: `out`
7. Add environment variable:
   - `NEXT_PUBLIC_TOUR_DATES_CSV_URL`
   - value: your published Google Sheet CSV URL

## 6. Updating tour dates

Edit the Google Sheet, then redeploy in Cloudflare Pages.

Because this is a static export, updates appear after the next Cloudflare deploy. You can trigger this manually with **Create deployment / Retry deployment**, or set up a GitHub Action later to deploy on a schedule.
