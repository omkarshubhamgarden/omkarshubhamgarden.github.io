'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import { LANGUAGES, LanguageCode } from '@/lib/i18n';
import { sitePath } from '@/lib/site';
import { Globe, Menu, X, Phone, Calendar, Sparkles, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenPlanner: () => void;
  onOpenContact: () => void;
}

export function Navbar({ onOpenPlanner, onOpenContact }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const navbarActionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!langDropdownOpen && !mobileMenuOpen) return;
    const handleMouseDown = (event: MouseEvent) => {
      if (navbarActionsRef.current && !navbarActionsRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [langDropdownOpen, mobileMenuOpen]);

  const navLinks = [
    { href: '#story', label: t('nav.story') },
    { href: '#spaces', label: t('nav.spaces') },
    { href: '#celebrations', label: t('nav.celebrations') },
    { href: '#gallery', label: t('nav.gallery') },
    { href: '#amenities', label: t('nav.amenities') },
    { href: '#reviews', label: t('nav.reviews') },
    { href: '#location', label: t('nav.location') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const langPillLabel = currentLang.shortLabel ?? currentLang.nativeName;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5EE]/95 backdrop-blur-md border-b border-[#E2DBCB] py-3.5 shadow-xs'
          : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent text-white py-5'
      }`}
    >
      <div className="section-container">
        <div ref={navbarActionsRef} className="flex min-w-0 items-center justify-between gap-4">
          {/* Text-only Brand */}
          <a href="#" className="flex min-w-0 shrink items-center group" aria-label="Omkar Shubham Garden home">
            <span className={`block max-w-[11rem] font-serif-display text-lg font-semibold leading-[0.95] tracking-wide sm:max-w-none sm:text-2xl ${
              isScrolled ? 'text-[#243E2C]' : 'text-white'
            }`}>
              <span className="block whitespace-nowrap">{t('ui.brand')}</span>
              <span className={`mt-1 block font-mono-util text-[9px] font-medium uppercase tracking-[0.32em] sm:text-[10px] ${
                isScrolled ? 'text-[#B2502B]' : 'text-[#F2C477]'
              }`}>
                {t('ui.garden')}
              </span>
            </span>
          </a>

          {/* Desktop Navigation Items */}
          <nav aria-label="Main navigation" className="hidden 2xl:flex min-w-0 items-center gap-4 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors duration-200 ${
                  isScrolled
                    ? 'text-[#4A504B] hover:text-[#243E2C]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Language Selector & CTA */}
          <div className="hidden shrink-0 2xl:flex items-center gap-2">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                id="language-dropdown-toggle"
                data-lang-control
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-haspopup="menu"
                aria-expanded={langDropdownOpen}
                className={`flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-2 rounded-full border transition-all ${
                  isScrolled
                    ? 'border-[#D5CEBD] bg-[#FFFBF3] text-[#243E2C] hover:border-[#243E2C]'
                    : 'border-white/30 bg-black/20 backdrop-blur-md text-white hover:bg-black/30'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#D98E32]" />
                <span className={`font-mono-util text-[10px] font-semibold ${currentLang.fontClass ?? ''}`}>{langPillLabel}</span>
                <ChevronDown className="w-3 h-3 opacity-70" />
              </button>

              {langDropdownOpen && (
                <div role="menu" className="absolute right-0 mt-2 w-48 bg-[#FFFBF3] rounded-xl shadow-xl border border-[#E2DBCB] py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono-util text-[#8C826B] border-b border-[#E2DBCB]/60 mb-1">
                    {t('ui.selectLanguage')}
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      role="menuitem"
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                        language === lang.code
                          ? 'bg-[#243E2C] text-[#F8F5EE] font-semibold'
                          : 'text-[#2D312E] hover:bg-[#F2ECC0]/40'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={lang.fontClass}>{lang.nativeName}</span>
                      </span>
                      <span className="text-[10px] opacity-70 font-mono-util">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plan Celebration CTA */}
            <button
              id="nav-plan-cta"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all bg-[#243E2C] text-[#F8F5EE] hover:bg-[#192D1F] shadow-sm hover:shadow group whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D98E32] group-hover:rotate-12 transition-transform" />
              <span>{t('nav.planCTA')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex 2xl:hidden items-center gap-2">
            {/* Quick Language Toggle Pill on mobile bar */}
            <div className="relative">
              <button
                id="language-pill-toggle"
                data-lang-control
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-full border ${
                  isScrolled ? 'border-[#E2DBCB] text-[#243E2C] bg-white' : 'border-white/30 text-white bg-black/20'
                }`}
                aria-haspopup="menu"
                aria-expanded={langDropdownOpen}
                aria-label={t('ui.selectLanguage')}
              >
                <span className={`font-mono-util text-[10px] font-semibold ${currentLang.fontClass ?? ''}`}>{langPillLabel}</span>
              </button>

              {langDropdownOpen && (
                <div role="menu" className="absolute right-0 top-full mt-2 w-44 bg-[#FFFBF3] rounded-xl shadow-xl border border-[#E2DBCB] py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono-util text-[#8C826B] border-b border-[#E2DBCB]/60 mb-1">
                    {t('ui.selectLanguage')}
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      role="menuitem"
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                        language === lang.code
                          ? 'bg-[#243E2C] text-[#F8F5EE] font-semibold'
                          : 'text-[#2D312E] hover:bg-[#F2ECC0]/40'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={lang.fontClass}>{lang.nativeName}</span>
                      </span>
                      <span className="text-[10px] opacity-70 font-mono-util">{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`shrink-0 rounded-lg p-2.5 transition-colors ${
                isScrolled ? 'text-[#243E2C] hover:bg-[#EAE4D4]' : 'text-white hover:bg-white/10'
              }`}
              aria-label={t('ui.toggleNavigation')}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="2xl:hidden absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain bg-[#F8F5EE] border-b border-[#E2DBCB] shadow-2xl px-5 py-5 pb-[max(1rem,env(safe-area-inset-bottom))] space-y-6 animate-in slide-in-from-top duration-300 sm:px-6 sm:py-6">
          {/* Navigation Links */}
          <div className="space-y-1.5 pt-2 border-t border-[#E2DBCB]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-base font-medium text-[#2D312E] hover:bg-[#EAE4D4]/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-[#E2DBCB] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#243E2C] text-[#F8F5EE] rounded-xl text-xs font-semibold tracking-wider uppercase shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#D98E32]" />
              <span>{t('nav.planCTA')}</span>
            </button>

            <a
              href="tel:+919880975481"
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-[#243E2C] text-[#243E2C] rounded-xl text-xs font-semibold uppercase hover:bg-[#243E2C]/5"
            >
              <Phone className="w-4 h-4 text-[#B2502B]" />
              <span>Call Main: 9880975481</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
