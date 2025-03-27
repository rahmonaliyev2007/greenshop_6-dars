import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: { data: { name: "" } },
      isLogged: false,
      setUser: (userData) => set({ user: userData, isLogged: true }),
      logout: () => set({ user: { data: { name: "" } }, isLogged: false }),
    }),
    {
      name: 'auth-storage', 
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;