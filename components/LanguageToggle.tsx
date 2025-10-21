'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders after mounting to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Return null before mounting to prevent SSR mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-bmhw-gold text-bmhw-black px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
