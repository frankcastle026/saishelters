# Editing guide
- Wording and headings on the home page: `app/page.tsx` (hero text in the first <section>, the eco/std/story/awards arrays at the top, the stats array for counters). Highlighted bold word = wrap in <em>.
- Projects (names, descriptions, locations, materials): `lib/data.ts`. Services and journal are in the same file; menu links at the bottom.
- About page: `app/about/page.tsx`. Expertise page: `app/expertise/page.tsx` (text comes from `services` in `lib/data.ts`).
- Contact details (email, phone, address, hours): `lib/site.ts`.
- Photos: put files in `public/images/`, then map them in `lib/images.ts`.
- Receiving enquiries: copy `.env.example` to `.env.local` and fill in SMTP details and MAIL_TO. Restart `npm run dev`.
- Fonts: font link in `app/layout.tsx`, `--font` in `app/globals.css`.
