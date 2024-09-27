import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Articul8</h3>
            <p className="text-sm text-gray-600">Bringing order to chaos with GenAI</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link href="/contact-us" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-600">Email: info@articul8.ai</p>
            <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2024 Articul8. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
