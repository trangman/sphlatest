import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://siampropertyholdings.com'),
  title: "Siam Property Holdings (SPH) - Your Secure Investment Platform",
  description: "SPH provides legal and secure solutions for foreign investors seeking to access Southeast Asia's Property Markets, in particular Thailand.",
  keywords: "Thai real estate investment, Southeast Asia property investment, offshore trust structures, foreign property ownership Thailand, Better than Freehold, Labuan trust company",
  authors: [{ name: "Siam Property Holdings" }],
  creator: "Siam Property Holdings",
  publisher: "Siam Property Holdings",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://siampropertyholdings.com',
    title: 'Siam Property Holdings (SPH) - Your Secure Investment Platform',
    description: 'SPH provides legal and secure solutions for foreign investors seeking to access Southeast Asia\'s Property Markets, in particular Thailand.',
    siteName: 'Siam Property Holdings',
    images: [
      {
        url: '/images/sph-logo.png',
        width: 1200,
        height: 630,
        alt: 'Siam Property Holdings Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siam Property Holdings (SPH) - Your Secure Investment Platform',
    description: 'SPH provides legal and secure solutions for foreign investors seeking to access Southeast Asia\'s Property Markets, in particular Thailand.',
    images: ['/images/sph-logo.png'],
  },
  icons: {
    icon: { url: '/favicon.png', type: 'image/png' }
  },
  alternates: {
    canonical: 'https://siampropertyholdings.com',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1e3a8a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen relative z-5">
          <Header />
          <main className="flex-grow relative">
            {/* Watermark - only in content area */}
            <div 
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none z-50 hidden md:block"
              style={{
                backgroundImage: 'url(/images/watermark.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: '800px 800px'
              }}
            />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
