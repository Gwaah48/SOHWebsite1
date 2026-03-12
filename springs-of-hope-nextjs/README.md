# Springs of Hope Care Services Website

Production-ready Next.js website for Springs of Hope Care Services.

## Included

- Next.js App Router project
- Home, About, Services, Referrals, and Contact pages
- Reusable components and centralised site content
- SEO metadata, sitemap, and robots configuration
- Contact and referral forms backed by Next.js API routes
- Uploaded logo and referral PDF bundled in `public/`
- Vercel-ready configuration

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the SMTP values.

```bash
cp .env.example .env.local
```

Required variables:

- `NEXT_PUBLIC_SITE_URL`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`
- `MAIL_TO`

## Deploy to Vercel

1. Import the project into Vercel.
2. Add the environment variables from `.env.example` in the Vercel project settings.
3. Deploy.

The contact and referral forms will work once valid SMTP credentials are configured.

## Content notes

Current configured business details:

- Main office: 41 Thomas Street, Halls Creek WA 6770
- Postal address: PO Box 1672, Kununurra WA 6743
- Registration number: 4050125886
- Emails: info@springsofhope.com.au and admin@springsofhope.com.au

## Build

```bash
npm run build
npm run start
```
