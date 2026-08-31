import React from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Resume } from './components/Resume';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgb(var(--color-surface))',
              color: 'rgb(var(--color-foreground))',
              border: '1px solid rgb(var(--color-border))'
            }
          }} />
        

        <Navbar />

        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>);

}