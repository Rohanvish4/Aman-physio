export default function Footer() {
  return (
    <footer className="bg-text text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Urmila Physiotherapy</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional physiotherapy services at your home. Specialized in pain management, recovery, and rehabilitation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/" className="hover:text-primary transition">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="/services" className="hover:text-primary transition">Services</a></li>
              <li><a href="/booking" className="hover:text-primary transition">Book Appointment</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:+919876543210" className="hover:text-primary transition">
                  📞 +91 98765 43210
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" className="hover:text-primary transition" target="_blank">
                  💬 WhatsApp
                </a>
              </li>
              <li>Available: Mon - Sat, 9AM - 6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2026 Urmila Physiotherapy. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">Professional Care at Your Home</p>
        </div>
      </div>
    </footer>
  );
}
