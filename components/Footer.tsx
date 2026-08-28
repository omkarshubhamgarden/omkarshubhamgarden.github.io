'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { sitePath } from '@/lib/site';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#192D1F] text-[#FAF8F3] pt-20 pb-12 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Address Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white shadow-md">
                <Image
                  src={sitePath('/images/shubham-omkar-logo.webp')}
                  alt="Omkar Shubham Garden"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block font-serif-display text-2xl font-semibold text-white">
                  {t('ui.brand')}
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase font-mono-util text-[#D98E32]">
                  {t('ui.garden')} • {t('location.address')}
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 font-light max-w-sm leading-relaxed">
              {t('story.p1')}
            </p>

            <div className="pt-2 text-xs font-mono-util text-white/80 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D98E32]" />
                <span>{t('location.address')}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D98E32]" />
                <span>{t('ui.mainPhone')}: 9880975481</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D98E32]" />
                <span>{t('ui.managerPhone')}: 9901643802</span>
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-xs font-mono-util text-[#D98E32] uppercase tracking-widest mb-4">
              {t('ui.quickNavigation')}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-light text-white/80">
              <a href="#story" className="hover:text-white transition-colors">{t('nav.story')}</a>
              <a href="#spaces" className="hover:text-white transition-colors">{t('nav.spaces')}</a>
              <a href="#celebrations" className="hover:text-white transition-colors">{t('nav.celebrations')}</a>
              <a href="#gallery" className="hover:text-white transition-colors">{t('nav.gallery')}</a>
              <a href="#amenities" className="hover:text-white transition-colors">{t('nav.amenities')}</a>
              <a href="#reviews" className="hover:text-white transition-colors">{t('nav.reviews')}</a>
              <a href="#location" className="hover:text-white transition-colors">{t('nav.location')}</a>
              <a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a>
              <a href="#terms" className="hover:text-white transition-colors">{t('ui.termsLink')}</a>
            </div>
          </div>

          {/* Office Hours & Scroll Top Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="block text-xs font-mono-util text-[#D98E32] uppercase tracking-widest mb-2">
              {t('ui.visitHours')}
            </span>
            <p className="text-xs text-white/80 font-light">
              {t('contact.officeHoursTime')}
            </p>
            <p className="text-[11px] text-white/50 font-mono-util">
              {t('ui.visitNote')}
            </p>

            <button
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#243E2C] border border-white/20 text-xs text-white hover:bg-white hover:text-[#192D1F] transition-all"
            >
              <span>{t('ui.backToTop')}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 font-mono-util gap-4">
          <p>© {new Date().getFullYear()} {t('ui.venueName')}. {t('ui.allRights')}</p>
          <p>{t('location.address')}</p>
        </div>
        <p className="pt-5 text-center text-[11px] text-white/40 font-mono-util">
          Developed and Maintained by{' '}
          <a
            href="https://pthoth.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D98E32] hover:text-[#E5A84B] hover:underline"
          >
            pthoth Technologies
          </a>
        </p>
      </div>
    </footer>
  );
}
