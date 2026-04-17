import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-white border-b border-slate-100 pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">About Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Meet our expert team</h1>
          <p className="text-lg text-text-light max-w-xl">Get to know the professionals behind your treatment and the approach that drives meaningful recovery.</p>
        </div>
      </section>

      {/* Dr. Profile Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 max-w-md mx-auto md:mx-0 w-full">
              <Image
                src="/images/Aman_mishra_photo.jpeg"
                alt="Dr. Aman Mishra - Consultant Physiotherapist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Profile Details */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text mb-1">Dr. Aman Mishra (PT)</h2>
              <p className="text-primary font-semibold mb-6">Expert Physiotherapists</p>

              <p className="text-text-light leading-relaxed mb-8">
                Led by Dr. Aman Mishra, our expert team brings years of dedicated clinical experience specializing in orthopedic, neurological, and pediatric rehabilitation. We are committed to helping patients recover mobility, reduce pain, and regain independence — all from the comfort of their homes.
              </p>

              <div className="space-y-8">
                {/* Qualifications */}
                <div>
                  <h3 className="flex items-center gap-2.5 font-semibold text-text mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" /></svg>
                    Qualifications
                  </h3>
                  <ul className="text-sm text-text-light space-y-2 ml-7">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 shrink-0"></span>
                      Bachelor of Physiotherapy (BPT)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 shrink-0"></span>
                      Advanced Certifications in Manual Therapy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-1.5 shrink-0"></span>
                      Sports Physiotherapy Specialist
                    </li>
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="flex items-center gap-2.5 font-semibold text-text mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" /></svg>
                    Experience
                  </h3>
                  <p className="text-sm text-text-light ml-7 leading-relaxed">
                    3+ years of clinical practice in physiotherapy, specializing in home-based rehabilitation, pain management, and post-surgical recovery. Treated over 500 patients to date.
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="flex items-center gap-2.5 font-semibold text-text mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
                    Specializations
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 ml-7">
                    {[
                      { title: 'Pain Management', desc: 'Comprehensive pain relief strategies' },
                      { title: 'Post-Operative Recovery', desc: 'Rehabilitation after surgery' },
                      { title: 'Orthopedic Therapy', desc: 'Bone and joint treatment' },
                      { title: 'Neuro Rehabilitation', desc: 'Neurological recovery support' },
                    ].map((spec, i) => (
                      <div key={i} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <p className="font-semibold text-sm text-text">{spec.title}</p>
                        <p className="text-xs text-text-light mt-0.5">{spec.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/booking" className="btn-primary inline-flex items-center gap-2 text-sm">
                    Book with Dr. Aman
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="section-title">Our approach to treatment</h2>
            <p className="text-text-light text-lg">A structured, evidence-based process from first consultation to full recovery.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Assessment',
                desc: 'Thorough evaluation of your condition, medical history, and pain points.',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" /></svg>,
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'A treatment plan tailored to your specific condition and recovery goals.',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /></svg>,
              },
              {
                step: '03',
                title: 'Treatment',
                desc: 'Regular home-based sessions using professional techniques and equipment.',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>,
              },
              {
                step: '04',
                title: 'Recovery',
                desc: 'Track progress, adjust plans, and achieve your long-term wellness goals.',
                icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-100 p-6 text-center">
                <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  {item.icon}
                </div>
                <p className="text-xs font-bold text-primary mb-2 tracking-wider">STEP {item.step}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Have questions about your condition?</h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Dr. Aman is happy to discuss your case. Reach out for a free initial consultation.
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
