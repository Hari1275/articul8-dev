import React from 'react';
import type { Metadata } from 'next';
import Hero from './Hero';
import MissionSection from './MissionSection';
import ImpactSection from './ImpactSection';
import CultureAndValues from './CultureAndValues';
import CEOQuoteSection from './CEOQuoteSection';
import HumbleGangsters from './HumbleGangsters';
import TeamPhotoSection from './TeamPhotoSection';
import { getAboutPageData } from '../../../../utils/strapi';
import '../../../../styles/globals.css';
import JoinTeamSection from './JoinTeamSection';

export const metadata: Metadata = {
  title: 'About Us | Building for a Better Tomorrow',
  description:
    'We are researchers at heart, dedicated to developing exceptional products that delight our customers.',
};

const AboutPage = async () => {
  const pageData = await getAboutPageData();

  return (
    <div>
      <Hero data={pageData.data.HeroSection} />
      <MissionSection data={pageData.data.HeroSection} />
      <ImpactSection data={pageData.data.ImapctSection} />
      <CEOQuoteSection data={pageData.data.CeoSection} />
      <CultureAndValues />
      <HumbleGangsters />
      <TeamPhotoSection />
      <JoinTeamSection />
    </div>
  );
};

export default AboutPage;
