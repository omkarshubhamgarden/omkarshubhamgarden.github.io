# Coding Agent Prompt v2 — Omkar Shubham Garden Website

Supersedes `omkar-shubham-redesign-prompt.md`. This file is self-contained — do not reference the old file.

Repo: `VighneshNilajakar/shubham-omkar` · Live: `https://vighneshnilajakar.github.io/shubham-omkar/`
Stack: Next.js (static export, `output: 'export'`) · TypeScript · Tailwind CSS · GitHub Pages

Apply every section below. Preserve all real data (phone numbers, address, reviews, prices) exactly.

---

## 0. Priority Order

1. Section 1 — confirmed bugs (fix first, low effort/high impact)
2. Section 2 — text corrections
3. Section 3 — new signage content
4. Section 4 — asset optimization
5. Section 5 — loading screen decision
6. Sections 6+ — full design rebuild (same scope as v1, folded in here)

---

## 1. Confirmed Bugs — Fix First

These were observed directly in the live page's rendered text output. Fix before any redesign work, since the redesign will otherwise inherit them.

### 1.1 Label/value text runs together with no visual gap
Pattern found repeatedly: a small label and its value/heading render as one unbroken string with no space or line break. Confirmed instances:
- `Location1.5km distance`
- `Venue Area5000 sq ft`
- `Max CapacityUpto 500 guests`
- `3,000+100-3000 guest facility`
- `1500+functions hosted`
- `100+parking`
- `4.9Out of 5.0`

**Root cause (likely):** label `<span>` and value are inline siblings with no margin/gap, or missing `block`/`flex` stacking.
**Fix:** every stat/label pairing must use `flex flex-col` (stacked) or explicit `gap`/`margin` between label and value. Add a lint-style rule: no two text nodes may be adjacent without at least 4px of computed gap or a line break. Audit every stat card, badge, and section eyebrow for this pattern, not just the instances listed above.

### 1.2 "Option 01" / "Option 02" leaking into visible copy
Celebrations cards render literal text `Option 01Enquire`, `Option 02Enquire`, etc. This reads as a leftover placeholder/dev label, not guest-facing copy.
**Fix:** remove the word "Option" entirely. Keep only a small numeric badge (`01`–`06`) styled as a design element (see Section 11), separate from the "Enquire" link, with proper spacing.

### 1.3 Duplicate language toggle in DOM
`🇬🇧English` appears twice in the rendered page — once in the header, once again near the hero content. If this is a responsive duplicate (one markup block for mobile nav, one for desktop), confirm the hidden copy is not keyboard/screen-reader focusable (`tabindex="-1"` or removed from the accessibility tree via `inert` / `aria-hidden` while hidden). If it is not a responsive duplicate, remove the second instance outright. One language control per viewport, period.

### 1.4 Naming collision: "Interactive Space Estimator" vs "Capacity Calculator"
The Spaces section has a control labeled "Interactive Space Estimator" that is functionally the same feature described elsewhere as the capacity calculator. Pick one name sitewide: **"Capacity Calculator"**. Use it in the section, the nav (if referenced), and any copy.

### 1.5 Flag emoji as language indicator
`🇬🇧English` uses a flag to represent a language, which is a WCAG/i18n anti-pattern (flags represent countries, not languages; English is spoken in many non-UK countries). Replace with plain text labels: `EN` / `ಕನ್ನಡ`, or full words `English` / `ಕನ್ನಡ` with no flag.

---

## 2. Text & Copy Corrections

Apply on top of Section 1 fixes.

