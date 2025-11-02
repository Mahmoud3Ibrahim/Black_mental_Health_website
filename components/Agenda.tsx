'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface SessionCardProps {
  session: string;
  index: number;
}

function SessionCard({ session, index }: SessionCardProps) {
  const { t } = useTranslation();

  // Alternate background colors for readability
  const bgClass = index % 2 === 0
    ? 'bg-bmhw-brown/50'
    : 'bg-bmhw-black/60';

  return (
    <div className={`${bgClass} backdrop-blur-md p-6 rounded-xl border border-bmhw-gold/30 hover:border-bmhw-gold transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-bmhw-gold/20`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-bmhw-gold mb-3 drop-shadow-lg">
          {t(`agenda.${session}.title`)}
        </h3>
        <div className="flex items-center text-gray-200 text-sm mb-2">
          <svg className="w-4 h-4 mr-2 text-bmhw-gold" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold drop-shadow-md">{t(`agenda.${session}.time`)}</span>
        </div>
      </div>
      <p className="text-stone-200 leading-relaxed text-sm drop-shadow-md">
        {t(`agenda.${session}.description`)}
      </p>
    </div>
  );
}

export default function Agenda() {
  const { t } = useTranslation();
  const sessions = ['session1', 'session2', 'session3', 'session4', 'session5'];

  return (
    <section id="agenda" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/conference-hero.jpg"
          alt="Event Schedule"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-brown/85 via-bmhw-black/75 to-bmhw-brown/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/70 via-transparent to-bmhw-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bmhw-gold mb-6 drop-shadow-2xl">
            {t('agenda.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto font-semibold drop-shadow-lg">
            {t('agenda.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {sessions.map((session, index) => (
            <SessionCard key={session} session={session} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
