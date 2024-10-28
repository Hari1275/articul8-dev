import React from 'react';
import Image from 'next/image';

const TeamPhotoSection: React.FC = () => {
  return (
    <section className="w-full py-2 bg-white">
      <div className="container mx-auto px-4">
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
            <Image
              src="/images/team-photo.png" 
              alt="Our team members sitting in a V-formation on benches"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
     
      </div>
    </section>
  );
};

export default TeamPhotoSection;
