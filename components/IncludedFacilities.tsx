'use client';

import React from 'react';
import { Armchair, CookingPot, Flame } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function IncludedFacilities() {
  const { t } = useLanguage();
  const facilities = [
    { icon: Armchair, title: t('ui.seatingTitle'), text: t('ui.seatingText') },
    { icon: CookingPot, title: t('ui.cateringTitle'), text: t('ui.cateringText') },
    { icon: Flame, title: t('ui.ceremonialTitle'), text: t('ui.ceremonialText') },
  ];

  return (
    <div className="mt-12 border-t border-[#E2DBCB] pt-16">
      <div className="mb-8 max-w-2xl">
        <span className="text-xs font-mono-util uppercase tracking-widest text-[#B2502B]">{t('ui.whatsIncluded')}</span>
        <h3 className="mt-2 font-serif-display text-3xl text-[#243E2C]">{t('ui.whatsIncludedTitle')}</h3>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {facilities.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-2xl border border-[#E2DBCB] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#243E2C]/30 hover:shadow-lg sm:p-8"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8F5EE]">
              <Icon className="h-6 w-6 text-[#B2502B]" aria-hidden="true" />
            </div>
            <h4 className="mb-2 font-serif-display text-2xl text-[#243E2C]">{title}</h4>
            <p className="text-sm font-light leading-relaxed text-[#5B605C]">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
