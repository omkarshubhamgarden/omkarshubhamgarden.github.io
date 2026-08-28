'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { sitePath } from '@/lib/site';
import { SPACE_IMAGE_PLACEHOLDERS } from '@/lib/spacePlaceholders';
import { Stat } from './Stat';
import { Users, Maximize, CheckCircle, Sparkles, ArrowUpRight } from 'lucide-react';

interface SpacesSectionProps {
  onOpenPlanner: () => void;
  onOpenContact: () => void;
}

const SPACE_IMAGES: Record<string, string> = {
  'open-mandap': '/images/family-event.webp',
  lawn: '/images/family-event.webp',
  'haldi-reception': '/images/haldi-decor.webp',
  mandap: '/images/haldi-decor.webp',
  pavilion: '/images/hall-decor.webp',
  dining: '/images/food-venue.webp',
};

const SPACE_IMAGE_FALLBACKS = [
  '/images/family-event.webp',
  '/images/haldi-decor.webp',
  '/images/hall-decor.webp',
  '/images/food-venue.webp',
];

export function SpacesSection({ onOpenPlanner, onOpenContact }: SpacesSectionProps) {
  const { t } = useLanguage();
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const [loadedIndices, setLoadedIndices] = useState<Set<number>>(new Set());

  const spacesList = t('spaces.items') || [];
  const activeSpace = spacesList[activeSpaceIndex] || spacesList[0];

  const imagePathFor = (space: any, index: number) =>
    SPACE_IMAGES[space.id] || SPACE_IMAGE_FALLBACKS[index] || space.image;

  // Warm the browser cache for all space images up front so switching tabs
  // never triggers a fresh network fetch after first paint.
  useEffect(() => {
    SPACE_IMAGE_FALLBACKS.forEach((path) => {
      const img = new window.Image();
      img.src = sitePath(path);
    });
  }, []);

  const markLoaded = (index: number) => {
    setLoadedIndices((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  return (
    <section id="spaces" className="py-24 sm:py-32 bg-[#243E2C] text-[#F8F5EE] relative overflow-hidden">
      {/* Decorative Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D98E32_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#D98E32] uppercase mb-2">
              <span className="w-6 h-[1px] bg-[#D98E32]" />
              <span>{t('spaces.eyebrow')}</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#FAF8F3]">
              {t('spaces.title')}
            </h2>
          </div>

          <button
            onClick={onOpenPlanner}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D98E32] text-[#192D1F] hover:bg-[#E5A84B] transition-colors shrink-0 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('ui.capacityCalculator')}</span>
          </button>
        </div>

        {/* Space Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-white/15">
          {spacesList.map((space: any, index: number) => (
            <button
              key={space.id || index}
              onClick={() => setActiveSpaceIndex(index)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                activeSpaceIndex === index
                  ? 'bg-[#F8F5EE] text-[#243E2C] border-[#F8F5EE] shadow-md font-semibold'
                  : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{space.name}</span>
              <span className={`text-[10px] font-mono-util px-2 py-0.5 rounded-md ${
                activeSpaceIndex === index ? 'bg-[#243E2C]/10 text-[#243E2C]' : 'bg-white/10 text-white/60'
              }`}>
                {space.capacity}
              </span>
            </button>
          ))}
        </div>

        {/* Active Space Detail Card */}
        {activeSpace && (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#1D3324] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            
            {/* Left Image Column — all space images stacked and cross-faded so the
                visible pixels always match the visible tab label */}
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/10 shadow-xl group sm:h-[440px] lg:col-span-7">
              {spacesList.map((space: any, index: number) => {
                const isActive = index === activeSpaceIndex;
                const imagePath = imagePathFor(space, index);
                const stem = (/\/([^/]+)\.\w+$/.exec(imagePath) || [])[1] ?? '';
                const placeholder = SPACE_IMAGE_PLACEHOLDERS[stem];
                return (
                  <div
                    key={space.id || index}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {!loadedIndices.has(index) && placeholder && (
                      // Intentional raw <img>: tiny base64 blur-up placeholder, not optimizable media.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={placeholder}
                        alt=""
                        className="absolute inset-0 h-full w-full scale-110 object-cover blur-lg"
                      />
                    )}
                    <Image
                      src={sitePath(imagePath)}
                      alt={isActive ? activeSpace.name : ''}
                      referrerPolicy="no-referrer"
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      onLoad={() => markLoaded(index)}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                );
              })}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
                <Stat
                  labelFirst
                  label={t('ui.venueArea')}
                  value={activeSpace.area}
                  valueClassName="font-serif-display text-lg font-normal sm:text-2xl"
                  labelClassName="text-[10px] font-mono-util tracking-widest text-[#D98E32] uppercase"
                />

                <Stat
                  labelFirst
                  label={t('ui.maxCapacity')}
                  value={activeSpace.capacity}
                  className="items-end text-right"
                  valueClassName="font-serif-display text-lg font-normal sm:text-2xl"
                  labelClassName="text-[10px] font-mono-util tracking-widest text-[#D98E32] uppercase"
                />
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-md bg-[#D98E32]/20 text-[#D98E32] text-xs font-mono-util uppercase tracking-wider mb-3">
                  {String(activeSpaceIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-4xl font-normal text-[#FAF8F3]">
                  {activeSpace.name}
                </h3>
              </div>

              <p className="text-sm sm:text-base font-light text-white/80 leading-relaxed">
                {activeSpace.desc}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/10">
                <div className="flex items-center gap-2.5 text-xs text-white/90 font-mono-util">
                  <Users className="w-4 h-4 text-[#D98E32]" />
                  <span>{activeSpace.capacity}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/90 font-mono-util">
                  <Maximize className="w-4 h-4 text-[#D98E32]" />
                  <span>{activeSpace.area}</span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5">
                <span className="block text-xs uppercase tracking-widest font-mono-util text-[#D98E32]">
                  {t('ui.keyFeatures')}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeSpace.features?.map((feat: string, fIdx: number) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D98E32] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#F8F5EE] text-[#243E2C] hover:bg-white transition-all shadow-md"
                >
                  <span>{t('ui.reserveSpace')}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenPlanner}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-mono-util text-white/80 hover:text-white border border-white/20 hover:border-white/40"
                >
                  <span>{t('ui.capacityCalculator')}</span>
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
