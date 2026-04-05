import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Urmila Physiotherapy Home Care",
  description: "Professional physiotherapy services at your home - Pain relief, recovery & rehabilitation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-text`}>
        {children}
      </body>
    </html>
  );
}
