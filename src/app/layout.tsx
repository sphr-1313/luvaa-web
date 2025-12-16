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
  title: "Luvaa – Fashion Inspiration, Closet Organizer & Outfit Marketplace",
  description:
    "Luvaa is your fashion companion. Get inspired by 300k+ outfits, organize your closet, receive smart outfit suggestions, and buy or sell fashion. Join 10k+ users on web, iOS, and Android.",
  keywords: [
    "fashion",
    "outfit inspiration",
    "closet organizer",
    "AI fashion app",
    "sell clothes",
    "buy clothes",
    "style suggestions",
    "Luvaa app",
    "fashion marketplace",
    "wardrobe management"
  ],
  openGraph: {
    title: "Luvaa – Fashion Inspiration, Closet Organizer & Outfit Marketplace",
    description:
      "Luvaa is your fashion companion. Get inspired by 300k+ outfits, organize your closet, receive smart outfit suggestions, and buy or sell fashion. Join 10k+ users on web, iOS, and Android.",
    url: "https://luvaa.app",
    siteName: "Luvaa",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Luvaa logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvaa – Fashion Inspiration, Closet Organizer & Outfit Marketplace",
    description:
      "Luvaa is your AI-powered fashion companion. Get inspired by 300k+ outfits, organize your closet, receive smart outfit suggestions, and buy or sell fashion. Join 10k+ users on web, iOS, and Android.",
    images: ["/favicon.png"],
    site: "@luvaaapp",
  },
  alternates: {
    canonical: "https://luvaa.app",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
