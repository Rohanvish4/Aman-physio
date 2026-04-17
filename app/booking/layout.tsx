import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: 'Book your home physiotherapy session with Dr. Aman Mishra. Get expert pain relief and rehabilitation at your doorstep.',
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
