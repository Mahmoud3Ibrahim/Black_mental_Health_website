'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import LanguageToggle from '@/components/LanguageToggle';

// Slider images from new_slider folder (1-29)
const sliderImages = Array.from({ length: 29 }, (_, i) => 
  `/assets/images/new_slider/black_mental_health_week (${i + 1}).jpg`
);

function goPrev(i: number) { return i === 0 ? sliderImages.length - 1 : i - 1; }
function goNext(i: number) { return (i + 1) % sliderImages.length; }

export default function ThankYouPage() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const dotStripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const strip = dotStripRef.current;
    if (!strip) return;
    const active = strip.querySelector<HTMLElement>('[data-dot-active="true"]');
    active?.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [currentIndex]);

  // Warm the browser cache for the next slide so transitions are instant.
  // Picks the deviceSize most likely to be requested by next/image at this viewport.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w =
      window.innerWidth >= 1200 ? 1200 :
      window.innerWidth >= 1024 ? 1080 :
      window.innerWidth >= 768 ? 828 : 750;
    const targets = [
      (currentIndex + 1) % sliderImages.length,
      (currentIndex - 1 + sliderImages.length) % sliderImages.length,
    ];
    const imgs = targets.map((i) => {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = `/_next/image?url=${encodeURIComponent(sliderImages[i])}&w=${w}&q=72`;
      return img;
    });
    return () => {
      imgs.forEach((img) => {
        img.src = '';
      });
    };
  }, [currentIndex]);

  const currentLang = mounted ? i18n.language : 'en';
  const logoSrc = currentLang === 'fr'
    ? '/assets/logos/obmh-fr.png'
    : '/assets/logos/obmh-en.png';

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background - hero.jpg */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/images/hero.jpg"
          alt={mounted ? t('thankYou.title') : 'Ottawa Black Mental Health Week 2026'}
          fill
          className="object-cover object-center"
          priority
          quality={70}
          sizes="100vw"
          fetchPriority="low"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black/70 via-bmhw-brown/60 to-bmhw-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black via-transparent to-bmhw-black/40" />
      </div>

      {/* Logo — absolute top-left, doesn't consume height */}
      <div className="absolute top-3 sm:top-4 left-4 sm:left-10 lg:left-16 z-30">
        <Link
          href="/"
          aria-label={mounted ? t('nav.home') : 'Home'}
          className="relative block w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bmhw-gold/70 rounded-full"
        >
          <span className="absolute inset-0 rounded-full bg-white/70 blur-3xl opacity-80" aria-hidden="true" />
          <span
            className={`absolute inset-0 flex items-center justify-center ${currentLang === 'fr' ? 'md:scale-[1.3] scale-105 origin-center' : ''}`}
          >
            <Image
              src={logoSrc}
              alt={currentLang === 'fr' ? "Coalition pour la Santé Mentale des Noirs d'Ottawa" : 'Ottawa Black Mental Health Coalition'}
              width={160}
              height={160}
              className="h-full w-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.95)]"
              style={{
                filter: 'drop-shadow(0 12px 25px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 35px rgba(255, 255, 255, 0.85)) drop-shadow(0 0 55px rgba(255, 255, 255, 0.6))',
              }}
              priority
            />
          </span>
        </Link>
      </div>

      {/* Language Toggle — absolute top-right */}
      <div className="absolute top-5 sm:top-7 right-4 sm:right-10 lg:right-16 z-30">
        <LanguageToggle className="text-sm sm:text-base shadow-white/30" />
      </div>

      {/* Content — fills the full viewport height, slider stretches to fill */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center px-4 sm:px-6 lg:px-8 pt-28 sm:pt-6 md:pt-6 lg:pt-8 pb-2 sm:pb-3">

        {/* Text block */}
        <div className="flex-shrink-0 w-full max-w-4xl mx-auto text-center space-y-2 md:space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
            {mounted ? t('thankYou.title') : 'Ottawa Black Mental Health Week 2026'}
          </h1>

          <div className="inline-block bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold px-5 py-1 sm:px-7 sm:py-2 rounded-2xl shadow-2xl">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-bmhw-black italic drop-shadow-sm">
              {mounted ? t('thankYou.subtitle') : 'A Journey of Connection: It Was Wonderful Having You With Us!'}
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-stone-200 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {mounted ? t('thankYou.paragraph') : 'It was truly wonderful having you with us for Ottawa Black Mental Health Week 2026. Your presence, engagement, and support made this week an incredible journey of healing, resilience, and connection.'}
          </p>
        </div>

        {/* Slider — grows to fill remaining space below the text */}
        <div className="flex-1 min-h-0 w-full max-w-5xl mx-auto mt-2 sm:mt-3 px-4 flex flex-col">
          <div className="flex-1 min-h-0 relative flex items-center">
            <button
              type="button"
              onClick={() => { setDirection(-1); setCurrentIndex(goPrev(currentIndex)); }}
              className="absolute left-0 sm:left-2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-bmhw-black/70 hover:bg-bmhw-gold/90 text-bmhw-gold hover:text-bmhw-black border-2 border-bmhw-gold/60 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={mounted ? t('thankYou.prevImage') : 'Previous image'}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="relative flex-1 self-stretch min-h-0 rounded-3xl overflow-hidden shadow-2xl bg-bmhw-black/50 ring-2 ring-bmhw-gold/40 mx-11 sm:mx-12">
              <div key={currentIndex} className="absolute inset-0">
                <Image
                  src={sliderImages[currentIndex]}
                  alt={`Black Mental Health Week ${currentIndex + 1}`}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  quality={72}
                  priority={currentIndex === 0}
                />
              </div>
              <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(207,163,73,0.3)] pointer-events-none" />
            </div>

            <button
              type="button"
              onClick={() => { setDirection(1); setCurrentIndex(goNext(currentIndex)); }}
              className="absolute right-0 sm:right-2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-bmhw-black/70 hover:bg-bmhw-gold/90 text-bmhw-gold hover:text-bmhw-black border-2 border-bmhw-gold/60 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={mounted ? t('thankYou.nextImage') : 'Next image'}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Dot indicators — single horizontal row (scroll); flex-wrap + 29×44px caused many stacked rows */}
          <div className="flex-shrink-0 w-full max-w-full mt-2 pb-1">
            <p className="sr-only" aria-live="polite">
              {mounted ? `${t('thankYou.slideIndicator', { current: currentIndex + 1, total: sliderImages.length })}` : `Slide ${currentIndex + 1} of ${sliderImages.length}`}
            </p>
            <div
              ref={dotStripRef}
              className="flex max-w-full flex-nowrap justify-center gap-0 overflow-x-auto overflow-y-hidden overscroll-x-contain py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-dot-active={index === currentIndex ? 'true' : undefined}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmhw-gold/80"
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : undefined}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'h-1.5 w-6 bg-bmhw-gold'
                        : 'h-1.5 w-1.5 bg-bmhw-gold/40 hover:bg-bmhw-gold/70'
                    }`}
                    aria-hidden
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
