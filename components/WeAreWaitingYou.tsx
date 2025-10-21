'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function WeAreWaitingYou() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images from Michelle's folder
  const images = [
    '/assets/images/michelle/1.jpg',
    '/assets/images/michelle/2.jpg',
    '/assets/images/michelle/3.jpg',
    '/assets/images/michelle/4.jpg',
    '/assets/images/michelle/5.jpg',
    '/assets/images/michelle/6.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/waiting-hero.jpg"
          alt="We Are Waiting You"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-brown/85 via-bmhw-black/75 to-bmhw-brown/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/70 via-transparent to-bmhw-black/50"></div>
      </div>

      {/* Decorative glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-bmhw-gold/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-bmhw-gold/10 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bmhw-gold mb-6 drop-shadow-2xl">
            {t('waiting.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="relative w-full aspect-[2000/1428] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-bmhw-black/50">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                }`}
              >
                <Image
                  src={src}
                  alt={`Community moment ${index + 1}`}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  quality={85}
                  loading="lazy"
                />
              </div>
            ))}

            {/* Gold glow border effect */}
            <div className="absolute inset-0 rounded-3xl ring-2 ring-bmhw-gold/40 pointer-events-none"></div>
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(207,163,73,0.3)] pointer-events-none"></div>

            {/* Gradient overlay at edges for cinematic effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none rounded-3xl"></div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-bmhw-black/70 hover:bg-bmhw-gold text-bmhw-gold hover:text-bmhw-black p-4 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl hover:scale-110"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-bmhw-black/70 hover:bg-bmhw-gold text-bmhw-gold hover:text-bmhw-black p-4 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl hover:scale-110"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-bmhw-gold shadow-lg shadow-bmhw-gold/60'
                    : 'w-3 h-3 bg-bmhw-gold/40 hover:bg-bmhw-gold/70 hover:scale-125'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="text-center mt-6">
          <p className="text-bmhw-gold/70 text-sm font-semibold drop-shadow-lg">
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        {/* CTA Section - Ready to Join Us */}
        <div className="mt-20 text-center bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold p-8 sm:p-12 rounded-2xl shadow-2xl animate-fade-in transform hover:scale-[1.02] transition-all duration-500 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-bmhw-black mb-4 drop-shadow-sm">
            {t('cta.title')}
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-bmhw-brown mb-8 font-semibold">
            {t('cta.subtitle')}
          </p>
          <a
            href="https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1090395364889"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bmhw-black text-bmhw-gold px-10 py-4 rounded-full text-lg font-bold hover:bg-bmhw-brown transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1"
          >
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
