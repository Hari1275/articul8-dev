import React from 'react';
import ErrorBoundary from '../../../../components/ErrorBoundary';

interface TeamPhotoSectionProps {
  data: {
    BannerVideo: {
      url: string;
      alternativeText: string;
    };
  };
}

const TeamPhotoSection = ({ data }: TeamPhotoSectionProps) => {
  return (
    <ErrorBoundary>
      <section className="w-full py-2 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
            <video
              src={data?.BannerVideo?.url || '/images/icons/about/team.mp4'}
              autoPlay
              muted
              loop
              playsInline
              className='absolute inset-0 w-full h-full object-cover z-0'
            />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default TeamPhotoSection;
