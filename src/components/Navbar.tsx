import React, { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
const links = [
{
  name: 'About',
  href: '#about'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Experience',
  href: '#experience'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = links.
    map((l) => document.querySelector(l.href)).
    filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.
        filter((e) => e.isIntersecting).
        sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 1]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color] duration-300 ${isScrolled ? 'bg-background/70 backdrop-blur-xl border-b border-border py-3' : 'bg-transparent border-b border-transparent py-6'}`}>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-serif font-bold tracking-tight text-foreground z-50 relative">
          
          Praween<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-surface/60 border border-border backdrop-blur-md">
            {links.map((link) => {
              const isActive = activeId === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200">
                  
                  {isActive &&
                  <motion.span
                    layoutId="nav-pill"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 32
                    }}
                    className="absolute inset-0 rounded-full bg-accent/15 border border-accent/30" />

                  }
                  <span
                    className={`relative ${isActive ? 'text-accent' : 'text-subtle hover:text-foreground'}`}>
                    
                    {link.name}
                  </span>
                </a>);

            })}
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-background text-sm font-semibold rounded-full hover:bg-accent-soft transition-colors shadow-glow">
            
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2 z-50 relative">
          <ThemeToggle />
          <button
            className="p-2.5 rounded-full bg-surface border border-border text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            className="absolute top-0 left-0 right-0 bg-background border-b border-border pt-24 pb-8 px-6 shadow-float md:hidden flex flex-col gap-4">
            
              {links.map((link) =>
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-foreground hover:text-accent transition-colors">
              
                  {link.name}
                </a>
            )}
              <a
              href="#cv.pdf"
              download
              className="mt-4 px-6 py-3 bg-accent text-background text-center font-semibold rounded-full hover:bg-accent-soft transition-colors flex items-center justify-center gap-2">
              
                <Download size={16} /> Download CV
              </a>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </header>);

}