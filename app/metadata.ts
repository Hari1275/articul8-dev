import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Articul8 - Your GenAI Platform',
    template: '%s | Articul8'
  },
  description: 'The GenAI platform that simply works. Bring order to chaos.',
  keywords: ['GenAI', 'Artificial Intelligence', 'Articul8', 'AI Platform'],
  authors: [{ name: 'Articul8 Team' }],
  creator: 'Articul8',
  publisher: 'Articul8',
  openGraph: {
    title: 'Articul8 - Your GenAI Platform',
    description: 'The GenAI platform that simply works. Bring order to chaos.',
    url: 'https://www.articul8.ai',
    siteName: 'Articul8',
    images: [
      {
        url: 'https://www.articul8.ai/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articul8 - Your GenAI Platform',
    description: 'The GenAI platform that simply works. Bring order to chaos.',
    creator: '@articul8_ai',
    images: ['https://www.articul8.ai/twitter-image.jpg'],
  },
}