| Current (wrong)                                  | Correct                                                    |
|---------------------------------------------------|-------------------------------------------------------------|
| `Jamboti rd khp`                                   | `Jamboti Road, Khanapur`                                     |
| `Jamboti rd`                                       | `Jamboti Road`                                                |
| `1.5km distance`                                   | `1.5 km from Khanapur town`                                  |
| `Gents and Ladies washroom`                        | `Gentlemen's and Ladies' Washrooms`                           |
| `Night Stay` (amenity heading)                     | `Overnight Stay Accommodation`                                |
| `Night stay for 100 people`                        | `Overnight stay accommodation for up to 100 guests`           |
| `made for evening family functions with Garden`    | `crafted for open-garden family functions with warm natural surroundings` |
| `100-3000 guest facility`                          | `100–3,000 Guest Capacity`                                    |
| `Upto` (all occurrences)                           | `Up to`                                                       |
| `2 hours`                                          | `2 business hours`                                            |
| `Belagavi Airport (IXG)`                           | `Belagavi Airport — Sambra (IATA: IXG)`                        |
| `Goa Border (Chorla Ghat)`                         | `Goa Border via Chorla Ghat`                                   |
| ALL-CAPS section eyebrows                          | Convert to Title Case                                         |
| `PHOTOGRAPHIC GALLERY`                             | `Photo Gallery`                                                |
| `INFRASTRUCTURE & COMFORT`                         | `Infrastructure & Comfort`                                     |
| `GENUINE FAMILY REVIEWS`                           | `Guest Reviews`                                                |
| `VENUE LOGISTICS GUARANTEE`                        | `Our Commitment`                                               |
| `DIRECT MANAGEMENT CONNECT`                        | `Talk to Our Team`                                             |
| `ENQUIRE & DATES`                                  | `Plan Your Celebration`                                        |
| `Interactive Space Estimator`                      | `Capacity Calculator` (see 1.4)                                |
| `Option 01` / `Option 02` etc. next to Enquire link| Remove — numeric badge only (see 1.2)                          |

---

## 3. New Content — From Provided Venue Signage

The uploaded photo is a physical signboard/card at the venue, in Marathi, listing included facilities and booking terms. Translated below for accuracy. Add this content to the site — it is genuinely useful pre-booking information that is currently missing.

### 3.1 Translation (for reference — do not display Marathi source unless adding a regional-language toggle)

**Available Facilities**
- Maharaja (VIP) chairs: 2, Plastic chairs: 600
- Cooking utensils and vessels sufficient to serve meals for 2,000 guests, cooking stoves, and 30 dining tables
- Homkund (sacred fire pit for rituals) and 4 Paat (traditional wooden ceremonial seating platforms)

**Notice / Booking Terms**
- Hall reservation covers the period from 6:00 PM to 4:00 PM the following day
- 50% of the total amount is due at the time of booking; the remaining balance is due when the hall is handed over
- Guests are responsible for their own jewelry, cash, and valuables — please bring your own locks for room doors
- Band and sound system must be switched off after 11:00 PM
- Electricity and generator usage for the duration of your event is billed separately, based on consumption

### 3.2 Where this goes

**New subsection inside Amenities (`#amenities`), titled "What's Included":**
3-card row (or list on mobile) added after the existing amenity grid:
1. **Seating** — 2 Maharaja chairs, 600 plastic chairs
2. **Catering Equipment** — Utensils and vessels for up to 2,000 guests, cooking stoves, 30 dining tables
3. **Ceremonial Items** — Homkund (sacred fire pit) and 4 traditional Paat seating platforms

**New section, `#terms`, placed directly above the Contact form:**
Heading: "Booking Terms & Conditions"
Presented as a clean, collapsed-by-default accordion/disclosure (not a wall of text blocking the form) — five short bullet points, each icon-led:
1. Clock icon — Hall reserved 6:00 PM to 4:00 PM the next day
2. Wallet icon — 50% advance at booking, balance due at handover
3. Shield icon — Valuables are the host's responsibility; bring your own locks
4. Volume-off icon — Band and sound system off after 11:00 PM
5. Zap icon — Electricity/generator usage billed separately by consumption

Default state: collapsed with a short teaser line "Please review before booking" and a "View Terms" toggle. Expand on click, `aria-expanded` toggled correctly, focus stays on the toggle button after expand. Add a footer link "Terms & Conditions" that anchors to `#terms` and auto-expands it.

Do not bury this information — it directly affects what a guest pays and how they plan, so it must be reachable in at most one click from Contact.

---

## 4. Asset Optimization — Images → WebP, Video → WebM

**Correction on your request:** WebM is a *video* container (VP8/VP9 + Opus/Vorbis audio) — it's not used for standalone photos. For the `.jpeg` photo assets, the correct modern format is **WebP**. For the existing `.mp4` hero video, adding a **WebM** alternate source alongside it is exactly the right call — that part of the instinct was correct, just pointed at the video, not the stills. Instructions below cover both correctly.

