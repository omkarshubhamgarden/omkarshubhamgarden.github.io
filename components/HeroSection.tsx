'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt autoplay on mount + handle iOS/Android quirks
  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;

    const tryPlay = () => {
      if (!video || videoFailed) return;
      // Must be muted for autoplay on smartphones
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setVideoReady(true))
          .catch(() => {
            // Autoplay blocked — keep poster/fallback visible, don't hard-fail
            // Show fallback image clearly; video will remain hidden via opacity
          });
      }
    };

    // If already can play, try immediately
    if (video.readyState >= 3) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay, { once: true });
      video.addEventListener('loadeddata', tryPlay, { once: true });
    }

    const handleVisibility = () => {
      if (document.visibilityState === 'visible' && !video.paused) {
        tryPlay();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
    };
  }, [videoFailed]);

  return (
    <section className="relative flex min-h-[clamp(40rem,100svh,60rem)] items-center justify-center overflow-hidden bg-[#000]">
      {/* Background — alt image always present, video overlays when ready (center focus) */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Fallback / poster image — alt-hero.webp, centered */}
        <Image
          src={sitePath('/images/alt-hero.webp')}
          alt="Omkar Shubham Garden — Areca palm garden venue near Khanapur"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            // vendor prefixes for older iOS / X5 WebView (Android WeChat, etc.)
            // @ts-ignore — webkit-playsinline not in React types but needed for iOS <17
            webkit-playsinline="true"
            // @ts-ignore — x5-playsinline for Tencent X5
            x5-playsinline="true"
            preload="metadata"
            poster={sitePath('/images/alt-hero.webp')}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            onError={() => setVideoFailed(true)}
            onStalled={() => setVideoFailed(true)}
            onAbort={() => setVideoFailed(true)}
            onCanPlay={() => setVideoReady(true)}
            onLoadedData={() => {
              // Some Android browsers need explicit play() after loadeddata
              videoRef.current?.play().catch(() => {});
            }}
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* webm first (smaller/better for Chrome/Android), mp4 fallback for iOS Safari */}
            <source src={sitePath('/images/hero-vid.webm')} type="video/webm" />
            <source src={sitePath('/images/hero-vid-optimized.mp4')} type="video/mp4" />
          </video>
        )}
        {/* subtle vignette to preserve contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none" />
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
