import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jupiter's Design | Premium Flooring in Hong Kong",
  description:
    "Jupiter's Design specialises in premium SPC, wood, and composite flooring for homes and businesses across Hong Kong. Explore our gallery, recent projects, and get a free quote on WhatsApp.",
  keywords: [
    "Hong Kong flooring",
    "SPC flooring",
    "wood flooring",
    "composite flooring",
    "Jupiter's Design",
    "木地板",
    "香港地板",
  ],
  openGraph: {
    title: "Jupiter's Design | Premium Flooring in Hong Kong",
    description:
      "Premium SPC, wood, and composite flooring for homes and businesses across Hong Kong.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
