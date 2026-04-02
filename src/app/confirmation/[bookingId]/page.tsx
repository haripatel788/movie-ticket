import Link from 'next/link';

interface ConfirmationPageProps {
  params: { bookingId: string };
}

export default function ConfirmationPage({ params }: ConfirmationPageProps) {
  return (
    <div className="space-y-6 rounded-3xl border border-border-default bg-bg-surface p-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Booking confirmed</p>
      <h1 className="font-display text-3xl text-text-primary">Thank you for booking</h1>
      <p className="text-sm text-text-secondary">Your e-ticket has been emailed. Present the QR code at the door.</p>
      <p className="text-sm">Booking ID: <span className="font-mono text-text-primary">{params.bookingId}</span></p>
      <Link href="/" className="inline-flex items-center justify-center rounded-full border border-accent-primary px-6 py-2 text-sm text-accent-primary">
        Back to home
      </Link>
    </div>
  );
}
