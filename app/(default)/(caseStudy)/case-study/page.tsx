import '../../../../styles/globals.css';
import CaseStudySection from './CaseStudySection';
import HeroSection from './HeroSection'
import RelatedArticlesSection from './RelatedArticlesSection'
import StartArticulatingSection from './StartArticulatingSection'

export default function CaseStudyPage() {
  // Sample related articles data
  const relatedArticles = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/case-study/placeholder.png",
      link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/case-study/placeholder.png",
      link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/case-study/placeholder.png",
      link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      image: "/images/case-study/placeholder.png",
      link: "#"
    }
  ]

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative md:py-12 py-4">
          {/* Main Content Section */}
          <div className="md:col-span-2 md:pr-8">
            <HeroSection />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block absolute right-[33.33%] top-0 bottom-0 w-[1px] bg-gray-200"></div>

          {/* Related Articles Sidebar */}
          <div className="md:pl-2 ">
            <RelatedArticlesSection articles={relatedArticles} />
          </div>
        </div>
        
        {/* Bottom Divider */}
        <div className="hidden md:block h-[1px] bg-gray-200 w-full "></div>

        <CaseStudySection />
      </div>
      
      {/* Full width section */}
      <StartArticulatingSection />
      <div className='py-12 md:py-16'></div>

    </main>
  )
}

