'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageToggleProps = {
  className?: string;
};

export default function LanguageToggle({ className }: LanguageToggleProps = {}) {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const lang = i18n.resolvedLanguage ?? i18n.language;
    const newLang = lang.startsWith('en') ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const baseClasses =
    'bg-bmhw-gold text-bmhw-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105';

  // SSR + first client paint: stable "FR" (default lng is en → user switches to FR). After mount, read detector/localStorage without hydration mismatch.
  const lang = mounted ? (i18n.resolvedLanguage ?? i18n.language) : 'en';
  const label = lang.startsWith('en') ? 'FR' : 'EN';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={className ? `${baseClasses} ${className}` : baseClasses}
      aria-label="Toggle language"
    >
      {label}
    </button>
  );
}
