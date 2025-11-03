'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, cubicBezier } from 'framer-motion';

// Icon mapping for professional look
const getIconForQuestion = (question: string) => {
  if (question.includes('💸') || question.includes('free') || question.includes('gratuit')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (question.includes('🗣️') || question.includes('bilingual') || question.includes('bilingues')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    );
  }
  if (question.includes('👥') || question.includes('Who can') || question.includes('Qui peut')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    );
  }
  if (question.includes('⏰') || question.includes('time') || question.includes('heure')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (question.includes('🚗') || question.includes('parking') || question.includes('stationnement')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  if (question.includes('🚍') || question.includes('transit') || question.includes('transport')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    );
  }
  if (question.includes('♿') || question.includes('accessible')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
  if (question.includes('🧠') || question.includes('part') || question.includes('partie')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    );
  }
  if (question.includes('📧') || question.includes('contact')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (question.includes('💛') || question.includes('volunteer') || question.includes('bénévolat')) {
    return (
      <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    );
  }
  // Default icon
  return (
    <svg className="w-5 h-5 text-bmhw-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
};

// Remove emoji from question text
const cleanQuestion = (question: string) => {
  return question.replace(/[💸🗣️👥⏰🚗🚍♿🧠📧💛]\s*/g, '').trim();
};

export default function FAQ() {
  const { t } = useTranslation();

  // Type-safe way to get FAQ items
  const faqItems = t('faq.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: cubicBezier(0.4, 0, 0.2, 1)
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-10 md:py-12 px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/faq-hero.jpg"
          alt="FAQ Background"
          fill
          className="object-cover object-center"
          quality={75}
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black/90 via-bmhw-brown/80 to-bmhw-black/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-bmhw-gold mb-3">
            {t('faq.title')}
          </h2>
          <div className="w-24 h-1 bg-bmhw-gold mx-auto"></div>
        </motion.div>

        {/* FAQ Grid - 2 columns on medium+ screens, 1 on mobile */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqItems.map((item, index) => (
            <motion.details
              key={index}
              className="group bg-bmhw-brown/70 backdrop-blur-sm border border-bmhw-gold/30 rounded-xl p-5 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
              variants={itemVariants}
            >
              <summary className="flex items-start gap-3 cursor-pointer list-none">
                {/* Icon */}
                <div className="mt-0.5">
                  {getIconForQuestion(item.question)}
                </div>
                {/* Question Text */}
                <span className="text-lg font-semibold text-white flex-1 leading-snug">
                  {cleanQuestion(item.question)}
                </span>
                {/* Arrow icon that rotates when opened */}
                <svg
                  className="w-5 h-5 mt-1 text-bmhw-gold transition-transform duration-500 group-open:rotate-180 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              {/* Answer - hidden by default, shown when details is open with animation */}
              <div className="mt-4 pt-4 border-t border-bmhw-gold/20 animate-fade-in">
                <p className="text-base text-white leading-relaxed pl-8" style={{ fontSize: '17px' }}>
                  {item.answer}
                </p>
              </div>
            </motion.details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
