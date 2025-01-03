import Image from 'next/image';

export default function MissionSection() {
  return (
    <section className='bg-white py-12  sm:py-12 md:py-12 relative'>
      <div className='container mx-auto px-4 sm:px-6 '>
        <h1 className='font-space-grotesk text-[40px] sm:text-[64px] font-bold leading-[51.04px] sm:leading-[81.66px] text-black sm:mb-8 mb-4 xl:mb-3 mx-auto text-center sm:text-left xl:text-center'>
          BUILDING FOR A BETTER TOMORROW
        </h1>
        <p className='font-proxima-nova text-[18px] sm:text-[40px] font-normal sm:font-semibold leading-[21.92px] sm:leading-[48.72px] text-black mx-auto text-center sm:text-left xl:text-[32px] xl:text-center'>
          <span className='xl:block '>
            We are researchers at heart, dedicated to developing exceptional products that delight our customers.
          </span>
          {/* <span className='xl:block xl:text-center'>products that delight our customers.</span> */}
        </p>
      </div>
      <div className='hidden sm:flex justify-end items-end pt-12'>
        <Image
          src='/images/icons/vertical-strip.svg'
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
