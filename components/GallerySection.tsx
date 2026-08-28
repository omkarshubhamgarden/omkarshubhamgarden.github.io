'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import justifiedLayout from 'justified-layout';
import { useLanguage } from './LanguageContext';
import { sitePath } from '@/lib/site';
import imageManifest from '@/lib/image-manifest.json';

type ImageManifest = Record<string, { width: number; height: number }>;
const MANIFEST = imageManifest as ImageManifest;
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface GalleryItem {
  id: string;
  file: string;
  image: string;
  width: number;
  height: number;
}

// Order defines the lightbox caption ids (gallery1..gallery16 in uiTranslations).
const GALLERY_FILES = [
  'shubham-bhavtu.webp',
  'stage-decor.webp',
  'outdoor-hall-decor.webp',
  'food-venue.webp',
  'welcome-ganpati-0.webp',
  'entrance-decor.webp',
  'mandap-decor.webp',
  'outdoor-stage-decor.webp',
  'red-carpet-decor.webp',
  'parking.webp',
  'stage-decor-0.webp',
  'stage-decor-1.webp',
  'stage-decor-3.webp',
  'stage-decor-4.webp',
  'lovely-couple.webp',
  'shubham-garden.webp',
];

const GALLERY_IMAGES: GalleryItem[] = GALLERY_FILES.map((file, index) => {
  const dims = MANIFEST[file];
  if (!dims) {
    throw new Error(
      `Missing dimensions for ${file} in lib/image-manifest.json — run "node scripts/generate-image-manifest.mjs" after changing images.`
    );
  }
  return {
    id: String(index + 1),
    file,
    image: sitePath(`/images/${file}`),
    width: dims.width,
    height: dims.height,
  };
});

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [containerWidth, setContainerWidth] = useState(1280);
  const gridRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  // Measure the real container width (debounced) so justified rows stay edge-to-edge.
  useEffect(() => {
    const el = gridRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    let debounceTimer: number | undefined;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width;
      if (!width) return;
      window.clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(() => setContainerWidth(Math.round(width)), 150);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearTimeout(debounceTimer);
    };
  }, []);

  // Justified (Flickr/Google Photos style) packing from true aspect ratios.
  const layout = useMemo(() => {
    try {
      return justifiedLayout(
        GALLERY_IMAGES.map(({ width, height }) => ({ width, height })),
        {
          containerWidth,
          targetRowHeight: containerWidth < 640 ? 180 : 280,
          boxSpacing: 16,
          containerPadding: 0,
        }
      );
    } catch {
      return null;
    }
  }, [containerWidth]);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = GALLERY_IMAGES.findIndex((image) => image.id === selectedImage.id);
      if (event.key === 'Escape') setSelectedImage(null);
      if (event.key === 'ArrowRight') setSelectedImage(GALLERY_IMAGES[(currentIndex + 1) % GALLERY_IMAGES.length]);
      if (event.key === 'ArrowLeft') setSelectedImage(GALLERY_IMAGES[(currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) {
      lastFocusedRef.current?.focus();
      lastFocusedRef.current = null;
      return;
    }
    const frame = requestAnimationFrame(() => closeBtnRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [selectedImage]);

  const openLightbox = (img: GalleryItem) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setSelectedImage(img);
  };

  const galleryTitle = (id: string) => t(`ui.gallery${id}Title`);
  const galleryCaption = (id: string) => t(`ui.gallery${id}Caption`);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#F8F5EE] relative">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono-util tracking-widest text-[#B2502B] uppercase mb-2">
              <span className="w-6 h-[1px] bg-[#B2502B]" />
              <span>{t('gallery.eyebrow')}</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-[#243E2C]">
              {t('gallery.title')}
            </h2>
          </div>

        </div>

        {/* Justified layout — row heights consistent, tiles edge-to-edge, no leftover gap */}
        <div ref={gridRef} className="relative w-full" style={{ height: layout?.containerHeight ?? 0 }}>
          {layout
            ? GALLERY_IMAGES.map((img, index) => {
                const box = layout.boxes[index];
                if (!box) return null;
                return (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => openLightbox(img)}
                    aria-label={galleryTitle(img.id)}
                    style={{ top: box.top, left: box.left, width: box.width, height: box.height }}
                    className="group absolute cursor-pointer overflow-hidden rounded-2xl border border-[#E2DBCB] bg-black text-left shadow-md transition-shadow duration-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-[#D98E32]"
                  >
                    <Image
                      src={img.image}
                      alt={galleryTitle(img.id)}
                      referrerPolicy="no-referrer"
                      fill
                      sizes="(min-width:1024px) 50vw, 100vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    <div className="absolute bottom-3 left-3 right-3 text-white sm:bottom-5 sm:left-5 sm:right-5">
                      <span className="block text-[9px] font-mono-util tracking-widest text-[#D98E32] uppercase sm:text-[10px]">
                        {t('ui.venueName')}
                      </span>
                      <span className="block truncate font-serif-display text-sm font-normal sm:text-xl">
                        {galleryTitle(img.id)}
                      </span>
                    </div>

                    <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 transition-transform group-hover:scale-110 group-hover:opacity-100 focus-visible:opacity-100 sm:h-9 sm:w-9">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </button>
                );
              })
            : null}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E2DBCB] bg-white px-6 py-5 text-center sm:flex-row sm:text-left">
          <span className="font-serif-display text-xl text-[#243E2C]">{t('ui.hostingSoon')}</span>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#D98E32] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#192D1F] hover:bg-[#E5A84B]">
            {t('ui.scheduleVisit')}
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={t('ui.galleryViewer')}
          onKeyDown={(event) => {
            if (event.key !== 'Tab') return;
            const focusableButtons = [closeBtnRef.current, prevBtnRef.current, nextBtnRef.current].filter(
              (button): button is HTMLButtonElement => button !== null
            );
            if (focusableButtons.length === 0) return;
            const firstButton = focusableButtons[0];
            const lastButton = focusableButtons[focusableButtons.length - 1];
            if (event.shiftKey && document.activeElement === firstButton) {
              event.preventDefault();
              lastButton.focus();
            } else if (!event.shiftKey && document.activeElement === lastButton) {
              event.preventDefault();
              firstButton.focus();
            }
          }}
        >
          <div
            className="relative max-w-5xl w-full bg-[#192D1F] text-white rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              ref={closeBtnRef}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              ref={prevBtnRef}
              type="button"
              onClick={() => {
                const index = GALLERY_IMAGES.findIndex((image) => image.id === selectedImage.id);
                setSelectedImage(GALLERY_IMAGES[(index - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length]);
              }}
              aria-label={t('ui.previousImage')}
              className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              ref={nextBtnRef}
              type="button"
              onClick={() => {
                const index = GALLERY_IMAGES.findIndex((image) => image.id === selectedImage.id);
                setSelectedImage(GALLERY_IMAGES[(index + 1) % GALLERY_IMAGES.length]);
              }}
              aria-label={t('ui.nextImage')}
              className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-8 bg-black flex items-center justify-center max-h-[75vh]">
                <Image
                  src={selectedImage.image}
                  alt={galleryTitle(selectedImage.id)}
                  referrerPolicy="no-referrer"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              <div className="lg:col-span-4 p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-mono-util text-[#D98E32] uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Ramgurwardi Cross • Karnataka</span>
                  </div>
                  <h3 className="font-serif-display text-2xl font-normal text-[#FAF8F3]">
                    {galleryTitle(selectedImage.id)}
                  </h3>
                  <p className="text-sm text-white/80 font-light mt-3 leading-relaxed">
                    {galleryCaption(selectedImage.id)}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 text-xs font-mono-util text-white/60">
                  <span>{t('ui.venueName')} • {t('ui.galleryAsset')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
