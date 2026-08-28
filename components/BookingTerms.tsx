'use client';

import React, { useEffect, useState } from 'react';
import { Clock3, WalletCards, ShieldCheck, VolumeX, Zap, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export function BookingTerms() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const expandFromHash = () => {
      if (window.location.hash === '#terms') setExpanded(true);
    };
    expandFromHash();
    window.addEventListener('hashchange', expandFromHash);
    return () => window.removeEventListener('hashchange', expandFromHash);
  }, []);

  const terms = [
    [Clock3, t('ui.termHours')],
    [WalletCards, t('ui.termPayment')],
    [ShieldCheck, t('ui.termValuables')],
    [VolumeX, t('ui.termSound')],
    [Zap, t('ui.termPower')],
  ] as const;

  return (
    <section id="terms" className="bg-[#F8F5EE] py-16 sm:py-20" aria-labelledby="terms-title">
      <div className="section-container">
        <div className="rounded-3xl border border-[#E2DBCB] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-mono-util uppercase tracking-widest text-[#B2502B]">{t('ui.bookingTermsLabel')}</span>
              <h2 id="terms-title" className="mt-2 font-serif-display text-3xl text-[#243E2C]">{t('ui.bookingTermsTitle')}</h2>
              <p className="mt-2 text-sm text-[#5B605C]">{t('ui.termsTeaser')}</p>
            </div>
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="booking-terms-list"
              onClick={() => setExpanded((value) => !value)}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#243E2C] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F3] hover:bg-[#192D1F]"
            >
              {t('ui.viewTerms')}
              <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
          </div>
          {expanded && (
            <ul id="booking-terms-list" className="mt-7 grid gap-3 border-t border-[#E2DBCB] pt-6 md:grid-cols-2">
              {terms.map(([Icon, text]) => (
                <li key={text} className="flex items-start gap-3 rounded-xl bg-[#F8F5EE] p-4 text-sm leading-relaxed text-[#4A504B]">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#A0833E]" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
