'use client';

import { Movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import type { Recommendation } from '@/types';

interface RecommendationCardProps {
  recommendation: Recommendation;
  movie: Movie;
}

function RecommendationCard({ recommendation, movie }: RecommendationCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="group relative min-w-[220px] overflow-hidden rounded-2xl border border-border-default bg-bg-surface p-4 text-left shadow-card"
    >
      <div className="relative mb-3 h-48 w-full overflow-hidden rounded-2xl">
        <Image src={movie.posterUrl} alt={movie.title} fill className="object-cover" />
      </div>
      <p className="font-display text-lg text-text-primary">{movie.title}</p>
      <p className="text-xs uppercase tracking-[0.4em] text-text-muted">{recommendation.reason}</p>
      <div className="mt-4 text-xs text-text-secondary">{movie.genres.slice(0, 2).join(' • ')}</div>
      <button
        className={clsx(
          'mt-3 text-xs font-semibold tracking-wide text-accent-soft transition-opacity duration-200',
          'group-hover:opacity-100 opacity-70'
        )}
      >
        Not interested ×
      </button>
    </Link>
  );
}

interface RecommendationRailProps {
  movies: Movie[];
  recommendations: Recommendation[];
  title?: string;
}

export function RecommendationRail({ movies, recommendations, title = 'Handpicked for You' }: RecommendationRailProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="font-display text-3xl text-text-primary">{title}</p>
        <span className="text-xs text-text-muted">Your taste profile is 72% complete</span>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {recommendations.map(rec => {
          const movie = movies.find(m => m.id === rec.movieId);
          if (!movie) return null;
          return <RecommendationCard key={rec.id} recommendation={rec} movie={movie} />;
        })}
      </div>
    </section>
  );
}
