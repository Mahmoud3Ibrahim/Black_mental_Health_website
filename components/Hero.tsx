'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, easeOut, cubicBezier } from 'framer-motion';

export default function Hero() {
  const { t, i18n } = useTranslation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Determine logo based on current language
  const logoSrc = i18n.language === 'fr'
    ? '/assets/logos/obmh-fr.png'
    : '/assets/logos/obmh-en.png';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero.jpg"
          alt={t('hero.title')}
          fill
          className="object-cover object-center"
          priority
          quality={85}
          sizes="100vw"
          fetchPriority="high"
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black/70 via-bmhw-brown/60 to-bmhw-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black via-transparent to-bmhw-black/40"></div>
      </div>

      {/* Logo - Top Left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-16 md:left-20 lg:left-24 z-30">
        <div className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <Image
            src={logoSrc}
            alt={i18n.language === 'fr'
              ? 'Coalition pour la Santé Mentale des Noirs d\'Ottawa'
              : 'Ottawa Black Mental Health Coalition'}
            fill
            className="object-contain"
            style={{ filter: 'drop-shadow(0 4px 8px rgba(255, 255, 255, 0.9)) drop-shadow(0 2px 4px rgba(255, 255, 255, 1))' }}
            priority
            sizes="(max-width: 640px) 80px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.div
            className="inline-block bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold px-6 py-3 sm:px-10 sm:py-5 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.6, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-bmhw-black italic drop-shadow-sm">
              {t('hero.subtitle')}
            </h2>
          </motion.div>

          {/* Crisis Helpline Disclaimer */}
          <motion.div
            className="max-w-lg mx-auto mt-4 bg-red-900/85 backdrop-blur-md border-2 border-red-400/70 px-4 py-3 rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: easeOut }}
          >
            <h3 className="text-bmhw-gold font-bold text-base sm:text-lg mb-2 text-center flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {t('hero.crisisTitle')}
            </h3>
            <p className="text-white text-xs sm:text-sm leading-snug text-center font-medium">
              {t('hero.crisisLine1')}
            </p>
            <p className="text-white text-xs sm:text-sm leading-snug text-center font-bold mt-1">
              {t('hero.crisisLine2')}
            </p>
          </motion.div>

          <motion.div
            className="space-y-3 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-bmhw-gold font-bold drop-shadow-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {t('hero.date')}
            </p>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold drop-shadow-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-bmhw-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {t('hero.venue')}
            </p>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-stone-200 max-w-3xl mx-auto mt-6 leading-relaxed drop-shadow-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a
              href="https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1090395364889"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold text-bmhw-black px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-bmhw-gold/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-bmhw-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <button
              onClick={() => scrollToSection('about')}
              className="bg-transparent border-3 border-bmhw-gold text-bmhw-gold px-10 py-4 rounded-full text-lg font-bold hover:bg-bmhw-gold hover:text-bmhw-black transition-all duration-300 shadow-lg hover:shadow-bmhw-gold/50 transform hover:scale-105"
            >
              {t('nav.about')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Arrow Only */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <svg
          className="w-10 h-10 text-bmhw-gold group-hover:text-yellow-400 transition-colors drop-shadow-lg"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </section>
  );
}
