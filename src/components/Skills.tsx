import React from 'react';
import { FadeIn } from './ui/FadeIn';
import {
  Code2,
  Palette,
  Database,
  Terminal,
  Figma,
  MonitorSmartphone,
  Users,
  PenTool,
  Layers,
  Cpu } from
'lucide-react';
const skillCategories = [
{
  title: 'Design & Tools',
  icon: Palette,
  skills: [
  'Figma',
  'Canva',
  'UI/UX Design',
  'Wireframing',
  'Prototyping',
  'Design Systems']

},
{
  title: 'Frontend',
  icon: MonitorSmartphone,
  skills: [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS']

},
{
  title: 'Backend & DB',
  icon: Database,
  skills: ['Java', 'Python', 'Spring Boot', 'MySQL', 'MongoDB', 'REST APIs']
},
{
  title: 'Soft Skills',
  icon: Users,
  skills: [
  'Communication',
  'Teamwork',
  'Problem-solving',
  'Time Management',
  'Adaptability']

}];

const tools = [
{
  name: 'Figma',
  icon: Figma
},
{
  name: 'VS Code',
  icon: Code2
},
{
  name: 'GitHub',
  icon: Terminal
},
{
  name: 'Canva',
  icon: PenTool
},
{
  name: 'Layers',
  icon: Layers
},
{
  name: 'Systems',
  icon: Cpu
}];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-surface/50 border-y border-border relative overflow-hidden">
      
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            The toolkit I bring to every project.
          </h2>
          <p className="text-subtle text-lg">
            Spanning design, development, and collaboration.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {skillCategories.map((category, i) =>
          <FadeIn
            key={category.title}
            delay={i * 0.08}
            className="group bg-background border border-border rounded-3xl p-7 hover:border-accent transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-glow">
            
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-background transition-colors">
                <category.icon size={22} />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) =>
              <span
                key={skill}
                className="px-3 py-1 bg-muted text-foreground/80 text-sm rounded-lg border border-border">
                
                    {skill}
                  </span>
              )}
              </div>
            </FadeIn>
          )}
        </div>

        <FadeIn delay={0.4}>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-subtle">
              Daily Tools
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {tools.map((tool) =>
            <div
              key={tool.name}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-background border border-border hover:border-accent hover:text-accent transition-colors group">
              
                <tool.icon
                size={20}
                className="text-subtle group-hover:text-accent transition-colors" />
              
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>);

}