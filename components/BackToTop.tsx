'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

export function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('ui.backToTop')}
      className="fixed bottom-5 left-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#192D1F] text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D98E32]"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
