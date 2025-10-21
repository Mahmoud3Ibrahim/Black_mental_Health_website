import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ottawa Black Mental Health Week 2026',
  description: 'Ottawa Black Mental Health Week 2026 - Theme: Substance Use and Suicide: Breaking the Silence. Join us for a week of mental health awareness, community support, and breaking the stigma.',
  keywords: ['mental health', 'Black community', 'Ottawa', 'substance use', 'suicide prevention', 'mental health awareness'],
  openGraph: {
    title: 'Ottawa Black Mental Health Week 2026',
    description: 'Theme: Substance Use and Suicide: Breaking the Silence',
    type: 'website',
    locale: 'en_CA',
    alternateLocale: 'fr_CA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
