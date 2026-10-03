'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { HelpCircle, Phone } from 'lucide-react';

export function FaqSection() {
  const { t } = useLanguage();

  const items = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    question: t(`ui.faqQ${i + 1}`),
    answer: t(`ui.faqA${i + 1}`),
  }));

  return (
    <section id="faq" className="bg-[#F8F5EE] py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="section-container">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-mono-util uppercase tracking-widest text-[#B2502B]">
            <span className="h-px w-6 bg-[#B2502B]" aria-hidden="true" />
            {t('ui.faqLabel')}
          </span>
          <h2 id="faq-title" className="mt-2 font-serif-display text-3xl text-[#243E2C] sm:text-5xl">
            {t('ui.faqTitle')}
          </h2>
          <p className="mt-3 text-sm text-[#5B605C]">{t('ui.faqTeaser')}</p>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {items.map((item) => (
            <details
              key={item.id}
              className="group rounded-2xl border border-[#E2DBCB] bg-white px-5 py-4 shadow-xs transition-colors open:border-[#243E2C]/30 hover:border-[#243E2C]/30"
            >
              <summary className="flex cursor-pointer list-none items-start gap-3 text-left text-base font-semibold text-[#243E2C] marker:hidden">
                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#A0833E]" aria-hidden="true" />
                <span className="flex-1">{item.question}</span>
                <span
                  className="mt-0.5 shrink-0 font-mono-util text-lg leading-none text-[#8C826B] transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pl-8 text-sm leading-relaxed text-[#4A504B]">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 rounded-2xl border border-[#E2DBCB] bg-[#FFFBF3] p-5">
          <p className="flex-1 text-sm text-[#5B605C]">{t('ui.walkthroughNote')}</p>
          <a
            href="tel:+919880975481"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#243E2C] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF8F3] transition-colors hover:bg-[#192D1F]"
          >
            <Phone className="h-4 w-4 text-[#D98E32]" aria-hidden="true" />
            <span>+91 98809 75481</span>
          </a>
        </div>
      </div>
    </section>
  );
}
