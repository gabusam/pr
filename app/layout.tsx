import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Toaster } from '@/components/ui/toaster'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arcade - Interactive Product Demos',
  description: 'Build compelling, on-brand demos in minutes to drive leads, boost product adoption, and more effectively tell your product\'s story.',
  keywords: ['product demos', 'marketing', 'sales', 'customer success', 'demo software'],
  openGraph: {
    title: 'Arcade - Interactive Product Demos',
    description: 'Build compelling, on-brand demos in minutes',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arcade - Interactive Product Demos',
    description: 'Build compelling, on-brand demos in minutes',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}>
        <Providers>
          <ErrorBoundary>
            {children}
            <div className="bottom-glass-bar" />
            <Toaster />
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  )
}