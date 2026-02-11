'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, easeOut, cubicBezier } from 'framer-motion';
import Link from 'next/link';
import LanguageToggle from '@/components/LanguageToggle';

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders language-dependent content after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Determine logo based on current language (use 'en' during SSR to prevent hydration mismatch)
  const currentLang = mounted ? i18n.language : 'en';
  const logoSrc = currentLang === 'fr'
    ? '/assets/logos/obmh-fr.png'
    : '/assets/logos/obmh-en.png';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero.jpg"
          alt={mounted ? t('hero.title') : 'Ottawa Black Mental Health Week 2026'}
          fill
          className="object-cover object-center"
          priority
          quality={75}
          sizes="100vw"
          fetchPriority="high"
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black/70 via-bmhw-brown/60 to-bmhw-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black via-transparent to-bmhw-black/40"></div>
      </div>

      {/* Logo + Language Toggle */}
      <div className="absolute inset-x-0 top-4 sm:top-8 px-4 sm:px-10 lg:px-16 flex items-center justify-between z-30">
        <Link
          href="/"
          aria-label={mounted ? t('nav.home') : 'Home'}
          className="relative block w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bmhw-gold/70 rounded-full"
        >
          <span className="absolute inset-0 rounded-full bg-white/70 blur-3xl opacity-80" aria-hidden="true"></span>
          <Image
            src={logoSrc}
            alt={currentLang === 'fr'
              ? 'Coalition pour la Santé Mentale des Noirs d\'Ottawa'
              : 'Ottawa Black Mental Health Coalition'}
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.95)]"
            style={{ filter: 'drop-shadow(0 12px 25px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 35px rgba(255, 255, 255, 0.85)) drop-shadow(0 0 55px rgba(255, 255, 255, 0.6))' }}
            priority
            sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
          />
        </Link>
        <LanguageToggle className="text-sm sm:text-base shadow-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-8">
        <motion.div
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
          >
            {mounted ? t('hero.title') : 'Ottawa Black Mental Health Week 2026'}
          </motion.h1>

          <motion.div
            className="inline-block bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold px-6 py-2 sm:px-8 sm:py-3 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-bmhw-black italic drop-shadow-sm">
              {mounted ? t('hero.subtitle') : 'Substance Use and Suicide: Breaking the Silence'}
            </h2>
          </motion.div>

          {/* Crisis Helpline Disclaimer */}
          <motion.div
            className="max-w-lg mx-auto mt-3 bg-red-900/85 backdrop-blur-md border-2 border-red-400/70 px-3 py-2 rounded-xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: easeOut }}
          >
            <h3 className="text-bmhw-gold font-bold text-sm sm:text-base mb-1 text-center flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {mounted ? t('hero.crisisTitle') : 'Need Help Now?'}
            </h3>
            <p className="text-white text-xs leading-snug text-center font-medium">
              {mounted ? t('hero.crisisLine1') : "If you are thinking about suicide, or you're worried about someone else"}
            </p>
            <p className="text-white text-xs leading-snug text-center font-bold mt-0.5">
              {mounted ? t('hero.crisisLine2') : 'Call or text 9-8-8 toll free, any time. Lines are open 24/7/365.'}
            </p>
          </motion.div>

          <motion.div
            className="space-y-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <p className="text-base sm:text-lg md:text-xl text-bmhw-gold font-bold drop-shadow-lg text-center leading-tight">
              {mounted ? t('hero.date') : 'Monday, March 2nd, 2026 • 9:00 AM - 5:00 PM'}
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-200 font-semibold drop-shadow-lg text-center leading-tight">
              {mounted ? t('hero.venue') : 'Ottawa Conference and Event Centre, 200 Coventry Rd, Ottawa, Ontario'}
            </p>
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-stone-200 max-w-3xl mx-auto mt-3 leading-relaxed drop-shadow-lg px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {mounted ? t('hero.description') : 'Join us for a week of Black mental health and wellness events featuring powerful keynotes, panels, workshops, training and community connection.'}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <a
              href="https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1847345132019"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold text-bmhw-black px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-bmhw-gold/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <span className="relative z-10">{mounted ? t('hero.cta') : 'Register Now on Eventbrite'}</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-bmhw-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <button
              onClick={() => scrollToSection('about')}
              className="bg-transparent border-3 border-bmhw-gold text-bmhw-gold px-10 py-4 rounded-full text-lg font-bold hover:bg-bmhw-gold hover:text-bmhw-black transition-all duration-300 shadow-lg hover:shadow-bmhw-gold/50 transform hover:scale-105"
            >
              {mounted ? t('nav.about') : 'About'}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator removed for cleaner layout */}
    </section>
  );
}
