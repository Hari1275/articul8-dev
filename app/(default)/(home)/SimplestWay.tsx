'use client';

import ErrorBoundary from "../../../components/ErrorBoundary";

interface SimplestWayProps {
  data: {
    MainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
      SuffixTitle: string;
    };
  };
}

const SimplestWay = ({ data }: SimplestWayProps) => {
  return (
    <ErrorBoundary>
      <section className='relative py-8 sm:py-12 md:py-16 bg-[#F2F7FF] border-t border-gray-300'>
        <div className='container mx-auto px-[3.5rem] sm:px-6'>
        <h2 className='font-space-grotesk text-[22px] leading-[25.35px] font-[700] text-center sm:text-[42px] md:text-[42px] lg:text-[36px] sm:leading-[63px] max-w-5xl mx-auto'>
          <span className='inline md:block'>
            {data?.MainTitle?.PrefixTitle || 'The fastest way to build sophisticated enterprise'}
          </span>{' '}
          <span className='inline md:block'>
            <span className='text-[#FA05C3]'>{data?.MainTitle?.HighlightedTitle || 'GenAI'}</span>{' '}
            {data?.MainTitle?.SuffixTitle || 'applications using your expertise.'}
          </span>
        </h2>
      </div>
    </section>
    </ErrorBoundary>
  );
};

export default SimplestWay;
