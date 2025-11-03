'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturedPerformer() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-16">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/performer.jpg"
          alt="Featured Performer Background"
          fill
          className="object-cover object-center"
          quality={75}
          loading="lazy"
          sizes="100vw"
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-brown/85 via-bmhw-black/80 to-bmhw-brown/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/70 via-transparent to-bmhw-black/50"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-bmhw-gold italic font-semibold mb-2 drop-shadow-lg px-4">
            {t('performer.subtitle')}
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 drop-shadow-2xl px-4 leading-tight">
            {t('performer.title')}
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-4 md:mb-5"></div>

          {/* Description with better formatting */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-sm sm:text-base md:text-lg text-stone-200 leading-relaxed drop-shadow-lg text-center md:text-justify">
              {t('performer.description')}
            </p>
          </div>
        </motion.div>

        {/* YouTube Video Embed - Smaller on desktop */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-2 ring-bmhw-gold/50 hover:ring-bmhw-gold transition-all duration-300">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/nMPtgrFFbYM"
              title="Featured Performer Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
