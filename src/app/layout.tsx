import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google"; // Elegant serif for headings, modern sans for body
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kumi Nail Bar - Pendik | Modern Nail Art, Protez Tırnak & Güzellik",
  description: "Pendik'te profesyonel manikür, pedikür, kalıcı oje, protez tırnak, nail art ve kaş tasarımı hizmetleri. Kumi Nail Bar'da kendinizi şımartın. Hemen randevu alın!",
  keywords: ["pendik nail bar", "pendik protez tırnak", "kumi nail bar", "pendik kalıcı oje", "pendik manikür", "pendik pedikür", "pendik kaş tasarımı", "tırnak süsleme", "nail art istanbul"],
  authors: [{ name: "Kumi Nail Bar" }],
  creator: "Kumi Nail Bar",
  publisher: "Kumi Nail Bar",
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
    title: "Kumi Nail Bar - Pendik | Modern Nail Art & Güzellik",
    description: "Pendik'in en şık nail art stüdyosu. Kalıcı oje, protez tırnak ve bakım hizmetleri.",
    url: 'https://kuminailbar.com',
    siteName: 'Kumi Nail Bar',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/logo.png', // Assuming logo is available
        width: 800,
        height: 600,
        alt: 'Kumi Nail Bar Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kumi Nail Bar - Pendik",
    description: "Kusursuz tırnaklar ve profesyonel bakım için Pendik'teki adresiniz.",
    images: ['/logo.png'], // Assuming logo is available
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
