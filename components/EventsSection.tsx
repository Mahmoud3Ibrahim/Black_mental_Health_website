'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, AnimatePresence, easeOut } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  shortDescription: string;
  bulletPoints: string[];
  image: string;
  registerLink: string;
}

export default function EventsSection() {
  const { t } = useTranslation();
  
  // Get event data from translations - memoized to prevent re-creation on every render
  const eventsData = t('events.items', { returnObjects: true }) as Array<{
    title: string;
    date: string;
    time: string;
    venue: string;
    shortDescription: string;
    bulletPoints: string[];
  }>;

  // Event data - memoized to prevent re-creation on every render
  const events: Event[] = useMemo(() => {
    const allEventsData = eventsData;
    const registerLinks = [
      'https://forms.office.com/pages/responsepage.aspx?id=TpCCSqK9H0GJv8J47HmG0YZMu86KmyFLqItqcdxBWBtUNlM0TjhETVQ1Mk5QTjA0N1A3NEEzOVgyMC4u&route=shorturl',
      'https://www.eventbrite.ca/e/the-brotherhood-coalitions-he-leads-vol-5-the-weight-we-carry-tickets-1982848995723',
      'https://us06web.zoom.us/webinar/register/WN_b2hNWsFrTQCBe2NuHlnJtQ#/registration',
      'https://www.eventbrite.ca/e/1982990661449?aff=oddtdtcreator',
    ];
    const images = [
      '/assets/images/event01.png',
      '/assets/images/event02.png',
      '/assets/images/event03.png',
      '/assets/images/event04.png',
    ];

    return allEventsData.map((event, index) => ({
      id: index + 1,
      title: event.title,
      date: event.date,
      time: event.time,
      venue: event.venue,
      shortDescription: event.shortDescription,
      bulletPoints: event.bulletPoints,
      image: images[index],
      registerLink: registerLinks[index],
    }));
  }, [eventsData]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on Escape key
  useEffect(() => {
    if (!isModalOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setSelectedEvent(null);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        id="events"
        className="relative min-h-screen flex items-center justify-center py-12 md:py-16 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/faq-hero.jpg"
            alt="Events Background"
            fill
            className="object-cover object-center"
            quality={70}
            loading="lazy"
            sizes="100vw"
            fetchPriority="low"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bmhw-black/90 via-bmhw-brown/80 to-bmhw-black/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Title */}
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bmhw-gold mb-4 drop-shadow-2xl">
              {t('events.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-bmhw-gold to-transparent mx-auto mb-6"></div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-bmhw-brown/40 backdrop-blur-sm rounded-2xl border border-bmhw-gold/30 overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(207,163,73,0.4)] transition-all duration-200 ease-out transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer group will-change-transform"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                onClick={() => openModal(event)}
              >
                {/* Event Image - 1/3 of card height */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  {event.id === 1 || event.id === 3 ? (
                    <img
                      src={event.image}
                      alt={`${event.title} - ${event.date} at ${event.venue}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Image
                      src={event.image}
                      alt={`${event.title} - ${event.date} at ${event.venue}`}
                      fill
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-110 will-change-transform"
                      quality={75}
                      loading={index < 2 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      fetchPriority={index < 2 ? "high" : "low"}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-bmhw-gold mb-2 drop-shadow-lg line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-bmhw-gold text-sm md:text-base font-semibold mb-3">
                    {event.date}
                  </p>
                  <p className="text-white text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                    {event.shortDescription}
                  </p>
                  <button className="text-bmhw-gold font-semibold hover:text-yellow-400 transition-colors duration-150 ease-out flex items-center gap-2 group/button">
                    {t('events.moreDetails')}
                    <svg
                      className="w-4 h-4 transition-transform duration-150 ease-out group-hover/button:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-bmhw-black/95 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <motion.div
              className="relative bg-bmhw-brown/95 backdrop-blur-sm border-2 border-bmhw-gold/50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-bmhw-gold/20 hover:bg-bmhw-gold/40 rounded-full transition-all duration-150 ease-out group"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 text-bmhw-gold group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                {selectedEvent.id === 1 || selectedEvent.id === 3 ? (
                  <img
                    src={selectedEvent.image}
                    alt={`${selectedEvent.title} - ${selectedEvent.date} at ${selectedEvent.venue}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <Image
                    src={selectedEvent.image}
                    alt={`${selectedEvent.title} - ${selectedEvent.date} at ${selectedEvent.venue}`}
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bmhw-black/80 via-bmhw-black/40 to-transparent"></div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-bmhw-gold mb-4 drop-shadow-lg">
                  {selectedEvent.title}
                </h2>
                <div className="w-20 h-1 bg-bmhw-gold mb-4"></div>
                {/* Event Details */}
                <div className="mb-6 space-y-2">
                  <p className="text-bmhw-gold text-base md:text-lg font-semibold">
                    📅 {selectedEvent.date}
                  </p>
                  <p className="text-bmhw-gold text-base md:text-lg font-semibold">
                    ⏰ {selectedEvent.time}
                  </p>
                  <p className="text-bmhw-gold text-base md:text-lg font-semibold">
                    📍 {selectedEvent.venue}
                  </p>
                </div>
                {/* Bullet Points */}
                <ul className="text-white text-base md:text-lg leading-relaxed mb-8 space-y-3 list-none">
                  {selectedEvent.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-bmhw-gold mr-3 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Register Button */}
                <div className="flex justify-center">
                  <a
                    href={selectedEvent.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-bmhw-gold via-yellow-500 to-bmhw-gold text-bmhw-black px-8 py-4 rounded-full text-lg font-bold shadow-2xl hover:shadow-bmhw-gold/50 transition-all duration-200 ease-out transform hover:scale-105 hover:-translate-y-1 will-change-transform"
                  >
                    {t('events.registerNow')}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
