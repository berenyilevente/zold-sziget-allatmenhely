import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Zöld Sziget Állatmenhely — Adj esélyt egy új életre",
  description:
    "A Zöld Sziget Állatmenhely Törökbálinton gondozza és örökbe adja a környékről bekerült kóbor kutyákat és macskákat. Támogasd a munkánkat vagy fogadj örökbe egy új társat!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body id="top" className="min-h-full flex flex-col bg-cream text-ink">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
