'use client';

import type { Theater } from '@/types';
import { Button } from '@/components/ui/Button';

interface TheaterCardProps {
  theater: Theater;
}

export function TheaterCard({ theater }: TheaterCardProps) {
  return (
    <article className="flex flex-col gap-2 rounded-3xl border border-border-default bg-bg-surface p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-text-primary">{theater.name}</p>
          <p className="text-sm text-text-muted">
            {theater.address} · {theater.city}, {theater.state}
          </p>
        </div>
        <span className="rounded-full bg-accent-primary/10 px-3 py-1 text-xs text-accent-primary">
          {theater.rating.toFixed(1)} ★
        </span>
      </div>
      <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-text-muted">
        {theater.amenities.map(amenity => (
          <span key={amenity} className="rounded-full border border-border-default/60 px-3 py-1">
            {amenity}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-text-secondary">
        <span>{theater.distance.toFixed(1)} mi away</span>
        <Button size="sm" variant="ghost">
          View Showtimes
        </Button>
      </div>
    </article>
  );
}
