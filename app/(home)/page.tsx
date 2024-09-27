import Hero from './Hero';
import Features from './Features';
import BlogPreview from './BlogPreview';
import Contact from './Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Welcome to our home page',
};

const HomePage = () => {
 
  return (
    <div>
      <Hero />
      <Features />
      <BlogPreview />
      <Contact />
    </div>
  );
};

export default HomePage;
