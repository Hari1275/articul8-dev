import { useEffect, useState } from "react";
import Image from 'next/image';


const UnlockSectionHeader=()=> {
  const words = ['New revenue','Innovation','Efficiency','Differentiation'];
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeEffect = () => {
      const current = words[currentIndex];
      if (isDeleting) {
        setCurrentWord(current.substring(0, currentWord.length - 1));
      } else {
        setCurrentWord(current.substring(0, currentWord.length + 1));
      }

      if (!isDeleting && currentWord === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const timer = setTimeout(typeEffect, isDeleting ? 50 : 150);
    return () => clearTimeout(timer);
  }, [currentWord, currentIndex, isDeleting]);
 return (
    <section className='bg-white py-8 sm:py-12'>
      <div className='container mx-auto px-4'>
    
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center leading-tight'>
          Unlock{' '}
          <span className='inline-flex items-center h-[1.2em] overflow-hidden align-middle'>
            <Image
              src='/images/icons/section-open.svg'
              alt='Open bracket'
              width={22}
              height={22}
              className='mr-1 object-contain w-[15px] sm:w-[20px] md:w-[22px]'
              sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 22px"
              priority
            />
            <span className='text-[#FA05C3] inline-block min-w-[0.1em] align-middle'>{currentWord}</span>
            <Image
              src='/images/icons/section-closed.svg'
              alt='Close bracket'
              width={22}
              height={22}
              className='ml-1 object-contain w-[15px] sm:w-[20px] md:w-[22px]'
              sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 22px"
              priority
            />
          </span>{' '}
          with your data
        </h2>
        </div>
        </section>

);

}
export default UnlockSectionHeader;
