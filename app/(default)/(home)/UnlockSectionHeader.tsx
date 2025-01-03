import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const UnlockSectionHeader = () => {
  const words = ['New Revenue', 'Innovation', 'Efficiency', 'Differentiation'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {
          setIsExpanded(true);
        }, 800);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className='bg-[#F9FAFB] pb-8 sm:py-0 sm:pt-0'>
      <div className='container mx-auto px-4'>
        <h2 className='font-space-grotesk text-[26px] sm:text-[30px] md:text-[36px] lg:text-[46px] xl:text-[54px] font-[700] leading-tight mb-6 sm:mb-8 md:mb-12 text-center   text-[#060606] leading-[38.28px] sm:leading-[84px] lg:leading-[84px] xl:leading-[84px]'
        
        style={{paddingTop: '0px !important'}}
        >
          <span className='block sm:inline'>Unlock</span>{' '}
          <span className='inline-flex flex-col sm:flex-row items-center h-auto sm:h-[1.2em] overflow-hidden align-middle sm:py-4'>
            <motion.div
              animate={{ width: isExpanded ? 'auto' : 'auto' }}
              transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              className='flex items-center justify-center'
            >
              <Image
                src='/images/open-bracket.svg'
                alt='Open bracket'
                width={22}
                height={22}
                className='mr-1 object-contain w-[15px] sm:w-[20px] md:w-[22px]'
                sizes='(max-width: 640px) 15px, (max-width: 768px) 20px, 22px'
                priority
              />
              <motion.div
                animate={{ width: isExpanded ? 'auto' : '1px' }}
                transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
                className='overflow-hidden h-full'
                style={{ minWidth: '1px' }}
              >
                <AnimatePresence mode='wait' initial={false}>
                  <motion.span
                    key={currentIndex}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{
                      y: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                      opacity: { duration: 0.2, ease: 'easeInOut' },
                    }}
                    className='inline-block whitespace-nowrap text-[#112FFF] px-1'
                    style={{ display: 'block', position: 'relative' }}
                  >
                    {words[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
              <Image
                src='/images/close-bracket.svg'
                alt='Close bracket'
                width={22}
                height={22}
                className='ml-1 object-contain w-[15px] sm:w-[20px] md:w-[22px]'
                sizes='(max-width: 640px) 15px, (max-width: 768px) 20px, 22px'
                priority
              />
            </motion.div>
          </span>{' '}
          <span className='block sm:inline'>with your data</span>
        </h2>
      </div>
    </section>
  );
};

export default UnlockSectionHeader;
