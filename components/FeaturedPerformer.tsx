'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function FeaturedPerformer() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/performer.jpg"
          alt="Featured Performer Background"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-bmhw-brown/85 via-bmhw-black/80 to-bmhw-brown/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/70 via-transparent to-bmhw-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-bmhw-gold mb-6 drop-shadow-2xl">
            {t('performer.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-10"></div>

          {/* Description with better formatting */}
          <div className="max-w-4xl mx-auto px-2">
            <p className="text-base md:text-lg text-stone-200 leading-relaxed drop-shadow-lg md:text-justify text-center">
              {t('performer.description')}
            </p>
          </div>
        </div>

        {/* YouTube Video Embed - Smaller on desktop */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-2 ring-bmhw-gold/50 hover:ring-bmhw-gold transition-all duration-300">
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
    </section>
  );
}
