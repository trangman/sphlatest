import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siam Property Holdings (SPH) - Your Secure Investment Platform",
  description: "SPH provides legal and secure solutions for foreign investors seeking to access Southeast Asia's Property Markets, in particular Thailand.",
  icons: {
    icon: { url: '/favicon.png', type: 'image/png' }
  }
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
