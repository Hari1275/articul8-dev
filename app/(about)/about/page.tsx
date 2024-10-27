import type { Metadata } from 'next';
import Hero from './Hero';
import MissionSection from './MissionSection';
import ImpactSection from './ImpactSection';
import CEOQuoteSection from './CEOQuoteSection';
import CultureAndValues from './CultureAndValues';

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
      <ImpactSection />
      <CEOQuoteSection />
      <CultureAndValues />
      {/* Other sections of the About page */}
    </main>
  );
}
