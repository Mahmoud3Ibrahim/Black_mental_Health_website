'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ReadyToJoin() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-12 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/ready.jpg"
          alt="Ready to Join"
          fill
          className="object-cover object-center"
          quality={70}
          loading="lazy"
          sizes="100vw"
          fetchPriority="low"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black/85 via-bmhw-brown/70 to-bmhw-black/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/70 via-transparent to-bmhw-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Semi-transparent box with subtle border - lighter background */}
        <div className="bg-bmhw-brown/15 backdrop-blur-md border-2 border-bmhw-gold/50 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl hover:border-bmhw-gold/80 transition-all duration-500">
          <div className="text-center">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bmhw-gold mb-4 md:mb-5 drop-shadow-2xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('cta.title')}
            </motion.h2>

            <motion.div
              className="w-24 md:w-32 h-1.5 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-5 md:mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-stone-100 mb-6 md:mb-8 font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('cta.subtitle')}
            </motion.p>

            <motion.a
              href="https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1847345132019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold text-bmhw-black px-12 md:px-16 py-5 md:py-6 rounded-full text-lg md:text-xl lg:text-2xl font-bold hover:shadow-2xl hover:shadow-bmhw-gold/60 transition-all duration-300 transform hover:scale-105 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              {t('cta.button')}
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
