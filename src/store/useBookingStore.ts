'use client';

import { create } from 'zustand';

interface BookingState {
  showtimeId?: string;
  selectedSeats: string[];
  maxSeats: number;
  setShowtime: (id: string) => void;
  toggleSeat: (seatCode: string) => void;
  clearSeats: () => void;
}

export const useBookingStore = create<BookingState>(set => ({
  selectedSeats: [],
  maxSeats: 3,
  setShowtime: showtimeId => set(() => ({ showtimeId, selectedSeats: [] })),
  toggleSeat: seatCode =>
    set(state => {
      if (state.selectedSeats.includes(seatCode)) {
        return { selectedSeats: state.selectedSeats.filter(code => code !== seatCode) };
      }
      if (state.selectedSeats.length >= state.maxSeats) {
        return state;
      }
      return { selectedSeats: [...state.selectedSeats, seatCode] };
    }),
  clearSeats: () => set({ selectedSeats: [] })
}));
