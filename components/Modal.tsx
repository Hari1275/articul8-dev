'use client';
import React, { useEffect, useRef, useState } from 'react';
import FormLoaderScript from './FormLoaderScript';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const initializeForm = () => {
    console.log('Initializing form...'); // Debug log
    if (!formContainerRef.current) {
      console.log('Form container ref not found'); // Debug log
      return;
    }

    // Clear existing content first
    formContainerRef.current.innerHTML = '';

    // Add new form content
    const formDiv = document.createElement('div');
    formDiv.setAttribute('data-form-id', 'd4ab0e7c-2593-ef11-ac21-7c1e521ac562');
    formDiv.setAttribute('data-form-api-url', 'https://public-usa.mkt.dynamics.com/api/v1.0/orgs/51133799-f384-ef11-ac1e-000d3a106820/landingpageforms');
    formDiv.setAttribute('data-cached-form-url', 'https://assets-usa.mkt.dynamics.com/51133799-f384-ef11-ac1e-000d3a106820/digitalassets/forms/d4ab0e7c-2593-ef11-ac21-7c1e521ac562');
    
    formContainerRef.current.appendChild(formDiv);

    // Check and initialize FormLoader
    if (window.FormLoader) {
      console.log('FormLoader found, refreshing...'); // Debug log
      setTimeout(() => {
        window.FormLoader?.Refresh();
        setIsLoading(false);
      }, 600);
    } else {
      console.log('FormLoader not found'); // Debug log
    }
  };

  // Handle script load
  const handleScriptLoad = () => {
    console.log('Script loaded callback triggered'); // Debug log
    setIsScriptLoaded(true);
  };

  // Handle form initialization when script is loaded and modal is open
  useEffect(() => {
    if (isOpen && isScriptLoaded) {
      console.log('Attempting to initialize form...'); // Debug log
      const initTimer = setTimeout(() => {
        initializeForm();
      }, 200); // Give some time for FormLoader to be fully initialized

      return () => clearTimeout(initTimer);
    }
  }, [isOpen, isScriptLoaded]);

  // Cleanup when modal closes
  useEffect(() => {
    return () => {
      if (!isOpen && formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
        setIsLoading(true);
        setIsScriptLoaded(false);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <FormLoaderScript onLoad={handleScriptLoad} />
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className="relative bg-white rounded-lg w-full max-w-4xl p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-[10000]"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div 
            ref={formContainerRef}
            className="min-h-[600px] w-full"
          >
            {isLoading && (
              <div className="flex items-center justify-center h-[600px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            )}
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

export default Modal;