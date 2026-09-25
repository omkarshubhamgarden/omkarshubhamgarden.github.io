import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { sitePath } from '@/lib/site';
import { StructuredData } from './schemas';
import './globals.css';

const displayFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display', display: 'swap' });
const bodyFont = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://omkarshubhamgarden.com/'),
  title: 'Wedding and Celebration Venue in Khanapur | Omkar Shubham Garden',
  description: 'Omkar Shubham Garden is a wedding and celebration venue on Jamboti Road near Khanapur, Karnataka. Explore the venue and arrange a visit.',
  keywords: ['Omkar Shubham Garden', 'Khanapur Wedding Venue', 'Jamboti Road Celebration Venue', 'Khanapur Reception Venue', 'Karnataka Garden Wedding Venue', 'Khanapur Family Function Venue'],
  authors: [{ name: 'Omkar Shubham Garden' }],
  creator: 'Omkar Shubham Garden',
  publisher: 'Omkar Shubham Garden',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: sitePath('/manifest.json'),
  alternates: {
    canonical: 'https://omkarshubhamgarden.com/',
  },
  icons: {
    icon: [
      { url: sitePath('/favicon.ico'), sizes: 'any' },
      { url: sitePath('/favicon-48x48.png'), sizes: '48x48', type: 'image/png' },
    ],
    shortcut: sitePath('/favicon.ico'),
    apple: [
      { url: sitePath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Omkar Shubham Garden — Wedding and Celebration Venue in Khanapur',
    description: 'Omkar Shubham Garden is a wedding and celebration venue on Jamboti Road near Khanapur, Karnataka. Explore the venue and arrange a visit.',
    url: 'https://omkarshubhamgarden.com/',
    siteName: 'Omkar Shubham Garden',
    images: [{
      url: sitePath('/images/og-cover.jpg'),
      width: 1200,
      height: 630,
      alt: 'Decorated entrance of Omkar Shubham Garden celebration venue in Khanapur'
    }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Shubham Garden — Wedding and Celebration Venue in Khanapur',
    description: 'Omkar Shubham Garden is a wedding and celebration venue on Jamboti Road near Khanapur, Karnataka. Explore the venue and arrange a visit.',
    images: [sitePath('/images/og-cover.jpg')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F5EE' },
    { media: '(prefers-color-scheme: dark)', color: '#2D312E' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning className="bg-[#F8F5EE] text-[#2D312E] antialiased selection:bg-[#243E2C] selection:text-[#F8F5EE]">
        <StructuredData />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-[#192D1F]">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
