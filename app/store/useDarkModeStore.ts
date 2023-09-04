import {create} from 'zustand';

interface DarkModeState {
  isDarkMode: boolean;
}

interface DarkModeActions {
  setDarkMode: () => void;
}

const useDarModeStore = create<DarkModeState & DarkModeActions>((set) => ({
  isDarkMode: false,
  setDarkMode: () => set((state) => ({isDarkMode: !state.isDarkMode}))
}));

export default useDarModeStore;
