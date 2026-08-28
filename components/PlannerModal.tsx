'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { X, Sparkles, CheckCircle2, ArrowRight, Calendar, Users, ShieldCheck, MapPin } from 'lucide-react';

interface PlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function PlannerModal({ isOpen, onClose, onOpenContact }: PlannerModalProps) {
  const { t } = useLanguage();
  const [eventType, setEventType] = useState('Wedding');
  const [guestCount, setGuestCount] = useState<number>(600);
  const [requiresPavilion, setRequiresPavilion] = useState(true);
  const [requiresDining, setRequiresDining] = useState(true);

  if (!isOpen) return null;

  // Layout calculation logic based on inputs
  const recommendedLawn = guestCount > 300 ? 'Open Mandap (5000 sq ft, Up to 500 Guests)' : 'Haldi Ceremony Reception (8000 sq ft, 500 seating)';
  const recommendedPavilion = guestCount > 800 ? 'Pavilion (10000 sq ft, 800 guests)' : 'Pavilion (Fully ventilated, Lighting, Surrounding greenery)';
  const recommendedDining = guestCount > 400 ? 'Dining Area (5000 sq ft, 400 seating)' : 'Dining Area';
  const estimatedCars = Math.ceil(guestCount / 4);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative my-4 max-h-[calc(100dvh-2rem)] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-[#1D3324] p-5 text-[#FAF8F3] shadow-2xl sm:my-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white/80 transition-colors hover:bg-black hover:text-white sm:right-6 sm:top-6"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-8 pr-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono-util text-[#D98E32] uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>{t('ui.venuePlanner')}</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-4xl font-normal text-white">
            {t('plannerModal.title')}
          </h3>
          <p className="text-sm text-white/80 font-light">
            {t('plannerModal.subtitle')}
          </p>
        </div>

        {/* Form Steps */}
        <div className="space-y-6">
          {/* Step 1: Event Type */}
          <div className="space-y-3">
            <label className="block text-xs font-mono-util text-[#D98E32] uppercase tracking-wider">
              {t('plannerModal.step1Title')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[['Wedding', 'ui.wedding'], ['Reception', 'ui.reception'], ['Sangeet / Haldi', 'ui.haldi'], ['Birthday / Other', 'ui.birthday']].map(([type, labelKey]) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setEventType(type)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium border text-center transition-all ${
                    eventType === type
                      ? 'bg-[#D98E32] text-[#192D1F] border-[#D98E32] font-semibold shadow-md'
                      : 'bg-[#243E2C] text-white/80 border-white/10 hover:border-white/30'
                  }`}
                >
                  {t(labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Guest Count Slider */}
          <div className="space-y-3 bg-[#243E2C] p-5 rounded-2xl border border-white/10">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono-util text-[#D98E32] uppercase tracking-wider">
                {t('plannerModal.step2Title')}
              </label>
              <span className="font-serif-display text-2xl font-semibold text-white">
                {guestCount} {t('plannerModal.guestsLabel')}
              </span>
            </div>

            <input
              type="range"
              min={100}
              max={3000}
              step={50}
              value={guestCount}
              role="slider"
              aria-valuemin={100}
              aria-valuemax={3000}
              aria-valuenow={guestCount}
              aria-label={t('plannerModal.guestsLabel')}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full accent-[#D98E32] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono-util text-white/60">
              <span>{t('ui.intimateGuests')}</span>
              <span>{t('ui.eightHundredGuests')}</span>
              <span>{t('ui.grandGuests')}</span>
            </div>
          </div>

          {/* Step 3: Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#243E2C] border border-white/10 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={requiresPavilion}
                onChange={(e) => setRequiresPavilion(e.target.checked)}
                className="w-4 h-4 accent-[#D98E32] rounded"
              />
              <span>{t('ui.includePavilion')}</span>
            </label>

            <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#243E2C] border border-white/10 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={requiresDining}
                onChange={(e) => setRequiresDining(e.target.checked)}
                className="w-4 h-4 accent-[#D98E32] rounded"
              />
              <span>{t('ui.includeDining')}</span>
            </label>
          </div>

          {/* Calculated Output Box */}
          <div className="mt-8 bg-[#243E2C] rounded-2xl p-6 border border-[#D98E32]/40 space-y-4">
            <span className="text-xs font-mono-util text-[#D98E32] uppercase tracking-wider block">
              {t('plannerModal.recommendationTitle')}
            </span>

            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D98E32] shrink-0 mt-0.5" />
                <span className="text-white/90"><strong>{t('ui.primarySpace')}</strong> {recommendedLawn}</span>
              </div>
              {requiresPavilion && (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D98E32] shrink-0 mt-0.5" />
                  <span className="text-white/90"><strong>{t('ui.coveredHall')}</strong> {recommendedPavilion}</span>
                </div>
              )}
              {requiresDining && (
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D98E32] shrink-0 mt-0.5" />
                  <span className="text-white/90"><strong>{t('ui.diningFacility')}</strong> {recommendedDining}</span>
                </div>
              )}
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D98E32] shrink-0 mt-0.5" />
                <span className="text-white/90"><strong>{t('ui.parkingBays')}</strong> ~{estimatedCars} {t('ui.vehicleSpaces')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/60 font-light">
            {t('ui.calculatedFor')}
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D98E32] text-[#192D1F] hover:bg-[#E5A84B] transition-colors shadow-lg"
          >
            <span>{t('ui.proceed')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
