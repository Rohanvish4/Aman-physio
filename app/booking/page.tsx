'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const conditions = [
  'Back Pain',
  'Neck & Shoulder Pain',
  'Stroke Rehabilitation',
  'Post-Operative Recovery',
  'Sports Injury',
  'Joint Pain / Arthritis',
  'Cupping Therapy',
  'Advanced Dry Needle Therapy',
  'Pediatrics Physiotherapy',
  'General Pain',
  'Other',
];

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    condition: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', address: '', condition: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const whatsappText = `Hi, I'd like to book an appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCondition: ${formData.condition}\nAddress: ${formData.address}`;
  const whatsappLink = `https://wa.me/918948451008?text=${encodeURIComponent(whatsappText)}`;

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-white border-b border-slate-100 pt-12 pb-14 md:pt-16 md:pb-20">
        <div className="container-custom">
          <p className="text-primary font-semibold text-sm mb-3 tracking-wide uppercase">Appointments</p>
          <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">Book an appointment</h1>
          <p className="text-lg text-text-light max-w-xl">Fill in your details and we&apos;ll get back to you within 2 hours to confirm your session.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="booking-name" className="block text-sm font-medium text-text mb-1.5">
                      Full name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="booking-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-colors bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-medium text-text mb-1.5">
                      Phone number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="booking-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="10-digit number"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-colors bg-white"
                    />
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <label htmlFor="booking-condition" className="block text-sm font-medium text-text mb-1.5">
                    Condition <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="booking-condition"
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-colors bg-white appearance-none"
                  >
                    <option value="">Select your condition</option>
                    {conditions.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="booking-address" className="block text-sm font-medium text-text mb-1.5">
                    Address for home visit
                  </label>
                  <textarea
                    id="booking-address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Full address with a nearby landmark"
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-colors bg-white resize-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="booking-message" className="block text-sm font-medium text-text mb-1.5">
                    Additional details <span className="text-text-light font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="booking-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific details about your condition or preferred timing"
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-colors bg-white resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Sending...
                    </>
                  ) : (
                    'Submit Booking Request'
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <div>
                      <p className="text-sm font-semibold text-emerald-800">Request submitted</p>
                      <p className="text-sm text-emerald-700 mt-0.5">We&apos;ll call you within 2 hours to confirm your appointment.</p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                    <div>
                      <p className="text-sm font-semibold text-red-800">Something went wrong</p>
                      <p className="text-sm text-red-700 mt-0.5">Please try again, or contact us directly via phone or WhatsApp.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Contact */}
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
                <h3 className="font-semibold text-text mb-4">Prefer to contact us directly?</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+918948451008"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-slate-200 transition-colors text-sm"
                  >
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-medium text-text">Call us</p>
                      <p className="text-text-light text-xs">+91 89484 51008</p>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 hover:border-slate-200 transition-colors text-sm"
                  >
                    <div className="w-9 h-9 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    </div>
                    <div>
                      <p className="font-medium text-text">WhatsApp</p>
                      <p className="text-text-light text-xs">Quick chat booking</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Info Cards */}
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 space-y-5">
                <h3 className="font-semibold text-text">Good to know</h3>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Availability</p>
                    <p className="text-xs text-text-light mt-0.5">Mon – Sat, 9:00 AM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Pricing</p>
                    <p className="text-xs text-text-light mt-0.5">Competitive rates, packages available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text">Confirmation</p>
                    <p className="text-xs text-text-light mt-0.5">We respond within 2 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
