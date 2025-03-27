import { create } from 'zustand';

const useAuthStore = create((set) => ({
    user: { data: { name: "" } },
    isLogged: false,
    setUser: (userData) => set({ user: userData, isLogged: true }),
    logout: () => set({ user: { data: { name: "" } }, isLogged: false }),
}));

export default useAuthStore;