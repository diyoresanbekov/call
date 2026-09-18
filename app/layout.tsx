import type { Metadata } from "next";
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
  title: "Callion — IP-ATS dasturiy ta'minoti",
  description:
    "O'zbekiston operatorlari bilan to'liq mos SIP-trunk IP-ATS. Bitta ish stoli ilovasida barcha qo'ng'iroqlar, akkauntlar va SIP ulanishlarni boshqaring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden font-sans`}>
        {children}
      </body>
    </html>
  );
}
