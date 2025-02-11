import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Evidence - Modern Data Documentation',
  description: 'Create beautiful data documentation',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full bg-white border-b border-gray-200 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="flex items-center">
                  <span className="text-xl font-bold text-gray-900">Evidence</span>
                </a>
                <div className="hidden md:flex md:ml-10 md:space-x-8">
                  <a href="/docs" className="nav-link">Docs</a>
                  <a href="/examples" className="nav-link">Examples</a>
                  <a href="/pricing" className="nav-link">Pricing</a>
                  <a href="/changelog" className="nav-link">Changelog</a>
                  <a href="/blog" className="nav-link">Blog</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a href="/login" className="nav-link">Log In</a>
                <a href="/get-started" className="btn-primary">
                  Get Started
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="/docs" className="nav-link">Documentation</a></li>
                  <li><a href="/examples" className="nav-link">Examples</a></li>
                  <li><a href="/pricing" className="nav-link">Pricing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="/about" className="nav-link">About</a></li>
                  <li><a href="/blog" className="nav-link">Blog</a></li>
                  <li><a href="/careers" className="nav-link">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="/changelog" className="nav-link">Changelog</a></li>
                  <li><a href="/support" className="nav-link">Support</a></li>
                  <li><a href="/status" className="nav-link">Status</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="/privacy" className="nav-link">Privacy</a></li>
                  <li><a href="/terms" className="nav-link">Terms</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-base text-gray-400">&copy; 2024 Evidence. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}