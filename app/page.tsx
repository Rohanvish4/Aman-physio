'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-primary font-semibold text-sm mb-4 tracking-wide uppercase">Home Physiotherapy Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold mb-6 leading-[1.15] text-text tracking-tight">
                Professional physiotherapy, delivered to your doorstep
              </h1>
              <p className="text-lg text-text-light mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Get expert pain relief, guided rehabilitation, and personalized recovery plans — all from the comfort of your home.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="tel:+919876543210" className="btn-primary flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Call Now
                </a>
                <a href="https://wa.me/919876543210?text=Hello%20Urmila%20Physiotherapy,%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Book via WhatsApp
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-text-light">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Home visits
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Certified physiotherapist
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  500+ patients
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero_physio_home_session_1775396700263.png"
                  alt="Physiotherapist guiding patient through shoulder exercises at home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-slate-50 border-y border-slate-100 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '3+', label: 'Years of experience' },
              { value: '500+', label: 'Patients treated' },
              { value: '100%', label: 'Home-based care' },
              { value: 'Mon–Sat', label: 'Available weekly' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-text">{stat.value}</p>
                <p className="text-sm text-text-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">Why patients choose us</h2>
            <p className="section-subtitle mx-auto">We combine clinical expertise with the convenience of home care to help you recover faster.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Qualified specialist</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Dr. Aman Mishra (PT) brings 3+ years of clinical experience in orthopedic and neurological rehabilitation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Treatment at your home</h3>
              <p className="text-sm text-text-light leading-relaxed">
                No travel needed. We bring the equipment and expertise to your doorstep so you can focus on healing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">Faster recovery</h3>
              <p className="text-sm text-text-light leading-relaxed">
                Evidence-based treatment plans customized to your condition, helping you get back to normal life sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <h2 className="section-title">Our services</h2>
              <p className="text-lg text-text-light max-w-lg">Comprehensive physiotherapy care for a wide range of conditions.</p>
            </div>
            <Link href="/services" className="text-primary text-sm font-semibold hover:text-primary-dark transition-colors flex items-center gap-1 shrink-0">
              View all services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Featured service card */}
            <div className="relative rounded-2xl overflow-hidden min-h-[360px] lg:row-span-3">
              <Image src="/images/manual_therapy_closeup_1775396728518.png" alt="Manual therapy session" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">Featured</p>
                <h3 className="text-white text-2xl font-bold mb-2">Orthopedic & Manual Therapy</h3>
                <p className="text-slate-300 text-sm max-w-sm leading-relaxed">Targeted treatment for joint stiffness, back pain, and musculoskeletal conditions through hands-on techniques.</p>
              </div>
            </div>

            {/* Service list */}
            {[
              {
                title: 'Neurological Rehabilitation',
                desc: 'Specialized care for stroke recovery, spinal cord injuries, and Parkinson\'s disease.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" /></svg>
                ),
              },
              {
                title: 'Post-Surgical Recovery',
                desc: 'Guided rehabilitation after joint replacement, ligament repair, and other surgeries.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                ),
              },
              {
                title: 'Sports Injury Rehabilitation',
                desc: 'Get back to peak performance with athletic-focused recovery programs.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /></svg>
                ),
              },
            ].map((service, i) => (
              <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-text mb-1">{service.title}</h4>
                  <p className="text-sm text-text-light leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your recovery?</h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            Book a consultation today and take the first step toward a pain-free life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/booking" className="px-7 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center justify-center shadow-sm">
              Book Appointment
            </Link>
            <a href="tel:+919876543210" className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
