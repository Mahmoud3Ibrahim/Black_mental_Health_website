'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/cta-footer-bg.jpg"
          alt="Footer Background"
          fill
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bmhw-black/85 via-bmhw-brown/70 to-bmhw-black/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bmhw-gold mb-8 drop-shadow-2xl">
            {t('cta.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-10"></div>

          <div className="bg-bmhw-brown/40 backdrop-blur-md p-8 sm:p-10 md:p-12 rounded-2xl border-2 border-bmhw-gold/30 hover:border-bmhw-gold/70 transition-all duration-500 transform hover:scale-[1.02] shadow-2xl max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-stone-200 mb-10 font-semibold leading-relaxed">
              {t('cta.subtitle')}
            </p>
            <a
              href="https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1090395364889"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold text-bmhw-black px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-bmhw-gold/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mb-10">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-bmhw-gold italic drop-shadow-lg">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-10">
          <p className="text-gray-400 mb-2 font-semibold">{t('footer.contact')}</p>
          <a
            href="mailto:ottawabmhcoalition@gmail.com"
            className="text-bmhw-gold hover:text-yellow-400 transition-colors duration-300 text-lg"
          >
            {t('footer.email')}
          </a>
        </div>

        {/* Social Media Icons - Facebook, LinkedIn and Instagram */}
        <div className="flex justify-center gap-8 mb-10">
          <a
            href="https://www.facebook.com/OBMHC"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-transparent border-2 border-bmhw-gold/40 rounded-full flex items-center justify-center text-bmhw-gold hover:bg-bmhw-gold hover:text-bmhw-black hover:border-yellow-400 transition-all duration-300 transform hover:scale-125 shadow-lg hover:shadow-bmhw-gold/50"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/ottawa-black-mental-health-coalition/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-transparent border-2 border-bmhw-gold/40 rounded-full flex items-center justify-center text-bmhw-gold hover:bg-bmhw-gold hover:text-bmhw-black hover:border-yellow-400 transition-all duration-300 transform hover:scale-125 shadow-lg hover:shadow-bmhw-gold/50"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/obmh.c/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-transparent border-2 border-bmhw-gold/40 rounded-full flex items-center justify-center text-bmhw-gold hover:bg-bmhw-gold hover:text-bmhw-black hover:border-yellow-400 transition-all duration-300 transform hover:scale-125 shadow-lg hover:shadow-bmhw-gold/50"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Credits */}
        <div className="text-center mb-8">
          <p className="text-gray-400 italic text-sm sm:text-base">{t('footer.credits')}</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>{t('footer.rights')}</p>
        </div>

        {/* Developer Credit */}
        <div className="text-center mt-6 pt-6 border-t border-bmhw-gold/20">
          <p className="text-bmhw-gold text-xs sm:text-sm font-semibold">
            {t('footer.developer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
