import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { sitePath } from '@/lib/site';
import { StructuredData } from './schemas';
import './globals.css';

const displayFont = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display', display: 'swap' });
const bodyFont = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://omkarshubhamgarden.com/'),
  title: {
    default: 'Wedding & Banquet Hall in Khanapur | Omkar Shubham Garden',
    template: '%s | Omkar Shubham Garden — Khanapur',
  },
  description:
    'Omkar Shubham Garden — top-rated wedding venue & banquet hall on Jamboti Road, Khanapur, Karnataka. Up to 3,000 guests, 100+ parking, 4.9★ Google rating, 15+ years family trust. Book a visit today.',
  keywords: [
    'Omkar Shubham Garden',
    'wedding venue Khanapur',
    'banquet hall Khanapur',
    'marriage hall Khanapur',
    'kalyana mantapa Khanapur',
    'function hall Khanapur',
    'Jamboti Road celebration venue',
    'Khanapur reception venue',
    'Karnataka garden wedding venue',
    'Khanapur family function venue',
    'wedding venue near Belagavi',
    'wedding venue near Belgaum',
    'Belagavi banquet hall',
    'garden wedding Karnataka',
    'open air wedding venue Karnataka',
    'marriage hall near Belagavi',
    'Khanapur event venue',
    'banquet hall near Khanapur',
    'Bacholi wedding venue',
    'Jamboti Road banquet hall',
  ],
  authors: [{ name: 'Omkar Shubham Garden' }],
  creator: 'Omkar Shubham Garden',
  publisher: 'Omkar Shubham Garden',
  formatDetection: { email: false, address: false, telephone: false },
  manifest: sitePath('/site.webmanifest'),
  alternates: {
    canonical: 'https://omkarshubhamgarden.com/',
  },
  icons: {
    icon: [
      { url: sitePath('/favicon.ico'), sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: sitePath('/favicon-16x16.png'), sizes: '16x16', type: 'image/png' },
      { url: sitePath('/favicon-32x32.png'), sizes: '32x32', type: 'image/png' },
      { url: sitePath('/favicon-48x48.png'), sizes: '48x48', type: 'image/png' },
    ],
    shortcut: [{ url: sitePath('/favicon.ico'), sizes: '16x16 32x32 48x48', type: 'image/x-icon' }],
    apple: [{ url: sitePath('/apple-touch-icon.png'), sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Omkar Shubham Garden — Wedding & Banquet Hall, Khanapur Karnataka',
    description:
      'Top-rated wedding venue on Jamboti Road, Khanapur. 3,000-guest capacity · 100+ parking · 4.9★ Google rating · 15+ years family trust. Open garden with covered pavilion.',
    url: 'https://omkarshubhamgarden.com/',
    siteName: 'Omkar Shubham Garden',
    images: [
      {
        url: sitePath('/images/og-cover.jpg'),
        width: 1200,
        height: 630,
        alt: 'Decorated outdoor entrance of Omkar Shubham Garden — wedding venue near Khanapur, Karnataka',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Omkar Shubham Garden — Wedding & Banquet Hall, Khanapur Karnataka',
    description:
      'Top-rated garden wedding venue on Jamboti Road, Khanapur. 4.9★ · Up to 3,000 guests · 100+ parking · 15+ years of trust.',
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
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Khanapur, Belagavi, Karnataka',
    'geo.position': '15.6394;74.5190',
    ICBM: '15.6394, 74.5190',
  },
};

// themeColor must live in the viewport export — Next.js 15 ignores it in metadata
// and emits a build warning instead of the <meta name="theme-color"> tag.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
