# Omkar Shubham Garden — Official Website

Official website for **Omkar Shubham Garden**, a premium open-garden celebration venue on Jamboti Road, Khanapur, Karnataka.

- **Live:** https://vighneshnilajakar.github.io/shubham-omkar/
- **Stack:** Next.js 15 (static export) · TypeScript · Tailwind CSS 4 · GitHub Pages
- **Languages:** English, हिन्दी, मराठी, ಕನ್ನಡ (runtime toggle + first-visit language gate)

## Features

- Full i18n system (`lib/i18n.ts` + `lib/uiTranslations.ts`) with persisted language preference
- Interactive venue planner with capacity calculator (`components/PlannerModal.tsx`)
- Photo gallery with lightbox (16 venue photos, WebP-first assets)
- Booking Terms & Conditions accordion (`#terms`) sourced from the venue's official signage
- Enquiry form with WhatsApp deep-linking and validated contact details
- WCAG-conscious: skip link, focus traps in overlays, `aria-*` labelling, reduced-motion support

## Development

```bash
npm install     # install dependencies
npm run dev     # start dev server (no basePath)
npm run lint    # eslint
npm run build   # production static export to out/
```

## Deployment (GitHub Pages)

The site deploys automatically via `.github/workflows/deploy.yml` on every push to `main`:

1. Builds the static export with `NEXT_PUBLIC_BASE_PATH=/shubham-omkar`
2. Publishes `out/` through GitHub Actions (`actions/deploy-pages@v4`)

The repository must remain named `shubham-omkar`, or update `NEXT_PUBLIC_BASE_PATH` in both the workflow and `next.config.ts` to match your Pages URL. In GitHub settings, enable Pages with the **GitHub Actions** source.

## Project Structure

```
app/            # App Router entry (layout with SEO metadata + JSON-LD, page assembly)
components/     # All sections & UI (client components)
hooks/          # Shared hooks
lib/            # i18n dictionaries, site path helpers
public/images/  # Optimised media (WebP-first photos, hero video WebM+MP4)
```

## Venue Contact

- Main phone: +91 98809 75481 · Manager: +91 99016 43802
- Email: enquiry@omkarshubhamgarden.com
- Address: Near Ramgurwardi Cross, Jamboti Road, Khanapur, Karnataka 591302
