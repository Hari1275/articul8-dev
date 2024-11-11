import { Space_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';



const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const proximaNova = localFont({
  src: [
    {
      path: './fonts/Proxima Nova Thin.otf',
      weight: '300',
      style: 'normal',
    },
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
      <link rel="icon" href="/favicon.svg" type="image/png" sizes="32x32" />
      <body className={`${proximaNova.variable} ${spaceGrotesk.variable} font-proxima-nova`}>
        {children}
      </body>
    </html>
  );
}
