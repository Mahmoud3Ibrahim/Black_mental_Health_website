'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const VISIBLE_MS = 7_000;
const FADE_MS = 600;

export default function CelebrationSplash() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [entered, setEntered] = useState(false);
  const [fading, setFading] = useState(false);

  const dismiss = useCallback(() => {
    setFading(true);
    window.setTimeout(() => setShow(false), FADE_MS);
  }, []);

  // Show on every visit.
  useEffect(() => {
    setMounted(true);
    setShow(true);
    // next frame: trigger the enter transition
    const raf = requestAnimationFrame(() => setEntered(true));
    const fadeTimer = window.setTimeout(() => setFading(true), VISIBLE_MS);
    const hideTimer = window.setTimeout(() => setShow(false), VISIBLE_MS + FADE_MS);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  // Lock body scroll while the overlay is visible.
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  // ESC to skip.
  useEffect(() => {
    if (!show) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, dismiss]);

  if (!mounted || !show) return null;

  const lang = (i18n.resolvedLanguage ?? i18n.language).startsWith('fr') ? 'fr' : 'en';
  const src =
    lang === 'fr'
      ? '/assets/images/Stronger_Togethr_FR.png'
      : '/assets/images/Stronger_Togethr_EN.png';
  const alt = lang === 'fr' ? 'Plus forts ensemble' : 'Stronger Together';
  const skipLabel = lang === 'fr' ? 'Passer' : 'Skip';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={dismiss}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bmhw-black/90 backdrop-blur-md p-4 transition-opacity ease-in-out motion-reduce:transition-none ${
        fading ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:opacity-100 ${
          entered && !fading ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div
          className="rounded-3xl ring-1 ring-bmhw-gold/40"
          style={{
            boxShadow:
              '0 0 0 1px rgba(207,163,73,0.25), 0 25px 60px -15px rgba(207,163,73,0.45), 0 0 90px -10px rgba(207,163,73,0.35)',
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            priority
            sizes="(max-width: 768px) 92vw, 70vw"
            className="h-auto max-h-[80vh] w-auto max-w-[92vw] rounded-3xl object-contain"
          />
        </div>

        <button
          type="button"
          onClick={dismiss}
          className="absolute -bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-bmhw-gold px-6 py-2.5 text-sm font-bold text-bmhw-black shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-bmhw-gold/60"
        >
          {skipLabel}
        </button>
      </div>
    </div>
  );
}
