import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jaya Mark | استثمر في مستقبلك - وحدات تجارية وإدارية وطبية",
  description: "استثمر في مستقبلك مع Jaya Mark - وحدات تجارية وإدارية وطبية بأفضل الأسعار. مقدم 5% فقط وخصم يصل لـ 25% على الدفع الكاش. موقع استراتيجي ونظام مبنى ذكي.",
  keywords: "جايا مارك, وحدات تجارية, وحدات إدارية, وحدات طبية, استثمار عقاري, مكاتب للبيع, عيادات للبيع, محلات تجارية",
  authors: [{ name: "Jaya Mark" }],
  openGraph: {
    title: "Jaya Mark | استثمر في مستقبلك",
    description: "وحدات تجارية وإدارية وطبية بأفضل الأسعار. مقدم 5% فقط وخصم يصل لـ 25%",
    type: "website",
    locale: "ar_EG",
    siteName: "Jaya Mark",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaya Mark | استثمر في مستقبلك",
    description: "وحدات تجارية وإدارية وطبية بأفضل الأسعار",
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: "/logo.webp", sizes: "any", type: "image/webp" },
    ],
    apple: "/apple-icon",
    shortcut: "/logo.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Jaya Mark',
    description: 'وحدات تجارية وإدارية وطبية بأفضل الأسعار',
    url: 'https://jayamark.com',
    logo: 'https://jayamark.com/logo.webp',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+20-100-000-0000',
      contactType: 'sales',
      areaServed: 'EG',
      availableLanguage: ['ar', 'en'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EGP',
      lowPrice: '3500000',
      highPrice: '10000000',
    },
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
