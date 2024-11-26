import '../../../../styles/globals.css';
import CaseStudySection from './CaseStudySection';
import HeroSection from './HeroSection';
import StartArticulatingSection from './StartArticulatingSection';

export default function CaseStudyPage() {
  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
            <HeroSection />
       <hr className="border-t border-[#E6E6E6]" />
          
          {/* Case Studies Section */}
          <CaseStudySection />
          <StartArticulatingSection />
          <div className="py-8 md:py-16"></div>
        </div>
      
    </main>
  )
}

