'use client';

import { useTranslation } from 'react-i18next';

type LanguageToggleProps = {
  className?: string;
};

export default function LanguageToggle({ className }: LanguageToggleProps = {}) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const baseClasses =
    'bg-bmhw-gold text-bmhw-black px-5 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={className ? `${baseClasses} ${className}` : baseClasses}
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
