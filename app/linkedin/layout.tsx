import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Feed | Articul8',
  description: 'Latest updates and news from Articul8 on LinkedIn',
}

export default function LinkedInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
} 