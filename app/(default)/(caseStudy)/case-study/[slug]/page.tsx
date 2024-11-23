import '../../../../../styles/globals.css';
import CaseStudyDetailSection from './CaseStudyDetailSection';
import { notFound } from 'next/navigation';

// This is where you would fetch the case study data based on the slug
async function getCaseStudyData(slug: string) {
  // Example data - replace with actual API call
  const caseStudies = {
    'intel-manufacturing': {
      title: 'Intel: Manufacturing Root Cause Analysis',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: '/images/case-study/intel-manufacturing.jpg',
      sections: {
        background: 'Chip manufacturing is a complex, dynamic process...',
        challenge: 'Machine downtime in semiconductor fab costs millions of $s...',
        solution: 'Using Articul8\'s GenAI platform, the customer ingested...',
        outcomes: 'Using the Articul8 GenAI platform, the customer processed...'
      }
    }
    // Add more case studies here
  };

  const caseStudy = caseStudies[slug];
  if (!caseStudy) {
    notFound();
  }

  return caseStudy;
}

export default async function CaseStudyPage({
  params
}: {
  params: { slug: string }
}) {
  const caseStudy = await getCaseStudyData(params.slug);

  return (
    <main className="bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <CaseStudyDetailSection data={caseStudy} />
      </div>
    </main>
  )
}

// Generate static params for static generation
export async function generateStaticParams() {
  // This would come from your CMS or API
  const slugs = ['intel-manufacturing'];
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
} 