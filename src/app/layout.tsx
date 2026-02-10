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
  title: "Kumi Nail Bar - Pendik | Modern Nail Art & Güzellik",
  description: "Pendik'te profesyonel manikür, pedikür, kalıcı oje, nail art ve kaş tasarımı hizmetleri. Kumi Nail Bar'da kendinizi şımartın.",
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
