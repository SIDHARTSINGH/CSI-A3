import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  setLoggedIn: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setLoggedIn: () => {
    console.log("logged in");
    set(() => ({ isLoggedIn: true }));
  },
}));

export default useAuthStore;
