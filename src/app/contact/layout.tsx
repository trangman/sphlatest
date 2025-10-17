import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Siam Property Holdings | Get Started Today",
  description: "Contact SPH for secure property investment solutions. Licensed in Labuan, serving investors across Southeast Asia. Begin your journey toward compliant property ownership.",
  keywords: "contact SPH, real estate investment consultation, Thai property investment contact, Labuan trust company contact",
  openGraph: {
    title: "Contact Us - Siam Property Holdings",
    description: "Contact SPH for secure property investment solutions. Licensed in Labuan, serving investors across Southeast Asia.",
    url: "https://siampropertyholdings.com/contact",
  },
  alternates: {
    canonical: "https://siampropertyholdings.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
