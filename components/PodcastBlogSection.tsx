'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const YOUTUBE_EMBED = 'https://www.youtube.com/embed/euDGwRehUb0';
const THOUGHTFUL_THERAPIST_URL = 'https://www.thoughtfultherapist.ca';

export default function PodcastBlogSection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/assets/images/faq-hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black/80 via-bmhw-black/75 to-bmhw-brown/55" />
        </div>

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-center">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative aspect-video w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden ring-2 ring-bmhw-gold/50 shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bmhw-gold/70 group"
              aria-label={t('podcast.openVideo')}
            >
              <Image
                src="/assets/images/blog01.png"
                alt={t('podcast.thumbnailAlt')}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 480px"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-bmhw-black/35 group-hover:bg-bmhw-black/25 transition-colors">
                <span className="rounded-full bg-bmhw-gold text-bmhw-black px-5 py-2.5 font-bold text-sm sm:text-base shadow-lg">
                  {t('podcast.listen')}
                </span>
              </span>
            </button>

            <div className="text-center md:text-left space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-snug drop-shadow-lg">
                {t('podcast.title')}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-stone-200 leading-relaxed">
                {t('podcast.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start pt-1">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-bmhw-gold text-bmhw-black px-8 py-3 font-bold hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl"
                >
                  {t('podcast.listen')}
                </button>
                <a
                  href={THOUGHTFUL_THERAPIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-bmhw-gold text-bmhw-gold px-8 py-3 font-bold hover:bg-bmhw-gold/10 transition-all"
                >
                  {t('podcast.thoughtfulTherapist')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/85 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="podcast-modal-title"
          onClick={close}
        >
          <div
            className="relative z-10 w-full max-w-5xl max-h-[95vh] flex flex-col bg-bmhw-black rounded-2xl shadow-2xl ring-2 ring-bmhw-gold/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-3 py-2.5 sm:px-5 sm:py-3 border-b border-bmhw-gold/30 bg-bmhw-black/60 shrink-0">
              <h3
                id="podcast-modal-title"
                className="text-xs sm:text-sm md:text-base font-semibold text-white leading-tight pr-2 line-clamp-2"
              >
                {t('podcast.modalTitle')}
              </h3>
              <button
                type="button"
                onClick={close}
                className="shrink-0 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-bmhw-gold text-bmhw-black text-3xl font-light leading-none hover:bg-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={t('podcast.closeModal')}
              >
                ×
              </button>
            </div>
            <div className="relative w-full aspect-video bg-black min-h-0">
              <iframe
                src={YOUTUBE_EMBED}
                title={t('podcast.modalTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
