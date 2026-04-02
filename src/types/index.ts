export type MovieStatus = 'now_playing' | 'coming_soon' | 'ended';

export interface Movie {
  id: string;
  tmdbId: number;
  title: string;
  tagline?: string;
  synopsis: string;
  posterUrl: string;
  backdropUrl: string;
  runtime: number;
  releaseDate: string;
  genres: string[];
  mpaaRating: string;
  status: MovieStatus;
  imdbScore: number;
  rtScore: number;
  audienceScore: number;
  format: string[];
  director: string;
  cast: string[];
  languages: string[];
}

export interface Theater {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  distance: number;
  amenities: string[];
  rating: number;
}

export interface Showtime {
  id: string;
  movieId: string;
  theaterId: string;
  hall: string;
  format: string;
  startTime: string;
  capacityPercent: number;
  price: number;
}

export interface Seat {
  code: string;
  row: string;
  number: number;
  status: 'available' | 'held' | 'booked';
  type: 'standard' | 'vip' | 'accessible';
  price: number;
}

export interface ConcessionItem {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  basePrice: number;
  isPopular?: boolean;
}

export interface Recommendation {
  id: string;
  movieId: string;
  reason: string;
}
