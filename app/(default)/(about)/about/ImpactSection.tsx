import Image from 'next/image';
import ErrorBoundary from '../../../../components/ErrorBoundary';

interface ImpactSectionProps {
  data: {
    Content: string;
    mainTitle: {
      PrefixTitle: string;
      HighlightedTitle: string;
      SuffixTitle: string;
    };
    Image: {
      url: string;
      alternativeText: string;
    };
  };
}

export default function ImpactSection({ data }: ImpactSectionProps) {
  const paragraphs = data?.Content?.split('\n') || [];

  return (
    <ErrorBoundary>
      <section className='bg-white py-0 sm:py-0'>
        <div className='container mx-auto px-4 sm:px-6'>
          <h2 className='font-space-grotesk text-[30px] xl:text-[56px] lg:text-[54px] lg:leading-[56px] font-bold leading-[38.28px] xl:leading-[71.46px] text-black text-center sm:text-left mb-4 sm:mb-10'>
            <span className='block sm:inline'>
              {data?.mainTitle?.PrefixTitle || 'Driven by'}{' '}
              <span className='text-[#FA05C3]'>{data?.mainTitle?.HighlightedTitle || 'impact,'}</span>{' '}
            </span>{' '}
            <span className='block sm:inline'>{data?.mainTitle?.SuffixTitle || 'rooted in research'}</span>
          </h2>
          <div className='flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12'>
            <div className='hidden lg:block w-full lg:w-1/2 order-1 lg:order-1'>
              <Image
                src={data?.Image?.url || '/images/icons/about/team-photos.jpg'}
                alt={data?.Image?.alternativeText || 'Our team'}
                width={600}
                height={400}
                className='w-full h-auto object-cover rounded-[25px]'
              />
            </div>
            <div className='w-full lg:w-1/2 order-1 lg:order-1 lg:hidden'>
              <Image
                src={data?.Image?.url || '/images/icons/about/team-photos.jpg'}
                alt={data?.Image?.alternativeText || 'Our team'}
                width={600}
                height={400}
                className='w-full h-auto object-cover rounded-[25px]'
              />
            </div>
            <div className='w-full lg:w-1/2 order-2 lg:order-2'>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className='font-proxima-nova text-[16px] sm:text-[24px] font-normal leading-[19.2px] sm:leading-[28.8px] 2xl:text-[28px] 2xl:leading-[36.6px] text-black text-center sm:text-left mb-4 sm:mb-6'
                >
                  {paragraph}
                </p>
              ))}
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
    </ErrorBoundary>
  );
}
