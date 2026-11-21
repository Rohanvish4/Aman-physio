import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { getServiceBySlug, physiotherapyServices } from "../service-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return physiotherapyServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  const url = `https://urmilaphysiocare.com/services/${service.slug}`;

  return {
    title: service.title,
    description: service.metaDescription,
    keywords: [
      service.name,
      `${service.name} Gorakhpur`,
      `${service.name} at home Gorakhpur`,
      "home physiotherapy Gorakhpur",
      "Dr Aman Mishra",
    ],
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url,
      type: "website",
      locale: "en_IN",
      siteName: "Urmila PhysioCare",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `https://urmilaphysiocare.com/services/${service.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.title,
    description: service.metaDescription,
    url: pageUrl,
    about: {
      "@type": "MedicalTherapy",
      name: service.name,
      description: service.intro,
    },
    provider: {
      "@type": "MedicalBusiness",
      name: "Urmila PhysioCare",
      telephone: "+918948451008",
      url: "https://urmilaphysiocare.com",
      areaServed: {
        "@type": "City",
        name: "Gorakhpur",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://urmilaphysiocare.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://urmilaphysiocare.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navigation />

      <section className="page-header">
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="text-sm text-text-light mb-5">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-text">{service.shortName}</span>
          </nav>
          <span className="badge badge-primary mb-4">Home Physiotherapy</span>
          <h1 className="text-3xl md:text-5xl font-bold text-text mb-4 tracking-tight max-w-4xl">
            {service.title}
          </h1>
          <p className="text-lg text-text-light max-w-3xl leading-relaxed">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/booking" className="btn-primary px-7 py-3.5">
              Book a Home Visit
            </Link>
            <a href="tel:+918948451008" className="btn-secondary px-7 py-3.5">
              Call +91 89484 51008
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="section-title mb-5">Conditions we can assess and treat</h2>
              <p className="section-subtitle mb-6">
                {service.name} may be suitable for the following concerns. An initial assessment helps determine whether this service is appropriate for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.conditions.map((condition) => (
                  <div key={condition} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-text font-medium">{condition}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="card h-fit lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-text mb-5">What you can expect</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2.5 text-sm text-text-light">
                    <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/booking" className="btn-primary w-full mt-6">Check Availability</Link>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge badge-primary mb-3">At-Home Process</span>
            <h2 className="section-title mb-3">How this treatment works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, index) => (
              <div key={step} className="card">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <p className="text-sm text-text-light leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <span className="badge badge-primary mb-3">FAQs</span>
            <h2 className="section-title">Common questions</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex items-center justify-between gap-4 text-sm font-semibold text-text list-none cursor-pointer">
                  {faq.question}
                  <svg className="w-4 h-4 text-primary shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-text-light leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Need {service.name.toLowerCase()} at home?
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            Contact Urmila PhysioCare to discuss your condition and check a convenient home visit slot in Gorakhpur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/booking" className="px-7 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-slate-50 transition-colors">
              Book Appointment
            </Link>
            <a href="tel:+918948451008" className="btn-ghost">
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
