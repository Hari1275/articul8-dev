import '../../../../../styles/globals.css';
import { CASE_STUDIES } from '../CaseStudySection';
import CaseStudyDetailSection from './CaseStudyDetailSection';
import { notFound } from 'next/navigation';

// Get case study data based on slug
async function getCaseStudyData(slug: string) {
  const caseStudy = CASE_STUDIES.find(study => study.slug === slug);
  
  if (!caseStudy) {
    notFound();
  }

  return {
    title: caseStudy.title,
    description: caseStudy.description,
    image: caseStudy.image,
    sections: caseStudy.sections
  };
}

export default async function CaseStudyPage({
  params
}: {
  params: { slug: string }
}) {
  const caseStudy = await getCaseStudyData(params.slug);

  return (
    <main className="bg-white">
      <CaseStudyDetailSection data={caseStudy} />
      <div className="py-8"></div>
    </main>
  )
}

// Generate static params for static generation
export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
} 