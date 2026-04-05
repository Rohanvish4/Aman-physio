'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex-grow flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-light/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold text-sm mb-8 animate-fade-in-up">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                Available for Home Visits Today
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] text-text tracking-tight relative">
                Premium Next-Level <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Physiotherapy</span> at Home
              </h1>
              
              <p className="text-xl md:text-2xl text-text-light mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experience world-class pain relief, recovery, and rehabilitation in the absolute comfort and privacy of your own sanctuary.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a href="tel:+919876543210" className="btn-primary flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Call Consultant
                </a>
                <a href="https://wa.me/919876543210?text=Hello%20Urmila%20Physiotherapy,%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-3 !border-[#25D366] !text-[#25D366] hover:!bg-[#25D366]/10">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Booking
                </a>
              </div>
              
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-5">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-secondary flex items-center justify-center overflow-hidden relative shadow-sm">
                      <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient avatar" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-500 text-lg mb-1">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <p className="text-sm font-medium text-text"><span className="font-bold text-primary">500+</span> Real patients treated</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative w-full max-w-xl mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="/images/hero_physio_home_session_1775396700263.png" 
                  alt="Professional Home Physiotherapy Session" 
                  fill 
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute top-10 -left-4 md:-left-12 lg:-left-16 floating-badge hover:scale-105 transition-transform cursor-default z-20">
                <span className="text-2xl">✨</span> Active Life Restored
              </div>
              <div className="absolute bottom-20 -right-4 md:-right-12 lg:-right-16 floating-badge hover:scale-105 transition-transform cursor-default z-20" style={{ animationDelay: '1.5s' }}>
                <span className="text-2xl">🏆</span> Certified Expert
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white relative z-20 border-y border-secondary/60">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-secondary/50">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "100%", label: "Home Based" },
              { value: "500+", label: "Happy Patients" },
              { value: "24/7", label: "Consultation" }
            ].map((stat, i) => (
              <div key={i} className="text-center px-4">
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">{stat.value}</p>
                <p className="text-text-light font-bold uppercase tracking-wider text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Why Choose Urmila Physiotherapy?</h2>
            <p className="section-subtitle mx-auto">Experience the perfect blend of clinical excellence and home comfort, tailored exclusively for your rapid recovery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-all group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-white duration-300 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">Expert Care</h3>
              <p className="text-text-light leading-relaxed">
                Led by Dr. Aman Mishra (PT) with rigorous clinical background and 3+ years of specialized experience in advanced rehabilitation techniques.
              </p>
            </div>

            <div className="card group relative overflow-hidden">
               <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-all group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-white duration-300 shadow-sm relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4 relative z-10">Absolute Comfort</h3>
              <p className="text-text-light leading-relaxed relative z-10">
                Zero travel stress. We bring clinical-grade equipment and professional care directly to your living room for maximum convenience.
              </p>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
            </div>

            <div className="card group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-all group-hover:-translate-y-2 group-hover:bg-primary group-hover:text-white duration-300 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-text mb-4">Accelerated Recovery</h3>
              <p className="text-text-light leading-relaxed">
                Personalized, evidence-based treatment plans that adapt dynamically to ensure the fastest possible return to optimal health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick-View */}
      <section className="py-24 bg-white border-y border-secondary/50">
         <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                <h2 className="section-title !mb-4">Specialized Services</h2>
                <p className="text-xl text-text-light leading-relaxed">Top-tier comprehensive care tailored specifically to your unique anatomical and physiological recovery needs.</p>
              </div>
              <Link href="/services" className="text-primary font-bold hover:text-primary-dark flex items-center gap-2 group whitespace-nowrap bg-primary/5 px-6 py-3 rounded-full hover:bg-primary/10 transition-colors">
                View All Services 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3 relative group rounded-[2rem] overflow-hidden aspect-square sm:aspect-video lg:aspect-auto min-h-[450px]">
                 <Image src="/images/manual_therapy_closeup_1775396728518.png" alt="Manual Therapy" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold tracking-widest mb-4 inline-block uppercase border border-white/30">Featured Treatment</span>
                    <h3 className="text-white text-3xl md:text-4xl font-extrabold mb-4">Orthopedic & Manual Therapy</h3>
                    <p className="text-slate-200 text-lg md:text-xl max-w-lg leading-relaxed">Alleviate profound joint stiffness and muscular pain through state-of-the-art hands-on manipulation.</p>
                 </div>
              </div>
              
              <div className="lg:col-span-2 flex flex-col gap-6">
                 {[
                   { title: "Neurological Rehab", desc: "Expert care for stroke, Parkinson's, and spinal cord injuries.", icon: "🧠" },
                   { title: "Post-Surgical Care", desc: "Safe, guided recovery protocols after major joint replacement surgeries.", icon: "🦿" },
                   { title: "Sports Injury Recovery", desc: "Get back on track with athletic-focused intensive rehabilitation.", icon: "🏃" }
                 ].map((service, i) => (
                   <div key={i} className="flex-1 flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-primary/20 transition-all duration-300 group">
                     <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                       {service.icon}
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-text mb-2">{service.title}</h4>
                       <p className="text-text-light">{service.desc}</p>
                     </div>
                   </div>
                 ))}
              </div>
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-primary text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.07]">
          <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 60L60 0H30L0 30M60 60V30L30 60" stroke="currentColor" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>

        <div className="container-custom relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold text-sm mb-8 tracking-widest uppercase shadow-xl border border-white/20">Rapid Recovery Awaits</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 max-w-4xl mx-auto leading-tight">Take the First Step Toward a Pain-Free Life</h2>
          <p className="text-xl md:text-2xl text-primary-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Don't let pain dictate your life. Book a session today and let our experts create a highly tailored recovery plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link href="/booking" className="btn-primary !bg-white !text-primary hover:!bg-slate-100 shadow-2xl !px-10 !py-5 text-lg">
               Schedule an Evaluation
             </Link>
             <a href="tel:+919876543210" className="btn-secondary !text-white !border-white/30 hover:!bg-white/10 !px-10 !py-5 text-lg backdrop-blur-sm">
               Call Us Directly
             </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

