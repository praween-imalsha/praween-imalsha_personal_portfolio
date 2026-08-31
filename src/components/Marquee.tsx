import React from 'react';

const items = [
'UI/UX Design',
'Figma',
'React',
'TypeScript',
'Spring Boot',
'Design Systems',
'Prototyping',
'MySQL',
'MongoDB',
'Tailwind CSS',
'User Research',
'Java'];


export function Marquee() {
  return (
    <section
      aria-label="Core skills"
      className="border-y border-border bg-surface/60 py-5 overflow-hidden">
      
      <div className="marquee-mask">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[...items, ...items].map((item, i) =>
          <div key={i} className="flex items-center gap-10 shrink-0">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-subtle whitespace-nowrap">
                {item}
              </span>
              <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            
            </div>
          )}
        </div>
      </div>
    </section>);

}