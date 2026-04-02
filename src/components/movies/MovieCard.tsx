'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import type { Movie } from '@/types';
import { Button } from '@/components/ui/Button';

interface MovieCardProps {
  movie: Movie;
  variant?: 'grid' | 'rail';
}

export function MovieCard({ movie, variant = 'grid' }: MovieCardProps) {
  return (
    <article
      className={clsx(
        'group flex flex-col overflow-hidden rounded-2xl border border-border-default bg-bg-surface shadow-card transition hover:-translate-y-1 hover:border-accent-primary',
        variant === 'rail' ? 'min-w-[220px]' : ''
      )}
    >
      <Link href={`/movies/${movie.id}`} className="relative block">
        <Image
          src={movie.posterUrl}
          alt={movie.title}
          width={400}
          height={600}
          className="h-[320px] w-full object-cover transition duration-300 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-text-secondary">
          <span className="rounded-full border border-accent-primary/80 px-3 py-1 text-[10px] text-accent-primary">
            {movie.mpaaRating}
          </span>
          <span className="text-accent-soft">★ {movie.imdbScore.toFixed(1)}</span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 px-4 py-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-text-muted">{movie.genres[0]}</p>
          <Link href={`/movies/${movie.id}`} className="text-lg font-semibold leading-tight text-text-primary">
            {movie.title}
          </Link>
        </div>
        <p className="text-sm text-text-secondary">{movie.synopsis.slice(0, 120)}…</p>
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
          <span>{movie.runtime} min</span>
          <span>{new Date(movie.releaseDate).getFullYear()}</span>
        </div>
        <Button size="sm" variant="ghost" className="w-full text-center">
          View details ↗
        </Button>
      </div>
    </article>
  );
}
