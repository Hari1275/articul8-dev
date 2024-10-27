import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative h-[50vh] sm:h-[80vh]'>
      <Image
        src='/images/about-hero.png'
        alt='Team gathering'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='z-0'
      />
    </section>
  );
}
