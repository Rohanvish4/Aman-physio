'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const PHONE = '+918948451008';
const WA_BASE = 'https://wa.me/918948451008';
const WA_BOOKING = `${WA_BASE}?text=${encodeURIComponent('Hello Urmila PhysioCare, I would like to book an appointment in Gorakhpur.')}`;

const stats = [
  { value: '3+', label: 'Years of experience' },
  { value: '500+', label: 'Patients treated' },
  { value: '100%', label: 'Home-based care' },
  { value: 'Mon–Sat', label: '9 AM – 8 PM' },
];

const features = [
  {
    title: 'Certified Physiotherapist',
    desc: 'Dr. Aman Mishra (BPT) brings years of clinical expertise in orthopedic, neurological, and pediatric rehabilitation.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: 'Treatment at Your Home',
    desc: 'No travel, no waiting rooms. We bring professional-grade equipment and expert care directly to your doorstep in Gorakhpur.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: 'Faster Recovery',
    desc: 'Evidence-based, personalized treatment plans tailored to your condition — so you get back to normal life sooner.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: 'Neurological Rehabilitation',
    desc: 'Structured recovery for stroke, spinal cord injuries, and Parkinson\'s disease patients.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
  },
  {
    title: 'Post-Surgical Recovery',
    desc: 'Guided rehab after joint replacement, ligament repair, and other surgeries.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'Cupping & Dry Needle Therapy',
    desc: 'Advanced pain relief using cupping and dry needle techniques.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Pediatrics Physiotherapy',
    desc: 'Specialized care to boost child mobility, strength, and overall well-being.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: 'Ramesh Gupta',
    location: 'Gorakhpur',
    text: 'After my knee surgery, Dr. Aman visited daily and helped me walk again within weeks. The home visit service made recovery so much easier.',
    rating: 5,
  },
  {
    name: 'Sunita Sharma',
    location: 'Gorakhpur',
    text: 'My mother had a stroke and Dr. Aman\'s neuro-rehabilitation sessions at home have been life-changing. Very professional and caring.',
    rating: 5,
  },
  {
    name: 'Anil Verma',
    location: 'Gorakhpur',
    text: 'Suffering from chronic back pain for 2 years. After just 10 sessions of manual therapy, my pain reduced significantly. Highly recommended.',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white pt-14 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 bg-primary/8 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 tracking-wide uppercase">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Home Physiotherapy · Gorakhpur
              </div>
              <h1 className="text-[2.4rem] md:text-5xl lg:text-[3.2rem] font-bold mb-5 leading-[1.12] text-text tracking-tight text-balance">
                Expert physiotherapy,{' '}
                <span className="text-primary">at your doorstep</span>
              </h1>
              <p className="text-base sm:text-lg text-text-light mb-8 leading-relaxed">
                Dr. Aman Mishra (BPT) provides clinical-grade pain relief, rehabilitation, and recovery — all from the comfort of your home in Gorakhpur.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href={`tel:${PHONE}`} className="btn-primary px-7 py-3.5 text-base">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a href={WA_BOOKING} target="_blank" rel="noopener noreferrer" className="btn-secondary px-7 py-3.5 text-base border-slate-200">
                  <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Book via WhatsApp
                </a>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-text-light">
                {['Home visits across Gorakhpur', 'BPT certified', '500+ patients treated'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
                <Image
                  src="/images/hero_physio_home_session_1775396700263.png"
                  alt="Physiotherapist providing home treatment in Gorakhpur"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  priority
                />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text">Serving Gorakhpur</p>
                      <p className="text-xs text-text-light">Home visits across all areas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary">
        <div className="container-custom py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="badge badge-primary mb-3">Why Us</p>
            <h2 className="section-title mb-4">Why patients choose Urmila PhysioCare</h2>
            <p className="section-subtitle">Combining clinical expertise with the convenience of home care for faster recovery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card group hover:border-primary/20">
                <div className="icon-box mb-5 group-hover:bg-primary/15 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-text mb-2">{f.title}</h3>
                <p className="text-sm text-text-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <p className="badge badge-primary mb-3">Our Services</p>
              <h2 className="section-title mb-2">Comprehensive care for all conditions</h2>
              <p className="section-subtitle max-w-lg">All treatments available as home visits across Gorakhpur.</p>
            </div>
            <Link
              href="/services"
              className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors flex items-center gap-1 shrink-0"
            >
              View all 9 services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Featured */}
            <div className="relative rounded-2xl overflow-hidden min-h-[320px] lg:row-span-2">
              <Image
                src="/images/cupping_therapy.jpeg"
                alt="Manual therapy session at home in Gorakhpur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7 w-full">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-white/60 uppercase tracking-wider mb-2">
                  <div className="w-1.5 h-1.5 bg-primary-light rounded-full"></div>
                  Featured Service
                </span>
                <h3 className="text-white text-xl font-bold mb-2">Orthopedic & Manual Therapy</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Targeted treatment for joint stiffness, back pain, and musculoskeletal conditions through hands-on techniques.
                </p>
              </div>
            </div>

            {/* Service list */}
            {services.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-primary/20 hover:shadow-sm transition-all duration-200">
                <div className="icon-box shrink-0">{s.icon}</div>
                <div>
                  <h4 className="text-sm font-semibold text-text mb-1">{s.title}</h4>
                  <p className="text-sm text-text-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="badge badge-primary mb-3">Patient Stories</p>
            <h2 className="section-title mb-4">What our patients say</h2>
            <p className="section-subtitle">Trusted by families across Gorakhpur for expert home physiotherapy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="card flex flex-col gap-4">
                <StarRating count={t.rating} />
                <p className="text-sm text-text-light leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-text-light">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to start your recovery?
            </h2>
            <p className="text-base text-white/75 mb-8 leading-relaxed">
              Book a home consultation in Gorakhpur today. We respond within 2 hours to confirm your appointment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/booking"
                className="px-7 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center justify-center shadow-sm text-sm"
              >
                Book Appointment
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="btn-ghost"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 89484 51008
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={WA_BOOKING}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        aria-label="Book via WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <Footer />
    </main>
  );
}
