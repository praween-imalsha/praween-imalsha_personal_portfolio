import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'User-centered design approach',
  'Design systems & prototyping',
  'Cross-functional collaboration',
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <FadeIn className="mb-16 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            Designing with intent. Building with care.
          </h2>
        </FadeIn>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left - Image */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted border border-border shadow-float">
                <img
                  src="/Gemini_Generated_Image_v4rowlv4rowlv4ro.png"
                  alt="Praween Imalsha"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right - About Content */}
          <FadeIn direction="left">
            <div className="space-y-6 text-subtle text-lg leading-relaxed">

              <p>
                I'm a passionate UI/UX designer who loves creating
                user-friendly and visually appealing digital experiences.
                My journey began with a fascination for how design shapes
                human behavior, leading me into product design.
              </p>

              <p>
                I focus on creating intuitive interfaces, meaningful user
                experiences, and visually consistent digital products.
                I enjoy turning ideas into clean, functional, and
                engaging designs that solve real user problems.
              </p>

            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2
                    size={18}
                    className="text-accent shrink-0 mt-0.5"
                  />

                  <span className="text-sm text-foreground/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
