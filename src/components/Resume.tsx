import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experience = [
  {
    role: 'UI/UX Design Intern',
    company: 'Artecx Solutions',
    duration: '6 Months · Completed',
    description: [
      'Created wireframes, prototypes, and high-fidelity mockups for web and mobile applications.',
      'Conducted user research and usability testing to improve user experience and product flows.',
      'Collaborated closely with developers and team members to deliver accurate and polished designs.',
    ],
  },
];

const education = [
  {
    degree: 'Graduate Diploma in Software Engineering',
    institute: 'Institute of Software Engineering (IJSE)',
    duration: '2023 — Present',
  },
  {
    degree: 'Advanced Level — Art Stream',
    institute: 'Richmond College, Galle',
    duration: '2018 — 2020',
  },
];

const certifications = [
  'Google UX Design Professional Certificate',
  'React — The Complete Guide (LinkedIn Learning)',
  'Agile Project Management Basics',
  'Figma Master Course',
];

export function Resume() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 bg-surface/50 border-y border-border"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            Experience, education & credentials.
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20">
          {/* ==================== EXPERIENCE ==================== */}
          <div>
            <FadeIn className="flex items-center gap-3 mb-10">
              <div className="p-2.5 bg-accent/10 text-accent rounded-xl border border-border">
                <Briefcase size={20} />
              </div>

              <h3 className="text-2xl font-serif text-foreground">
                Experience
              </h3>
            </FadeIn>

            <div className="relative pl-8 border-l-2 border-border space-y-10">
              {experience.map((exp, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-background p-6 rounded-2xl border border-border hover:border-accent/50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h4 className="font-bold text-foreground text-lg">
                        {exp.role}
                      </h4>

                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap border border-accent/20">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-subtle mb-4">
                      {exp.company}
                    </p>

                    <ul className="space-y-2">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className="text-sm text-foreground/80 flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />

                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* ==================== EDUCATION & CERTIFICATIONS ==================== */}
          <div className="space-y-12">
            {/* ==================== EDUCATION ==================== */}
            <div>
              <FadeIn className="flex items-center gap-3 mb-10">
                <div className="p-2.5 bg-accent/10 text-accent rounded-xl border border-border">
                  <GraduationCap size={20} />
                </div>

                <h3 className="text-2xl font-serif text-foreground">
                  Education
                </h3>
              </FadeIn>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <FadeIn
                    key={i}
                    delay={i * 0.1}
                    className="bg-background p-6 rounded-2xl border border-border hover:border-accent/50 transition-colors"
                  >
                    <h4 className="font-bold text-foreground mb-1">
                      {edu.degree}
                    </h4>

                    <p className="text-sm text-subtle mb-3">
                      {edu.institute}
                    </p>

                    <span className="text-xs font-semibold text-subtle bg-muted px-3 py-1 rounded-full border border-border">
                      {edu.duration}
                    </span>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* ==================== CERTIFICATIONS ==================== */}
            <div>
              <FadeIn className="flex items-center gap-3 mb-10">
                <div className="p-2.5 bg-accent/10 text-accent rounded-xl border border-border">
                  <Award size={20} />
                </div>

                <h3 className="text-2xl font-serif text-foreground">
                  Certifications
                </h3>
              </FadeIn>

              <div className="bg-background p-6 rounded-2xl border border-border">
                <ul className="space-y-4">
                  {certifications.map((cert, i) => (
                    <FadeIn
                      key={i}
                      delay={i * 0.05}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                        <Award size={14} className="text-accent" />
                      </div>

                      <span className="text-sm font-medium text-foreground/90">
                        {cert}
                      </span>
                    </FadeIn>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
