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
  title: "Prashanth & Nancy's Invitation",
  description:
    "You are warmly invited to celebrate the wedding festivities of Prashanth & Nancy.",
  openGraph: {
    title: "Prashanth & Nancy's Invitation",
    description:
      "You are warmly invited to celebrate the wedding festivities of Prashanth & Nancy.",
    images: [
      {
        url: "/images/screen-image.jpg",
        width: 1600,
        height: 900,
        alt: "Prashanth & Nancy Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashanth & Nancy's Invitation",
    description:
      "You are warmly invited to celebrate the wedding festivities of Prashanth & Nancy.",
    images: ["/images/screen-image.jpg"],
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
