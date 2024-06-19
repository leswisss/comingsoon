import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";


const regular = localFont({
  src: "./SF-Pro-Display-Regular.ttf",
  display: "swap",
  variable: "--regular-font",
});

const medium = localFont({
  src: "./SF-Pro-Display-Medium.ttf",
  display: "swap",
  variable: "--medium-font",
});

const semibold = localFont({
  src: "./SF-Pro-Display-Semibold.ttf",
  display: "swap",
  variable: "--bold-font",
});

const italics = localFont({
  src: "./BigCaslonFB-Italic.ttf",
  display: "swap",
  variable: "--italic-font",
});

export const metadata: Metadata = {
  title: "Better Marque - Branding Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
