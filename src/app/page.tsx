'use client';

import { GenreExplorer } from '@/components/movies/GenreExplorer';
import { MovieHero } from '@/components/movies/MovieHero';
import { MovieRail } from '@/components/movies/MovieRail';
import { RecommendationRail } from '@/components/recommendations/RecommendationRail';
import { TheaterCard } from '@/components/theater/TheaterCard';
import { getComingSoon, getNowPlaying, getRecommendations, getTheaters } from '@/data/mockData';

export default function HomePage() {
  const nowPlaying = getNowPlaying();
  const comingSoon = getComingSoon();
  const theaters = getTheaters();
  const recommendations = getRecommendations();
  const heroMovie = nowPlaying[0] ?? comingSoon[0];

  return (
    <div className="space-y-14">
      {heroMovie && <MovieHero movie={heroMovie} />}
      <MovieRail title="Now Playing" movies={nowPlaying} subtitle="Tickets on sale now" />
      <MovieRail title="Coming Soon" movies={comingSoon} subtitle="Reserve the hype" />
      <GenreExplorer />
      <RecommendationRail movies={[...nowPlaying, ...comingSoon]} recommendations={recommendations} />
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-display text-3xl text-text-primary">Nearby Theaters</p>
          <span className="text-xs text-text-muted">See all theaters →</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {theaters.map(theater => (
            <TheaterCard key={theater.id} theater={theater} />
          ))}
        </div>
      </section>
    </div>
  );
}
