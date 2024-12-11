import type { Metadata } from "next";
import "./globals.scss";
import { Inter } from "next/font/google";

const FontInter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next.js v15 Boilerplate with shadcn/ui",
  description: "XCroft Solution's Next.js v15 Boilerplate with shadcn/ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${FontInter.variable} antialiased`}>{children}</body>
    </html>
  );
}
