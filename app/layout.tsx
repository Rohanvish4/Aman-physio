import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://urmilaphysiocare.com'),
  title: {
    default: "Urmila PhysioCare | Dr. Aman Mishra",
    template: "%s | Urmila PhysioCare"
  },
  description: "Professional physiotherapy services at your home - Pain relief, recovery & rehabilitation across our service areas.",
  openGraph: {
    title: "Urmila PhysioCare | Professional Home Physiotherapy",
    description: "Expert physiotherapist Dr. Aman Mishra provides clinical-grade rehabilitation, manual therapy, and pain management directly to your home.",
    url: "https://urmilaphysiocare.com",
    siteName: "Urmila PhysioCare",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
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
