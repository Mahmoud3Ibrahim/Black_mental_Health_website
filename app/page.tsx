'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import '@/lib/i18n';

// Dynamic imports for code splitting - load below-the-fold components lazily
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Agenda = dynamic(() => import('@/components/Agenda'), { ssr: false });
const FeaturedPerformer = dynamic(() => import('@/components/FeaturedPerformer'), { ssr: false });
const FAQ = dynamic(() => import('@/components/FAQ'), { ssr: false });
const WeAreWaitingYou = dynamic(() => import('@/components/WeAreWaitingYou'), { ssr: false });
const ReadyToJoin = dynamic(() => import('@/components/ReadyToJoin'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

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
      <Hero />
      <About />
      <Agenda />
      <FeaturedPerformer />
      <FAQ />
      <WeAreWaitingYou />
   
      <ReadyToJoin />
      <Footer />
    </main>
  );
}
