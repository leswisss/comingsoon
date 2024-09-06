import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";

const regular = localFont({
  src: "./SF-Pro-Display-Regular.woff",
  display: "swap",
  variable: "--regular-font",
});

const medium = localFont({
  src: "./SF-Pro-Display-Medium.woff",
  display: "swap",
  variable: "--medium-font",
});

const semibold = localFont({
  src: "./SF-Pro-Display-Semibold.woff",
  display: "swap",
  variable: "--semibold-font",
});

const italic = localFont({
  src: "./BigCaslonFB-Italic.woff",
  display: "swap",
  variable: "--italic-font",
});

export const metadata: Metadata = {
  title: "Better Marque - Branding Agency",
  description: "Better Marque is a creative agency that crafts innovative brand identities and sleek websites for architects, builders, and real estate agents. We combine design precision with functionality to elevate your brand and business presence.",
  twitter
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${italic.variable} ${regular.variable} ${medium.variable} ${semibold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}