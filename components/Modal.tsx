'use client';
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formContentRef = useRef<HTMLDivElement | null>(null);

  const cleanupForm = () => {
    // Remove script
    const scriptToRemove = document.querySelector('script[data-form-script]');
    if (scriptToRemove) {
      scriptToRemove.remove();
    }

    // Clear FormLoader from window object
    if (window.FormLoader) {
      delete window.FormLoader;
    }
  };

  const initializeForm = () => {
    // Create fresh form container
    if (formContainerRef.current) {
      // Store the original form div
      const originalFormDiv =
        formContainerRef.current.querySelector('[data-form-id]');
      if (originalFormDiv) {
        formContentRef.current = originalFormDiv.cloneNode(
          true
        ) as HTMLDivElement;
      }
    }

    // Create and load new script
    const script = document.createElement('script');
    script.src =
      'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js';
    script.async = true;
    script.setAttribute('data-form-script', 'true');

    script.onload = () => {
      if (window.FormLoader) {
        window.FormLoader.Refresh();
      }
    };

    document.body.appendChild(script);
  };

  const handleClose = () => {
    // Clean up current form
    cleanupForm();

    // Clear and recreate form container
    if (formContainerRef.current && formContentRef.current) {
      formContainerRef.current.innerHTML = '';
      const newFormDiv = formContentRef.current.cloneNode(true);
      formContainerRef.current.appendChild(newFormDiv);
    }

    // Close modal
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      cleanupForm();
      return;
    }

    // Initialize form when modal opens
    initializeForm();

    return () => {
      cleanupForm();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[9999] overflow-y-auto'>
      <div
        className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
        onClick={handleClose}
      ></div>
      <div className='flex items-center justify-center min-h-screen p-4'>
        <div className='relative bg-white rounded-lg w-full max-w-4xl p-6'>
          <button
            onClick={handleClose}
            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-[10000]'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <div ref={formContainerRef} className='min-h-[600px] w-full'>
            <div
              data-form-id='d4ab0e7c-2593-ef11-ac21-7c1e521ac562'
              data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/51133799-f384-ef11-ac1e-000d3a106820/landingpageforms'
              data-cached-form-url='https://assets-usa.mkt.dynamics.com/51133799-f384-ef11-ac1e-000d3a106820/digitalassets/forms/d4ab0e7c-2593-ef11-ac21-7c1e521ac562'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

declare global {
  interface Window {
    FormLoader?: {
      Refresh: () => void;
    };
  }
}

export default ProductModal;
