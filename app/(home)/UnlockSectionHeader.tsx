import { useEffect, useState } from "react";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const UnlockSectionHeader = () => {
  const words = ['New revenue', 'Innovation', 'Efficiency', 'Differentiation'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setTimeout(() => {
          setIsExpanded(true);
        }, 100); // Small delay before expanding
      }, 400); // Wait for brackets to close
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='bg-white py-8 sm:py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-12 text-center leading-tight'>
          Unlock{' '}
          <span className='inline-flex items-center h-[1.2em] overflow-hidden align-middle'>
            <motion.div
              animate={{ width: isExpanded ? 'auto' : 'auto' }}
              transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
              className='flex items-center'
            >
              <Image
                src='/images/icons/section-open.svg'
                alt='Open bracket'
                width={22}
                height={22}
                className='mr-1 object-contain w-[15px] sm:w-[20px] md:w-[22px]'
                sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 22px"
                priority
              />
              <motion.div
                animate={{ width: isExpanded ? 'auto' : '1px' }}
                transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
                className='overflow-hidden h-full'
                style={{ minWidth: '1px' }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={currentIndex}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ 
                      y: { duration: 0.3, ease: [0.33, 1, 0.68, 1] },
                      opacity: { duration: 0.2, ease: 'easeInOut' }
                    }}
                    className='inline-block whitespace-nowrap text-[#FA05C3]'
                    style={{ display: 'block', position: 'relative' }}
                  >
                    {words[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
              <Image
                src='/images/icons/section-closed.svg'
                alt='Close bracket'
                width={22}
                height={22}
                className='ml-1 object-contain w-[15px] sm:w-[20px] md:w-[22px]'
                sizes="(max-width: 640px) 15px, (max-width: 768px) 20px, 22px"
                priority
              />
            </motion.div>
          </span>{' '}
          with your data
        </h2>
      </div>
    </section>
  );
}

export default UnlockSectionHeader;
