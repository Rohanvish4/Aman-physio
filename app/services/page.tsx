import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      name: 'Back Pain',
      icon: '🔙',
      description: 'Specialized treatment for lower and upper back pain relief and recovery',
      benefits: ['Pain relief', 'Mobility improvement', 'Muscle strengthening']
    },
    {
      name: 'Neck Pain',
      icon: '🧠',
      description: 'Expert care for cervical pain and tension management',
      benefits: ['Tension relief', 'Range improvement', 'Posture correction']
    },
    {
      name: 'Stroke Rehabilitation',
      icon: '🧬',
      description: 'Comprehensive rehabilitation therapy for stroke recovery',
      benefits: ['Motor recovery', 'Mobility restoration', 'Functional independence']
    },
    {
      name: 'Manual Therapy',
      icon: '👐',
      description: 'Hands-on therapeutic techniques for pain and dysfunction',
      benefits: ['Tissue healing', 'Joint mobility', 'Pain reduction']
    },
    {
      name: 'Electrotherapy',
      icon: '⚡',
      description: 'Modern electronic treatment for pain management and healing',
      benefits: ['Quick relief', 'Inflammation reduction', 'Tissue repair']
    },
    {
      name: 'Home Visit Physiotherapy',
      icon: '🏠',
      description: 'Convenient professional physiotherapy services at your home',
      benefits: ['Easy access', 'Personalized care', 'Comfortable environment']
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-light">Comprehensive physiotherapy and rehabilitation services</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.name}</h3>
                <p className="text-text-light mb-4">{service.description}</p>
                
                <div className="border-t border-secondary pt-4">
                  <p className="text-sm font-semibold text-text mb-3">Benefits:</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-text-light">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
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

      {/* Service Process */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">How Our Service Works</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  number: '1',
                  title: 'Initial Consultation',
                  description: 'Contact us via phone or WhatsApp to discuss your condition and symptoms'
                },
                {
                  number: '2',
                  title: 'Professional Assessment',
                  description: 'Dr. Aman visits your home to conduct a detailed evaluation'
                },
                {
                  number: '3',
                  title: 'Customized Treatment Plan',
                  description: 'Receive a tailored therapy program based on your specific needs'
                },
                {
                  number: '4',
                  title: 'Regular Sessions',
                  description: 'Attend treatment sessions at your home with professional guidance'
                },
                {
                  number: '5',
                  title: 'Progress Monitoring',
                  description: 'Track your recovery with periodic assessments and adjustments'
                },
                {
                  number: '6',
                  title: 'Full Recovery',
                  description: 'Achieve your wellness goals and maintain long-term health'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-text mb-2">{step.title}</h3>
                    <p className="text-text-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Recovery?</h2>
          <p className="text-lg text-primary-light mb-8 max-w-2xl mx-auto">
            Choose the service that fits your needs and book your appointment today.
          </p>
          <Link href="/booking" className="btn-primary bg-white text-primary hover:bg-secondary inline-block">
            Book an Appointment
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
