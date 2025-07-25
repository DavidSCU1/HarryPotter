import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  username: string;
  email: string;
  nickname: string;
  birthday?: string;
  gender?: string;
  favoriteCreature?: string;
  house?: 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff';
  houseDate?: string;
  lastSortingDate?: string;
  bio?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  setHouse: (house: User['house']) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      updateUser: (updates) => set((state) => ({
        user: state.user ? { ...state.user, ...updates } : null
      })),
      setHouse: (house) => set((state) => ({
        user: state.user ? {
          ...state.user,
          house,
          houseDate: new Date().toISOString(),
          lastSortingDate: new Date().toISOString().split('T')[0]
        } : null
      }))
    }),
    {
      name: 'auth-storage'
    }
  )
);