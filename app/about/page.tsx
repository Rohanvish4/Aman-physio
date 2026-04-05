import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-light">Learn about our expert physiotherapist and team</p>
        </div>
      </section>

      {/* Dr. Profile Section */}
      <section className="py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="bg-gradient-to-br from-primary-light to-primary rounded-2xl aspect-square flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-7xl">👨‍⚕️</p>
                  <p className="text-2xl font-bold mt-4">Dr. Aman Mishra</p>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div>
              <h2 className="section-title">Dr. Aman Mishra (PT)</h2>
              <p className="text-xl text-primary font-semibold mb-6">Consultant Physiotherapist</p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">🎓 Qualifications</h3>
                  <ul className="text-text-light space-y-1 ml-4">
                    <li>• Bachelor of Physiotherapy (BPT)</li>
                    <li>• Advanced Certifications in Manual Therapy</li>
                    <li>• Sports Physiotherapy Specialist</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">💼 Experience</h3>
                  <p className="text-text-light">
                    3+ years of dedicated experience in clinical physiotherapy, helping patients recover and regain mobility through evidence-based treatment approaches.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-primary mb-4">🏆 Specializations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-text">Pain Management</p>
                      <p className="text-sm text-text-light">Comprehensive pain relief strategies</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-text">Post-Operative Recovery</p>
                      <p className="text-sm text-text-light">Rehabilitation after surgery</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-text">Orthopedic Therapy</p>
                      <p className="text-sm text-text-light">Bone and joint treatment</p>
                    </div>
                    <div className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
                      <p className="font-semibold text-text">Neuro Rehabilitation</p>
                      <p className="text-sm text-text-light">Neurological recovery support</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/booking" className="btn-primary">
                    Book With Dr. Aman
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Approach to Treatment</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="font-bold text-lg text-primary mb-2">Assessment</h3>
              <p className="text-text-light text-sm">Thorough evaluation of your condition and pain points</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="font-bold text-lg text-primary mb-2">Customized Plan</h3>
              <p className="text-text-light text-sm">Tailored treatment designed for your specific needs</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="font-bold text-lg text-primary mb-2">Treatment</h3>
              <p className="text-text-light text-sm">Professional therapy using proven techniques</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="font-bold text-lg text-primary mb-2">Recovery</h3>
              <p className="text-text-light text-sm">Track progress and achieve your wellness goals</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
