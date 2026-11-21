import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Analytics from "./components/Analytics";
import MobileActions from "./components/MobileActions";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://urmilaphysiocare.com'),
  title: {
    default: "Physiotherapy in Gorakhpur | Home Physiotherapy by Dr. Aman Mishra",
    template: "%s | Urmila PhysioCare Gorakhpur"
  },
  description: "Physiotherapy in Gorakhpur by Dr. Aman Mishra (BPT). Urmila PhysioCare provides home physiotherapy for back pain, neck pain, stroke rehabilitation, joint pain and post-surgical recovery. Call +91 89484 51008.",
  keywords: [
    "physicare",
    "physicare gorakhpur",
    "Urmila physicare",
    "Urmila PhysioCare",
    "physiotherapy at home in gorakhpur",
    "home physiotherapy gorakhpur",
    "physiotherapy gorakhpur",
    "physiotherapist gorakhpur",
    "physiotherapist at home gorakhpur",
    "physio at home gorakhpur",
    "best physiotherapy gorakhpur",
    "best physiotherapist gorakhpur",
    "home visit physiotherapy gorakhpur",
    "Dr Aman Mishra physiotherapist",
    "back pain treatment gorakhpur",
    "back pain physiotherapy gorakhpur",
    "stroke rehabilitation gorakhpur",
    "pain relief gorakhpur",
    "manual therapy gorakhpur",
    "knee pain treatment gorakhpur",
    "joint pain physiotherapy gorakhpur",
    "cervical spondylosis treatment gorakhpur",
    "sports physiotherapy gorakhpur",
    "cupping therapy gorakhpur",
    "dry needle therapy gorakhpur",
    "pediatric physiotherapy gorakhpur",
    "post surgical rehabilitation gorakhpur",
    "electrotherapy gorakhpur",
    "neck shoulder pain treatment gorakhpur",
    "physiotherapy home visit UP",
    "home physio service gorakhpur",
    "neurological rehabilitation gorakhpur",
  ],
  authors: [{ name: "Dr. Aman Mishra", url: "https://urmilaphysiocare.com/about" }],
  creator: "Urmila PhysioCare",
  publisher: "Urmila PhysioCare",
  category: "Physiotherapy",
  applicationName: "Urmila PhysioCare",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: "Urmila PhysioCare | Physiotherapy at Home in Gorakhpur",
    description: "Expert physiotherapist Dr. Aman Mishra provides clinical-grade home physiotherapy in Gorakhpur — pain relief, stroke rehab, post-surgical recovery & more. PhysiCare Gorakhpur.",
    url: "https://urmilaphysiocare.com",
    siteName: "Urmila PhysioCare",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/urmila_physiocare_logo.jpeg",
        width: 400,
        height: 400,
        alt: "Urmila PhysioCare - Home Physiotherapy Gorakhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urmila PhysioCare | Physiotherapy at Home in Gorakhpur",
    description: "Expert home physiotherapy in Gorakhpur by Dr. Aman Mishra. PhysiCare Gorakhpur. Call +91 89484 51008.",
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
  alternateName: ["PhysiCare Gorakhpur", "Urmila Physicare", "Home Physiotherapy Gorakhpur"],
  description: "Professional home physiotherapy services in Gorakhpur, Uttar Pradesh by Dr. Aman Mishra (BPT). Expert treatment for back pain, stroke rehabilitation, post-surgical recovery, and more.",
  url: "https://urmilaphysiocare.com",
  telephone: "+918948451008",
  email: "urmilaphysiocare@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gorakhpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "273001",
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
  areaServed: [
    { "@type": "City", name: "Gorakhpur" },
    { "@type": "Place", name: "Rapti Nagar, Gorakhpur" },
    { "@type": "Place", name: "Taramandal, Gorakhpur" },
    { "@type": "Place", name: "Shahpur, Gorakhpur" },
    { "@type": "Place", name: "Golghar, Gorakhpur" },
    { "@type": "Place", name: "Mohaddipur, Gorakhpur" },
    { "@type": "Place", name: "Civil Lines, Gorakhpur" },
    { "@type": "Place", name: "Basharatpur, Gorakhpur" },
    { "@type": "Place", name: "Medical College Road, Gorakhpur" },
  ],
  medicalSpecialty: [
    "Physiotherapy",
    "Orthopedic Rehabilitation",
    "Neurological Rehabilitation",
    "Sports Physiotherapy",
    "Pediatric Physiotherapy",
    "Pain Management",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Physiotherapy Services in Gorakhpur",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Back & Spine Pain Treatment", description: "Home physiotherapy for lower back pain, sciatica, and disc problems in Gorakhpur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stroke Rehabilitation", description: "Neuro-rehabilitation for stroke patients at home in Gorakhpur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Surgical Recovery", description: "Rehabilitation after joint replacement and surgery at home in Gorakhpur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cupping Therapy", description: "Traditional cupping therapy for pain relief in Gorakhpur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dry Needle Therapy", description: "Advanced dry needling for musculoskeletal conditions in Gorakhpur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pediatric Physiotherapy", description: "Specialized physiotherapy for children in Gorakhpur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Manual Therapy", description: "Hands-on joint mobilization and soft tissue therapy in Gorakhpur." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrotherapy", description: "TENS, ultrasound, and IFT therapy for pain management in Gorakhpur." } },
    ],
  },
  hasMap: "https://maps.google.com/?q=Gorakhpur,UP",
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is physiotherapy at home in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home physiotherapy in Gorakhpur is a service where a certified physiotherapist visits your home to provide professional treatment. Urmila PhysioCare's Dr. Aman Mishra (BPT) provides all physiotherapy services at your doorstep — including pain management, stroke rehabilitation, and post-surgical recovery across all areas of Gorakhpur.",
      },
    },
    {
      "@type": "Question",
      name: "What is PhysiCare Gorakhpur or Urmila PhysioCare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Urmila PhysioCare (also referred to as PhysiCare Gorakhpur) is a professional home physiotherapy service led by Dr. Aman Mishra (BPT). It provides clinical-grade physiotherapy at your home in Gorakhpur — covering back pain, neck pain, stroke rehabilitation, manual therapy, cupping, dry needling, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a home physiotherapy session in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a home physiotherapy session in Gorakhpur by calling +91 89484 51008, messaging on WhatsApp, or filling the online form at urmilaphysiocare.com/booking. Dr. Aman Mishra serves all Gorakhpur areas including Rapti Nagar, Taramandal, Shahpur, Golghar, Mohaddipur, Civil Lines, and Basharatpur.",
      },
    },
    {
      "@type": "Question",
      name: "What conditions does Urmila PhysioCare treat in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Urmila PhysioCare treats back and spine pain, neck and shoulder pain, stroke rehabilitation, knee and joint pain, post-surgical recovery, sports injuries, cervical spondylosis, neurological conditions, and pediatric physiotherapy — all as home visits across Gorakhpur.",
      },
    },
    {
      "@type": "Question",
      name: "How many physiotherapy sessions are needed for back pain in Gorakhpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most acute back pain cases improve in 6–12 home physiotherapy sessions. Chronic conditions may require 15–20 sessions. Dr. Aman Mishra creates a personalized plan after an initial home assessment in Gorakhpur.",
      },
    },
    {
      "@type": "Question",
      name: "Does home physiotherapy help stroke patients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Urmila PhysioCare's neuro-rehabilitation program for stroke patients covers motor recovery, balance training, and regaining functional independence — all from the patient's home in Gorakhpur. Early and consistent physiotherapy significantly improves stroke recovery outcomes.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Gorakhpur does Urmila PhysioCare serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Urmila PhysioCare provides home physiotherapy across all areas of Gorakhpur including Rapti Nagar, Taramandal, Shahpur, Golghar, Mohaddipur, Civil Lines, Basharatpur, Betiahata, Medical College Road, and surrounding localities. Call +91 89484 51008 to confirm availability in your area.",
      },
    },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Aman Mishra",
  jobTitle: "Physiotherapist",
  description: "BPT physiotherapist providing home-based orthopedic, neurological and pediatric rehabilitation in Gorakhpur.",
  url: "https://urmilaphysiocare.com/about",
  image: "https://urmilaphysiocare.com/images/Aman_mishra_photo.jpeg",
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Urmila PhysioCare",
    url: "https://urmilaphysiocare.com",
  },
  knowsAbout: [
    "Physiotherapy",
    "Back pain treatment",
    "Stroke rehabilitation",
    "Post-surgical rehabilitation",
    "Manual therapy",
    "Sports physiotherapy",
  ],
  areaServed: {
    "@type": "City",
    name: "Gorakhpur",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Urmila PhysioCare",
  alternateName: ["PhysiCare Gorakhpur", "Urmila Physicare"],
  url: "https://urmilaphysiocare.com",
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "Urmila PhysioCare",
    url: "https://urmilaphysiocare.com",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://urmilaphysiocare.com/services?search={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-text antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to main content
        </a>
        <Analytics />
        <div id="main-content">{children}</div>
        <MobileActions />
      </body>
    </html>
  );
}
