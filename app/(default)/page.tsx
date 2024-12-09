
import { Metadata } from 'next';
import HomePageClient from './HomePageClient'; 

export const metadata: Metadata = {
  title: 'Articul8 | The GenAI platform that simply works.',
  description:
    'Welcome to Articul8 - The GenAI platform that brings order to chaos.',
};


export default function Page() {
  return <HomePageClient />;
}
