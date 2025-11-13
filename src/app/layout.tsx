import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://prashanth-nancy-invitation.netlify.app";

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
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Prashanth & Nancy's Invitation",
    description:
      "You are warmly invited to celebrate the wedding festivities of Prashanth & Nancy.",
    url: siteUrl,
    images: [
      {
        url: "/images/haldi-image.jpg?v=20241112",
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
    images: ["/images/haldi-image.jpg?v=20241112"],
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
