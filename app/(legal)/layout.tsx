export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto bg-white">
      {children}
    </main>
  );
} 