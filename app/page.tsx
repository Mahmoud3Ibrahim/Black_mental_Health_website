import type { Metadata } from 'next';
import ThankYouPage from '@/components/ThankYouPage';
import PodcastBlogSection from '@/components/PodcastBlogSection';
import FeaturedPerformer from '@/components/FeaturedPerformer';
import Footer from '@/components/Footer';

const PODCAST_DESCRIPTION =
  "A Black Mental Health Week conversation with Podcaster Myriam of the Thoughtful Therapist on substance use, suicide, and intergenerational trauma with bilingual psychotherapist Papa-Ladjiké and N'nerjie.";

const SITE_TITLE = 'Ottawa Black Mental Health Week';

export const metadata: Metadata = {
  title: {
    absolute: SITE_TITLE,
  },
  description: PODCAST_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: PODCAST_DESCRIPTION,
    url: 'https://bmhw2026.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: PODCAST_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThankYouPage />
      <PodcastBlogSection />
      <FeaturedPerformer />
      <Footer />
    </main>
  );
}
