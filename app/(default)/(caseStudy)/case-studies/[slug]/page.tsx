import '../../../../../styles/globals.css';
import CaseStudyDetailSection from './CaseStudyDetailSection';
import { notFound } from 'next/navigation';
import ErrorBoundary from '../components/ErrorBoundary';
import { CASE_STUDIES } from '../data/caseStudies';

// Create interfaces to match the data structure
interface CaseStudyBasicDetail {
  Title: string;
  Content: string;
  Image: {
    url: string;
  };
  logo?: string;
}

interface CaseStudy {
  BasicDetail: CaseStudyBasicDetail;
  Background?: string;
  Challenge?: string;
  Solution?: {
    content: string;
    videoUrl?: string;
  };
  Outcomes?: Array<{
    Title: string;
    Content: string;
  }>;
  PercentageCards?: Array<{
    Percentage: string;
    Title: string;
    color?: string; 
  }>;
}

// Create a function to generate URL-friendly slugs
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim();
};

// Get case study data based on slug
function getCaseStudyData(slug: string) {
  const caseStudy = CASE_STUDIES.find(
    study => createSlug(study.BasicDetail.Title) === slug
  ) as CaseStudy | undefined;
  
  if (!caseStudy) {
    notFound();
  }

  return {
    title: caseStudy.BasicDetail.Title,
    description: caseStudy.BasicDetail.Content,
    image: caseStudy.BasicDetail.Image.url,
    logo: caseStudy.BasicDetail.logo,
    sections: {
      background: caseStudy.Background || '',
      challenge: caseStudy.Challenge || '',
      solution: {
        content: caseStudy.Solution?.content || '',
        videoUrl: caseStudy.Solution?.videoUrl
      },
      outcomes: caseStudy.Outcomes?.map(outcome => ({
        title: outcome.Title,
        content: outcome.Content
      })) || []
    },
    statistics: caseStudy.PercentageCards?.map(card => ({
      value: card.Percentage,
      label: card.Title,
      color: card.color || '#FA05C3'
    })) || []
  };
}

export default function CaseStudyPage({
  params
}: {  
  params: { slug: string }
}) {
  const caseStudy = getCaseStudyData(params.slug);

  return (
    <ErrorBoundary>
      <main className="bg-white">
        <CaseStudyDetailSection data={caseStudy} />
        <div className="py-8"></div>
      </main>
    </ErrorBoundary>
  )
}

// Generate static params for static generation
export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: createSlug(study.BasicDetail.Title),
  }));
} 