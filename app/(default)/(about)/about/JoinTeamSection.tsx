import React from 'react';
import Link from 'next/link';
import ErrorBoundary from '../../../../components/ErrorBoundary';

interface JoinTeamSectionProps {
  data: {
    MainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
      SuffixTitle: string;
    };
    CtaButton: {
      Title: string;
      Herf: string;
    };
  };
}

const JoinTeamSection = ({ data }: JoinTeamSectionProps) => {
  return (
    <ErrorBoundary>
      <section className="w-full py-6 sm:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-space-grotesk text-[30px] leading-[45px] md:text-[80px] md:leading-[120px] font-bold mb-8">
            {data?.MainTitle?.PrefixTitle || 'Come,'}{' '}
            <span className='text-[#FF00C7]'>{data?.MainTitle?.HighlightedTitle || 'Join'}</span>{' '}
            {data?.MainTitle?.SuffixTitle || 'Our Team of Innovators'}
          </h2>
          <Link 
            href={data?.CtaButton?.Herf || "https://jobs.ashbyhq.com/articul8"}
            target="_blank"
            className="inline-block font-space-grotesk hover:underline text-[20px] leading-[25.52px] font-[700] px-[24px] py-[16px] bg-[#1130FF] text-white font-proxima-nova rounded-[4px] hover:bg-opacity-90 transition-colors mb-4 sm:mb-0"
          >
            {data?.CtaButton?.Title || "View Current Openings"}
          </Link>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default JoinTeamSection;
