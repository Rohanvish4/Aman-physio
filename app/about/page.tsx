import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dr. Aman Mishra',
  description: 'Meet Dr. Aman Mishra (BPT), expert physiotherapist in Gorakhpur. 3+ years of clinical experience in home-based rehabilitation, pain management, and post-surgical recovery.',
  alternates: { canonical: 'https://urmilaphysiocare.com/about' },
};

const specializations = [
  { title: 'Pain Management', desc: 'Back, neck, joint & chronic pain', icon: '🎯' },
  { title: 'Post-Operative Recovery', desc: 'Rehabilitation after surgery', icon: '🏥' },
  { title: 'Orthopedic Therapy', desc: 'Bone, joint & muscle treatment', icon: '🦴' },
  { title: 'Neuro Rehabilitation', desc: 'Stroke & neurological recovery', icon: '🧠' },
];

const qualifications = [
  'Bachelor of Physiotherapy (BPT)',
  'Advanced Certifications in Manual Therapy',
  'Sports Physiotherapy Specialist',
  'Dry Needle & Cupping Therapy Certified',
];

const steps = [
  { step: '01', title: 'Assessment', desc: 'Thorough evaluation of your condition, medical history, and pain points at your home.' },
  { step: '02', title: 'Treatment Plan', desc: 'A customized therapy program based on your specific condition and recovery goals.' },
  { step: '03', title: 'Regular Sessions', desc: 'Consistent home visits with hands-on treatment and guided exercises.' },
  { step: '04', title: 'Full Recovery', desc: 'Track progress and achieve your long-term wellness goals.' },
];

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="page-header">
        <div className="container-custom">
          <span className="badge badge-primary mb-4">About Us</span>
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3 tracking-tight">
            Meet your physiotherapist
          </h1>
          <p className="text-lg text-text-light max-w-xl leading-relaxed">
            Get to know the professional behind your treatment and the evidence-based approach that drives meaningful recovery.
          </p>
        </div>
      </section>

      {/* Dr. Profile Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 max-w-sm mx-auto lg:mx-0 w-full shadow-lg">
                <Image
                  src="/images/Aman_mishra_photo.jpeg"
                  alt="Dr. Aman Mishra - Physiotherapist in Gorakhpur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 45vw"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-6 w-auto">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 px-5 py-4 flex items-center gap-6 whitespace-nowrap">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary leading-none">3+</p>
                    <p className="text-xs text-text-light mt-1">Years exp.</p>
                  </div>
                  <div className="w-px h-8 bg-slate-100"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary leading-none">500+</p>
                    <p className="text-xs text-text-light mt-1">Patients</p>
                  </div>
                  <div className="w-px h-8 bg-slate-100"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary leading-none">9</p>
                    <p className="text-xs text-text-light mt-1">Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="pt-8 lg:pt-0">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-text tracking-tight">Dr. Aman Mishra (PT)</h2>
                <p className="text-primary font-semibold mt-1">Expert Consultant Physiotherapist · Gorakhpur</p>
              </div>

              <p className="text-text-light leading-relaxed mb-8 text-sm sm:text-base">
                Dr. Aman Mishra is a dedicated physiotherapist based in Gorakhpur, Uttar Pradesh, specializing in home-based rehabilitation. With 3+ years of clinical practice and over 500 patients treated, he brings expert care directly to your home — eliminating the difficulty of travel during recovery.
              </p>

              {/* Qualifications */}
              <div className="mb-7">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                  Qualifications
                </h3>
                <ul className="space-y-2.5 ml-4">
                  {qualifications.map((q, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-text-light">
                      <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specializations */}
              <div className="mb-8">
                <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-primary rounded-full"></div>
                  Specializations
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {specializations.map((spec, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <p className="font-semibold text-sm text-text">{spec.title}</p>
                      <p className="text-xs text-text-light mt-0.5">{spec.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/booking" className="btn-primary px-6 py-3">
                  Book with Dr. Aman
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+918948451008" className="btn-secondary px-6 py-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge badge-primary mb-4">Our Process</span>
            <h2 className="section-title mb-4">How we treat you</h2>
            <p className="section-subtitle">A structured, evidence-based process from first consultation to full recovery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {steps.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            Have questions about your condition?
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto text-sm">
            Dr. Aman is happy to discuss your case. Reach out for a free initial phone consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/booking" className="px-7 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center justify-center shadow-sm text-sm">
              Book Appointment
            </Link>
            <a href="tel:+918948451008" className="btn-ghost">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 89484 51008
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
