import Image from 'next/image';

const values = [
  {
    icon: '/images/icons/about/staying-humble.svg',
    title: 'Humility',
    description:
      'Maintaining a modest and grounded attitude, recognizing that there is always more to learn and improve upon.',
  },
  {
    icon: '/images/icons/about/being-aware.svg',
    title: 'Awareness',
    description:
      'Being mindful of your surroundings, actions, and impact, and striving to make informed and responsible decisions.',
  },
  {
    icon: '/images/icons/about/being-hungry.svg',
    title: 'Curiosity',
    description:
      'Having a strong desire for growth, improvement, and achievement, constantly seeking new challenges and opportunities.',
  },
  {
    icon: '/images/icons/about/committing-to-excellence.svg',
    title: 'Excellence',
    description:
      'Dedicating ourselves to achieving the highest standards of quality and integrity in everything we do.',
  },
];

export default function CultureAndValues() {
  return (
    <section className=' bg-[#F2F7FF] py-8 sm:pt-16 sm:pb-20'>
      <div className='container mx-auto px-4 sm:px-6'>
        <h2 className='font-space-grotesk text-[30px] sm:text-[56px] font-bold leading-[45px] sm:leading-[84px] text-black text-center md:text-left mb-4 sm:mb-4'>
          Our culture and values
        </h2>
        <p className='font-proxima-nova text-[16px] sm:text-[24px] font-normal leading-[19.2px] sm:leading-[28.8px] text-black text-center md:text-left mb-4 sm:mb-12 mx-auto md:mx-0 xl:text-[24px]'>
          At Articul8 AI, we're fostering a culture of excellence, ownership,
          and continuous improvement. We believe in empowering every team member
          to take charge and deliver their best work. We encourage a 'see
          something, do something' attitude, promoting a collaborative
          environment where challenges are met head-on with transparency and
          trust.
        </p>
        <h3 className='font-space-grotesk text-[30px] sm:text-[40px] font-bold leading-[45px] sm:leading-[60px] text-black text-center md:text-left mb-8 sm:mb-12 pt-[10px] sm:pt-0 xl:text-[36px]'>
        What we believe in...
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {values.map((value, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg  md:shadow-none md:bg-white
                         border border-[#E5E7EB] md:border-[#EAECF0] 
                         '
            >
              <Image
                src={value.icon}
                alt={value.title}
                width={48}
                height={48}
                className='mb-4'
              />
              <h4 className='font-space-grotesk text-[28px] sm:text-[40px] font-bold leading-[30px] text-black mb-4 xl:text-[32px]'>
                {value.title}
              </h4>
              <p className='font-proxima-nova text-[16px] sm:text-[20px] font-normal leading-[19.2px] sm:leading-[24px] text-black xl:text-[20px]'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
