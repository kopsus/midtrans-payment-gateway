import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Midtrans payment gateway",
  description: "belajar payment gateway midtrans menggunakan fullstack next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
