'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    problem: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', address: '', problem: '' });
      setSubmitted(false);
    }, 2000);
  };

  const whatsappMessage = `Hello! I would like to book an appointment. My details: Name: ${formData.name}, Phone: ${formData.phone}, Address: ${formData.address}, Problem: ${formData.problem}`;
  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMessage)}`;
  const callLink = `tel:+919876543210`;

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-primary-light">Schedule your physiotherapy session in just a few steps</p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Form */}
            <div className="card border-2 border-primary mb-8">
              <h2 className="text-2xl font-bold text-text mb-6">Your Details</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-semibold text-text mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-primary focus:outline-none transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block font-semibold text-text mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="10-digit phone number"
                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-primary focus:outline-none transition"
                  />
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block font-semibold text-text mb-2">
                    Complete Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full address with landmark"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-primary focus:outline-none transition resize-none"
                  />
                </div>

                {/* Problem */}
                <div>
                  <label htmlFor="problem" className="block font-semibold text-text mb-2">
                    Describe Your Problem *
                  </label>
                  <select
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-secondary rounded-lg focus:border-primary focus:outline-none transition"
                  >
                    <option value="">Select your condition</option>
                    <option value="Back Pain">Back Pain</option>
                    <option value="Neck Pain">Neck Pain</option>
                    <option value="Stroke Rehabilitation">Stroke Rehabilitation</option>
                    <option value="Post-Operative Recovery">Post-Operative Recovery</option>
                    <option value="Sports Injury">Sports Injury</option>
                    <option value="General Pain">General Pain</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary text-center"
                >
                  Submit Details
                </button>
              </form>

              {/* Success Message */}
              {submitted && (
                <div className="mt-6 p-4 bg-green-100 border-2 border-green-500 rounded-lg">
                  <p className="text-green-700 font-semibold">✓ Form submitted successfully!</p>
                  <p className="text-green-600 text-sm mt-2">Proceeding to contact options...</p>
                </div>
              )}
            </div>

            {/* Contact Via Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card border-2 border-yellow-400">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-text mb-3">Call Us Directly</h3>
                <p className="text-text-light mb-6">
                  Speak directly with our team to book your appointment
                </p>
                <a
                  href={callLink}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300"
                >
                  📞 Call Now
                </a>
              </div>

              <div className="card border-2 border-green-400">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-text mb-3">WhatsApp Booking</h3>
                <p className="text-text-light mb-6">
                  Chat with us on WhatsApp for quick appointment scheduling
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Appointment Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="font-bold text-lg text-primary mb-2">Availability</h3>
              <p className="text-text-light">
                Monday - Saturday<br />
                9:00 AM - 6:00 PM
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-lg text-primary mb-2">Flexible Rates</h3>
              <p className="text-text-light">
                Competitive pricing<br />
                Customized packages available
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-lg text-primary mb-2">Confirmation</h3>
              <p className="text-text-light">
                You'll receive confirmation<br />
                within 2 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
