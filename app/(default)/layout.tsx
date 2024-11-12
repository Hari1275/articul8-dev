import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../components/ErrorBoundary';
import { getHeaderData, getFooterData } from '../../utils/strapi';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerData, footerData] = await Promise.all([
    getHeaderData(),
    getFooterData()
  ]);

  return (
    <ErrorBoundary>
      <Header data={headerData.data} />
      <main>{children}</main>
      <Footer data={footerData.data} />
    </ErrorBoundary>
  );
} 