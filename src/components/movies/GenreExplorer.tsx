'use client';

const genreTiles = [
  { label: 'Action', image: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80' },
  { label: 'Drama', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80' },
  { label: 'Comedy', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80' },
  { label: 'Horror', image: 'https://images.unsplash.com/photo-1502139266315-4d2c2f06cd12?auto=format&fit=crop&w=800&q=80' },
  { label: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80' },
  { label: 'Romance', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80' },
  { label: 'Animation', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80' },
  { label: 'Thriller', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80' }
];

export function GenreExplorer() {
  return (
    <section className="space-y-6">
      <p className="font-display text-3xl text-text-primary">Genre Explorer</p>
      <div className="grid gap-4 md:grid-cols-4">
        {genreTiles.map(tile => (
          <button
            key={tile.label}
            className="group relative h-40 overflow-hidden rounded-2xl border border-border-default bg-cover bg-center text-left"
            style={{ backgroundImage: `linear-gradient(180deg, rgba(8,7,8,.05), rgba(8,7,8,.85)), url(${tile.image})` }}
          >
            <span className="absolute inset-0 transition duration-300 group-hover:brightness-110" />
            <span className="relative z-10 text-2xl font-display italic text-text-primary">{tile.label}</span>
            <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.5em] text-accent-soft opacity-0 transition duration-300 group-hover:opacity-100">
              Discover
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
