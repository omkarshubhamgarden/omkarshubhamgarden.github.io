'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { sitePath } from '@/lib/site';
import { Stat } from './Stat';
import { Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenPlanner: () => void;
  onOpenContact: () => void;
}

export function HeroSection({ onOpenPlanner, onOpenContact }: HeroSectionProps) {
  const { t } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex min-h-[clamp(40rem,100svh,60rem)] items-center justify-center overflow-hidden bg-[#000]">
      {/* Background Video - full bleed */}
      <div className="absolute inset-0 z-0">
        {!videoFailed ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={sitePath('/images/hero-poster.webp')}
            onError={() => setVideoFailed(true)}
            aria-hidden="true"
            className="h-full w-full object-cover transition-transform duration-700"
          >
            <source src={sitePath('/images/hero-vid.webm')} type="video/webm" />
            <source src={sitePath('/images/hero-vid-optimized.mp4')} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={sitePath('/images/outdoor-entrance.webp')}
            alt=""
            fill
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        )}
        {/* subtle vignette to preserve contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Minimal Overlay: location chip, logo, tagline, and single CTA */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-44 pt-28 text-center text-white sm:px-6 sm:pb-40 sm:pt-32 lg:px-8">
        <div className="mb-4 inline-flex max-w-full items-center justify-center gap-2 rounded-full bg-black/50 px-3 py-1 font-mono-util text-[10px] uppercase tracking-widest text-[#E5A84B] sm:text-xs">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[#D98E32]" />
          <span className="sr-only">{t('ui.location')}</span>
          <span className="min-w-0 leading-snug">{t('hero.locationBadge')}</span>
        </div>

        <div className="relative mt-2 aspect-square w-[min(48vw,15rem)] drop-shadow-2xl sm:mt-3 sm:w-[min(42vw,20rem)] lg:w-[min(34vw,22rem)]">
          <Image
            src={sitePath('/images/shubham-omkar-logo.webp')}
            alt="Omkar Shubham Garden logo"
            fill
            priority
            sizes="(min-width: 640px) 416px, 68vw"
            className="object-contain"
          />
        </div>

        <h1 className="mt-3 max-w-2xl rounded-xl border border-[#F2C477]/45 bg-[#192D1F]/80 px-4 py-2.5 font-serif-display text-lg font-medium leading-snug text-[#FFF8EA] shadow-xl backdrop-blur-sm sm:mt-4 sm:px-7 sm:py-3 sm:text-2xl md:text-3xl">
          {t('hero.title')}
        </h1>

        <p className="mt-3 text-xs font-medium tracking-wide text-white/90 sm:text-sm">
          {t('ui.heroTagline')}
        </p>

        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            id="hero-plan-btn"
            onClick={onOpenContact}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold uppercase bg-[#D98E32] text-[#192D1F] hover:bg-[#E5A84B] transition-shadow shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#192D1F]" />
            <span>{t('hero.ctaPrimary')}</span>
          </button>
          <a
            href="#spaces"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-white hover:text-[#192D1F]"
          >
            {t('ui.exploreVenue')}
          </a>
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-4 z-10 mx-auto grid max-w-5xl grid-cols-2 divide-x divide-y divide-white/15 overflow-hidden rounded-2xl border border-white/15 bg-[#192D1F]/75 text-center text-white shadow-2xl backdrop-blur-md sm:inset-x-6 sm:grid-cols-4 sm:divide-y-0">
        {[
          [t('story.stat1Number'), t('ui.guestsStat')],
          [t('story.stat2Number'), t('ui.functionsStat')],
          ['4.9 ★', t('ui.ratingStat')],
          [t('story.stat4Number'), t('ui.parkingStat')],
        ].map(([value, label]) => (
          <Stat
            key={label}
            value={value}
            label={label}
            className="items-center px-3 py-3 text-center sm:px-4 sm:py-4"
            valueClassName="font-serif-display text-xl font-semibold text-[#F2C477] sm:text-2xl"
            labelClassName="text-[9px] uppercase tracking-wider text-white/70 sm:text-[10px]"
          />
        ))}
      </div>
    </section>
  );
}
