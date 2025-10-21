import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ottawa Black Mental Health Week 2026',
  description: 'Theme: Substance Use and Suicide – Breaking the Silence | Ottawa Conference & Event Centre, March 2, 2026',
  keywords: ['mental health', 'Black community', 'Ottawa', 'substance use', 'suicide prevention', 'mental health awareness', 'OBMHC'],
  authors: [{ name: 'Ottawa Black Mental Health Coalition' }],
  creator: 'Ottawa Black Mental Health Coalition',
  publisher: 'Ottawa Black Mental Health Coalition',
  metadataBase: new URL('https://bmhw2026.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ottawa Black Mental Health Week 2026',
    description: 'Theme: Substance Use and Suicide – Breaking the Silence | Ottawa Conference & Event Centre, March 2, 2026',
    url: 'https://bmhw2026.vercel.app',
    siteName: 'Ottawa Black Mental Health Week 2026',
    images: [
      {
        url: '/assets/images/og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Ottawa Black Mental Health Week 2026 - Breaking the Silence',
      },
    ],
    locale: 'en_CA',
    alternateLocale: 'fr_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ottawa Black Mental Health Week 2026',
    description: 'Theme: Substance Use and Suicide – Breaking the Silence | Ottawa Conference & Event Centre, March 2, 2026',
    images: ['/assets/images/og-banner.jpg'],
    creator: '@OBMHC',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
