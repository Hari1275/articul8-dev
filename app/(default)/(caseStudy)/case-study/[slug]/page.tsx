import '../../../../../styles/globals.css';
import { getCaseStudyPageData, createSlug } from '../../../../../utils/strapi';
import CaseStudyDetailSection from './CaseStudyDetailSection';
import { notFound } from 'next/navigation';

// Get case study data based on slug
async function getCaseStudyData(slug: string) {
  const { data } = await getCaseStudyPageData();
  const caseStudy = data.CaseStudies.find(
    study => createSlug(study.BasicDetail.Title) === slug
  );
  
  if (!caseStudy) {
    notFound();
  }

  return {
    title: caseStudy.BasicDetail.Title,
    description: caseStudy.BasicDetail.Content,
    image: caseStudy.BasicDetail.Image.url,
    sections: {
      background: caseStudy.Background,
      challenge: caseStudy.Challenge,
      solution: caseStudy.Solution,
      outcomes: caseStudy.Outcomes.map(outcome => ({
        title: outcome.Title,
        content: outcome.Content
      }))
    },
    statistics: caseStudy.PercentageCards.map(card => ({
      value: `${card.Percentage}%`,
      label: card.Title
    }))
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
  const { data } = await getCaseStudyPageData();
  
  return data.CaseStudies.map((study) => ({
    slug: createSlug(study.BasicDetail.Title),
  }));
} 