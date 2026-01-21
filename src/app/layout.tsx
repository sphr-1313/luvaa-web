import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import I18nProvider from "../components/I18nProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luvaa.app'),
  title: {
    default: "Luvaa – Fashion App | Outfit Inspiration & Wardrobe Organizer",
    template: "%s | Luvaa",
  },
  description:
    "Luvaa is your smart fashion companion. Get outfit ratings, personalized style suggestions from your closet, browse 300K+ outfit ideas, and organize your wardrobe. Free on iOS & Android.",
  keywords: [
    "Luvaa",
    "Luvaa app",
    "fashion app",
    "outfit inspiration",
    "closet organizer",
    "wardrobe organizer",
    "smart fashion",
    "outfit ideas",
    "rate my outfit",
    "style suggestions",
    "what to wear",
    "fashion marketplace",
    "virtual closet",
    "outfit planner",
    "personal stylist app",
    "style genie",
    "outfit rating app",
  ],
  authors: [{ name: "Luvaa", url: "https://www.luvaa.app" }],
  creator: "Luvaa",
  publisher: "Luvaa",
  applicationName: "Luvaa",
  category: "Fashion & Style",
  classification: "Fashion App",
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
    title: "Luvaa – Fashion App | Outfit Inspiration & Wardrobe Organizer",
    description:
      "Your smart fashion companion. Get outfit ratings, personalized style suggestions, browse 300K+ outfit ideas, and organize your wardrobe. Join 10K+ users!",
    url: "https://www.luvaa.app",
    siteName: "Luvaa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luvaa - Fashion App for Outfit Inspiration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvaa – Fashion App | Outfit Inspiration & Wardrobe Organizer",
    description:
      "Your smart fashion companion. Get outfit ratings, style suggestions, and browse 300K+ outfit ideas. Free on iOS & Android!",
    images: ["/og-image.png"],
    site: "@luvaaapp",
    creator: "@luvaaapp",
  },
  alternates: {
    canonical: "https://www.luvaa.app",
    languages: {
      'en': 'https://www.luvaa.app',
      'nl': 'https://www.luvaa.app?lang=nl',
      'de': 'https://www.luvaa.app?lang=de',
      'fr': 'https://www.luvaa.app?lang=fr',
      'tr': 'https://www.luvaa.app?lang=tr',
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  other: {
    'apple-itunes-app': 'app-id=YOUR_APP_ID', // Replace with your actual App Store ID
    'google-play-app': 'app-id=YOUR_PACKAGE_NAME', // Replace with your actual package name
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.luvaa.app/#website',
      url: 'https://www.luvaa.app',
      name: 'Luvaa',
      description: 'Smart fashion companion for outfit inspiration and wardrobe organization',
      publisher: {
        '@id': 'https://www.luvaa.app/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.luvaa.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.luvaa.app/#organization',
      name: 'Luvaa',
      url: 'https://www.luvaa.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.luvaa.app/luvaa-icon.svg',
        width: 512,
        height: 512,
      },
      sameAs: [
        'https://twitter.com/luvaaapp',
        'https://instagram.com/luvaaapp',
        // Add other social media URLs
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@luvaa.app',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'MobileApplication',
      '@id': 'https://www.luvaa.app/#app',
      name: 'Luvaa',
      operatingSystem: 'iOS, Android',
      applicationCategory: 'LifestyleApplication',
      description: 'Smart fashion companion. Get outfit ratings, style suggestions, and browse 300K+ outfit ideas.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '1000',
        bestRating: '5',
        worstRating: '1',
      },
      featureList: [
        'Rate My Fit - Get outfit ratings',
        'Style Genie - Smart outfit suggestions',
        'Digital Wardrobe - Organize your closet',
        'Outfit Inspiration - Browse 300K+ looks',
        'Fashion Marketplace',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
