import Link from 'next/link';

export default function BookingLandingPage() {
  return (
    <div className="space-y-6 rounded-3xl border border-border-default bg-bg-surface p-6 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Booking</p>
      <h1 className="font-display text-3xl text-text-primary">Start by selecting a movie</h1>
      <p className="text-sm text-text-secondary">
        Use the movie detail pages to choose a showtime and continue through seat selection, concessions, and checkout.
      </p>
      <Link href="/movies">
        <button className="rounded-full border border-accent-primary px-6 py-2 text-sm text-accent-primary hover:border-accent-soft">
          Browse movies
        </button>
      </Link>
    </div>
  );
}
