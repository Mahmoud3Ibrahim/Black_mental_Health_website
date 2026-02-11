export default function StructuredData() {
  // Static structured data - works for both languages
  const eventData = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Ottawa Black Mental Health Week 2026',
    description: 'Theme: Substance Use and Suicide – Breaking the Silence. Join us for a week of Black mental health and wellness events featuring powerful keynotes, panels, workshops, training and community connection.',
    startDate: '2026-03-02T09:00:00-05:00',
    endDate: '2026-03-02T17:00:00-05:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Ottawa Conference and Event Centre',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '200 Coventry Rd',
        addressLocality: 'Ottawa',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Ottawa Black Mental Health Coalition',
      email: 'ottawabmhcoalition@gmail.com',
      url: 'https://bmhw2026.vercel.app',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
      url: 'https://www.eventbrite.ca/e/ottawa-black-mental-health-week-2026-tickets-1090395364889',
      validFrom: '2025-01-01',
    },
    image: 'https://bmhw2026.vercel.app/assets/images/og-banner.jpg',
    inLanguage: ['en-CA', 'fr-CA'],
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ottawa Black Mental Health Coalition',
    url: 'https://bmhw2026.vercel.app',
    logo: 'https://bmhw2026.vercel.app/assets/logos/obmh-en.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'ottawabmhcoalition@gmail.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://www.facebook.com/OBMHC',
      'https://www.linkedin.com/company/ottawa-black-mental-health-coalition/',
      'https://www.instagram.com/obmh.c/',
    ],
  };

  // Events section structured data
  const eventsSectionData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Mental Health Week Events',
    description: 'A series of events focused on advancing culturally responsive mental health care for Black communities',
    itemListElement: [
      {
        '@type': 'Event',
        name: 'Advancing Culturally Responsive Mental Health Care for Black Communities',
        description: 'Explore ways to strengthen provider capacity to support culturally safe mental health care. Consider how structural factors shape mental health and suicide risk. Discover how local partners are working to reduce barriers and improve access to mental health services.',
        startDate: '2026-03-06T10:30:00-05:00',
        endDate: '2026-03-06T11:30:00-05:00',
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
          '@type': 'VirtualLocation',
          name: 'Microsoft Teams',
          url: 'https://forms.office.com/pages/responsepage.aspx?id=TpCCSqK9H0GJv8J47HmG0YZMu86KmyFLqItqcdxBWBtUNlM0TjhETVQ1Mk5QTjA0N1A3NEEzOVgyMC4u&route=shorturl',
        },
        organizer: {
          '@type': 'Organization',
          name: 'Ottawa Black Mental Health Coalition',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CAD',
          availability: 'https://schema.org/InStock',
          url: 'https://forms.office.com/pages/responsepage.aspx?id=TpCCSqK9H0GJv8J47HmG0YZMu86KmyFLqItqcdxBWBtUNlM0TjhETVQ1Mk5QTjA0N1A3NEEzOVgyMC4u&route=shorturl',
        },
        inLanguage: ['en-CA', 'fr-CA'],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSectionData) }}
      />
    </>
  );
}

