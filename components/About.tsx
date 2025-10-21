'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/about-hero.jpg"
          alt="About the Conference"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-brown/80 via-bmhw-black/70 to-bmhw-brown/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/60 via-transparent to-bmhw-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bmhw-gold mb-8 drop-shadow-2xl">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-10"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="bg-bmhw-brown/40 backdrop-blur-md p-8 rounded-2xl border border-bmhw-gold/30 hover:border-bmhw-gold/70 transition-all duration-500 transform hover:scale-[1.03] animate-slide-up shadow-2xl">
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
            <p className="text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-md">
              {t('about.missionText')}
            </p>
          </div>

          {/* Why This Matters Card */}
          <div className="bg-bmhw-brown/40 backdrop-blur-md p-8 rounded-2xl border border-bmhw-gold/30 hover:border-bmhw-gold/70 transition-all duration-500 transform hover:scale-[1.03] animate-slide-up shadow-2xl">
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
            <p className="text-gray-100 text-base md:text-lg leading-relaxed drop-shadow-md">
              {t('about.whyText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
