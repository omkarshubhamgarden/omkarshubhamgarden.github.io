'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { IncludedFacilities } from './IncludedFacilities';
import { Car, Zap, DoorClosed, Accessibility, Droplets, Utensils, ShieldCheck } from 'lucide-react';

export function AmenitiesSection() {
  const { t } = useLanguage();

  const amenities = t('amenities.items') || [];

  const iconsMap: Record<string, React.ReactNode> = {
    Car: <Car className="w-6 h-6 text-[#243E2C]" />,
    Zap: <Zap className="w-6 h-6 text-[#D98E32]" />,
    DoorClosed: <DoorClosed className="w-6 h-6 text-[#741D2B]" />,
    Accessibility: <Accessibility className="w-6 h-6 text-[#243E2C]" />,
    Droplets: <Droplets className="w-6 h-6 text-[#243E2C]" />,
    Utensils: <Utensils className="w-6 h-6 text-[#B2502B]" />,
  };

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#B2502B] uppercase">
            <span className="w-6 h-[1px] bg-[#B2502B]" />
            <span>{t('amenities.eyebrow')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#243E2C]">
            {t('amenities.title')}
          </h2>

          <p className="text-base sm:text-lg text-[#5B605C] font-light leading-relaxed">
            {t('amenities.subtitle')}
          </p>
        </div>

        {/* Reassurance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2DBCB] hover:border-[#243E2C]/30 shadow-xs hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F8F5EE] flex items-center justify-center mb-6">
                {iconsMap[item.icon] || <ShieldCheck className="w-6 h-6 text-[#243E2C]" />}
              </div>

              <h3 className="font-serif-display text-2xl font-normal text-[#243E2C] mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-[#5B605C] font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Assurance Banner */}
        <div className="mt-16 bg-[#243E2C] text-[#FAF8F3] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono-util text-[#D98E32] uppercase tracking-widest block">
              {t('ui.logistics')}
            </span>
            <h4 className="font-serif-display text-2xl sm:text-3xl font-normal">
              {t('ui.logisticsTitle')}
            </h4>
            <p className="text-sm text-white/80 font-light max-w-2xl">
              {t('ui.logisticsText')}
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D98E32] text-[#192D1F] hover:bg-[#E5A84B] transition-colors shrink-0 shadow-md"
          >
            <span>{t('ui.bookVisit')}</span>
          </a>
        </div>

        {/* What's Included subsection — same #amenities parent, distinct band */}
        <IncludedFacilities />

      </div>
    </section>
  );
}
