import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Physiotherapy at Home in Gorakhpur",
  description: "Physiotherapy at home in Gorakhpur for back pain, stroke rehabilitation, knee pain, sports injuries and post-surgical recovery. Call Dr. Aman Mishra.",
  keywords: [
    "physiotherapy at home in Gorakhpur",
    "physiotherapist in Gorakhpur",
    "home physiotherapy Gorakhpur",
    "physiotherapy near me Gorakhpur",
  ],
  alternates: { canonical: "https://urmilaphysiocare.com/gorakhpur" },
};

const areas = [
  "Rapti Nagar",
  "Taramandal",
  "Shahpur",
  "Golghar",
  "Mohaddipur",
  "Civil Lines",
  "Basharatpur",
  "Betiahata",
  "Medical College Road",
  "Gorakhnath",
  "Padrauna Road",
  "Jungle Dhusar",
];

const conditions = [
  { name: "Back & spine pain", href: "/services/back-spine-pain" },
  { name: "Neck & shoulder pain", href: "/services/neck-shoulder-pain" },
  { name: "Stroke rehabilitation", href: "/services/stroke-rehabilitation" },
  { name: "Manual therapy", href: "/services/manual-therapy" },
  { name: "Cupping therapy", href: "/services/cupping-therapy" },
  { name: "Pediatric physiotherapy", href: "/services/pediatric-physiotherapy" },
];

export default function GorakhpurPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Physiotherapy at Home in Gorakhpur",
    description: "Home physiotherapy services delivered across Gorakhpur by Dr. Aman Mishra.",
    url: "https://urmilaphysiocare.com/gorakhpur",
    provider: {
      "@type": "Physician",
      name: "Dr. Aman Mishra",
      worksFor: {
        "@type": "MedicalBusiness",
        name: "Urmila PhysioCare",
        telephone: "+918948451008",
        url: "https://urmilaphysiocare.com",
      },
    },
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: `${area}, Gorakhpur`,
    })),
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <section className="page-header">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-5">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-text">Gorakhpur</span>
          </nav>
          <span className="badge badge-primary mb-4">Gorakhpur Home Visits</span>
          <h1 className="text-3xl md:text-5xl font-bold text-text mb-4 tracking-tight max-w-4xl">
            Physiotherapy at Home in Gorakhpur
          </h1>
          <p className="text-lg text-text-light max-w-3xl leading-relaxed">
            Get personalized physiotherapy at home across Gorakhpur with assessment, hands-on treatment and guided rehabilitation by Dr. Aman Mishra (BPT).
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/booking" className="btn-primary px-7 py-3.5">Book a Home Visit</Link>
            <a href="tel:+918948451008" className="btn-secondary px-7 py-3.5">Call +91 89484 51008</a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-5">Physiotherapy conditions we treat in Gorakhpur</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((condition) => (
              <Link key={condition.name} href={condition.href} className="card hover:border-primary/30 group">
                <span className="font-semibold text-text group-hover:text-primary transition-colors">{condition.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <h2 className="section-title mb-8 text-center">Gorakhpur areas covered</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm text-text-light">{area}</span>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
