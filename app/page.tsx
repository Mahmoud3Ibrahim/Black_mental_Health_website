import type { Metadata } from 'next';
import ThankYouPage from '@/components/ThankYouPage';
import PodcastBlogSection from '@/components/PodcastBlogSection';
import Footer from '@/components/Footer';

const PODCAST_DESCRIPTION =
  "A Black Mental Health Week conversation with Podcaster Myriam of the Thoughtful Therapist on substance use, suicide, and intergenerational trauma with bilingual psychotherapist Papa-Ladjiké and N'nerjie.";

export const metadata: Metadata = {
  title: {
    absolute:
      'Substance Use, Suicide & Intergenerational Trauma | Black Mental Health Week | Thoughtful Therapist',
  },
  description: PODCAST_DESCRIPTION,
  openGraph: {
    title:
      'Substance Use, Suicide & Intergenerational Trauma | Black Mental Health Week | Thoughtful Therapist',
    description: PODCAST_DESCRIPTION,
    url: 'https://bmhw2026.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Substance Use, Suicide & Intergenerational Trauma | Black Mental Health Week | Thoughtful Therapist',
    description: PODCAST_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThankYouPage />
      <PodcastBlogSection />
      <Footer />
    </main>
  );
}
