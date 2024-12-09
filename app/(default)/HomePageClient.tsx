// HomePageClient.tsx (Client Component)
'use client';

import { useEffect, useState } from 'react';
import ConvertSection from './(home)/ConvertSection';
import Hero from './(home)/Hero';
import InnovationsSection from './(home)/InnovationsSection';
import SimplestWay from './(home)/SimplestWay';
import TrustedBy from './(home)/TrustedBy';
import UnlockSection from './(home)/UnlockSection';
import PlatformArchitecture from './(home)/PlatformArchitecture';
import '../../styles/globals.css';
import CTAForm from '../../components/Modal';

const HomePageClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const hasFormParam = urlParams.has('form');

      if (hasFormParam) {
        setIsModalOpen(true);
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, []);

  return (
    <div>
      <Hero />
      <TrustedBy />
      <SimplestWay />
      <UnlockSection />
      <PlatformArchitecture />
      <InnovationsSection />
      <ConvertSection />
      <CTAForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePageClient;
