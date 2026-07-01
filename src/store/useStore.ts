import { create } from 'zustand';

interface AppStore {
  darkMode: boolean;
  toggleDarkMode: () => void;

  chatOpen: boolean;
  toggleChat: () => void;
}

export const useStore = create<AppStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.darkMode;
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
      }
      return { darkMode: newMode };
    });
  },

  chatOpen: false,
  toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),
}));
