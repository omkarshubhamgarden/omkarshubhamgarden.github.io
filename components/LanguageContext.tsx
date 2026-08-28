'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode, LANGUAGES, translations } from '@/lib/i18n';
import { uiTranslations } from '@/lib/uiTranslations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (keyPath: string) => any;
  currentLangFontClass: string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Start with a server-safe default to avoid hydration mismatches.
  const [language, setLanguageState] = useState<LanguageCode>('en');

  // After mount, read persisted language (if any) and apply it.
  useEffect(() => {
    try {
      const saved = localStorage.getItem('osg_lang') as LanguageCode;
      if (saved && ['en', 'hi', 'mr', 'kn'].includes(saved)) {
        // Defer state update to avoid synchronous setState inside effect
        const id = setTimeout(() => setLanguageState(saved), 0);
        return () => clearTimeout(id);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    // Preserve scroll position when changing language
    if (typeof window === 'undefined') return;
    const scrollY = window.scrollY;
    setLanguageState(lang);
    try {
      localStorage.setItem('osg_lang', lang);
    } catch (e) {
      // ignore
    }
    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 10);
  };

  const t = (keyPath: string): any => {
    if (keyPath.startsWith('ui.')) {
      return uiTranslations[language]?.[keyPath.slice(3)] || uiTranslations.en[keyPath.slice(3)] || keyPath;
    }
    const keys = keyPath.split('.');
    let current: any = translations[language] || translations.en;
    
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        // Fallback to English if translation key missing
        let fallback: any = translations.en;
        for (const fk of keys) {
          if (fallback && typeof fallback === 'object' && fk in fallback) {
            fallback = fallback[fk];
          } else {
            return keyPath;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  const currentLangOption = LANGUAGES.find((l) => l.code === language);
  const currentLangFontClass = currentLangOption?.fontClass || '';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, currentLangFontClass }}>
      <div className={currentLangFontClass}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
