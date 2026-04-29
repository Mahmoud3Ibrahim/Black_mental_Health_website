'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const YOUTUBE_EMBED = 'https://www.youtube.com/embed/euDGwRehUb0';
const THOUGHTFUL_THERAPIST_URL = 'https://www.instagram.com/thoughtfultherapist_/';

/** Intrinsic dimensions of blog01.png — avoids letterboxing from fixed aspect + object-contain */
const BLOG01_WIDTH = 682;
const BLOG01_HEIGHT = 387;

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
      <section className="relative py-6 sm:py-8 md:py-10 overflow-hidden">
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

        <div className="relative z-10 w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Frame aligned with ThankYouPage photo slider (inner track) */}
          <div className="relative rounded-3xl overflow-hidden bg-bmhw-black/50 shadow-2xl ring-2 ring-bmhw-gold/40 p-3 sm:p-5 md:p-6">
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(207,163,73,0.3)] pointer-events-none" aria-hidden />

            <div className="relative z-10 text-center space-y-3 sm:space-y-5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-tight drop-shadow-lg px-1 sm:px-0 tracking-tight">
                {t('podcast.title')}
              </h2>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative block w-full max-w-none mx-auto cursor-pointer rounded-2xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bmhw-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bmhw-black/50 group"
                aria-label={t('podcast.watchOnYoutube')}
              >
                <span className="relative block w-full">
                  <Image
                    src="/assets/images/blog01.png"
                    width={BLOG01_WIDTH}
                    height={BLOG01_HEIGHT}
                    alt={t('podcast.thumbnailAlt')}
                    className="w-full h-auto block rounded-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-bmhw-black/25 transition-colors group-hover:bg-bmhw-black/15"
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 max-w-[90%] -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center justify-center rounded-full bg-bmhw-gold px-3 py-2 text-center text-xs font-bold leading-tight text-bmhw-black shadow-lg sm:px-5 sm:py-2.5 sm:text-sm md:text-base animate-podcast-cta-pulse">
                      {t('podcast.watchOnYoutube')}
                    </span>
                  </span>
                </span>
              </button>

              <div className="mx-auto max-w-3xl rounded-2xl border border-bmhw-gold/25 bg-bmhw-black/40 px-3 py-3 text-left sm:px-6 sm:py-4 sm:text-center">
                <p className="text-sm sm:text-base md:text-lg leading-[1.6] text-stone-200">
                  {t('podcast.description')}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center sm:gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-bmhw-gold px-8 py-3 text-base font-bold text-bmhw-black shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:brightness-95 active:scale-100"
                >
                  {t('podcast.watchOnYoutube')}
                </button>
                <a
                  href={THOUGHTFUL_THERAPIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-bmhw-gold bg-transparent px-8 py-3 text-base font-bold text-bmhw-gold transition-all duration-200 ease-out hover:bg-bmhw-gold hover:text-bmhw-black active:scale-[0.98]"
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
