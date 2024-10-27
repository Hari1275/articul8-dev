import type { Metadata } from 'next';
import Hero from './Hero';
import MissionSection from './MissionSection';

export const metadata: Metadata = {
  title: 'About Us | Building for a Better Tomorrow',
  description:
    'We are researchers at heart, dedicated to developing exceptional products that delight our customers.',
};

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <MissionSection />
      {/* Other sections of the About page */}
    </main>
  );
}
