import React from 'react';
import Hero from './Hero';
import Features from './Features';
import BlogPreview from './BlogPreview';
import Contact from './Contact';
import Seo from '../../components/Seo';

const HomePage = () => {
  return (
    <div>
      <Seo
        title='Home - Articul8'
        description='Welcome to Articul8, your go-to platform for insightful blogs.'
      />
      <Hero />
      <Features />
      <BlogPreview />
      <Contact />
    </div>
  );
};

export default HomePage;
