import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ScholarMatch - Find Your Perfect Scholarship',
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
        {children}
      </body>
    </html>
  )
}