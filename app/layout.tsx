import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://urmilaphysiocare.com'),
  title: {
    default: "Urmila PhysioCare | Home Physiotherapy in Gorakhpur | Dr. Aman Mishra",
    template: "%s | Urmila PhysioCare Gorakhpur"
  },
  description: "Best home physiotherapy services in Gorakhpur by Dr. Aman Mishra (BPT). Expert pain relief, stroke rehabilitation, post-surgical recovery & manual therapy at your doorstep. Call +91 89484 51008.",
  keywords: [
    "physiotherapy Gorakhpur",
    "home physiotherapy Gorakhpur",
    "physiotherapist Gorakhpur",
    "Dr Aman Mishra physiotherapist",
    "back pain treatment Gorakhpur",
    "stroke rehabilitation Gorakhpur",
    "home visit physiotherapy",
    "Urmila PhysioCare",
    "pain relief Gorakhpur",
    "manual therapy Gorakhpur",
    "physiotherapy home visit UP",
  ],
  authors: [{ name: "Dr. Aman Mishra", url: "https://urmilaphysiocare.com/about" }],
  creator: "Urmila PhysioCare",
  publisher: "Urmila PhysioCare",
  openGraph: {
    title: "Urmila PhysioCare | Home Physiotherapy in Gorakhpur",
    description: "Expert physiotherapist Dr. Aman Mishra provides clinical-grade home physiotherapy in Gorakhpur — pain relief, stroke rehab, post-surgical recovery & more.",
    url: "https://urmilaphysiocare.com",
    siteName: "Urmila PhysioCare",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/urmila_physiocare_logo.jpeg",
        width: 400,
        height: 400,
        alt: "Urmila PhysioCare Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urmila PhysioCare | Home Physiotherapy in Gorakhpur",
    description: "Expert home physiotherapy in Gorakhpur by Dr. Aman Mishra. Call +91 89484 51008.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://urmilaphysiocare.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Urmila PhysioCare",
  description: "Professional home physiotherapy services in Gorakhpur, Uttar Pradesh by Dr. Aman Mishra (BPT).",
  url: "https://urmilaphysiocare.com",
  telephone: "+918948451008",
  email: "urmilaphysiocare@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gorakhpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.7606,
    longitude: 83.3732,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  priceRange: "₹₹",
  image: "https://urmilaphysiocare.com/images/urmila_physiocare_logo.jpeg",
  areaServed: {
    "@type": "City",
    name: "Gorakhpur",
  },
  medicalSpecialty: [
    "Physiotherapy",
    "Orthopedic Rehabilitation",
    "Neurological Rehabilitation",
    "Sports Physiotherapy",
  ],
  hasMap: "https://maps.google.com/?q=Gorakhpur,UP",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
