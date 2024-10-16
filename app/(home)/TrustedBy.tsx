import Image from 'next/image';

const TrustedBy = () => {
  const companies = ['aws', 'nielseniq', 'franklin-templeton', 'intel', 'bcg', 'ctc', 'uptycs', 'aiaa'];

  return (
    <section className='bg-white py-8 sm:py-12'>
      <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24'>
        <h2 className='text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8'>
          Trusted by leading global enterprises
        </h2>
        <div className='overflow-x-auto scrollbar-hide -mx-4 sm:mx-0'>
          <div className='flex justify-start sm:justify-center items-center gap-8 sm:gap-12 min-w-max px-4 sm:px-0'>
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
