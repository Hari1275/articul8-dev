'use client';
import React, { useEffect, useRef, useState } from 'react';
import { getFormData } from '../utils/strapi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CTAForm: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [iframe, setIframe] = useState<HTMLIFrameElement | null>(null);
  const [formHtml, setFormHtml] = useState<string>('');

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const formData = await getFormData();
        setFormHtml(formData.data.A8SignUpForA8Essential);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };
    fetchForm();
  }, []);

  useEffect(() => {
    if (isOpen && formContainerRef.current && formHtml) {
      // Create an iframe for isolated context
      const newIframe = document.createElement('iframe');
      newIframe.style.width = '100%';
      newIframe.style.height = '600px';
      newIframe.style.border = 'none';

      formContainerRef.current.innerHTML = '';
      formContainerRef.current.appendChild(newIframe);
      setIframe(newIframe);

      // Write content to iframe
      const iframeDoc = newIframe.contentDocument || newIframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Contact Form</title>
            </head>
            <body style="margin:0;padding:0;">
              ${formHtml}
            </body>
          </html>
        `);
        iframeDoc.close();
      }
    }

    return () => {
      if (iframe) {
        iframe.remove();
        setIframe(null);
      }
    };
  }, [isOpen, formHtml]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-[9999] overflow-y-auto'>
      <div
        className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
        onClick={onClose}
      ></div>
      <div className='flex items-center justify-center min-h-screen p-4'>
        <div className='relative bg-white rounded-lg w-full max-w-4xl p-6'>
          <button
            onClick={onClose}
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
          <div ref={formContainerRef} className='min-h-[600px] w-full'></div>
        </div>
      </div>
    </div>
  );
};

export default CTAForm;
