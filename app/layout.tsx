import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { sitePath } from '@/lib/site';
import { StructuredData } from './schemas';
import './globals.css';

const displayFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display', display: 'swap' });
const bodyFont = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://vighneshnilajakar.github.io/shubham-omkar/'),
  title: 'Omkar Shubham Garden — Premium Celebration Venue | Khanapur, Karnataka',
  description: 'Premier garden venue near Khanapur for weddings, receptions, engagements, and family celebrations. 15+ years of family trust. Up to 3,000 guests. 100+ parking. Book a visit today.',
  keywords: ['Omkar Shubham Garden', 'Khanapur Wedding Venue', 'Bacholi Event Garden', 'Jamboti Road Function Hall', 'Karnataka Wedding Lawns', 'Belagavi Destination Marriage Venue'],
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
    canonical: 'https://vighneshnilajakar.github.io/shubham-omkar/',
  },
  icons: {
    icon: sitePath('/images/shubham-omkar-logo.webp'),
    shortcut: sitePath('/images/shubham-omkar-logo.webp'),
    apple: sitePath('/images/shubham-omkar-logo.webp'),
  },
  openGraph: {
    title: 'Omkar Shubham Garden — Premium Celebration Venue',
    description: 'Garden venue near Khanapur for weddings and celebrations. 15+ years of family trust, up to 3,000 guests, and 100+ parking spaces.',
    url: 'https://vighneshnilajakar.github.io/shubham-omkar/',
    siteName: 'Omkar Shubham Garden',
    images: [{
      url: sitePath('/images/outdoor-entrance.webp'),
      width: 1200,
      height: 630,
      alt: 'Omkar Shubham Garden outdoor entrance and venue'
    }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Shubham Garden — Premium Celebration Venue',
    description: 'Garden venue near Khanapur for weddings and celebrations. 15+ years of family trust, up to 3,000 guests, and 100+ parking spaces.',
    images: [sitePath('/images/outdoor-entrance.webp')],
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
  verification: {
    google: 'verification_token',
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
