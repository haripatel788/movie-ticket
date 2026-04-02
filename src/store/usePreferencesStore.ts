'use client';

import { create } from 'zustand';

interface PreferencesState {
  favoriteGenres: string[];
  favoriteFormats: string[];
  setGenres: (genres: string[]) => void;
  setFormats: (formats: string[]) => void;
}

export const usePreferencesStore = create<PreferencesState>(set => ({
  favoriteGenres: ['Sci-Fi', 'Drama'],
  favoriteFormats: ['IMAX'],
  setGenres: genres => set({ favoriteGenres: genres }),
  setFormats: formats => set({ favoriteFormats: formats })
}));
