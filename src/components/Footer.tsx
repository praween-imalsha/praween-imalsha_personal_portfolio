import React from 'react';
import { Github, Linkedin, Dribbble, ArrowUp, Heart } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-serif font-bold tracking-tight text-foreground mb-2 block">
              
              Praween<span className="text-accent">.</span>
            </a>
            <p className="text-subtle text-sm">
              Designing digital experiences that matter.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {[
            {
              icon: Linkedin,
              href: '#',
              label: 'LinkedIn'
            },
            {
              icon: Github,
              href: '#',
              label: 'GitHub'
            },
            {
              icon: Dribbble,
              href: '#',
              label: 'Dribbble'
            }].
            map((social) =>
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-3 rounded-full bg-muted border border-border text-subtle hover:bg-accent hover:text-background hover:border-accent transition-colors">
              
                <social.icon size={18} />
              </a>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-accent text-background hover:bg-accent-soft transition-colors shadow-glow"
            aria-label="Scroll to top">
            
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-subtle">
          <p>
            © {new Date().getFullYear()} Praween Imalsha. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <Heart size={14} className="text-accent fill-accent" />{' '}
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>);

}