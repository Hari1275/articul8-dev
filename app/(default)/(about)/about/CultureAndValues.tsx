import Image from 'next/image';
import ErrorBoundary from '../../../../components/ErrorBoundary';

interface ValueCard {
  id: number;
  Title: string;
  Content: string;
  Icon: {
    url: string;
    alternativeText: string;
  };
}

interface CultureAndValuesProps {
  data: {
    Title: string;
    Content: string;
    SubTitle: string;
    ClutureAndValueCards: ValueCard[];
  };
}

export default function CultureAndValues({ data }: CultureAndValuesProps) {
  return (
    <ErrorBoundary>
      <section className='bg-[#F2F7FF] pb-8 sm:pt-0 sm:pb-20'>
        <div className='container mx-auto px-4 sm:px-6'>
          <h2 className='font-space-grotesk text-[30px] sm:text-[56px] font-bold leading-[45px] sm:leading-[84px] text-black text-center md:text-left mb-4 sm:mb-4'>
            {data?.Title || 'Our culture and values'}
          </h2>
          <p className='font-proxima-nova text-[16px] sm:text-[24px] font-normal leading-[19.2px] sm:leading-[28.8px] text-black text-center md:text-left mb-4 sm:mb-12 mx-auto md:mx-0 xl:text-[24px]'>
            {data?.Content || 
              `At Articul8 AI, we're fostering a culture of excellence, ownership, and continuous improvement. We believe in empowering every team member to take charge and deliver their best work. We encourage a "see something, do something" attitude, promoting a collaborative environment where challenges are met head-on with transparency and trust.`}
          </p>
          <h3 className='font-space-grotesk text-[30px] sm:text-[40px] font-bold leading-[45px] sm:leading-[60px] text-black text-center md:text-left mb-8 sm:mb-12 pt-[10px] sm:pt-0 xl:text-[36px]'>
            {data?.SubTitle || 'What we believe in...'}
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {(data?.ClutureAndValueCards || []).map((value) => (
              <div
                key={value.id}
                className='bg-white p-6 rounded-lg md:shadow-none md:bg-white
                         border border-[#E5E7EB] md:border-[#EAECF0]'
              >
                <Image
                  src={value.Icon.url}
                  alt={value.Icon.alternativeText || value.Title}
                  width={48}
                  height={48}
                  className='mb-4'
                />
                <h4 className='font-space-grotesk text-[28px] sm:text-[40px] font-bold leading-[30px] text-black mb-4 xl:text-[32px]'>
                  {value.Title}
                </h4>
                <p className='font-proxima-nova text-[16px] sm:text-[20px] font-normal leading-[19.2px] sm:leading-[24px] text-black xl:text-[20px]'>
                  {value.Content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
}
