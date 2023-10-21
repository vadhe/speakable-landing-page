import {create} from 'zustand';

interface DarkModeState {
  isDarkMode: boolean;
}

interface DarkModeActions {
  setDarkMode: (isDarkMode: boolean) => void;
}

const useDarModeStore = create<DarkModeState & DarkModeActions>((set) => ({
  isDarkMode: false,
  setDarkMode: (isDarkMode: boolean) => set((state) => ({isDarkMode: isDarkMode}))
}));

export default useDarModeStore;
