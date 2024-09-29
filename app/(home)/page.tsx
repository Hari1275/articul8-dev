import type { Metadata } from 'next';
import Hero from './Hero';
import TrustedBy from './TrustedBy';
import UnlockSection from './UnlockSection';
import InnovationsSection from './InnovationsSection';
import ConvertSection from './ConvertSection';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Welcome to Articul8 - The GenAI platform that brings order to chaos.',
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <UnlockSection />
      <InnovationsSection />
      <ConvertSection />
      {/* <Features />
      <BlogPreview />
      <Contact /> */}
    </div>
  );
};

export default HomePage;
