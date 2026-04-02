import { getNowPlaying, getRecommendations } from '@/data/mockData';
import { RecommendationRail } from '@/components/recommendations/RecommendationRail';

export default function ProfilePage() {
  const nowPlaying = getNowPlaying();
  const recommendations = getRecommendations();

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-border-default bg-bg-surface p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Your profile</p>
        <h1 className="font-display text-3xl text-text-primary">Welcome back, CineVault member</h1>
        <p className="text-sm text-text-secondary">Personalized picks are waiting for you.</p>
      </section>
      <RecommendationRail movies={nowPlaying} recommendations={recommendations} title="Recent savings" />
    </div>
  );
}
