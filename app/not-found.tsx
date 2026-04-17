import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-20 bg-white border-y border-slate-100">
        <div className="text-center px-4 max-w-lg">
          <div className="text-8xl font-black text-primary/10 mb-2">404</div>
          <h2 className="text-3xl font-bold text-text mb-4">Page Not Found</h2>
          <p className="text-text-light mb-8">
            The page you are looking for doesn't exist or has been moved. Let's get you back on track to your recovery.
          </p>
          <Link href="/" className="btn-primary inline-flex">
            Return Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
