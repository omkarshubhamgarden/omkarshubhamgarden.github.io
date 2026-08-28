'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, MessageSquare, Clock, Mail, CheckCircle2, Send, Sparkles, Calendar, Users } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    guests: '500 - 1000 Guests',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    if (!formState.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!/^\d{10}$/.test(formState.phone.replace(/[\s-]/g, '').replace(/^\+91/, ''))) nextErrors.phone = 'Please enter a valid 10-digit phone number.';
    if (formState.date && formState.date < new Date().toISOString().slice(0, 10)) nextErrors.date = 'Please choose a future date.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Omkar Shubham Garden Management,\n\nI would like to enquire about venue availability for:\n- Name: ${formState.name || 'A Host'}\n- Event: ${formState.eventType}\n- Date: ${formState.date || 'To be decided'}\n- Guest Count: ${formState.guests}\n- Notes: ${formState.message || 'Please contact me.'}`
    );
    window.open(`https://wa.me/919880975481?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#243E2C] text-[#F8F5EE] relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#D98E32] uppercase">
            <span className="w-6 h-[1px] bg-[#D98E32]" />
            <span>{t('contact.eyebrow')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#FAF8F3]">
            {t('contact.title')}
          </h2>

          <p className="text-base text-white/80 font-light">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#1D3324] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#D98E32]/20 text-[#D98E32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-display text-3xl font-normal text-[#FAF8F3]">
                  {t('ui.enquirySent')}
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto font-light leading-relaxed">
                  {t('contact.successMsg')}
                </p>

                <div className="pt-6">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#25D366] text-black hover:bg-[#22bf5b] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t('ui.instantWhatsApp')}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formName')} *
                    </label>
                    <input
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={t('ui.namePlaceholder')}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D98E32]"
                    />
                    {errors.name && <p id="contact-name-error" className="text-xs text-red-300">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formPhone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder={t('ui.phonePlaceholder')}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D98E32]"
                    />
                    {errors.phone && <p id="contact-phone-error" className="text-xs text-red-300">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formEventType')}
                    </label>
                    <select
                      value={formState.eventType}
                      onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#D98E32]"
                    >
                      <option value="Wedding">{t('ui.wedding')}</option>
                      <option value="Reception">{t('ui.reception')}</option>
                      <option value="Sangeet/Haldi">{t('ui.haldi')}</option>
                      <option value="Engagement">{t('ui.engagement')}</option>
                      <option value="Birthday">{t('ui.birthday')}</option>
                      <option value="Corporate">{t('ui.corporate')}</option>
                    </select>
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formDate')}
                    </label>
                      <input
                      type="date"
                        min={new Date().toISOString().slice(0, 10)}
                        aria-describedby={errors.date ? 'contact-date-error' : undefined}
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#D98E32]"
                    />
                      {errors.date && <p id="contact-date-error" className="text-xs text-red-300">{errors.date}</p>}
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formGuests')}
                    </label>
                    <select
                      value={formState.guests}
                      onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#D98E32]"
                    >
                      <option value="100 - 300 Guests">100 - 300 {t('plannerModal.guestsLabel')}</option>
                      <option value="300 - 500 Guests">300 - 500 {t('plannerModal.guestsLabel')}</option>
                      <option value="500 - 1000 Guests">500 - 1000 {t('plannerModal.guestsLabel')}</option>
                      <option value="1000 - 3000 Guests">1000 - 3000 {t('plannerModal.guestsLabel')}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={t('ui.notesPlaceholder')}
                    className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D98E32]"
                  />
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D98E32] text-[#192D1F] hover:bg-[#E5A84B] transition-colors shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t('contact.submitting') : t('contact.submitBtn')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#25D366] text-black hover:bg-[#22bf5b] transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t('contact.directWhatsApp')}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Contact & Office Hours Panel */}
          <div className="lg:col-span-5 space-y-8 bg-[#1D3324] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl">
            <div>
              <span className="text-xs font-mono-util text-[#D98E32] uppercase tracking-widest block mb-2">
                {t('ui.managementConnect')}
              </span>
              <h3 className="font-serif-display text-2xl font-normal text-[#FAF8F3]">
                {t('ui.coordinators')}
              </h3>
              <p className="text-sm text-white/80 font-light mt-2 leading-relaxed">
                {t('ui.managementNote')}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <a
                href="tel:+919880975481"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#243E2C] border border-white/10 hover:border-[#D98E32] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D98E32]/20 text-[#D98E32] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono-util text-white/60 uppercase">
                    {t('ui.mainPhone')}
                  </span>
                  <span className="font-mono-util font-semibold text-white text-sm group-hover:text-[#D98E32]">
                    9880975481
                  </span>
                </div>
              </a>

              <a
                href="tel:+919901643802"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#243E2C] border border-white/10 hover:border-[#D98E32] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D98E32]/20 text-[#D98E32] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono-util text-white/60 uppercase">
                    {t('ui.managerPhone')}
                  </span>
                  <span className="font-mono-util font-semibold text-white text-sm group-hover:text-[#D98E32]">
                    9901643802
                  </span>
                </div>
              </a>

              <a
                href="mailto:enquiry@omkarshubhamgarden.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#243E2C] border border-white/10 hover:border-[#D98E32] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B2502B]/20 text-[#B2502B] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono-util text-white/60 uppercase">
                    {t('ui.officialEmail')}
                  </span>
                  <span className="font-mono-util text-white text-xs group-hover:text-[#D98E32]">
                    enquiry@omkarshubhamgarden.com
                  </span>
                </div>
              </a>
            </div>

            {/* Office Hours */}
            <div className="p-5 rounded-2xl bg-[#243E2C] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#D98E32] text-xs font-mono-util uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{t('contact.officeHoursTitle')}</span>
              </div>
              <p className="text-sm text-white font-medium">
                {t('contact.officeHoursTime')}
              </p>
              <p className="text-xs text-white/60 font-light">
                {t('ui.walkthroughNote')}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
