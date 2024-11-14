import Image from 'next/image';

export default function CEOQuoteSection() {
  return (
    <section className='bg-white py-12 sm:py-24'>
      <div className='container mx-auto px-4 sm:px-6 md:relative'>
        <div className='flex flex-col md:flex-row items-center md:items-center xl:items-start lg:items-center  gap-8 sm:gap-16'>
          <div className='w-full md:w-1/2 order-1 md:order-2'>
            <Image
              src='/images/arun-karthi-subramaniyan.png'
              alt='Arun Karthi Subramaniyan'
              width={600}
              height={600}
              className='w-full h-auto object-cover rounded-lg'
            />
          </div>
          <div className='w-full md:w-1/2 order-2 md:order-1'>
            <Image
              src='/images/icons/quote.svg'
              alt='quote'
              width={40}
              height={40}
              className='w-8 h-8 sm:w-10 h-12 '
              priority
            />
            <h3 className='font-proxima-nova text-[24px] sm:text-[26px]   sm:leading-[36px] font-[500] leading-[30px] xl:text-[36px] xl:leading-[43.2px] text-[#090914] mb-6 mt-6 sm:pt-10 sm:pb-8'>
             Enterprise GenAI requires scalable personalization to deliver meaningful outcomes. The gap between enterprise data and business value cannot be closed with a general purpose GenAI platform.
            </h3>
            <div >
              <p className='font-proxima-nova text-[20px] md:text-[24px]  leading-[26px]  font-bold md:leading-[29.23px] text-black'>
                Arun Karthi Subramaniyan
              </p>
              <p className='font-proxima-nova text-[20px] md:text-[24px] leading-[26px]font-normal md:leading-[29.23px] text-black'>
                CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
