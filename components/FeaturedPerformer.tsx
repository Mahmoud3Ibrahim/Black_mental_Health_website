'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, easeOut, cubicBezier } from 'framer-motion';

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
          quality={70}
          loading="lazy"
          sizes="100vw"
          fetchPriority="low"
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
        transition={{ duration: 0.8, ease: easeOut }}
      >
        {/* Header Section */}
        <motion.div
          className="text-center mb-3 md:mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
        >
          <p className="text-lg md:text-xl lg:text-2xl text-bmhw-gold italic font-semibold mb-2 drop-shadow-lg px-4">
            {t('performer.subtitle')}
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-2xl px-4 leading-tight">
            {t('performer.title')}
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-3"></div>

          {/* Description with better formatting */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <p className="text-sm md:text-base lg:text-lg text-stone-200 leading-relaxed drop-shadow-lg text-center">
              {t('performer.description')}
            </p>
          </div>
        </motion.div>

        {/* Combined Box - 3 Columns: Image + Bio + Video */}
        <motion.div
          className="max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-bmhw-brown/60 backdrop-blur-lg rounded-2xl border-2 border-bmhw-gold/40 shadow-2xl hover:shadow-bmhw-gold/30 transition-all duration-300 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Column 1: Performer Image */}
              <div className="relative h-80 md:h-auto md:min-h-[360px] rounded-2xl overflow-hidden ring-1 ring-bmhw-gold/40 shadow-xl">
                <Image
                  src="/assets/images/nnerjie.jpg"
                  alt={`${t('performer.name')} - ${t('performer.meet')}`}
                  fill
                  className="object-cover scale-105 transition-transform duration-500 ease-out hover:scale-110"
                  quality={80}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
              </div>

              {/* Column 2: Performer Bio */}
              <div className="flex flex-col justify-center py-4">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-bmhw-gold mb-3 drop-shadow-lg">
                  {t('performer.meet')}
                </h3>
                <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 drop-shadow-md">
                  {t('performer.name')}
                </h4>
                <p className="text-sm md:text-base lg:text-lg text-stone-200 leading-relaxed drop-shadow-md">
                  {t('performer.bio')}
                </p>
              </div>

              {/* Column 3: YouTube Video */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-2 ring-bmhw-gold/50 hover:ring-bmhw-gold transition-all duration-300 h-80 md:h-auto md:min-h-[360px] bg-black/60">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/nMPtgrFFbYM"
                  title="Featured Performer Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
