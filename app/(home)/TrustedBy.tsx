import Image from 'next/image';

const TrustedBy = () => {
  const companies = ['aws', 'nielseniq', 'franklin-templeton', 'intel', 'bcg', 'ctc', 'uptycs', 'aiaa'];

  return (
    <section className='bg-white py-8'>
      <div className='container mx-auto px-4 sm:px-6'>
        <h2 className='font-proxima-nova font-[600]  text-[14px] leading-[14px] sm:text-[24px] sm:leading-[29.23px]  text-[#737373]  sm:text-[#000000] text-center mb-6 sm:mb-8'>
          Trusted by leading global enterprises
        </h2>
        <div className='overflow-x-auto scrollbar-hide -mx-4 sm:mx-0'>
          <div className='flex justify-center sm:justify-start sm:justify-start items-center gap-16 sm:gap-24 min-w-max  px-12 sm:px-0'>
            {companies.map((company, index) => (
              <div key={index} className='flex-shrink-0'>
                <Image
                  src={`/images/logos/${company}-logo.svg`}
                  alt={company}
                  width={100}
                  height={40}
                  objectFit='contain'
                  className='h-6 sm:h-8 w-auto'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
