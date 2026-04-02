'use client';

import clsx from 'clsx';
import { useMemo } from 'react';
import type { Seat } from '@/types';
import { useBookingStore } from '@/store/useBookingStore';

interface SeatMapProps {
  seats: Seat[];
}

export function SeatMap({ seats }: SeatMapProps) {
  const seatsByRow = useMemo(() => {
    return seats.reduce<Record<string, Seat[]>>((acc, seat) => {
      (acc[seat.row] ||= []).push(seat);
      return acc;
    }, {});
  }, [seats]);
  const rowLabels = useMemo(() => Object.keys(seatsByRow).sort(), [seatsByRow]);

  const { selectedSeats, toggleSeat } = useBookingStore(state => ({
    selectedSeats: state.selectedSeats,
    toggleSeat: state.toggleSeat
  }));

  return (
    <div className="space-y-4 rounded-3xl border border-border-default bg-bg-surface p-6">
      <div className="grid gap-2 text-xs uppercase tracking-[0.4em] text-text-muted md:grid-cols-4">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-seat-available border border-border-default" />
          Available
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-seat-selected" />
          Selected
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-seat-taken border border-seat-border" />
          Booked
        </span>
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-accent-soft to-accent-primary" />
          VIP
        </span>
      </div>
      <div className="space-y-4">
        {rowLabels.map(row => (
          <div key={row} className="flex items-center gap-3 text-xs">
            <span className="w-6 text-right font-semibold text-text-muted">{row}</span>
            <div className="grid flex-1 grid-cols-10 gap-2">
              {seatsByRow[row].map(seat => {
                const isSelected = selectedSeats.includes(seat.code);
                return (
                  <button
                    key={seat.code}
                    type="button"
                    onClick={() => seat.status === 'available' && toggleSeat(seat.code)}
                    disabled={seat.status !== 'available' && seat.status !== 'held'}
                    className={clsx(
                      'h-8 rounded-lg border transition-colors',
                      seat.status === 'booked' && 'border-seat-border bg-seat-taken text-text-muted cursor-not-allowed',
                      isSelected && 'border-accent-primary bg-seat-selected text-text-inverse shadow-glow',
                      seat.status === 'available' && !isSelected && 'border-border-default bg-seat-available hover:border-accent-primary hover:bg-accent-soft/20'
                    )}
                  >
                    {seat.number}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
