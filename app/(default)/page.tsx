import type { Metadata } from "next";
import { getHomePageData, getPageData } from "../../utils/strapi";
import ConvertSection from "./(home)/ConvertSection";
import Hero from "./(home)/Hero";
import InnovationsSection from "./(home)/InnovationsSection";
import SimplestWay from "./(home)/SimplestWay";
import TrustedBy from "./(home)/TrustedBy";
import UnlockSection from "./(home)/UnlockSection";
import PlatformArchitecture from "./(home)/PlatformArchitecture";
import "../../styles/globals.css";

export const metadata: Metadata = {
  title: "Articul8 | The GenAI platform that simply works.",
  description:
    "Welcome to Articul8 - The GenAI platform that brings order to chaos.",
};

// async function getHomePageData() {
//   try {
//     const response = await getPageData('home');
//     return response.data[0]?.attributes;
//   } catch (error) {
//     console.error('Error fetching home page data:', error);
//     return null;
//   }
// }

const HomePage = async () => {
  const pageData = await getHomePageData();

  return (
    <div>
      <Hero data={pageData.data.HeroSection} />
      <TrustedBy data={pageData.data.GlobalEnterprisesSection} />
      <SimplestWay data={pageData.data.FasterTimeSection} />
      <UnlockSection data={{
        XFaster: pageData.data.FasterTimeSection.XFaster,
        Cards: pageData.data.FasterTimeSection.Cards
      }} />
      <PlatformArchitecture data={pageData.data.FeaturesSection} />
      <InnovationsSection data={pageData.data.InnovationsSection} />
      <ConvertSection data={{
        GenAiChaosSection: pageData.data.GenAiChaosSection,
        LastSection: pageData.data.LastSection
      }} />
    </div>
  );
};

export default HomePage;
