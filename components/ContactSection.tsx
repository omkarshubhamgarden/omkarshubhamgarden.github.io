'use client';

import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from './LanguageContext';
import { Phone, MessageSquare, Clock, Mail, CheckCircle2, Send, Calendar } from 'lucide-react';

export function ContactSection() {
  const { t } = useLanguage();
  // Client-side form state for controlled inputs + WhatsApp prefill
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    date: '',
    guests: '500 - 1000 Guests',
    message: '',
  });
  const [localErrors, setLocalErrors] = useState<Record<string, string>>({});

  // Formspree — React SDK (client-side fetch, works with static export / GitHub Pages)
  // Endpoint: https://formspree.io/f/xgaeypqp
  const [formspreeState, formspreeSubmit] = useForm('xgaeypqp');

  const validate = () => {
    const next: Record<string, string> = {};
    if (!formState.name.trim()) next.name = t('ui.validationName');
    const digits = formState.phone.replace(/[\s-]/g, '').replace(/^\+91/, '');
    if (!/^\d{10}$/.test(digits)) next.phone = t('ui.validationPhone');
    if (formState.date && formState.date < new Date().toISOString().slice(0, 10))
      next.date = t('ui.validationDate');
    setLocalErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    await formspreeSubmit(e);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Omkar Shubham Garden Management,\n\nI would like to enquire about venue availability for:\n- Name: ${formState.name || 'A Host'}\n- Event: ${formState.eventType}\n- Date: ${formState.date || 'To be decided'}\n- Guest Count: ${formState.guests}\n- Phone: ${formState.phone || '—'}\n- Notes: ${formState.message || 'Please contact me.'}`
    );
    window.open(`https://wa.me/919880975481?text=${text}`, '_blank');
  };

  const isSubmitting = formspreeState.submitting;
  const succeeded = formspreeState.succeeded;

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
          <p className="text-base text-white/80 font-light">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#1D3324] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
            {succeeded ? (
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
                <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#25D366] text-black hover:bg-[#22bf5b] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t('ui.instantWhatsApp')}</span>
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20 text-white hover:bg-white hover:text-[#1D3324] transition-colors"
                  >
                    {t('ui.sendAnotherEnquiry')}
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/xgaeypqp"
                method="POST"
                className="space-y-6"
                noValidate
              >
                {/* Hidden Formspree helpers */}
                <input type="hidden" name="_subject" value={`New enquiry: ${formState.eventType} — ${formState.name || 'Website lead'}`} />
                <input type="hidden" name="_language" value={typeof navigator !== 'undefined' ? navigator.language : 'en'} />
                {/* Honeypot for spam */}
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                {/* General Formspree errors (e.g. network) */}
                {formspreeState.errors && formspreeState.errors.getFormErrors().length > 0 && (
                  <div className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {formspreeState.errors.getFormErrors().map((err) => (
                      <p key={err.code}>{err.message}</p>
                    ))}
                  </div>
                )}
                {formspreeState.errors && formspreeState.errors.getAllFieldErrors().length > 0 && formspreeState.errors.getFormErrors().length === 0 && (
                  <div className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                    {t('ui.pleaseCorrectFields')}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formName')} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(localErrors.name) || Boolean(formspreeState.errors?.getFieldErrors('name').length)}
                      aria-describedby={localErrors.name ? 'contact-name-error' : undefined}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder={t('ui.namePlaceholder')}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D98E32] aria-[invalid=true]:border-red-400"
                    />
                    {localErrors.name && <p id="contact-name-error" className="text-xs text-red-300">{localErrors.name}</p>}
                    <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="text-xs text-red-300" />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formPhone')} *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(localErrors.phone) || Boolean(formspreeState.errors?.getFieldErrors('phone').length)}
                      aria-describedby={localErrors.phone ? 'contact-phone-error' : undefined}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder={t('ui.phonePlaceholder')}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D98E32] aria-[invalid=true]:border-red-400"
                    />
                    {localErrors.phone && <p id="contact-phone-error" className="text-xs text-red-300">{localErrors.phone}</p>}
                    <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="text-xs text-red-300" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Event Type */}
                  <div className="space-y-2">
                    <label htmlFor="contact-eventType" className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formEventType')}
                    </label>
                    <select
                      id="contact-eventType"
                      name="eventType"
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
                    <ValidationError prefix="Event Type" field="eventType" errors={formspreeState.errors} className="text-xs text-red-300" />
                  </div>

                  {/* Event Date */}
                  <div className="space-y-2">
                    <label htmlFor="contact-date" className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formDate')}
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      name="eventDate"
                      min={new Date().toISOString().slice(0, 10)}
                      aria-describedby={localErrors.date ? 'contact-date-error' : undefined}
                      value={formState.date}
                      onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#D98E32]"
                    />
                    {localErrors.date && <p id="contact-date-error" className="text-xs text-red-300">{localErrors.date}</p>}
                    <ValidationError prefix="Event Date" field="eventDate" errors={formspreeState.errors} className="text-xs text-red-300" />
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label htmlFor="contact-guests" className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                      {t('contact.formGuests')}
                    </label>
                    <select
                      id="contact-guests"
                      name="guestCount"
                      value={formState.guests}
                      onChange={(e) => setFormState({ ...formState, guests: e.target.value })}
                      className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#D98E32]"
                    >
                      <option value="100 - 300 Guests">100 - 300 {t('plannerModal.guestsLabel')}</option>
                      <option value="300 - 500 Guests">300 - 500 {t('plannerModal.guestsLabel')}</option>
                      <option value="500 - 1000 Guests">500 - 1000 {t('plannerModal.guestsLabel')}</option>
                      <option value="1000 - 3000 Guests">1000 - 3000 {t('plannerModal.guestsLabel')}</option>
                    </select>
                    <ValidationError prefix="Guest Count" field="guestCount" errors={formspreeState.errors} className="text-xs text-red-300" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-xs font-mono-util uppercase tracking-wider text-[#D98E32]">
                    {t('contact.formMessage')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={t('ui.notesPlaceholder')}
                    className="w-full bg-[#243E2C] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#D98E32]"
                  />
                  <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="text-xs text-red-300" />
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#D98E32] text-[#192D1F] hover:bg-[#E5A84B] transition-colors shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
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
                <p className="text-[11px] text-white/40 font-mono-util text-center sm:text-left">
                  {t('ui.secureDeliveryNote')}
                </p>
              </form>
            )}
          </div>

          {/* Right Direct Contact & Office Hours Panel */}
          <div className="lg:col-span-5 space-y-8 bg-[#1D3324] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl">
            <div>
              <span className="text-xs font-mono-util text-[#D98E32] uppercase tracking-widest block mb-2">
                {t('ui.managementConnect')}
              </span>
              <h3 className="font-serif-display text-2xl font-normal text-[#FAF8F3]">{t('ui.coordinators')}</h3>
              <p className="text-sm text-white/80 font-light mt-2 leading-relaxed">{t('ui.managementNote')}</p>
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
                  <span className="block text-[10px] font-mono-util text-white/60 uppercase">{t('ui.mainPhone')}</span>
                  <span className="font-mono-util font-semibold text-white text-sm group-hover:text-[#D98E32]">9880975481</span>
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
                  <span className="block text-[10px] font-mono-util text-white/60 uppercase">{t('ui.managerPhone')}</span>
                  <span className="font-mono-util font-semibold text-white text-sm group-hover:text-[#D98E32]">9901643802</span>
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
                  <span className="block text-[10px] font-mono-util text-white/60 uppercase">{t('ui.officialEmail')}</span>
                  <span className="font-mono-util text-white text-xs group-hover:text-[#D98E32]">enquiry@omkarshubhamgarden.com</span>
                </div>
              </a>
            </div>

            {/* Office Hours */}
            <div className="p-5 rounded-2xl bg-[#243E2C] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#D98E32] text-xs font-mono-util uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>{t('contact.officeHoursTitle')}</span>
              </div>
              <p className="text-sm text-white font-medium">{t('contact.officeHoursTime')}</p>
              <p className="text-xs text-white/60 font-light">{t('ui.walkthroughNote')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
