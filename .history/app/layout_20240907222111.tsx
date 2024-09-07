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
  title: "Better Marque  Branding Agency",
  description:
    "Better Marque is a distinguished creative agency dedicated to helping Architects, Builders, and Real Estate Agents stand out in their industries. We create unique websites and brand identities that elevate their presence and help them close more clients.",
  twitter: {
    card: "summary_large_image",
    description: "Better Marque is a creative agency that helps Architects, Builders, and Real Estate Agents stand out with unique websites and brand identities, enhancing their presence and client acquisition."
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
        <Analytics />
      </body>
    </html>
  );
}
