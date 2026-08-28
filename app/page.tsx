'use client';

import React, { useState } from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { SpacesSection } from '@/components/SpacesSection';
import { CelebrationsSection } from '@/components/CelebrationsSection';
import { GallerySection } from '@/components/GallerySection';
import { AmenitiesSection } from '@/components/AmenitiesSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { LocationSection } from '@/components/LocationSection';
import { ContactSection } from '@/components/ContactSection';
import { PlannerModal } from '@/components/PlannerModal';
import { Footer } from '@/components/Footer';
import { BookingTerms } from '@/components/BookingTerms';
import { FirstVisitLanguageGate } from '@/components/FirstVisitLanguageGate';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { BackToTop } from '@/components/BackToTop';

export default function Home() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F8F5EE] text-[#2D312E] selection:bg-[#243E2C] selection:text-[#FAF8F3]">
        {/* Navigation Bar */}
        <Navbar
          onOpenPlanner={() => setIsPlannerOpen(true)}
          onOpenContact={scrollToContact}
        />

        <main id="main-content">
          {/* Hero Section */}
          <HeroSection
            onOpenPlanner={() => setIsPlannerOpen(true)}
            onOpenContact={scrollToContact}
          />

          {/* Story & Philosophy Section */}
          <StorySection />

          {/* Spaces & Settings Section */}
          <SpacesSection
            onOpenPlanner={() => setIsPlannerOpen(true)}
            onOpenContact={scrollToContact}
          />

          {/* Celebrations Section */}
          <CelebrationsSection onOpenContact={scrollToContact} />

          {/* Editorial Gallery Section */}
          <GallerySection />

          {/* Amenities & Infrastructure Section */}
          <AmenitiesSection />

          {/* Family Reviews Section */}
          <ReviewsSection />

          {/* Location & Travel Guide Section */}
          <LocationSection />

          {/* Contact & Date Availability Form */}
          <ContactSection />

          {/* Booking Terms & Conditions — directly below the planning form */}
          <BookingTerms />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Event Planner Modal */}
        <PlannerModal
          isOpen={isPlannerOpen}
          onClose={() => setIsPlannerOpen(false)}
          onOpenContact={scrollToContact}
        />
        <FloatingWhatsApp />
        <BackToTop />
        <FirstVisitLanguageGate />
      </div>
    </LanguageProvider>
  );
}
