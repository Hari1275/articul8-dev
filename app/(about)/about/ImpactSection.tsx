import Image from 'next/image';

export default function ImpactSection() {
  return (
    <section className='bg-white py-0 sm:py-0'>
      <div className='container mx-auto px-4 sm:px-6'>
        <h2 className='font-space-grotesk text-[30px] xl:text-[56px] lg:text-[54px] lg:leading-[56px] font-bold leading-[38.28px] xl:leading-[71.46px] text-black text-center sm:text-left mb-4 sm:mb-10'>
          <span className='block sm:inline'>Driven by  <span className='text-[#FA05C3]'>impact,</span> </span>{' '}
          <span className='block sm:inline'>rooted in research</span>
        </h2>
        <div className='flex flex-col sm:flex-row  sm:items-center  gap-10 sm:gap-12'>
          <div className='hidden sm:block w-full sm:w-1/2 order-1 sm:order-1'>
            <Image
              src='/images/icons/about/team-photos.jpg'
              alt='Our team'
              width={600}
              height={400}
              className='w-full h-auto object-cover rounded-[25px]'
            />
          </div>
          <div className='w-full sm:w-1/2 order-1 sm:order-1 sm:hidden'>
            <Image
              src='/images/icons/about/team-photos.jpg'
              alt='Our team'
              width={600}
              height={400}
              className='w-full h-auto object-cover rounded-[25px]'
            />
          </div>
          <div className='w-full sm:w-1/2 order-2 sm:order-2'>
            <p className='font-proxima-nova text-[16px] sm:text-[24px] font-normal leading-[19.2px] sm:leading-[28.8px]  2xl:text-[28px] 2xl:leading-[36.6px] text-black text-center sm:text-left mb-4 sm:mb-6'>
              We are a team of passionate innovators, relentlessly pursuing
              excellence in AI. Born from a shared vision to push the boundaries
              of what's possible, we thrive on solving complex challenges and
              developing groundbreaking products that transform industries and
              lives. Our commitment goes beyond innovation; we empower each
              other to take ownership, foster a culture of growth and support,
              and make a lasting, positive impact on the world.
            </p>
            <p className='font-proxima-nova text-[16px] sm:text-[24px] font-normal leading-[19.2px] sm:leading-[28.8px]  2xl:text-[28px] 2xl:leading-[36.6px] text-black text-center sm:text-left'>
              A look back, and our journey has been one of unwavering dedication
              and perseverance, instilling in us an "irrational confidence" to
              achieve the seemingly impossible. Rooted in research and fueled by
              a shared vision, we are building a future where AI-powered
              innovation is accessible, reliable, and benefits every person on
              the planet.
            </p>
          </div>
        </div>
      </div>
      <div className='hidden sm:flex justify-start items-start sm:pt-[120px] pt-[100px]'>
        <Image
          src='/images/icons/vertical-strip-left.svg'
          alt='Decorative vertical strip'
          width={800}
          height={800}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>
    </section>
  );
}
