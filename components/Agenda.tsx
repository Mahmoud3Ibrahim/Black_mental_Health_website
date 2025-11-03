'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, easeOut, cubicBezier } from 'framer-motion';

interface SessionCardProps {
  session: string;
  index: number;
}

function SessionCard({ session, index }: SessionCardProps) {
  const { t } = useTranslation();

  // Simple fade-in animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut
      }
    }
  };

  // Alternate background colors for readability
  const bgClass = index % 2 === 0
    ? 'bg-bmhw-brown/50'
    : 'bg-bmhw-black/60';

  return (
    <motion.div
      className={`${bgClass} backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-xl border border-bmhw-gold/30 hover:border-bmhw-gold transition-all duration-300 hover:shadow-2xl hover:shadow-bmhw-gold/30 hover:-translate-y-2`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-bmhw-gold mb-4 drop-shadow-lg leading-snug">
          {t(`agenda.${session}.title`)}
        </h3>
        <div className="flex items-center text-gray-100 text-base md:text-lg mb-2">
          <svg className="w-5 h-5 min-w-[20px] mr-3 text-bmhw-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold drop-shadow-md leading-relaxed">{t(`agenda.${session}.time`)}</span>
        </div>
      </div>
      <p className="text-stone-200 leading-relaxed text-base md:text-lg drop-shadow-md">
        {t(`agenda.${session}.description`)}
      </p>
    </motion.div>
  );
}

export default function Agenda() {
  const { t } = useTranslation();
  const sessions = ['session1', 'session2', 'session3', 'session4', 'session5'];

  // Simple header fade-in
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="agenda" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-16">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/conference-hero.jpg"
          alt="Event Schedule"
          fill
          className="object-cover object-center"
          quality={60}
          loading="lazy"
          sizes="100vw"
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-brown/85 via-bmhw-black/75 to-bmhw-brown/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/70 via-transparent to-bmhw-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 md:mb-10"
          variants={headerVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: cubicBezier(0.25, 0.1, 0.25, 1) }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bmhw-gold mb-3 md:mb-4 drop-shadow-2xl px-4">
            {t('agenda.title')}
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-3xl mx-auto font-semibold drop-shadow-lg px-4">
            {t('agenda.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-2">
          {sessions.map((session, index) => (
            <SessionCard key={session} session={session} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
