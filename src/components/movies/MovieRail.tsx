'use client';

import { Movie } from '@/types';
import { MovieCard } from './MovieCard';
import { ArrowRight } from 'lucide-react';

interface MovieRailProps {
  title: string;
  movies: Movie[];
  subtitle?: string;
}

export function MovieRail({ title, movies, subtitle }: MovieRailProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display text-3xl text-text-primary">{title}</p>
          {subtitle && <p className="text-sm text-text-muted">{subtitle}</p>}
        </div>
        <div className="flex items-center text-sm font-semibold text-accent-soft">
          View all
          <ArrowRight size={18} className="ml-2" />
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} variant="rail" />
        ))}
      </div>
    </section>
  );
}
