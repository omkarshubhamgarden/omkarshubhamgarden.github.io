'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { Stat } from './Stat';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export function ReviewsSection() {
  const { t } = useLanguage();

  const reviews = t('reviews.items') || [];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#F8F5EE] relative overflow-hidden bg-grain">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#B2502B] uppercase mb-2">
              <span className="w-6 h-[1px] bg-[#B2502B]" />
              <span>{t('reviews.eyebrow')}</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#243E2C]">
              {t('reviews.title')}
            </h2>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] p-5 shadow-xs shrink-0">
            <Stat
              className="items-center border-r border-[#E2DBCB] pr-4 text-center"
              gap="gap-0.5"
              value="4.9"
              label={t('reviews.outOf')}
              valueClassName="font-serif-display text-3xl font-semibold text-[#243E2C]"
              labelClassName="text-[10px] font-mono-util uppercase text-[#8C826B]"
            />
            <div>
              <div className="flex items-center gap-1 text-[#D98E32]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="block text-xs text-[#5B605C] font-light mt-1">
                {t('reviews.ratingText')}
              </span>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div role="region" aria-label="Guest reviews" className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none]">
          {reviews.map((rev: any, idx: number) => (
            <div
              key={idx}
              className="min-w-[min(88vw,24rem)] snap-start rounded-3xl border border-[#E2DBCB] border-l-4 border-l-[#D98E32] bg-white p-6 shadow-xs transition-all duration-300 hover:shadow-xl sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] sm:p-8"
            >
              <Quote className="w-10 h-10 text-[#D98E32]/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-[#D98E32]">
                  {[...Array(rev.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-base font-serif-display italic text-[#2D312E] leading-relaxed">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0EAD9] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-sm text-[#243E2C]">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#243E2C]" />
                  </div>
                  <span className="block text-xs text-[#8C826B] font-mono-util mt-0.5">
                    {rev.event}
                  </span>
                </div>

                <span className="text-[11px] font-mono-util text-[#A29A88]">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a href="https://www.google.com/maps/search/?api=1&query=Omkar+Shubham+Garden+Khanapur" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#B2502B] hover:underline">
            Read All Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}
