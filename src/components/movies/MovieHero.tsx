'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Movie } from '@/types';
import { Button } from '@/components/ui/Button';

interface MovieHeroProps {
  movie: Movie;
}

export function MovieHero({ movie }: MovieHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border-default bg-gradient-to-b from-bg-void/70 to-bg-surface p-6 shadow-card md:p-10">
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen blur-3xl" />
      <div className="relative z-10 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-text-muted">Now Playing</p>
          <motion.h1
            layout
            className="font-display text-[clamp(2.5rem,4vw,4rem)] leading-tight text-text-primary"
          >
            {movie.title}
          </motion.h1>
          <p className="text-lg italic text-text-secondary">{movie.tagline}</p>
          <p className="text-sm text-text-muted">{movie.synopsis}</p>
          <div className="flex flex-wrap gap-3">
            {movie.genres.map(genre => (
              <span key={genre} className="rounded-full border border-accent-primary/60 px-4 py-1 text-xs text-accent-soft">
                {genre}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
            <span>★ IMDb {movie.imdbScore}</span>
            <span>🎬 {new Date(movie.releaseDate).getFullYear()}</span>
            <span>{movie.runtime} min</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Get Tickets</Button>
            <Button variant="ghost">▶ Watch Trailer</Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-border-default bg-bg-elevated p-4 shadow-glow">
          <Image
            src={movie.backdropUrl}
            alt={movie.title}
            width={720}
            height={480}
            className="h-full w-full object-cover"
          />
          <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-accent-glow blur-3xl" />
        </div>
      </div>
    </section>
  );
}
