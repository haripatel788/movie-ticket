'use client';

import { useCartStore } from '@/store/useCartStore';
import { Input } from '@/components/ui/Input';

export default function CheckoutPage() {
  const cart = useCartStore(state => state.items);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4 rounded-3xl border border-border-default bg-bg-surface p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Payment</p>
        <div className="grid gap-4 md:grid-cols-2">
          <Input placeholder="Card number" />
          <Input placeholder="Name on card" />
          <Input placeholder="MM/YY" />
          <Input placeholder="CVC" />
        </div>
        <button className="w-full rounded-2xl bg-accent-primary px-4 py-3 text-sm font-semibold text-text-inverse">
          Confirm booking
        </button>
      </div>
      <div className="space-y-4 rounded-3xl border border-border-default bg-bg-elevated/60 p-6">
        <p className="text-xs uppercase tracking-[0.4em] text-text-muted">Order summary</p>
        <div className="space-y-3 text-sm text-text-secondary">
          {cart.map(item => (
            <div key={item.id} className="flex items-center justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between text-base font-semibold text-text-primary">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
