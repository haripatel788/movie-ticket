import { notFound } from 'next/navigation';
import { BookingStepper } from '@/components/booking/BookingStepper';
import { SeatMap } from '@/components/booking/SeatMap';
import { getMovieById, getSeatMap, getShowtimesForMovie } from '@/data/mockData';

interface SeatSelectionPageProps {
  params: { movieId: string; showtimeId: string };
}

export default function SeatSelectionPage({ params }: SeatSelectionPageProps) {
  const movie = getMovieById(params.movieId);
  if (!movie) {
    notFound();
  }
  const showtimes = getShowtimesForMovie(movie.id);
  const showtime = showtimes.find(show => show.id === params.showtimeId);
  if (!showtime) {
    notFound();
  }
  const seats = getSeatMap();

  return (
    <div className="space-y-6">
      <BookingStepper active={2} />
      <div className="grid gap-6 rounded-3xl border border-border-default bg-bg-surface p-6 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-text-muted">Seat selection</p>
          <h1 className="font-display text-2xl text-text-primary">{movie.title}</h1>
          <p className="text-sm text-text-muted">{showtime.hall} · {new Date(showtime.startTime).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</p>
          <SeatMap seats={seats} />
        </div>
        <div className="space-y-4 rounded-3xl border border-border-default bg-bg-elevated/60 p-4">
          <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Order summary</p>
          <div className="space-y-2 text-sm text-text-secondary">
            <p>Selected showing: {showtime.format} · ${showtime.price.toFixed(2)}</p>
            <p>Total seats bound to store</p>
          </div>
          <button className="w-full rounded-2xl bg-accent-primary px-4 py-3 text-sm font-semibold text-text-inverse">
            Continue to concessions
          </button>
        </div>
      </div>
    </div>
  );
}
