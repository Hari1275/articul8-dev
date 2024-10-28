import Image from 'next/image';

export default function CEOQuoteSection() {
  return (
    <section className='bg-white py-12 sm:py-24'>
      <div className='container mx-auto px-4 sm:px-6 md:relative'>
        <div className='flex flex-col sm:flex-row items-center md:items-start  gap-8 sm:gap-16'>
          <div className='w-full sm:w-1/2 order-1 sm:order-2'>
            <Image
              src='/images/arun-karthi-subramaniyan.png'
              alt='Arun Karthi Subramaniyan'
              width={600}
              height={600}
              className='w-full h-auto object-cover rounded-lg'
            />
          </div>
          <div className='w-full sm:w-1/2 order-2 sm:order-1'>
            <Image
              src='/images/icons/quote.svg'
              alt='quote'
              width={40}
              height={40}
              priority
            />
            <h3 className='font-proxima-nova text-[30px] sm:text-[36px] font-bold leading-[36px] sm:leading-[43.2px] text-[#090914] mb-6 mt-6 sm:pt-10 sm:pb-16'>
              We don't just build software for our customers - we use it
              ourselves every single day, for almost every task.
            </h3>
            <div className='md:absolute bottom-0 left-6'>
              <p className='font-proxima-nova text-[24px] font-bold leading-[29.23px] text-black'>
                Arun Karthi Subramaniyan
              </p>
              <p className='font-proxima-nova text-[24px] font-normal leading-[29.23px] text-black'>
                CEO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
