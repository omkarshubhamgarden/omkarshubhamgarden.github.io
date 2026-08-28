'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Navigation, Clock, Train, Plane, Compass, ExternalLink } from 'lucide-react';

export function LocationSection() {
  const { t } = useLanguage();

  const distances = t('location.distances') || [];

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#FAF8F3] relative">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#B2502B] uppercase">
            <span className="w-6 h-[1px] bg-[#B2502B]" />
            <span>{t('location.eyebrow')}</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#243E2C]">
            {t('location.title')}
          </h2>

          <p className="text-base text-[#5B605C] font-light">
            {t('ui.locationIntro')}
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Distance Breakdown & Address */}
          <div className="lg:col-span-5 space-y-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#E2DBCB] shadow-sm">
            <div>
              <span className="text-xs font-mono-util text-[#B2502B] uppercase tracking-wider block mb-2">
                {t('ui.venueAddress')}
              </span>
              <h3 className="font-serif-display text-2xl font-normal text-[#243E2C]">
                {t('ui.venueName')}
              </h3>
              <p className="text-sm text-[#4A504B] font-light mt-2 leading-relaxed">
                {t('location.address')}
              </p>
              <span className="inline-block mt-3 px-3 py-1 rounded-md bg-[#F8F5EE] text-xs font-mono-util text-[#243E2C]">
                {t('location.landmark')}
              </span>
            </div>

            {/* Travel Distances Table */}
            <div className="space-y-3 pt-6 border-t border-[#E2DBCB]">
              <span className="text-xs font-mono-util text-[#243E2C] uppercase tracking-wider block">
                {t('ui.proximity')}
              </span>

              <div className="space-y-2.5">
                {distances.map((d: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#F8F5EE] text-xs"
                  >
                    <span className="font-medium text-[#2D312E]">{d.place}</span>
                    <div className="flex items-center gap-3 font-mono-util">
                      <span className="text-[#B2502B] font-semibold">{d.dist}</span>
                      <span className="text-[#8C826B]">({d.time})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open in Google Maps Button */}
            <a
              href="https://maps.google.com/?q=Omkar+Shubham+Garden+Khanapur+Jamboti+Road"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#243E2C] text-[#FAF8F3] rounded-2xl text-xs font-semibold tracking-wider uppercase hover:bg-[#192D1F] transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4 text-[#D98E32]" />
              <span>{t('location.mapDirectionsCTA')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Right Map Canvas Placeholder */}
          <div className="lg:col-span-7 bg-[#EFE9DA] rounded-3xl overflow-hidden border border-[#E2DBCB] shadow-md h-[420px] lg:h-[500px] relative group">
            {/* Interactive Embedded Google Maps Iframe */}
            <iframe
              title="Omkar Shubham Garden Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.815340058693!2d74.512345!3d15.63789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM4JzIyLjQiTiA3NMKwMzEnMDguNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-500"
            />

            {/* Floating Location Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#192D1F]/90 backdrop-blur-md text-white p-5 rounded-2xl border border-white/20 shadow-2xl max-w-sm">
              <div className="flex items-center gap-2 text-[#D98E32] text-xs font-mono-util uppercase tracking-widest mb-1">
                <MapPin className="w-4 h-4" />
                <span>GPS: 15&deg;38&apos;22&quot;N 74&deg;31&apos;08&quot;E</span>
              </div>
              <span className="font-serif-display text-lg font-normal block">
                {t('location.address')}
              </span>
              <span className="text-xs text-white/70 block font-light mt-1">
                {t('ui.approachRoad')}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
