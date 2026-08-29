import Link from 'next/link';
import Image from 'next/image';
import { sitePath } from '@/lib/site';
import {
  MapPin,
  Phone,
  ArrowUpRight,
  Compass,
  House,
  Images,
  Calendar,
  Sparkles,
  Clock,
  SearchX,
} from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#2D312E] antialiased selection:bg-[#243E2C] selection:text-[#F8F5EE]">
      {/* Subtle grain + decorative blobs — green accent throughout */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-100" />
        <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[#D98E32]/10 blur-[80px]" />
        <div className="absolute -bottom-40 -left-40 h-[640px] w-[640px] rounded-full bg-[#243E2C]/5 blur-[90px]" />
      </div>

      {/* Minimal header — brand */}
      <header className="relative z-10 border-b border-[#E2DBCB]/70 bg-[#F8F5EE]/80 backdrop-blur-sm">
        <div className="section-container flex h-[64px] items-center justify-between sm:h-[72px]">
          <Link
            href={sitePath('/')}
            className="flex items-center gap-3 group"
            aria-label="Omkar Shubham Garden — back to home"
          >
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-[#E2DBCB] sm:h-10 sm:w-10">
              <Image
                src={sitePath('/images/shubham-omkar-logo.webp')}
                alt="Omkar Shubham Garden"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </span>
            <span className="leading-none">
              <span className="block font-serif-display text-[17px] font-semibold tracking-wide text-[#243E2C] sm:text-[18px]">
                Omkar Shubham
              </span>
              <span className="block font-mono-util text-[9px] font-medium uppercase tracking-[0.28em] text-[#B2502B] sm:text-[10px]">
                Garden • Khanapur
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="hidden items-center gap-1.5 rounded-full border border-[#E2DBCB] bg-white px-3 py-1.5 text-[11px] font-medium text-[#243E2C] lg:inline-flex">
              <MapPin className="h-3.5 w-3.5 text-[#D98E32]" />
              Near Ramgurwardi Cross • Jamboti Road
            </span>
            <a
              href="tel:+919880975481"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#243E2C] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[#192D1F]"
            >
              <Phone className="h-3.5 w-3.5 text-[#F2C477]" />
              98809 75481
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <div className="section-container pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pt-10">
          {/* Breadcrumb eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 text-[11px] font-mono-util uppercase tracking-widest text-[#8C826B] sm:mb-8">
            <Link href={sitePath('/')} className="inline-flex items-center gap-1 hover:text-[#243E2C] hover:underline">
              <House className="h-3 w-3" />
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="inline-flex items-center gap-1 text-[#B2502B]">
              <SearchX className="h-3 w-3" />
              404 — Path not found
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left — message */}
            <div className="lg:col-span-7">
              {/* Big 404 — green accent watermark, now clearly visible */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 -top-8 select-none font-serif-display text-[88px] font-bold leading-none tracking-[-0.06em] text-[#243E2C]/[0.08] sm:-left-3 sm:-top-10 sm:text-[120px] sm:text-[#243E2C]/[0.08] lg:-left-4 lg:-top-10 lg:text-[168px] lg:text-[#243E2C]/[0.09]"
                  style={{
                    WebkitTextStroke: '1px rgba(36,62,44,0.12)',
                    paintOrder: 'stroke fill',
                  }}
                >
                  404
                </div>
                {/* subtle gold underline echoing site accent, tied to watermark */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-2 top-[68px] hidden h-px w-[140px] bg-gradient-to-r from-[#D98E32]/40 via-[#D98E32]/20 to-transparent sm:top-[92px] sm:w-[180px] lg:top-[118px] lg:block lg:w-[210px]"
                />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#E2DBCB] bg-white px-3 py-1.5 shadow-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#D98E32]" />
                    <span className="font-mono-util text-[11px] font-medium uppercase tracking-widest text-[#6B726C]">
                      Garden trail • Lost path
                    </span>
                  </div>

                  <h1 className="mt-4 font-serif-display text-[32px] font-normal leading-[0.95] tracking-tight text-[#243E2C] sm:mt-6 sm:text-[44px] lg:text-[48px]">
                    This celebration
                    <br />
                    <span className="font-light italic text-[#B2502B]">wandered off</span> the
                    <br />
                    garden trail.
                  </h1>

                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#D98E32]" />
                    <span className="font-mono-util text-[11px] uppercase tracking-[0.2em] text-[#8C826B]">
                      15+ years • 3,000+ guests • Areca palm sanctuary
                    </span>
                  </div>

                  <p className="mt-6 max-w-[560px] text-[15px] font-light leading-relaxed text-[#4A504B] sm:text-[16px]">
                    The page you followed isn&apos;t blooming anymore — it may have moved, or the link took a hidden path
                    through the palms. Let&apos;s bring you back to the garden where every milestone naturally belongs.
                  </p>

                  <p className="mt-3 max-w-[560px] text-sm leading-relaxed text-[#6B726C]">
                    Near <strong className="font-medium text-[#2D312E]">Ramgurwardi Cross, Jamboti Road</strong>, 1.5 km from
                    Khanapur town — easily reached from Belagavi, Goa &amp; Maharashtra.
                  </p>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={sitePath('/')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D98E32] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#192D1F] shadow-lg transition-colors hover:bg-[#E5A84B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#243E2C]"
                >
                  <House className="h-4 w-4" />
                  Return to Garden Home
                </Link>
                <Link
                  href={sitePath('/#contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#243E2C] bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-[#243E2C] transition-colors hover:bg-[#243E2C] hover:text-white"
                >
                  <Calendar className="h-4 w-4 text-[#B2502B]" />
                  Check Availability
                  <ArrowUpRight className="h-4 w-4 opacity-70" />
                </Link>
              </div>

              {/* Quick navigation — editorial cards */}
              <div className="mt-10">
                <p className="font-mono-util text-[11px] uppercase tracking-[0.18em] text-[#8C826B]">
                  Continue exploring
                </p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Link
                    href={sitePath('/#spaces')}
                    className="group relative overflow-hidden rounded-2xl border border-[#E2DBCB] bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C8A96E]/60 hover:shadow-md"
                  >
                    <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-[#F8F5EE] transition-colors group-hover:bg-[#243E2C] group-hover:text-white flex items-center justify-center text-[#243E2C]">
                      <Compass className="h-4 w-4" />
                    </div>
                    <p className="font-mono-util text-[10px] uppercase tracking-widest text-[#D98E32]">Spaces</p>
                    <p className="mt-1 font-serif-display text-[17px] leading-none text-[#243E2C]">Venue Spaces</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#6B726C]">
                      Open Mandap • Haldi • Pavilion • Dining — up to 500 guests per space.
                    </p>
                  </Link>

                  <Link
                    href={sitePath('/#gallery')}
                    className="group relative overflow-hidden rounded-2xl border border-[#E2DBCB] bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#C8A96E]/60 hover:shadow-md"
                  >
                    <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-[#F8F5EE] flex items-center justify-center text-[#243E2C] transition-colors group-hover:bg-[#243E2C] group-hover:text-white">
                      <Images className="h-4 w-4" />
                    </div>
                    <p className="font-mono-util text-[10px] uppercase tracking-widest text-[#D98E32]">Gallery</p>
                    <p className="mt-1 font-serif-display text-[17px] leading-none text-[#243E2C]">Garden Moments</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#6B726C]">16 photo stories — lawns, mandap, twilight lights.</p>
                  </Link>

                  <Link
                    href={sitePath('/#location')}
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] p-4 shadow-sm transition-all hover:border-[#243E2C]/15 hover:shadow-md sm:col-span-2"
                  >
                    <span>
                      <span className="block font-mono-util text-[10px] uppercase tracking-widest text-[#B2502B]">
                        Location &amp; Directions
                      </span>
                      <span className="mt-1 block font-serif-display text-[15px] text-[#243E2C]">
                        Find us on Jamboti Road — 5 mins from Khanapur Railway Station
                      </span>
                    </span>
                    <span className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#243E2C] text-white sm:inline-flex">
                      <MapPin className="h-4 w-4 text-[#F2C477]" />
                    </span>
                  </Link>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <Link href={sitePath('/#story')} className="rounded-full border border-[#E2DBCB] bg-white px-3 py-1.5 text-[#4A504B] hover:border-[#243E2C] hover:text-[#243E2C]">
                    Story
                  </Link>
                  <Link href={sitePath('/#celebrations')} className="rounded-full border border-[#E2DBCB] bg-white px-3 py-1.5 text-[#4A504B] hover:border-[#243E2C] hover:text-[#243E2C]">
                    Celebrations
                  </Link>
                  <Link href={sitePath('/#amenities')} className="rounded-full border border-[#E2DBCB] bg-white px-3 py-1.5 text-[#4A504B] hover:border-[#243E2C] hover:text-[#243E2C]">
                    Amenities • 100+ Parking • Generator
                  </Link>
                  <Link href={sitePath('/#reviews')} className="rounded-full border border-[#E2DBCB] bg-white px-3 py-1.5 text-[#4A504B] hover:border-[#243E2C] hover:text-[#243E2C]">
                    4.9 ★ • 320+ Reviews
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — venue card */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[28px] border border-[#E2DBCB] bg-white shadow-xl">
                {/* Image */}
                <div className="relative h-[220px] sm:h-[260px]">
                  <Image
                    src={sitePath('/images/outdoor-entrance.webp')}
                    alt="Omkar Shubham Garden - Areca palm entrance"
                    fill
                    sizes="(min-width:1024px) 460px, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192D1F]/80 via-[#192D1F]/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-[#25A55A]" />
                    Open for visits
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono-util text-[10px] uppercase tracking-[0.18em] text-[#F2C477]">The Venue</p>
                      <p className="font-serif-display text-[22px] font-medium leading-none text-white">Omkar Shubham Garden</p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs font-light text-white/90">
                        <MapPin className="h-3.5 w-3.5 text-[#F2C477]" />
                        Near Ramgurwardi Cross, Jamboti Road, Khanapur
                      </p>
                    </div>
                    <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2C477] text-[#192D1F] shadow-md sm:inline-flex">
                      <Sparkles className="h-5 w-5" />
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-5 p-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] px-2 py-3">
                      <p className="font-serif-display text-lg font-semibold leading-none text-[#243E2C]">3,000+</p>
                      <p className="mt-1 font-mono-util text-[10px] uppercase tracking-wide text-[#6B726C]">Guests</p>
                    </div>
                    <div className="rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] px-2 py-3">
                      <p className="font-serif-display text-lg font-semibold leading-none text-[#B2502B]">1,500+</p>
                      <p className="mt-1 font-mono-util text-[10px] uppercase tracking-wide text-[#6B726C]">Functions</p>
                    </div>
                    <div className="rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] px-2 py-3">
                      <p className="font-serif-display text-lg font-semibold leading-none text-[#243E2C]">100+</p>
                      <p className="mt-1 font-mono-util text-[10px] uppercase tracking-wide text-[#6B726C]">Parking</p>
                    </div>
                  </div>

                  <div className="space-y-3 rounded-2xl bg-[#F8F5EE] p-4">
                    <div className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#243E2C] shadow-sm ring-1 ring-[#E2DBCB]">
                        <Clock className="h-4 w-4 text-[#D98E32]" />
                      </span>
                      <span>
                        <span className="block font-mono-util text-[11px] uppercase tracking-wide text-[#8C826B]">Visit Hours</span>
                        <span className="block font-medium text-[#243E2C]">Monday – Sunday: 10:00 AM to 5:00 PM</span>
                        <span className="block text-xs font-light text-[#6B726C]">On-site walk-throughs daily — prior call recommended.</span>
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <a
                        href="tel:+919880975481"
                        className="flex items-center justify-center gap-2 rounded-full bg-[#243E2C] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#192D1F]"
                      >
                        <Phone className="h-3.5 w-3.5 text-[#F2C477]" />
                        Main: 9880975481
                      </a>
                      <a
                        href="tel:+919901643802"
                        className="flex items-center justify-center gap-2 rounded-full border border-[#243E2C] bg-white px-4 py-2.5 text-xs font-semibold text-[#243E2C] transition-colors hover:bg-[#243E2C] hover:text-white"
                      >
                        Manager: 9901643802
                      </a>
                    </div>
                    <a
                      href="https://wa.me/919880975481"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-xs font-semibold text-[#192D1F] transition-colors hover:bg-[#20bd5a]"
                    >
                      Chat on WhatsApp — instant reply
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E2DBCB] pt-4 text-[11px] font-mono-util text-[#8C826B]">
                    <span>Enquiry: enquiry@omkarshubhamgarden.com</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-[#D98E32]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#D98E32]" />
                      15+ years of trust
                    </span>
                  </div>
                </div>
              </div>

              {/* Helpful tip */}
              <p className="mx-auto mt-4 max-w-[460px] text-center text-xs leading-relaxed text-[#8C826B] sm:text-[12.5px]">
                Tip: If you typed the URL manually, check the spelling — or use the quick links above to jump to{' '}
                <span className="font-medium text-[#243E2C]">Spaces, Gallery, or Contact</span>.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="relative z-10 mt-4 border-t border-[#E2DBCB] bg-white/70 backdrop-blur">
        <div className="section-container flex flex-col gap-3 py-6 text-center text-xs font-mono-util text-[#8C826B] sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span>
            © {new Date().getFullYear()} Omkar Shubham Garden — Near Ramgurwardi Cross, Jamboti Road, Khanapur.
          </span>
          <span className="inline-flex items-center justify-center gap-2">
            <span className="hidden h-px w-6 bg-[#E2DBCB] sm:inline-block" />
            <Link href={sitePath('/')} className="font-medium text-[#243E2C] underline decoration-[#C8A96E]/50 underline-offset-4 hover:decoration-[#D98E32]">
              Back to home
            </Link>
            <span>•</span>
            <a href="https://maps.google.com/?q=Omkar+Shubham+Garden+Khanapur+Jamboti+Road" target="_blank" rel="noopener noreferrer" className="hover:text-[#243E2C] hover:underline">
              Open Maps
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
