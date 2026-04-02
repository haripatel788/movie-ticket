import type { ConcessionItem, Movie, Recommendation, Seat, Showtime, Theater } from '@/types';

const movies: Movie[] = [
  {
    id: 'movie-interstellar',
    tmdbId: 157336,
    title: 'Interstellar',
    tagline: 'Mankind’s next step begins beneath the stars.',
    synopsis:
      'A group of explorers travel through a wormhole in space to ensure humanity’s survival while confronting time, gravity, and love.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    runtime: 169,
    releaseDate: '2014-11-07',
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    mpaaRating: 'PG-13',
    status: 'now_playing',
    imdbScore: 8.6,
    rtScore: 72,
    audienceScore: 88,
    format: ['IMAX', 'Dolby Atmos'],
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    languages: ['English']
  },
  {
    id: 'movie-dune',
    tmdbId: 438631,
    title: 'Dune: Part Two',
    tagline: 'War will be inevitable.',
    synopsis:
      'Paul Atreides unites with Chani and the Fremen to exact revenge against the conspirators who destroyed his family and to prevent a terrible future.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/b7k2pab0Xk8ajxX3NTXBBApIc6c.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/qking4Ms7PoZps5QJk3Vbxlk2Qy.jpg',
    runtime: 155,
    releaseDate: '2024-02-28',
    genres: ['Sci-Fi', 'Adventure'],
    mpaaRating: 'PG-13',
    status: 'now_playing',
    imdbScore: 8.5,
    rtScore: 86,
    audienceScore: 90,
    format: ['4DX', 'IMAX'],
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Austin Butler'],
    languages: ['English']
  },
  {
    id: 'movie-batman',
    tmdbId: 414906,
    title: 'The Batman',
    tagline: 'A symbol for a city on the edge.',
    synopsis:
      'Batman ventures into Gotham City’s underworld when a sadistic killer leaves behind a trail of cryptic clues.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    runtime: 177,
    releaseDate: '2022-03-01',
    genres: ['Crime', 'Drama', 'Action'],
    mpaaRating: 'R',
    status: 'now_playing',
    imdbScore: 7.9,
    rtScore: 85,
    audienceScore: 91,
    format: ['Standard', 'Dolby Atmos'],
    director: 'Matt Reeves',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
    languages: ['English']
  },
  {
    id: 'movie-ozark',
    tmdbId: 49047,
    title: 'The Marvels',
    tagline: 'A cosmic jump. New allies.',
    synopsis:
      'Carol Danvers, Kamala Khan, and Monica Rambeau swap places every time they use their powers, forcing them to team up to save the universe.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
    runtime: 105,
    releaseDate: '2024-11-12',
    genres: ['Action', 'Adventure', 'Superhero'],
    mpaaRating: 'PG-13',
    status: 'coming_soon',
    imdbScore: 7.1,
    rtScore: 74,
    audienceScore: 80,
    format: ['IMAX'],
    director: 'Nia DaCosta',
    cast: ['Brie Larson', 'Iman Vellani', 'Teyonah Parris'],
    languages: ['English']
  },
  {
    id: 'movie-ellen',
    tmdbId: 50057,
    title: 'A Quiet Place: Day One',
    tagline: 'New York City is silent.',
    synopsis:
      'On the first day the aliens came to Earth, a young couple is separated in the chaos engulfing New York City.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/mY7SeH4HFFxW1hiI6cWuwCRKptN.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/w1280/mYPTgcls5tu6Z2QpRIkB0Cvv7IM.jpg',
    runtime: 85,
    releaseDate: '2025-05-09',
    genres: ['Horror', 'Sci-Fi', 'Thriller'],
    mpaaRating: 'PG-13',
    status: 'coming_soon',
    imdbScore: 6.6,
    rtScore: 74,
    audienceScore: 68,
    format: ['Dolby'],
    director: 'Michael Sarnoski',
    cast: ['Lupita Nyong’o', 'Joseph Quinn', 'Alex Wolff'],
    languages: ['English']
  }
];

