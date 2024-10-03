import { Inter,Space_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});
// // Load your custom font
// const customFont = localFont({
//   src: './fonts/Fontspring-DEMO-proximanova-bold.otf',
//   variable: '--font-custom',
// });

const customFont = localFont({
  src: [
    {
      path: './fonts/Fontspring-DEMO-proximanova-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Fontspring-DEMO-proximanova-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Fontspring-DEMO-proximanova-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
       <body className={`${customFont.variable} ${spaceGrotesk.variable} font-custom`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}