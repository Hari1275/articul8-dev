import React from 'react';
import Image from 'next/image';

const TeamPhotoSection: React.FC = () => {
  return (
    <section className="w-full py-2 bg-white">
      <div className="container mx-auto px-4">
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
          <video
        src='/images/icons/about/team.mp4'  
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover z-0'
      />
          </div>
     
      </div>
    </section>
  );
};

export default TeamPhotoSection;
