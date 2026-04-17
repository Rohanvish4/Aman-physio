'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-20 bg-slate-50">
        <div className="text-center px-4 max-w-lg">
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-text mb-4">Something went wrong!</h2>
          <p className="text-text-light mb-8">
            An unexpected error has occurred. We apologize for the inconvenience. 
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => reset()}
              className="btn-primary"
            >
              Try again
            </button>
            <Link href="/" className="btn-secondary">
              Go back home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
