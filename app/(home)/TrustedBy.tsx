import Image from 'next/image';

const TrustedBy = () => {
  const companies = ['aws', 'nielseniq', 'franklin-templeton', 'intel'];

  return (


    <section className='bg-[#F3DFF4]'>
   

      
      <div className='container mx-auto px-4 py-20'>
        <h2 className='text-xl font-semibold text-center mb-8'>
          Trusted by leading global enterprises
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-8'>
          {companies.map((company, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow-sm'>
              <Image
                src={`/images/logos/${company}-logo.svg`}
                alt={company}
                width={120}
                height={40}
                objectFit='contain'
                className='h-8 w-auto'
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
