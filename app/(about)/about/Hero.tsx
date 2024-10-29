
export default function Hero() {
  return (
    <section className='relative h-[60vh] sm:h-[100vh]'>
      <video
        src='/images/icons/about/about-hero.mp4'  
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover z-0'
      />
    </section>
  );
}
