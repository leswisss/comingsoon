import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";





const regular = localFont({
  src: "./SF-Pro-Display+.ttf",
  display: "swap",
  variable: "--regular-font",
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
