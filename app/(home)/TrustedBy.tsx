import Image from 'next/image';

const TrustedBy = () => {
  const companies = ['aws', 'nielseniq', 'franklin-templeton', 'intel'];

  return (
    <section className='relative py-8 sm:py-12 md:py-16 bg-white w-full'>
      {/* Top horizontal blue stroke */}
      {/* <div className='absolute top-0 left-0 right-0 h-1 bg-blue-500'></div> */}
      <Image
        src='/images/horizontal-line.svg'
        alt='horizontal line'
        width={120}
        height={60}
        objectFit='cover'
        className='w-full h-auto'
        priority
      />
      <div className='max-w-full mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16'>
          Trusted by leading global enterprises
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12'>
          {companies.map((company, index) => (
            <div
              key={index}
              className='flex items-center justify-center bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-sm'
            >
              <Image
                src={`/images/logos/${company}-logo.svg`}
                alt={company}
                width={100}
                height={50}
                objectFit='contain'
                className='w-24 sm:w-28 md:w-32 h-auto'
                priority
              />
            </div>
          ))}
        </div>
        <div className='relative h-[60px] sm:h-[80px] md:h-[100px] mt-8 sm:mt-12 md:mt-16'>
          <div className='absolute bottom-0 right-0'>
            <Image
              src='/images/vertical-lines.svg'
              alt='Decorative vertical lines'
              width={0}
              height={100}
              style={{ width: 'auto', height: '100%' }}
              className='h-[60px] sm:h-[80px] md:h-[100px] w-auto'
              priority
            />
          </div>
        </div>
        <div className='px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-[1.1] sm:leading-[1.05] flex flex-col gap-2 sm:gap-3 md:gap-4'>
            <span>The simplest way to build complex</span>
            <span>
              enterprise <span className='text-pink-500'>GenAI</span>{' '}
              applications
            </span>
            <span>using your expertise.</span>
          </h2>
        </div>
        <div className='relative h-[60px] sm:h-[80px] md:h-[100px] mt-8 sm:mt-12 md:mt-16'>
          <div className='absolute bottom-0 left-0'>
            <Image
              src='/images/vertical-lines-left.svg'
              alt='Decorative vertical lines'
              width={0}
              height={100}
              style={{ width: 'auto', height: '100%' }}
              className='h-[60px] sm:h-[80px] md:h-[100px] w-auto'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
