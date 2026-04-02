'use client';

import { useMemo, useState } from 'react';
import { MovieCard } from '@/components/movies/MovieCard';
import { getMovies } from '@/data/mockData';
import type { MovieStatus } from '@/types';
import { Input } from '@/components/ui/Input';

const statusOptions: { label: string; value: MovieStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Now Playing', value: 'now_playing' },
  { label: 'Coming Soon', value: 'coming_soon' }
];

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<MovieStatus | 'all'>('all');
  const movies = getMovies();

  const filtered = useMemo(() => {
    return movies.filter(movie => {
      if (status !== 'all' && movie.status !== status) return false;
      if (search && !movie.title.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [movies, search, status]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-[280px_1fr]">
        <div className="space-y-4 rounded-3xl border border-border-default bg-bg-surface p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Filters</p>
          <Input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search movies" />
          <div className="space-y-2">
            {statusOptions.map(option => (
              <button
                key={option.value}
                type="button"
                onClick={() => setStatus(option.value)}
                className={`w-full rounded-2xl border px-4 py-2 text-left text-sm transition ${
                  status === option.value ? 'border-accent-primary text-text-primary' : 'border-border-default text-text-muted'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            {filtered.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
