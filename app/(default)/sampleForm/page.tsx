'use client';
import React, { useEffect, useRef } from 'react';
import '../../../styles/globals.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SampleFormPage: React.FC<ModalProps> = ({ isOpen = true, onClose }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && formContainerRef.current) {
      // Inject external content directly into the div
      const formContainer = formContainerRef.current;

      formContainer.innerHTML = `
          <div
        data-form-id='d4ab0e7c-2593-ef11-ac21-7c1e521ac562'
        data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/940bd128-2956-ef11-bfdf-6045bddbb00e/landingpageforms'
        data-cached-form-url='https://assets-usa.mkt.dynamics.com/940bd128-2956-ef11-bfdf-6045bddbb00e/digitalassets/forms/d4ab0e7c-2593-ef11-ac21-7c1e521ac562' ></div>
      `;

      // Load external script
      const script = document.createElement('script');
      script.src =
        'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js';
      script.async = true;
      formContainer.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = ''; 
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='md:pt-[120px] pt-8 lg:pt-14 pb-0 md:pb-6 bg-white'>
      <div className='bg-white flex items-center justify-center min-h-screen p-1'>
        <div
          ref={formContainerRef}
          className='form-container bg-white h-full rounded-lg w-full max-w-4xl p-1'></div>
      </div>
    </div>
  );
};

export default SampleFormPage;
