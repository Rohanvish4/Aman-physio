import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive home physiotherapy treatments including manual therapy, stroke rehabilitation, pediatrics physiotherapy, and advanced dry needle therapy.',
};

const services = [
  {
    name: 'Back & Spine Pain',
    description: 'Treatment for lower back pain, sciatica, disc problems, and postural dysfunction using manual therapy and targeted exercises.',
    benefits: ['Pain relief', 'Mobility improvement', 'Core strengthening'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
    ),
  },
  {
    name: 'Neck & Shoulder Pain',
    description: 'Relief from cervical spondylosis, frozen shoulder, tension headaches, and repetitive strain injuries.',
    benefits: ['Tension relief', 'Range of motion', 'Posture correction'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>
    ),
  },
  {
    name: 'Stroke Rehabilitation',
    description: 'Structured neuro-rehabilitation for stroke patients focusing on motor recovery, balance, and regaining functional independence.',
    benefits: ['Motor recovery', 'Balance training', 'Functional independence'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
    ),
  },
  {
    name: 'Manual Therapy',
    description: 'Hands-on treatment techniques including joint mobilization, soft tissue massage, and myofascial release for pain and stiffness.',
    benefits: ['Tissue healing', 'Joint mobility', 'Pain reduction'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 0-.659-.677.668.668 0 0 0-.677.659v.3a.75.75 0 0 1-1.5 0V12m-1.5-1.5V4.575" /></svg>
    ),
  },
  {
    name: 'Electrotherapy',
    description: 'Modern modalities including TENS, ultrasound therapy, and IFT for effective pain management and accelerated tissue repair.',
    benefits: ['Quick relief', 'Reduced inflammation', 'Tissue repair'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>
    ),
  },
  {
    name: 'Home Visit Physiotherapy',
    description: 'All our services delivered to your home. No travel needed — we bring professional equipment and expertise to your doorstep.',
    benefits: ['Convenient access', 'Personalized care', 'Comfortable environment'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
    ),
  },
  {
    name: 'Cupping Therapy',
    description: 'Applying cups to the skin to create suction, helping with pain, inflammation, blood flow, relaxation and well-being.',
    benefits: ['Pain relief', 'Reduced inflammation', 'Increased blood flow'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
  },
  {
    name: 'Advanced Dry Needle Therapy',
    description: 'A modern, science-based intervention for the treatment of pain and dysfunction in musculoskeletal conditions.',
    benefits: ['Muscle relaxation', 'Pain management', 'Improved movement'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
    ),
  },
  {
    name: 'Pediatrics Physiotherapy',
    description: 'Specialized therapy specifically designed to support the physical development and well-being of infants, children, and adolescents.',
    benefits: ['Motor skill development', 'Strength improvement', 'Enhanced mobility'],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" /></svg>
    ),
  },
];

const steps = [
  {
    title: 'Initial consultation',
    desc: 'Contact us via phone or WhatsApp to discuss your condition and symptoms.',
  },
  {
    title: 'Home assessment',
    desc: 'Dr. Aman visits your home to conduct a detailed physical evaluation.',
  },
  {
    title: 'Treatment plan',
    desc: 'Receive a customized therapy program based on your specific condition.',
  },
  {
    title: 'Regular sessions',
    desc: 'Scheduled home visits with hands-on treatment and guided exercises.',
  },
  {
    title: 'Progress tracking',
    desc: 'Periodic reassessments to adjust your plan and measure improvement.',
  },
  {
    title: 'Full recovery',
    desc: 'Achieve your recovery goals with guidance on maintaining long-term health.',
  },
];

export default function Services() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-white border-b border-slate-100 pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">What We Offer</p>
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Our services</h1>
          <p className="text-lg text-text-light max-w-xl">Comprehensive physiotherapy and rehabilitation services, all available at your home.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2">{service.name}</h3>
                <p className="text-sm text-text-light mb-5 leading-relaxed">{service.description}</p>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold text-text mb-2 uppercase tracking-wider">Key benefits</p>
                  <ul className="space-y-1.5">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-light">
                        <svg className="w-3.5 h-3.5 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">How it works</h2>
            <p className="text-lg text-text-light">From your first call to full recovery, here&apos;s what the process looks like.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-5 items-start relative">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-full bg-slate-200 min-h-[3rem]"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-text mb-1">{step.title}</h3>
                    <p className="text-sm text-text-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to start your recovery?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Choose the service that fits your needs and book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/booking" className="px-7 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-slate-50 transition-colors inline-flex items-center justify-center shadow-sm text-sm">
              Book Appointment
            </Link>
            <a href="tel:+918948451008" className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
