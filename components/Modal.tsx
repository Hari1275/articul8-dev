'use client';
import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Remove any existing scripts first
      const existingScript = document.querySelector('script[data-form-loader]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and add the form loader script
      const script = document.createElement('script');
      script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js';
      script.async = true;
      script.setAttribute('data-form-loader', 'true');
      
      script.onload = () => {
        console.log('Form script loaded');
        if (window.FormLoader) {
          window.FormLoader.Refresh();
        }
      };

      document.body.appendChild(script);
    }

    return () => {
      // Cleanup script when modal closes
      const script = document.querySelector('script[data-form-loader]');
      if (script) {
        script.remove();
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg w-full max-w-4xl p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-[10000]"
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
            <div
              data-form-id="9223da42-6f91-ef11-ac21-7c1e5214c89c"
              data-form-api-url="https://public-usa.mkt.dynamics.com/api/v1.0/orgs/51133799-f384-ef11-ac1e-000d3a106820/landingpageforms"
              data-cached-form-url="https://assets-usa.mkt.dynamics.com/51133799-f384-ef11-ac1e-000d3a106820/digitalassets/forms/9223da42-6f91-ef11-ac21-7c1e5214c89c"
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

export default Modal;
