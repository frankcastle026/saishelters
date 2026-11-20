# Sai Shelters website
Next.js 14 (App Router) + TypeScript + Tailwind + Motion.

## Run
    npm install
    cp .env.example .env.local     # then fill in SMTP_PASS (Gmail App Password)
    npm run dev                    # http://localhost:3000
    npm run build && npm start     # production check

## Where to edit
See EDITING.md. Contact details: lib/site.ts. Photos: public/images/pic_1 ... + lib/images.ts. Enquiry mail: app/api/enquiry/route.ts + .env.local.
Never commit .env.local (already in .gitignore).
