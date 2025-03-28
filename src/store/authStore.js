import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: { data: { name: "", token: "" } }, 
      isLogged: false,
      setUser: (userData, token) => set({ user: { ...userData, token }, isLogged: true }), 
      logout: () => set({ user: { data: { name: "", token: "" } }, isLogged: false }), 
    }),
    {
      name: 'auth-storage', 
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;