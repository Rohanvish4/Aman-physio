'use client';

import { useState } from 'react';
import { trackLead } from '../lib/analytics';

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

export default function HomeBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    condition: '',
    address: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      const submittedCondition = formData.condition;
      setFormData({ name: '', phone: '', condition: '', address: '' });
      setStatus('success');
      trackLead('website_form', {
        form_name: 'homepage_booking',
        condition: submittedCondition,
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="home-booking-name" className="block text-sm font-medium text-text mb-1.5">
            Full name <span className="text-red-400">*</span>
          </label>
          <input
            id="home-booking-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
            required
            className="input-field"
          />
        </div>
        <div>
          <label htmlFor="home-booking-phone" className="block text-sm font-medium text-text mb-1.5">
            Phone number <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-text-light font-medium select-none">
              +91
            </span>
            <input
              id="home-booking-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              autoComplete="tel"
              inputMode="numeric"
              maxLength={10}
              pattern="[0-9]{10}"
              title="Enter a 10-digit Indian mobile number"
              required
              className="input-field pl-12"
            />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="home-booking-condition" className="block text-sm font-medium text-text mb-1.5">
          What do you need help with? <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <select
            id="home-booking-condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="input-field appearance-none pr-10"
          >
            <option value="">Select your condition</option>
            {conditions.map((condition) => (
              <option key={condition} value={condition}>{condition}</option>
            ))}
          </select>
          <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="home-booking-address" className="block text-sm font-medium text-text mb-1.5">
          Home visit address <span className="text-text-light font-normal text-xs">(optional)</span>
        </label>
        <textarea
          id="home-booking-address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Locality and nearby landmark in Gorakhpur"
          rows={2}
          className="input-field resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full mt-5 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending request...' : 'Request an Appointment'}
      </button>

      {status === 'success' && (
        <p role="status" aria-live="polite" className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-800">
          Thanks! We&apos;ll call you within 2 hours to confirm your home visit.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" aria-live="assertive" className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-800">
          We couldn&apos;t submit your request. Please call us at +91 89484 51008.
        </p>
      )}
    </form>
  );
}
