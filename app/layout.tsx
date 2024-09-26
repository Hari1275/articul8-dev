import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <Seo
          title='Articul8'
          description='Your go-to platform for insightful blogs.'
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
