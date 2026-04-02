'use client';

import { getConcessions } from '@/data/mockData';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';

export default function ConcessionsPage() {
  const concessions = getConcessions();
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Concessions</p>
        <h1 className="font-display text-3xl">Snacks & Sips ready for you</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {concessions.map(item => (
          <article key={item.id} className="flex gap-4 rounded-3xl border border-border-default bg-bg-surface p-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
              <Image src={item.imageUrl} alt={item.name} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-text-primary">{item.name}</h2>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-accent-soft">
                <span>${item.basePrice.toFixed(2)}</span>
                <button
                  type="button"
                  className="rounded-full border border-accent-primary px-4 py-1 text-xs uppercase tracking-[0.4em]"
                  onClick={() => addItem({ id: item.id, name: item.name, price: item.basePrice, quantity: 1 })}
                >
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
