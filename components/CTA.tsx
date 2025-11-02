'use client';

import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black via-bmhw-brown/20 to-bmhw-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* CTA Box */}
        <div className="text-center bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl animate-fade-in transform hover:scale-[1.02] transition-all duration-500">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bmhw-black mb-6 drop-shadow-sm">
            {t('cta.title')}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-bmhw-brown mb-10 font-semibold max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <a
            href="https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1090395364889"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-bmhw-black text-bmhw-gold px-12 py-5 rounded-full text-xl font-bold hover:bg-bmhw-brown transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1"
          >
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  );
}
