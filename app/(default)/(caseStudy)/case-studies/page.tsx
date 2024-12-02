import '../../../../styles/globals.css';
import CaseStudySection from './CaseStudySection';
import HeroSection from './HeroSection';
import StartArticulatingSection from './StartArticulatingSection';
import { CASE_STUDIES, LAST_SECTION } from './data/caseStudies';

import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Articul8 | Case Studies',
  description:
    'Intel: Manufacturing Root Cause Analysis',
};


export default function CaseStudyPage() {
  // Use first case study for hero section
  const firstCaseStudy = CASE_STUDIES[0];

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-6">
        <HeroSection caseStudy={firstCaseStudy.BasicDetail} />
        <hr className="border-t border-[#E6E6E6]" />
        <CaseStudySection caseStudies={CASE_STUDIES} />
        <StartArticulatingSection lastSection={LAST_SECTION} />
        <div className="py-8 md:py-16"></div>
      </div>
    </main>
  )
}

