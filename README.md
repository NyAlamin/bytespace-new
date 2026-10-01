# ByteSpace

ByteSpace online course platform UI built from a Figma design.

**Live demo:** <your Vercel link>

## Pages

- `/` landing page
- `/signup` and `/login` (bonus, UI only with Zod validation)

## Tech stack

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Zod
- lucide-react

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure
src/
app/ routes (/, /login, /signup)
components/
layout/ navbar, footer
sections/ landing page sections
ui/ reusable pieces (buttons, cards, avatars)
auth/ login and signup forms
data/ static content (courses, categories, testimonials, ...)
lib/ shared helpers (validation, styles)
fonts/ self-hosted fonts
public/images/ design assets


## Notes

The design is desktop-only (1440px).