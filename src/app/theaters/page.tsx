import { getTheaters } from '@/data/mockData';
import { TheaterCard } from '@/components/theater/TheaterCard';

export default function TheatersPage() {
  const theaters = getTheaters();

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border-default bg-bg-surface p-6 text-sm text-text-secondary">
        <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Theater locator</p>
        <p className="text-lg text-text-primary">Find premium auditoriums near you with curated filters.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {theaters.map(theater => (
          <TheaterCard key={theater.id} theater={theater} />
        ))}
      </div>
    </div>
  );
}
