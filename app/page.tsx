'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Agenda from '@/components/Agenda';
import FAQ from '@/components/FAQ';
import WeAreWaitingYou from '@/components/WeAreWaitingYou';
import FeaturedPerformer from '@/components/FeaturedPerformer';
import ReadyToJoin from '@/components/ReadyToJoin';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';
import '@/lib/i18n';

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <About />
      <Agenda />
      <FAQ />
      <WeAreWaitingYou />
      <FeaturedPerformer />
      <ReadyToJoin />
      <Footer />
    </main>
  );
}
