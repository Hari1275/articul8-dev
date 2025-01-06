import React from 'react';
import type { Metadata } from 'next';
import Hero from './Hero';
import MissionSection from './MissionSection';
import ImpactSection from './ImpactSection';
import CultureAndValues from './CultureAndValues';
import CEOQuoteSection from './CEOQuoteSection';
import HumbleGangsters from './HumbleGangsters';
import TeamPhotoSection from './TeamPhotoSection';
import JobListings from './JobListings';

import '../../../../styles/globals.css';
import JoinTeamSection from './JoinTeamSection';

export const metadata: Metadata = {
  title: 'About Us | Building for a Better Tomorrow',
  description:
    'We are researchers at heart, dedicated to developing exceptional products that delight our customers.',
};

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[50px] lg:h-[105px] bg-white z-10" />
      
      <div className="relative">
        <Hero />
        <MissionSection />
        <ImpactSection />
        <CEOQuoteSection />
        <CultureAndValues />
        <HumbleGangsters />
        <JobListings />
        <TeamPhotoSection />
        <JoinTeamSection />
      </div>
    </>
  );
};

export default AboutPage;