### 4.1 Why this matters here specifically
This repo uses Next.js static export (`output: 'export'`, per the README's GitHub Pages deploy step). Next's built-in `next/image` optimization API does **not** run in static export mode unless a custom loader is configured — it typically falls back to `unoptimized: true`. That means `next/image` will **not** auto-convert or resize these images at build or request time. Pre-generating optimized files with `ffmpeg` before they ever reach the repo is the correct approach for this stack, not a nice-to-have.

### 4.2 Convert images to WebP

Target files (from `public/images/` or `src/assets/images/` — confirm actual path in repo):
```
hero-poster.jpg (new, see 4.4)
shubham-omkar-logo.png
outdoor-entrance.jpeg
family-event.jpeg
shubham-bhavtu.jpeg
stage-decor.jpeg
outdoor-hall-decor.jpeg
food-venue.jpeg
welcome-ganpati-0.jpeg
```

Photos (lossy, quality 80–85 is visually near-identical at typical display sizes and cuts file size 25–35% vs JPEG):
```bash
for f in outdoor-entrance family-event shubham-bhavtu stage-decor outdoor-hall-decor food-venue welcome-ganpati-0; do
  ffmpeg -i "images/${f}.jpeg" -c:v libwebp -quality 82 "images/${f}.webp"
done
```

Logo (has transparency + sharp text edges — use near-lossless, not standard lossy):
```bash
ffmpeg -i images/shubham-omkar-logo.png -c:v libwebp -lossless 1 -q:v 90 images/shubham-omkar-logo.webp
```

**Do not delete the original `.jpeg`/`.png` files.** Keep both and serve WebP first with the original as fallback:
```html
<picture>
  <source srcset="/shubham-omkar/images/outdoor-entrance.webp" type="image/webp">
  <img src="/shubham-omkar/images/outdoor-entrance.jpeg" alt="Sacred ceremony mandap at Omkar Shubham Garden" loading="lazy">
</picture>
```
If using `next/image` with `unoptimized: true`, wrap it the same way or point `src` directly at the `.webp` file with a `<noscript>` JPEG fallback — confirm which approach matches how images are already being rendered in the codebase before choosing.

### 4.3 Add WebM source for the hero video

Keep the existing `hero-vid.mp4` as the compatibility fallback. Generate a VP9/WebM version, which is typically 30–50% smaller at equivalent visual quality:
```bash
ffmpeg -i images/hero-vid.mp4 -c:v libvpx-vp9 -crf 32 -b:v 0 -an images/hero-vid.webm
```
(`-an` strips audio since the hero video is muted/autoplay background — no need to ship an audio track at all; also strip audio from the `.mp4` if it currently has one, since autoplay video is always muted anyway.)

Serve both, WebM first (browsers pick the first supported `<source>`):
```html
<video autoplay muted loop playsinline poster="/shubham-omkar/images/hero-poster.webp" aria-hidden="true">
  <source src="/shubham-omkar/images/hero-vid.webm" type="video/webm">
  <source src="/shubham-omkar/images/hero-vid.mp4" type="video/mp4">
</video>
```

### 4.4 Generate a poster frame (prevents black flash before video loads)
```bash
ffmpeg -i images/hero-vid.mp4 -ss 00:00:01 -vframes 1 images/hero-poster.jpg
ffmpeg -i images/hero-poster.jpg -c:v libwebp -quality 82 images/hero-poster.webp
```
Use `hero-poster.webp` as the `poster` attribute (Section 4.3) with `hero-poster.jpg` as fallback if the browser doesn't support WebP posters (rare, but Safari <14 in particular).

### 4.5 Also compress the `.mp4` itself
Re-encode the fallback MP4 at a lower, web-appropriate bitrate rather than shipping whatever the source export was:
```bash
ffmpeg -i images/hero-vid.mp4 -c:v libx264 -crf 26 -preset slow -an -movflags +faststart images/hero-vid-optimized.mp4
```
`+faststart` moves the MP4 metadata to the front of the file so playback can begin before the full file downloads — matters for a hero background video specifically.

---

## 5. Loading Screen + Language Selector — Evaluation & Spec

You asked me to think this over rather than just build it. Here's the actual trade-off, then the spec for the version I'd recommend if you proceed.

**Case for it:** combines otherwise-dead wait time with a real decision (language), avoids a flash-of-untranslated-content when someone switches language later, and a short branded intro can read as premium for a venue-booking site where guests are only going to visit a handful of times total.

**Case against it:** any full-screen intercept before content adds friction on mobile, where most visitors will land from a shared WhatsApp link and want the phone number or photos in under two seconds — an artificial gate here directly works against the site's own conversion goal. It also does nothing for repeat visitors if shown every time.

**Recommendation:** build it, but scoped down — first-visit only, real-load-tied (not an artificial timer), with a hard timeout so it can never trap anyone.

### 5.1 Behavior
- Show only when `localStorage.getItem('osg_visited')` is not set. Every subsequent visit skips straight to content.
- On first load: overlay the page (content is already server-rendered underneath, for SEO/crawlers/no-JS users — this is a visual overlay only, not a render-blocker).
- Overlay shows: small logo mark with a subtle pulse/breathe animation, and two buttons: `English` / `ಕನ್ನಡ`.
- Selecting a language: sets `localStorage.setItem('osg_language', ...)`, sets `osg_visited = true`, fades the overlay out (`opacity` transition, 300–400ms), reveals content already loaded underneath.
- **Hard timeout:** if no selection is made within 4 seconds, auto-dismiss to English and set `osg_visited = true` anyway. Nobody gets stuck waiting on a choice.
- **Real-load gate, not a fake timer:** the overlay's minimum display time is 0ms — if the page is already interactive, let the fade-out happen the instant a language is picked. Do not add an artificial `setTimeout` delay to make the animation "feel complete." The pulse animation loops for as long as it takes, not the other way around.
- Respect `prefers-reduced-motion`: swap the pulse for a static logo, no motion.
- Fully keyboard-operable: focus moves to the first language button on mount, `Tab` cycles between the two buttons only (focus-trapped), `Enter`/`Space` selects.
- `role="dialog"`, `aria-modal="true"`, `aria-label="Choose your language"`.
- Under 15KB of added JS. This is a CSS animation and two buttons, not a framework.

### 5.2 What NOT to do
- Do not show this on every visit.
- Do not block the page for a fixed duration regardless of user action.
- Do not hide the real page content from the DOM while this is showing (bad for SEO and for anyone with JS disabled — they should just see the site with no overlay at all, since the overlay is progressive enhancement).
- Do not make English vs Kannada a hard gate that's difficult to change afterward — the existing nav language toggle remains the primary control forever after; this screen only sets the *initial* value.

### 5.3 Component
`components/layout/FirstVisitLanguageGate.tsx` — self-contained, reads/writes `localStorage`, renders `null` immediately (no flash) if `osg_visited` is already `true`, checked in a `useEffect` to avoid SSR/hydration mismatch on the static export.

---

## 6. Global Design Tokens

```typescript
colors: {
  brand: {
    gold:    '#C8A96E',
    'gold-light': '#E8D4A8',
    'gold-dark':  '#A0833E',
    cream:   '#FAF6EF',
    'cream-dark': '#F0EAE0',
    sage:    '#6B7C5A',
    'sage-light': '#8FA87A',
    charcoal:'#1A1A1A',
    stone:   '#6B6560',
    ivory:   '#FFFDF8',
  }
}
fontFamily: {
  serif: ['Playfair Display', 'Georgia', 'serif'],
  sans:  ['Inter', 'system-ui', 'sans-serif'],
}
```
Import via `next/font/google`, `display: 'swap'`. Body bg `brand-cream`, text `brand-charcoal`, headings `font-serif`, body `font-sans`.

---

## 7. Navigation

**Desktop (≥1024px):** sticky, `bg-white/90 backdrop-blur-md`, gold bottom border on scroll. Logo left. Links centred: Story · Spaces · Celebrations · Gallery · Amenities · Reviews · Location · Contact. Right: language control (`EN` / `ಕನ್ನಡ`, no flag — see 1.5), then gold "Enquire Now" CTA → `#contact`. Active-section underline via `IntersectionObserver`.

**Mobile (<1024px):** logo + hamburger (Lucide `Menu`/`X`). Full-screen drawer, 48px tap targets, closes on link click or outside tap. One instance only of the language control (see 1.3) — do not duplicate desktop and mobile language buttons both live in the accessibility tree simultaneously.

Floating WhatsApp FAB, bottom-right, 56px, `#25D366`, links `https://wa.me/919880975481`.

---

## 8. Hero

Full-viewport (`100dvh`), video background per Section 4.3/4.4 (WebM + MP4 sources, WebP poster). Overlay gradient `rgba(0,0,0,0.45)→0.2→0.65` top-to-bottom.
Badge: `📍 1.5 km from Khanapur · Jamboti Road` (single instance, spacing fixed per 1.1).
`<h1>` serif, white: "Where Life's Most Meaningful" / gold "Celebrations Belong".
Subhead: "15+ years of family trust · Khanapur, Karnataka".
Two CTAs: gold "Plan Your Celebration" → `#contact`; outline "Explore Venue" → `#spaces`.
Bottom stat strip (spacing fixed per 1.1, one clean stat per block): 3,000+ Guests · 1,500+ Functions Hosted · 4.9★ Rating · 100+ Parking Spaces. `|` separators desktop, 2×2 grid mobile.

---

## 9. Story (`#story`)

Two-column ≥768px (text 55% / image 45%), stacked mobile. Eyebrow "Heritage & Philosophy". `<h2>`: "A Natural Sanctuary Built on 15+ Years of Family Trust". Corrected body copy (Section 2). Two feature callouts: Areca Palm Canopy, Warm Family Hospitality. Right image `outdoor-entrance.webp`/`.jpeg`, `rounded-2xl`, caption "Traditional Mandap Setup" italic serif, spaced correctly from the image (fix 1.1 pattern). Stats strip below: 3,000+ Guests Capacity · 1,500+ Functions Hosted · 4.9★ Google Rating · 100+ Parking Spaces — each stacked label under number, not glued.

---

## 10. Venue Spaces (`#spaces`)

Heading: "Thoughtfully Composed for Every Moment". Tabs: Open Mandap · Haldi Ceremony Courtyard · Pavilion Hall · Dining Area. Each panel: image, name, capacity badge (spacing fixed), area badge (spacing fixed), description, feature tag pills, "Reserve This Space" (gold → `#contact`) + "View Capacity Guide" (outline).

**Capacity Calculator** (single name, see 1.4): accordion below tabs. Slider 100–3000, `role="slider"` with `aria-valuemin/max/now`, updates recommended space tab live: "For [N] guests, we recommend the [Space Name] — capacity up to [X] guests."

---

## 11. Celebrations (`#celebrations`)

Heading: "Every Landmark Occasion, Rooted in Tradition". Grid: 3-col desktop / 2-col tablet / 1-col mobile. Each card: gold top border, small numeric badge `01`–`06` **as a standalone styled element, not concatenated with "Option" or with the Enquire link** (fix 1.2), icon, name, one-line description, "Enquire →" in gold linking `#contact`. Ivory bg, hover lift + full gold border.

List: Weddings & Vivaha Ceremony · Reception & Evening Celebrations · Sangeet & Haldi Ceremonies · Engagement & Naming Ceremonies · Milestone Birthdays & Anniversaries · Community & Corporate Gatherings.

---

## 12. Gallery (`#gallery`)

Heading "Photo Gallery". Masonry: 3-col desktop / 2 tablet / 1 mobile. Images served WebP-first per Section 4.2. Hover: dark gradient overlay + italic caption. Lightbox on click: full-screen, close (X), arrow nav, `Escape` to close, arrow keys to navigate, focus-trapped, `role="dialog"` `aria-modal="true"`. CTA row below: "Hosting your event soon?" → "Schedule a Visit" → `#contact`.

---

## 13. Amenities (`#amenities`)

Heading "Reassurance Built Into Every Detail". 3-col/2-col/1-col icon-card grid:
1. 100+ Parking Spaces
2. 100% Generator Power Backup
3. Bridal & Groom Dressing Suites
4. Senior & Wheelchair Accessible
5. Gentlemen's and Ladies' Washrooms
6. Overnight Stay Accommodation
7. Catering Kitchen & Preparation Area

**Then the new "What's Included" subsection from Section 3.2** (Seating / Catering Equipment / Ceremonial Items — 3 cards, same visual language as the amenity cards above but visually grouped under their own subheading so they read as "furnished with" rather than "site infrastructure").

Below: dark highlight banner — "100% Uninterrupted Power & On-Site Security Management — From generator backups to dedicated traffic marshals for guests arriving along Jamboti Road, we treat your event like our own family celebration." Button: "Book a Venue Visit" → `#contact`.

---

## 14. Booking Terms (`#terms`) — New Section

Per Section 3.2. Collapsed accordion, five icon-led bullets, placed immediately above the Contact form. Footer links here.

---

## 15. Reviews (`#reviews`)

Heading "Guest Reviews". Rating "4.9 / 5.0" — **stacked or spaced, not glued** (fix 1.1's `4.9Out of 5.0` instance) — subtitle "320+ Verified Reviews on Google". Horizontal scroll-snap carousel, 3 visible desktop / 1 mobile, dot nav + arrow buttons desktop. Cards: 5 gold stars, italic review text, name, event type + city, month/year gold pill, gold left border. Existing 3 reviews kept verbatim (Mahesh Kulkarni, Priya & Rahul Patil, Suresh Naik). `role="region"` `aria-label="Guest reviews"`.

---

## 16. Location (`#location`)

Heading "Easy to Reach, Hard to Forget". Two-column desktop: address card + proximity table (40%) / map embed (60%). Proximity table corrected per Section 2 (Sambra/IXG, Chorla Ghat wording). Map lazy-loaded via `IntersectionObserver`, `rounded-2xl`, min-height 350px mobile / 450px desktop.

---

## 17. Contact (`#contact`)

Heading "Plan Your Celebration". Booking Terms accordion (Section 14) sits directly above this form. Two-column desktop: form 60% / contact details 40%.

Form fields: Full Name · WhatsApp Number (validated 10-digit) · Event Type (select) · Expected Event Date (min=today) · Expected Guest Count (radio group) · Additional Notes (optional). Real `<label>`s, `aria-required`, error states with `aria-describedby`, success banner on submit. Gold full-width submit "Send Enquiry". Secondary link "Or chat directly on WhatsApp →".

Contact panel: Main Phone `+91 98809 75481`, Manager Phone `+91 99016 43802`, Email `enquiry@omkarshubhamgarden.com`, office hours card, green full-width WhatsApp button.

---

## 18. Footer

Dark `#1A1A1A`. Three columns desktop (logo/about · quick nav · visit hours), stacked mobile. Quick nav now includes a **Terms & Conditions** link → `#terms` (auto-expands the accordion, per Section 3.2). Bottom bar: copyright left, address right. Fixed "Back to Top" on mobile.

---

## 19. Floating Elements

WhatsApp FAB (Section 7). Back-to-top button, appears after 400px scroll, positioned above the WhatsApp FAB so they never overlap.

---

## 20. Animations & Interactions

Scroll fade-in via `IntersectionObserver` (20% threshold, `opacity-0 translate-y-6` → `opacity-100 translate-y-0`, 500ms ease-out). Animated stat counters on viewport entry. Staggered hero entry (badge → h1 → subhead → buttons, 150ms steps). Gallery hover scale 1→1.05. Card hover lift + shadow. **All animation logic wrapped in `@media (prefers-reduced-motion: no-preference)`**, including the loading-screen pulse (Section 5.1).

---

## 21. Responsiveness

Test at 320 / 375 / 768 / 1024 / 1280 / 1536px. No horizontal overflow at any width (`overflow-x: hidden` on `body`). `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` wrapper. Touch targets ≥44×44px. Test tabs, carousel, form, lightbox, calculator, and the new terms accordion at 320px specifically.

---

## 22. Performance

All photo `<img>`/`<Image>` tags: WebP-first per Section 4.2, explicit `width`/`height` (no CLS), `loading="lazy"` except hero. Hero video: WebM+MP4 sources, WebP poster, `preload="metadata"`, muted, `+faststart` MP4 (Section 4.5). Maps iframe lazy-mounted on viewport entry. Fonts via `next/font/google`, `display: swap`. First-visit language gate (Section 5) adds ≤15KB JS and zero added network requests.

---

## 23. Accessibility (WCAG 2.1 AA)

Descriptive `alt` text on all content images, `alt=""` on decorative ones, hero video `aria-hidden="true"`. `<nav aria-label="Main navigation">`. Each section: `id` + `aria-labelledby`. Lightbox and terms accordion: correct `aria-expanded`/`aria-modal`/focus management. Form: labelled inputs, `aria-describedby` errors. Capacity slider: full `aria-value*` set + keyboard support. Language gate (Section 5): `role="dialog"`, focus-trapped, `Enter`/`Space` operable, 4s hard timeout. Colour contrast: dark text on gold, never white-on-gold. Skip link at top of `<body>`. No duplicate focusable controls (fix 1.3).

---

## 24. SEO & Meta

```typescript
export const metadata = {
  title: 'Omkar Shubham Garden — Premium Celebration Venue | Khanapur, Karnataka',
  description: 'Premier garden venue near Khanapur for weddings, receptions, engagements, and family celebrations. 15+ years of family trust. Up to 3,000 guests. 100+ parking. Book a visit today.',
  keywords: 'Omkar Shubham Garden, Khanapur wedding venue, Bacholi event garden, Jamboti Road function hall, Karnataka wedding lawns, Belagavi destination marriage venue',
  openGraph: {
    title: 'Omkar Shubham Garden — Premium Celebration Venue',
    description: 'Garden venue near Khanapur for weddings & celebrations. 15+ years · Up to 3,000 guests · 4.9★ Google rating.',
    url: 'https://vighneshnilajakar.github.io/shubham-omkar/',
    siteName: 'Omkar Shubham Garden',
    images: [{ url: '/shubham-omkar/images/outdoor-entrance.webp', width: 1200, height: 630 }],
    locale: 'en_IN',
    type: 'website',
  },
}
```
Add `EventVenue` JSON-LD as in v1, including `aggregateRating` (4.9 / 320 reviews) and `openingHoursSpecification` (10:00–17:00 daily).

---

## 25. Language System

Nav toggle (Section 7) is the permanent control. First-visit gate (Section 5) only sets the initial value once. If Kannada translation strings do not yet exist in the codebase, do not fake the toggle — implement via `next-intl` or a simple context with `/lib/i18n/en.ts` + `/lib/i18n/kn.ts`, or remove the Kannada option from both the nav and the first-visit gate until real translations exist. A toggle that doesn't actually translate anything is worse than no toggle.

---

## 26. Component Structure

```
components/
  layout/
    Navbar.tsx
    Footer.tsx
    FloatingWhatsApp.tsx
    BackToTop.tsx
    FirstVisitLanguageGate.tsx      # new — Section 5
  sections/
    Hero.tsx
    Story.tsx
    Spaces.tsx
    Celebrations.tsx
    Gallery.tsx
    Amenities.tsx
    IncludedFacilities.tsx          # new — Section 3.2 / 13
    BookingTerms.tsx                # new — Section 3.2 / 14
    Reviews.tsx
    Location.tsx
    Contact.tsx
  ui/
    StatCard.tsx
    ReviewCard.tsx
    CelebrationCard.tsx
    AmenityCard.tsx
    GalleryLightbox.tsx
    CapacityCalculator.tsx
```

---

## 27. Testing Checklist

- [ ] No glued label/value text anywhere (Section 1.1) — spot-check every stat, badge, card.
- [ ] No "Option 01" style text visible anywhere (Section 1.2).
- [ ] Only one language control focusable at a time per viewport (Section 1.3).
- [ ] "Capacity Calculator" is the only name used for that feature (Section 1.4).
- [ ] No flag emoji used to represent a language (Section 1.5).
- [ ] "What's Included" and "Booking Terms & Conditions" sections present, content matches Section 3.1 translation exactly.
- [ ] Terms accordion collapsed by default, expands correctly, `aria-expanded` toggles.
- [ ] Footer "Terms & Conditions" link jumps to and expands the accordion.
- [ ] All photo assets have a `.webp` counterpart being served first, with original as fallback.
- [ ] Hero video has both `.webm` and `.mp4` sources, WebP poster, no audio track.
- [ ] First-visit language gate shows once, never again after `localStorage` is set; 4s timeout works; reduced-motion respected.
- [ ] Site renders correctly at 320/375/768/1024/1280/1536px, no horizontal scroll.
- [ ] All 8 main nav links scroll correctly; Terms link (footer) works.
- [ ] Capacity calculator, gallery lightbox, contact form, carousel all keyboard-operable.
- [ ] `npm run build` (or `bun run build`) succeeds, zero TypeScript errors, valid static `out/` export.
