import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import { AuthProvider } from './Authentication/context/AuthContext';

export const metadata: Metadata = {
  title: 'ScholarScanner - Find Your Perfect Scholarship',
  description: 'Discover thousands of scholarships tailored to your profile. Our AI-powered platform makes finding and applying for scholarships easier than ever.',
  keywords: 'scholarships, education, financial aid, college funding, university scholarships',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AIAssistant />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}