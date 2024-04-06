import type { Metadata } from "next";
import { Allison } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";

const allison = Allison({ subsets: ["latin"], weight: '400'});

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Home Page",
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={allison.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
