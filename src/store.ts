import { create } from "zustand";

interface AuthStore {
  isLoggedIn: boolean;
  setLoggedIn: () => void;
  setLoggedOut: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setLoggedIn: () => {
    console.log("logged in");
    set(() => ({ isLoggedIn: true }));
  },
  setLoggedOut: () => {
    console.log("logged out");
    set(() => ({ isLoggedIn: false }));
  },
}));

export default useAuthStore;
