'use client';
import Script from 'next/script';

interface FormLoaderScriptProps {
  onLoad?: () => void;
}

export default function FormLoaderScript({ onLoad }: FormLoaderScriptProps) {
  return (
    <>
      <div
        id="form-loader-container"
        style={{ display: 'none' }}
        suppressHydrationWarning
      />
      <Script
        id="form-loader-script"
        src="https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js"
        strategy="beforeInteractive"
        onLoad={() => {
          console.log('Script onLoad triggered');
          // Force script to re-execute
          const script = document.createElement('script');
          script.src = 'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js';
          script.onload = () => {
            console.log('FormLoader script reloaded');
            if (window.FormLoader) {
              console.log('FormLoader is available');
              onLoad?.();
            }
          };
          document.body.appendChild(script);
        }}
      />
    </>
  );
} 