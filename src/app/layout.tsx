import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local"

const sbabFont = localFont({ src: "../../public/assets/fonts/SBAB-Regular.woff" })

export const metadata: Metadata = {
  title: "Furkan - SBAB",
  description: "SBAB tekniskt test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sbabFont.className}>{children}</body>
    </html>
  );
}
