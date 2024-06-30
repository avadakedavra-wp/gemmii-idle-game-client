import { create } from 'zustand';

export type TTheme = 'noobTheme' | 'moonlightTheme' | 'crystalTheme' | 'eclipsePhoenixTheme' | 'celestialTheme';

interface ThemeState {
    theme: TTheme
    setTheme: (theme: TTheme) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
    theme: 'noobTheme',
    setTheme: (theme) => set({ theme }),
}));

export const useTheme = () => useThemeStore((state) => state.theme);
export const useSetTheme = () => useThemeStore((state) => state.setTheme);
