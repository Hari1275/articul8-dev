import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../components/ErrorBoundary';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <Header />
      <main>{children}</main>
      <Footer />
    </ErrorBoundary>
  );
} 