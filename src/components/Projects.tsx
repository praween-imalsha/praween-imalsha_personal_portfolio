import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
const projects = [
{
  title: 'E-commerce Platform',
  description:
  'A full-stack web application featuring a complete shopping experience with secure JWT authentication, dynamic cart, and seamless checkout flow.',
  role: 'Full-stack Developer',
  tech: ['Java', 'Spring Boot', 'MySQL', 'JWT'],
  image:
  'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
  github: '#',
  demo: '#'
},
{
  title: 'Fintech Dashboard UI',
  description:
  'A comprehensive case study and high-fidelity prototype for a modern banking app. Focused on data visualization and accessible transaction flows.',
  role: 'UI/UX Designer',
  tech: ['Figma', 'Prototyping', 'Research'],
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
  github: '#',
  demo: '#'
},
{
  title: 'Task Management App',
  description:
  'A responsive React app for team collaboration with drag-and-drop kanban boards, real-time updates, and customizable workspaces.',
  role: 'Frontend Developer',
  tech: ['React', 'TypeScript', 'Firebase', 'Motion'],
  image:
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800',
  github: '#',
  demo: '#'
}];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-4">
              Selected Works
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
              Recent projects I've poured myself into.
            </h2>
            <p className="text-subtle text-lg">
              Blending aesthetics with robust engineering.
            </p>
          </div>
          <a
            href="#"
            className="text-accent font-medium hover:underline underline-offset-4 flex items-center gap-2 shrink-0">
            
            View all on GitHub <ExternalLink size={16} />
          </a>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) =>
          <FadeIn
            key={project.title}
            delay={i * 0.1}
            className="group flex flex-col bg-surface rounded-3xl overflow-hidden border border-border hover:border-accent transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-glow">
            
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent text-background flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-[opacity,transform] duration-300 ease-out">
                  <ArrowUpRight size={18} />
                </div>
                <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md text-accent border border-border">
                  {project.role}
                </span>
              </div>

              <div className="p-7 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-foreground mb-3">
                  {project.title}
                </h3>

                <p className="text-subtle text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) =>
                <span
                  key={t}
                  className="text-xs font-medium px-2.5 py-1 bg-muted rounded-md text-foreground/80 border border-border">
                  
                      {t}
                    </span>
                )}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-6 border-t border-border">
                  <a
                  href={project.demo}
                  className="flex-1 text-center py-2.5 bg-accent text-background text-sm font-semibold rounded-xl hover:bg-accent-soft transition-colors">
                  
                    Live Demo
                  </a>
                  <a
                  href={project.github}
                  className="p-2.5 bg-muted text-foreground rounded-xl hover:bg-accent hover:text-background transition-colors border border-border"
                  aria-label="View Source">
                  
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}
