import React from 'react';
import {
    ArrowRight,
    Github,
    Linkedin,
    Download,
    Sparkles,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { TypingText } from './ui/TypingText';

export function Hero() {
    const socials = [
        {
            icon: Linkedin,
            href: 'https://www.linkedin.com/in/praween-imalsha-5908452a6?utm_source=share_via&utm_content=profile&utm_medium=member_android',
            label: 'LinkedIn',
        },
        {
            icon: Github,
            href: 'https://github.com/praween-imalsha',
            label: 'GitHub',
        },
        {
            icon: 'behance',
            href: 'https://www.behance.net/praweendis8bed',
            label: 'Behance',
        },
    ];

    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] -z-10" />

            {/* Decorative blobs */}
            <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -z-10" />

            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-soft/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-6xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                {/* LEFT CONTENT */}
                <div className="flex flex-col items-start">
                    {/* Availability Badge */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/60 border border-border backdrop-blur-sm text-sm font-medium text-subtle mb-8"
                    >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>

                        Available for new opportunities
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                        className="text-6xl md:text-8xl font-serif leading-[0.95] tracking-tight text-foreground mb-6 text-balance"
                    >
                        Praween <br />

                        <span className="italic gradient-text">
              Imalsha.
            </span>
                    </motion.h1>

                    {/* Typing Role */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                        }}
                        className="flex items-baseline gap-3 mb-6 min-h-[2.5rem]"
                    >
                        <Sparkles
                            size={18}
                            className="text-accent shrink-0"
                        />

                        <p className="text-xl md:text-2xl font-medium text-subtle">
                            I'm a{' '}
                            <TypingText
                                words={[
                                    'UI/UX Designer',
                                    'Product Designer',
                                    'Frontend Developer',
                                    'Design Systems Nerd',
                                ]}
                                className="text-foreground font-semibold"
                            />
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.3,
                        }}
                        className="text-lg md:text-xl text-subtle max-w-md mb-10 leading-relaxed"
                    >
                        Passionate designer crafting user-friendly and visually
                        appealing digital experiences. I blend design thinking with
                        full-stack capabilities to ship products that feel effortless.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4,
                        }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        {/* View Projects */}
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 px-6 py-3.5 bg-accent text-background rounded-full font-semibold hover:bg-accent-soft transition-colors duration-200 shadow-glow"
                        >
                            View Projects

                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>

                        {/* Download CV */}
                        <a
                            href="/public/praween Imalsha  (1).pdf"
                            download
                            className="group flex items-center gap-2 px-6 py-3.5 bg-surface border border-border text-foreground rounded-full font-medium hover:border-accent transition-colors duration-200"
                        >
                            <Download size={18} />

                            Download CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                        }}
                        className="flex items-center gap-3 mt-10"
                    >
            <span className="text-xs uppercase tracking-widest text-subtle/70 mr-2">
              Follow
            </span>

                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full border border-border text-subtle hover:border-accent hover:text-accent transition-colors"
                                >
                                    {Icon === 'behance' ? (
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M3 5.5H10.2C12.9 5.5 14.5 6.9 14.5 9C14.5 10.3 13.8 11.3 12.8 11.8C14.3 12.3 15.2 13.4 15.2 15.2C15.2 17.8 13.3 19.5 10.3 19.5H3V5.5ZM6 8V10.8H9.5C10.5 10.8 11.1 10.3 11.1 9.4C11.1 8.5 10.5 8 9.5 8H6ZM6 13.2V17H10C11.2 17 11.8 16.3 11.8 15.1C11.8 13.9 11.2 13.2 10 13.2H6Z"
                                                fill="currentColor"
                                            />

                                            <path
                                                d="M17 8.2H21.2"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                            />

                                            <path
                                                d="M16.2 14.1C16.2 11 18 9.1 20.7 9.1C23.2 9.1 24.5 10.9 24.5 13.8V14.5H19C19.1 15.9 19.8 16.6 21 16.6C21.9 16.6 22.5 16.2 22.8 15.5H24.8C24.4 17.8 22.9 19.1 20.8 19.1C17.9 19.1 16.2 17.2 16.2 14.1ZM19 12.9H21.9C21.8 11.9 21.4 11.4 20.6 11.4C19.7 11.4 19.2 11.9 19 12.9Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    ) : (
                                        <Icon size={18} />
                                    )}
                                </a>
                            );
                        })}
                    </motion.div>
                </div>

                {/* RIGHT PORTRAIT */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.9,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="relative hidden md:block"
                >
                    <div className="relative aspect-[4/5]">
                        {/* Accent arch */}
                        <div className="absolute inset-x-2 bottom-0 top-6 rounded-t-[999px] bg-accent/15 border border-accent/25" />

                        <div className="absolute inset-x-10 bottom-0 top-24 rounded-t-[999px] bg-accent/10" />

                        <div
                            aria-hidden="true"
                            className="absolute inset-x-6 bottom-0 h-24 bg-gradient-to-t from-background to-transparent"
                        />

                        {/* Portrait */}
                        <img
                            src="/DSC_2905-removebg-preview.png"
                            alt="Portrait of Praween Imalsha"
                            className="relative h-full w-full object-contain object-bottom drop-shadow-2xl"
                        />
                    </div>

                    {/* Internship Badge */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.8,
                        }}
                        className="absolute -bottom-6 -left-6 bg-surface p-5 rounded-2xl shadow-float border border-border flex items-center gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center text-accent font-serif text-2xl">
                            6
                        </div>

                        <div>
                            <p className="text-sm font-bold text-foreground">
                                Months
                            </p>

                            <p className="text-xs text-subtle">
                                UI/UX Internship
                            </p>
                        </div>
                    </motion.div>

                    {/* Open to Work Badge */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 1,
                        }}
                        className="absolute -top-4 -right-4 bg-accent text-background px-4 py-2 rounded-2xl shadow-glow flex items-center gap-2 rotate-3"
                    >
                        <Sparkles size={14} />

                        <span className="text-xs font-bold uppercase tracking-wider">
              Open to Work
            </span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
