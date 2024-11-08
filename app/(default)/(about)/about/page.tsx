import React from 'react';
import type { Metadata } from 'next';
import Hero from './Hero';
import MissionSection from './MissionSection';
import ImpactSection from './ImpactSection';
import CultureAndValues from './CultureAndValues';
import CEOQuoteSection from './CEOQuoteSection';
import HumbleGangsters from './HumbleGangsters';
import TeamPhotoSection from './TeamPhotoSection';

import '../../../../styles/globals.css';
import JoinTeamSection from './JoinTeamSection';

export const metadata: Metadata = {
  title: 'About Us | Building for a Better Tomorrow',
  description:
    'We are researchers at heart, dedicated to developing exceptional products that delight our customers.',
};

const AboutPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <MissionSection />
      <ImpactSection />
      <CEOQuoteSection />
      <CultureAndValues />
      <HumbleGangsters />
      <TeamPhotoSection />
      <JoinTeamSection />
    </div>
  );
};

export default AboutPage;
