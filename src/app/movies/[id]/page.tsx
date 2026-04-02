import Image from 'next/image';
import Link from 'next/link';
import { getMovieById, getShowtimesForMovie } from '@/data/mockData';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';

interface MoviePageProps {
  params: { id: string };
}

export default function MoviePage({ params }: MoviePageProps) {
  const movie = getMovieById(params.id);
  if (!movie) {
    notFound();
  }
  const showtimes = getShowtimesForMovie(movie.id);

  return (
    <div className="space-y-10">
      <div className="grid gap-6 rounded-3xl border border-border-default bg-bg-surface p-6 md:grid-cols-[2fr_1fr]">
        <div>
          <Image
            src={movie.backdropUrl}
            alt={movie.title}
            width={1200}
            height={600}
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="mt-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.5em] text-text-muted">{movie.genres.join(' · ')}</p>
            <h1 className="font-display text-3xl text-text-primary">{movie.title}</h1>
            <p className="text-sm text-text-secondary">{movie.tagline}</p>
            <p className="text-sm text-text-muted">Directed by {movie.director}</p>
            <p className="text-sm text-text-muted">Starring {movie.cast.join(', ')}</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.6em] text-text-muted">Synopsis</p>
          <p className="text-sm text-text-secondary">{movie.synopsis}</p>
          <div className="flex gap-4 text-xs text-text-muted">
            <span>Runtime: {movie.runtime} min</span>
            <span>Rating: {movie.mpaaRating}</span>
            <span>Languages: {movie.languages.join(', ')}</span>
          </div>
          <Button variant="primary" className="w-full">
            Watch Trailer
          </Button>
        </div>
      </div>
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-3xl text-text-primary">Showtimes</h2>
          <span className="text-xs text-text-muted">{showtimes.length} showings</span>
        </div>
        <div className="space-y-3">
          {showtimes.map(showtime => (
            <div
              key={showtime.id}
              className="flex flex-col gap-2 rounded-2xl border border-border-default bg-bg-elevated/40 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-text-primary">{showtime.hall}</p>
                <p className="text-xs text-text-muted">{showtime.format}</p>
              </div>
              <div className="flex items-center gap-3 text-sm text-text-muted">
                <span>{new Date(showtime.startTime).toLocaleString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
                <span>{showtime.capacityPercent}% filled</span>
              </div>
              <div className="flex flex-col items-end gap-2 md:flex-row">
                <p className="text-lg font-semibold text-accent-soft">${showtime.price.toFixed(2)}</p>
                <Link href={`/booking/${movie.id}/${showtime.id}`}>
                  <Button variant="ghost">Select seats</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
