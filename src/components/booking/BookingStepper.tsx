'use client';

const steps = ['Movie', 'Showtime', 'Seats', 'Concessions', 'Checkout'];

export function BookingStepper({ active = 2 }: { active?: number }) {
  return (
    <div className="flex items-center gap-6 rounded-3xl bg-bg-overlay/80 px-4 py-3 text-xs uppercase tracking-[0.4em] text-text-muted">
      {steps.map((label, index) => (
        <div key={label} className="flex items-center gap-2">
          <div
            className={`grid h-8 w-8 place-items-center rounded-full border ${index <= active ? 'border-accent-primary' : 'border-border-default'}`}
          >
            {index <= active ? '✔' : index + 1}
          </div>
          <span className={index === active ? 'text-text-primary' : 'text-text-muted'}>{label}</span>
        </div>
      ))}
    </div>
  );
}
