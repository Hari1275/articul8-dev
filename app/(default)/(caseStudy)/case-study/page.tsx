import '../../../../styles/globals.css';
import { getCaseStudyPageData } from '../../../../utils/strapi';
import CaseStudySection from './CaseStudySection';
import HeroSection from './HeroSection';
import StartArticulatingSection from './StartArticulatingSection';

export default async function CaseStudyPage() {
  const { data } = await getCaseStudyPageData();
  const firstCaseStudy = data.CaseStudies[0];
  
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <HeroSection caseStudy={firstCaseStudy.BasicDetail} />
        <hr className="border-t border-[#E6E6E6]" />
        <CaseStudySection caseStudies={data.CaseStudies} />
        <StartArticulatingSection lastSection={data.LastSection} />
        <div className="py-8 md:py-16"></div>
      </div>
    </main>
  )
}

