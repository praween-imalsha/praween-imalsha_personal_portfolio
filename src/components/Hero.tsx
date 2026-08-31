import React from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Dribbble,
  Download,
  Sparkles } from
'lucide-react';
import { motion } from 'framer-motion';
import { TypingText } from './ui/TypingText';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] -z-10" />

      {/* Decorative blobs */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-soft/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 border border-border backdrop-blur-sm text-sm font-medium text-subtle mb-8">
            
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight text-foreground mb-6 text-balance">
            
            Praween <br />
            <span className="italic gradient-text">Imalsha.</span>
          </motion.h1>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="flex items-baseline gap-3 mb-6 min-h-[2.5rem]">
            
            <Sparkles size={18} className="text-accent shrink-0" />
            <p className="text-xl md:text-2xl font-medium text-subtle">
              I'm a{' '}
              <TypingText
                words={[
                'UI/UX Designer',
                'Product Designer',
                'Frontend Developer',
                'Design Systems Nerd']
                }
                className="text-foreground font-semibold" />
              
            </p>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="text-lg md:text-xl text-subtle max-w-md mb-10 leading-relaxed">
            
            Passionate designer crafting user-friendly and visually appealing
            digital experiences. I blend design thinking with full-stack
            capabilities to ship products that feel effortless.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="flex flex-wrap items-center gap-4">
            
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3.5 bg-accent text-background rounded-full font-semibold hover:bg-accent-soft transition-colors duration-200 shadow-glow">
              
              View Projects
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform" />
              
            </a>
            <a
              href="#cv.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3.5 bg-surface border border-border text-foreground rounded-full font-medium hover:border-accent transition-colors duration-200">
              
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
            className="flex items-center gap-3 mt-10">
            
            <span className="text-xs uppercase tracking-widest text-subtle/70 mr-2">
              Follow
            </span>
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
            map((social, i) =>
            <a
              key={i}
              href={social.href}
              aria-label={social.label}
              className="p-2.5 rounded-full border border-border text-subtle hover:border-accent hover:text-accent transition-colors">
              
                <social.icon size={18} />
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="relative hidden md:block">
          
          <div className="relative aspect-[4/5]">
            {/* Accent arch behind the cutout */}
            <div className="absolute inset-x-2 bottom-0 top-6 rounded-t-[999px] bg-accent/15 border border-accent/25" />
            <div className="absolute inset-x-10 bottom-0 top-24 rounded-t-[999px] bg-accent/10" />
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
            
            <img
              src="/DSC_2905-removebg-preview.png"
              alt="Portrait of Praween Imalsha"
              className="relative h-full w-full object-contain object-bottom drop-shadow-2xl" />
            
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.8
            }}
            className="absolute -bottom-6 -left-6 bg-surface p-5 rounded-2xl shadow-float border border-border flex items-center gap-4">
            
            <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent font-serif text-2xl">
              6
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Months</p>
              <p className="text-xs text-subtle">UI/UX Internship</p>
            </div>
          </motion.div>

          {/* Top right badge */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              delay: 1
            }}
            className="absolute -top-4 -right-4 bg-accent text-background px-4 py-2 rounded-2xl shadow-glow flex items-center gap-2 rotate-3">
            
            <Sparkles size={14} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Open to Work
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>);

}