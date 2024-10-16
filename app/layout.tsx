import { Space_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';

import Header from '../components/Header';
import Footer from '../components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const proximaNova = localFont({
  src: [
    {
      path: './fonts/ProximaNova-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Proxima Nova Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Proxima Nova Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Proxima Nova Extrabold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-proxima-nova',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${proximaNova.variable} ${spaceGrotesk.variable} font-proxima-nova`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
