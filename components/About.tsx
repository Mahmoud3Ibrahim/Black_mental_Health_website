'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, easeOut, cubicBezier } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // Individual item animation - simpler
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-16"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/about-hero.jpg"
          alt="About the Event"
          fill
          className="object-cover object-center"
          quality={60}
          loading="lazy"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-brown/80 via-bmhw-black/70 to-bmhw-brown/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/60 via-transparent to-bmhw-black/40"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-10 md:mb-12"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bmhw-gold mb-4 md:mb-6 drop-shadow-2xl">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-stone-200 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            {t('about.description')}
          </p>
          <p className="text-lg md:text-xl text-bmhw-gold font-bold max-w-3xl mx-auto leading-relaxed drop-shadow-lg mt-8">
            {t('about.joinUs')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            className="bg-bmhw-brown/40 backdrop-blur-md p-8 rounded-2xl border border-bmhw-gold/30 hover:border-bmhw-gold/70 transition-all duration-500 transform hover:scale-[1.03] shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-bmhw-gold to-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                <svg
                  className="w-7 h-7 text-bmhw-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-bmhw-gold drop-shadow-lg">
                {t('about.mission')}
              </h3>
            </div>
            <p className="text-stone-200 text-base md:text-lg leading-relaxed drop-shadow-md">
              {t('about.missionText')}
            </p>
          </motion.div>

          {/* Why This Matters Card */}
          <motion.div
            className="bg-bmhw-brown/40 backdrop-blur-md p-8 rounded-2xl border border-bmhw-gold/30 hover:border-bmhw-gold/70 transition-all duration-500 transform hover:scale-[1.03] shadow-2xl"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-bmhw-gold to-yellow-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                <svg
                  className="w-7 h-7 text-bmhw-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-bmhw-gold drop-shadow-lg">
                {t('about.why')}
              </h3>
            </div>
            <p className="text-stone-200 text-base md:text-lg leading-relaxed drop-shadow-md">
              {t('about.whyText')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
