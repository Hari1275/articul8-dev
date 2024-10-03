import type { Metadata } from 'next';
import ConvertSection from './(home)/ConvertSection';
import Hero from './(home)/Hero';
import InnovationsSection from './(home)/InnovationsSection';
import SimplestWay from './(home)/SimplestWay';
import TrustedBy from './(home)/TrustedBy';
import UnlockSection from './(home)/UnlockSection';
import PlatformArchitecture from './(home)/PlatformArchitecture';

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
      <SimplestWay />
      <UnlockSection />
      <PlatformArchitecture />
      <InnovationsSection />
      <ConvertSection />
      {/* <Features />
      <BlogPreview />
      <Contact /> */}
    </div>
  );
};

export default HomePage;
