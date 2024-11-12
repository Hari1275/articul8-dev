import ErrorBoundary from '../../../../components/ErrorBoundary';

interface HeroProps {
  data: {
    BannerVideo: {
      url: string;
      alternativeText: string;
    };
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <ErrorBoundary>
      <section className='static h-auto md:mt-[60px] mt-[40px]'>
        <video
          src={data?.BannerVideo?.url || '/images/icons/about/about-hero.mp4'}
          autoPlay
          muted
          loop
          playsInline
          className='static w-full h-auto object-contain'
        />
      </section>
    </ErrorBoundary>
  );
}



