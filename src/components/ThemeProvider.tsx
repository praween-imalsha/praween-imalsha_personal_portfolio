import React, { useEffect, useState, createContext, useContext } from 'react';
type Theme = 'dark' | 'light';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: {children: React.ReactNode;}) {
  const [theme, setTheme] = useState<Theme>('dark');
  useEffect(() => {
    const stored = (
    typeof window !== 'undefined' ? localStorage.getItem('theme') : null) as
    Theme | null;
    if (stored === 'dark' || stored === 'light') {
      setTheme(stored);
    }
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {

      // ignore storage errors
    }}, [theme]);
  const toggleTheme = () => setTheme((t) => t === 'dark' ? 'light' : 'dark');
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}>
      
      {children}
    </ThemeContext.Provider>);

}
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}