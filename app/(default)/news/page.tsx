import { Metadata } from 'next';
import LinkedInFeedClient from './LinkedInFeedClient';

export const metadata: Metadata = {
  title: 'Articul8 | News',
  // description:
  //   'We are researchers at heart, dedicated to developing exceptional products that delight our customers.',
};

export default function LinkedInFeedPage() {
  return <LinkedInFeedClient />;
}
