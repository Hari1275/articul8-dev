// import React, { useEffect, useRef } from 'react';

// // Declare the FormLoader type
// interface FormLoader {
//   load: () => void;
// }

// // Extend the Window interface
// declare global {
//   interface Window {
//     FormLoader?: FormLoader;
//   }
// }

// interface EmbeddedPopupProps {
//   onClose: () => void;
// }

// const EmbeddedPopup: React.FC<EmbeddedPopupProps> = ({ onClose }) => {
//   const formContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const loadScript = () => {
//       const script = document.createElement('script');
//       script.src =
//         'https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js';
//       script.async = true;
//       script.onload = () => {
//         // Once the script is loaded, initialize the form
//         if (window.FormLoader) {
//           window.FormLoader.load();
//         }
//       };
//       document.body.appendChild(script);

//       return () => {
//         document.body.removeChild(script);
//       };
//     };

//     // Delay script loading to ensure DOM is ready
//     const timer = setTimeout(loadScript, 100);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
//       <div className='bg-white p-6 rounded-lg max-w-md w-full'>
//         <button onClick={onClose} className='float-right text-xl'>
//           &times;
//         </button>
//         <div
//           ref={formContainerRef}
//           data-form-id='c0062fc7-0d86-ef11-ac21-002248069669'
//           data-form-api-url='https://public-usa.mkt.dynamics.com/api/v1.0/orgs/51133799-f384-ef11-ac1e-000d3a106820/landingpageforms'
//           data-cached-form-url='https://assets-usa.mkt.dynamics.com/51133799-f384-ef11-ac1e-000d3a106820/digitalassets/forms/c0062fc7-0d86-ef11-ac21-002248069669'
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default EmbeddedPopup;
