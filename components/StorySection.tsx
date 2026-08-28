'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { sitePath } from '@/lib/site';
import { Stat } from './Stat';
import { ShieldCheck, Heart, Trees, Compass } from 'lucide-react';

export function StorySection() {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 sm:py-32 bg-[#F8F5EE] relative overflow-hidden bg-grain">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#B2502B] uppercase">
              <span className="w-6 h-[1px] bg-[#B2502B]" />
              <span>{t('story.eyebrow')}</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#243E2C] leading-[1.15]">
              {t('story.title')}
            </h2>

            <p className="text-base sm:text-lg text-[#4A504B] leading-relaxed font-light font-sans-body">
              {t('story.p1')}
            </p>

            <p className="text-base sm:text-lg text-[#4A504B] leading-relaxed font-light font-sans-body">
              {t('story.p2')}
            </p>

            {/* Philosophy Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2DBCB]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#243E2C]/10 text-[#243E2C] flex items-center justify-center shrink-0 mt-0.5">
                  <Trees className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#243E2C]">{t('ui.philosophyCanopy')}</h4>
                  <p className="text-xs text-[#6B726C] mt-0.5">{t('ui.philosophyCanopyText')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D98E32]/15 text-[#D98E32] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#243E2C]">{t('ui.philosophyHospitality')}</h4>
                  <p className="text-xs text-[#6B726C] mt-0.5">{t('ui.philosophyHospitalityText')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Frame & Architectural Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <Image
                src={sitePath('/images/outdoor-entrance.webp')}
                alt="Sacred Ceremony Mandap at Omkar Shubham Garden"
                referrerPolicy="no-referrer"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="block text-[10px] font-mono-util tracking-widest text-[#D98E32] uppercase">
                  {t('ui.mandapSetup')}
                </span>
                <span className="font-serif-display text-xl sm:text-2xl font-normal">
                  &ldquo;{t('ui.mandapQuote')}&rdquo;
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Four Key Venue Metrics */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#E2DBCB]">
          <Stat
            className="items-center rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] p-5 text-center sm:p-6"
            gap="gap-2"
            value={t('story.stat1Number')}
            label={t('story.stat1Label')}
            valueClassName="font-serif-display text-3xl font-semibold text-[#243E2C] sm:text-4xl"
            labelClassName="text-xs font-mono-util uppercase tracking-wider text-[#6B726C]"
          />

          <Stat
            className="items-center rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] p-5 text-center sm:p-6"
            gap="gap-2"
            value={t('story.stat2Number')}
            label={t('story.stat2Label')}
            valueClassName="font-serif-display text-3xl font-semibold text-[#B2502B] sm:text-4xl"
            labelClassName="text-xs font-mono-util uppercase tracking-wider text-[#6B726C]"
          />

          <Stat
            className="items-center rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] p-5 text-center sm:p-6"
            gap="gap-2"
            value={t('story.stat3Number')}
            label={t('story.stat3Label')}
            valueClassName="font-serif-display text-3xl font-semibold text-[#D98E32] sm:text-4xl"
            labelClassName="text-xs font-mono-util uppercase tracking-wider text-[#6B726C]"
          />

          <Stat
            className="items-center rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] p-5 text-center sm:p-6"
            gap="gap-2"
            value={t('story.stat4Number')}
            label={t('story.stat4Label')}
            valueClassName="font-serif-display text-3xl font-semibold text-[#741D2B] sm:text-4xl"
            labelClassName="text-xs font-mono-util uppercase tracking-wider text-[#6B726C]"
          />
        </div>

      </div>
    </section>
  );
}
