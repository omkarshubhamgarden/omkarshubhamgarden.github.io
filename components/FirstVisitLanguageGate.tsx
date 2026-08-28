'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { LANGUAGES, LanguageCode } from '@/lib/i18n';
import { sitePath } from '@/lib/site';

const MORPH_DURATION_MS = 550;
const MORPH_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)';

function findHeaderLangControl(): HTMLElement | null {
  if (typeof document === 'undefined') return null;
  const candidates = Array.from(document.querySelectorAll<HTMLElement>('[data-lang-control]'));
  return candidates.find((el) => el.offsetParent !== null && el.getClientRects().length > 0) ?? null;
}

function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function FirstVisitLanguageGate() {
  const { setLanguage, t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [morphing, setMorphing] = useState(false);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const timeoutRef = useRef<number | undefined>(undefined);
  const preGateFocusRef = useRef<HTMLElement | null>(null);

  const dismiss = () => {
    window.clearTimeout(timeoutRef.current);
    setClosing(true);
    window.setTimeout(() => setVisible(false), prefersReducedMotion() ? 0 : MORPH_DURATION_MS + 50);
  };

  const pulseHeaderControl = (target: HTMLElement) => {
    if (prefersReducedMotion()) return;
    try {
      target.animate(
        [
          { boxShadow: '0 0 0 0px rgba(217, 142, 50, 0)' },
          { boxShadow: '0 0 0 6px rgba(217, 142, 50, 0.7)' },
          { boxShadow: '0 0 0 0px rgba(217, 142, 50, 0)' },
        ],
        { duration: 500, iterations: 2, easing: 'ease-out' }
      );
    } catch {
      // Animation API unavailable — highlight is decorative, skip silently.
    }
  };

  const runMorph = (sourceEl: HTMLElement | null) => {
    const target = findHeaderLangControl();
    const from = sourceEl?.getBoundingClientRect();
    const to = target?.getBoundingClientRect();

    // Fall back to a plain fade whenever the header control isn't measurable yet.
    if (
      !sourceEl ||
      !target ||
      !from ||
      !to ||
      !from.width ||
      !from.height ||
      !to.width ||
      !to.height ||
      prefersReducedMotion()
    ) {
      dismiss();
      return;
    }

    setMorphing(true);

    const ghost = sourceEl.cloneNode(true) as HTMLElement;
    ghost.setAttribute('aria-hidden', 'true');
    ghost.style.position = 'fixed';
    ghost.style.left = `${from.left}px`;
    ghost.style.top = `${from.top}px`;
    ghost.style.width = `${from.width}px`;
    ghost.style.height = `${from.height}px`;
    ghost.style.margin = '0';
    ghost.style.zIndex = '120';
    ghost.style.pointerEvents = 'none';
    document.body.appendChild(ghost);

    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    const scale = Math.min(to.width / from.width, to.height / from.height);

    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      ghost.remove();
      pulseHeaderControl(target);
      dismiss();
    };

    try {
      const animation = ghost.animate(
        [
          { transform: 'translate(0px, 0px) scale(1)', opacity: 1 },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0.85 },
        ],
        { duration: MORPH_DURATION_MS, easing: MORPH_EASING, fill: 'forwards' }
      );
      animation.addEventListener('finish', finish);
      animation.addEventListener('cancel', finish);
    } catch {
      ghost.remove();
      dismiss();
      return;
    }

    // Safety net: never let a stalled animation trap the gate.
    window.setTimeout(finish, MORPH_DURATION_MS + 400);
  };

  const handleChoose = (language: LanguageCode, sourceEl: HTMLElement | null) => {
    setLanguage(language);
    localStorage.setItem('osg_lang', language);
    localStorage.setItem('osg_visited', 'true');
    // Let React flush the new header label before measuring the landing spot.
    requestAnimationFrame(() => runMorph(sourceEl));
  };

  useEffect(() => {
    if (localStorage.getItem('osg_visited') === 'true') return;
    preGateFocusRef.current = document.activeElement as HTMLElement | null;
    const reveal = window.setTimeout(() => setVisible(true), 0);
    timeoutRef.current = window.setTimeout(() => {
      localStorage.setItem('osg_visited', 'true');
      handleChoose('en', buttonRefs.current[0]);
    }, 4000);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(timeoutRef.current);
    };
    // Gate opens once per visit; intentionally captures only the initial closures.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (visible) buttonRefs.current[0]?.focus();
  }, [visible]);

  useEffect(() => {
    if (visible) return;
    preGateFocusRef.current?.focus?.();
    preGateFocusRef.current = null;
  }, [visible]);

  const trapFocus = (event: React.KeyboardEvent) => {
    if (event.key !== 'Tab') return;
    const buttons = buttonRefs.current.filter((el): el is HTMLButtonElement => el !== null);
    if (buttons.length === 0) return;
    const first = buttons[0];
    const last = buttons[buttons.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#192D1F]/90 p-5 backdrop-blur-md transition-opacity ${
        closing ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${morphing ? MORPH_DURATION_MS : 350}ms`, transitionTimingFunction: 'ease-out' }}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your language"
      onKeyDown={trapFocus}
    >
      <div
        className={`w-full max-w-sm rounded-3xl border border-[#D98E32]/40 bg-[#243E2C] p-7 text-center text-white shadow-2xl transition-opacity sm:p-9 ${
          morphing ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transitionDuration: `${morphing ? MORPH_DURATION_MS : 350}ms`, transitionTimingFunction: 'ease-out' }}
      >
        <div className="relative mx-auto mb-5 h-24 w-24 motion-safe:animate-pulse">
          <Image src={sitePath('/images/shubham-omkar-logo.webp')} alt="" fill sizes="96px" className="object-contain" priority />
        </div>
        <p className="mb-5 font-serif-display text-2xl text-[#F2C477]">{t('ui.chooseLanguage')}</p>
        <div className="grid grid-cols-2 gap-3">
          {LANGUAGES.map((lang, index) => (
            <button
              key={lang.code}
              ref={(el) => {
                buttonRefs.current[index] = el;
              }}
              type="button"
              onClick={() => handleChoose(lang.code, buttonRefs.current[index])}
              className={`min-h-11 rounded-full px-4 py-3 text-sm font-semibold ${lang.fontClass ?? ''} ${
                index === 0
                  ? 'bg-[#D98E32] text-[#192D1F] hover:bg-[#E5A84B]'
                  : 'border border-[#F2C477]/60 text-white hover:bg-white/10'
              }`}
            >
              {lang.nativeName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
