'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary/50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-primary/30 transition-all">
              U
            </div>
            <div>
              <h1 className="font-extrabold text-primary text-xl leading-tight tracking-tight">Urmila</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-light/80">Physiotherapy</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {['Home', 'About Us', 'Services'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                className="relative text-text/80 hover:text-primary font-bold text-sm transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/booking" className="btn-primary !py-3 !px-6 shadow-primary/20">
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] border-t border-secondary/50 py-6' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4">
            {['Home', 'About Us', 'Services'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                className="text-lg font-bold text-text hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-4 btn-primary text-center shadow-primary/20"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