const theaters: Theater[] = [
  {
    id: 'theater-lincoln',
    name: 'AMC Lincoln Square 13',
    address: '1998 Broadway, New York, NY',
    city: 'New York',
    state: 'NY',
    distance: 1.2,
    amenities: ['IMAX', 'Dolby Atmos', 'Bar'],
    rating: 4.6
  },
  {
    id: 'theater-regal',
    name: 'Regal Union Square',
    address: '850 Broadway, New York, NY',
    city: 'New York',
    state: 'NY',
    distance: 1.8,
    amenities: ['4DX', 'Premium Seats'],
    rating: 4.3
  },
  {
    id: 'theater-city',
    name: 'CineVault Urban Center',
    address: '555 5th Ave, New York, NY',
    city: 'New York',
    state: 'NY',
    distance: 0.9,
    amenities: ['Dolby Vision', 'Cocktail Lounge'],
    rating: 4.8
  }
];

const showtimes: Showtime[] = [
  {
    id: 'st-interstellar-1030',
    movieId: 'movie-interstellar',
    theaterId: 'theater-lincoln',
    hall: 'Hall 1',
    format: 'IMAX Dolby Atmos',
    startTime: '2026-04-02T13:30:00',
    capacityPercent: 58,
    price: 19.5
  },
  {
    id: 'st-interstellar-1800',
    movieId: 'movie-interstellar',
    theaterId: 'theater-lincoln',
    hall: 'Hall 1',
    format: 'IMAX Dolby Atmos',
    startTime: '2026-04-02T18:00:00',
    capacityPercent: 85,
    price: 19.5
  },
  {
    id: 'st-dune-1530',
    movieId: 'movie-dune',
    theaterId: 'theater-regal',
    hall: 'Hall 4',
    format: '4DX',
    startTime: '2026-04-02T15:30:00',
    capacityPercent: 64,
    price: 23.0
  },
  {
    id: 'st-batman-2000',
    movieId: 'movie-batman',
    theaterId: 'theater-city',
    hall: 'Hall 2',
    format: 'Standard 2D',
    startTime: '2026-04-02T20:00:00',
    capacityPercent: 45,
    price: 16.5
  }
];

const seatGrid: Seat[] = [];
const rows = ['A', 'B', 'C', 'D', 'E'];
for (const row of rows) {
  for (let number = 1; number <= 10; number += 1) {
    seatGrid.push({
      code: `${row}${number}`,
      row,
      number,
      status: number % 7 === 0 ? 'booked' : 'available',
      type: number > 8 ? 'vip' : row === 'E' ? 'accessible' : 'standard',
      price: number > 8 ? 21.5 : 17.25
    });
  }
}

const concessions: ConcessionItem[] = [
  {
    id: 'snack-1',
    name: 'Classic Buttered Popcorn',
    description: 'Freshly popped with Belgian butter.',
    category: 'popcorn',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    basePrice: 7.5,
    isPopular: true
  },
  {
    id: 'snack-2',
    name: 'Dark Roast Cold Brew',
    description: 'Smooth and chilled, made to order.',
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&q=80',
    basePrice: 5.0
  }
];

const recommendations: Recommendation[] = [
  { id: 'rec-1', movieId: 'movie-dune', reason: 'Fans of Interstellar crave this epic journey' },
  { id: 'rec-2', movieId: 'movie-batman', reason: 'Top pick in New York this week' }
];

export const getMovies = () => movies;
export const getNowPlaying = () => movies.filter(movie => movie.status === 'now_playing');
export const getComingSoon = () => movies.filter(movie => movie.status === 'coming_soon');
export const getMovieById = (id: string) => movies.find(movie => movie.id === id);
export const getTheaters = () => theaters;
export const getShowtimesForMovie = (movieId: string) => showtimes.filter(st => st.movieId === movieId);
export const getSeatMap = () => seatGrid;
export const getConcessions = () => concessions;
export const getRecommendations = () => recommendations;
