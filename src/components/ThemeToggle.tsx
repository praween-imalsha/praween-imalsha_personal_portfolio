import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative w-11 h-11 rounded-full bg-white text-foreground shadow-soft border border-border flex items-center justify-center overflow-hidden hover:scale-105 active:scale-95 transition-transform">
      
      <AnimatePresence mode="wait" initial={false}>
        {isDark ?
        <motion.span
          key="sun"
          initial={{
            y: -20,
            opacity: 0,
            rotate: -90
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotate: 0
          }}
          exit={{
            y: 20,
            opacity: 0,
            rotate: 90
          }}
          transition={{
            duration: 0.25
          }}
          className="absolute inset-0 flex items-center justify-center text-amber-500">
          
            <Sun size={18} strokeWidth={2.5} />
          </motion.span> :

        <motion.span
          key="moon"
          initial={{
            y: -20,
            opacity: 0,
            rotate: -90
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotate: 0
          }}
          exit={{
            y: 20,
            opacity: 0,
            rotate: 90
          }}
          transition={{
            duration: 0.25
          }}
          className="absolute inset-0 flex items-center justify-center text-slate-700">
          
            <Moon size={18} strokeWidth={2.5} />
          </motion.span>
        }
      </AnimatePresence>
    </button>);

}