'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Heart, Sparkles, Sun, Users, Calendar, Award, ArrowUpRight } from 'lucide-react';

interface CelebrationsSectionProps {
  onOpenContact: () => void;
}

export function CelebrationsSection({ onOpenContact }: CelebrationsSectionProps) {
  const { t } = useLanguage();

  const celebrations = t('celebrations.items') || [];

  const iconsMap: Record<string, React.ReactNode> = {
    Ring: <Heart className="w-5 h-5 text-[#B2502B]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#D98E32]" />,
    Sun: <Sun className="w-5 h-5 text-[#D98E32]" />,
    Heart: <Heart className="w-5 h-5 text-[#741D2B]" />,
    Cake: <Calendar className="w-5 h-5 text-[#243E2C]" />,
    Users: <Users className="w-5 h-5 text-[#243E2C]" />,
  };

  return (
    <section id="celebrations" className="py-24 sm:py-32 bg-[#FAF8F3] relative overflow-hidden">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#B2502B] uppercase">
            <span className="w-6 h-[1px] bg-[#B2502B]" />
            <span>{t('celebrations.eyebrow')}</span>
            <span className="w-6 h-[1px] bg-[#B2502B]" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#243E2C]">
            {t('celebrations.title')}
          </h2>

          <p className="text-base text-[#6B726C] font-light">
            {t('ui.celebrationIntro')}
          </p>
        </div>

        {/* Celebrations Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {celebrations.map((item: any, idx: number) => (
            <div
              key={idx}
              className="group flex h-full flex-col rounded-2xl border border-[#E2DBCB] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#243E2C]/40 hover:shadow-xl md:p-8"
            >
              {/* Icon and standalone numeral badge — physically separated from the Enquire link below */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F5EE] transition-transform group-hover:scale-110">
                  {iconsMap[item.icon] || <Sparkles className="h-5 w-5 text-[#D98E32]" />}
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2DBCB] bg-[#FFFBF3] font-serif-display text-base font-semibold text-[#B2502B]"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 font-serif-display text-2xl font-normal text-[#243E2C] transition-colors group-hover:text-[#B2502B]">
                {item.title}
              </h3>

              <p className="mt-3 text-base font-light leading-relaxed text-[#1A1A1A]/85">
                {item.desc}
              </p>

              <div className="mt-auto pt-6">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#B2502B] hover:underline"
                >
                  <span>{t('ui.enquire')}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
