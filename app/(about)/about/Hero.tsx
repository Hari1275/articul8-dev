
export default function Hero() {
  return (
    <section className='static h-auto md:mt-[60px] mt-[40px]'>
      <video
        src='/images/icons/about/about-hero.mp4'
        autoPlay
        muted
        loop
        playsInline
        className='static  w-full h-auto object-contain'
      />
    </section>
  );
}



