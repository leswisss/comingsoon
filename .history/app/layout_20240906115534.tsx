import { Analytics } from "@vercel/analytics/react"
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
  description:
    "Better Marque is a distinguished creative agency that specializes in the art of crafting innovative brand identities and refined websites for architects, builders, and real estate agents.",
  twitter: {
    card: "summary_large_image",
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
        className={`${italic.variable} ${regular.variable} ${medium.variable} ${semibold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
