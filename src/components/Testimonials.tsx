import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Quote, Star } from 'lucide-react';
const testimonials = [
{
  quote:
  'Praween has an exceptional eye for detail. His ability to translate complex requirements into intuitive, beautiful interfaces is outstanding. A true asset to any team.',
  name: 'Dr. Samantha Perera',
  role: 'Senior Lecturer, IJSE',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
},
{
  quote:
  'Working with Praween was a breeze. He delivered designs on time AND provided clean, production-ready React code that made implementation seamless.',
  name: 'Kasun Silva',
  role: 'Lead Developer, Creative Studio',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
},
{
  quote:
  'Rare combination of designer thinking and engineering rigor. Our entire team learned a lot working with him on the dashboard project.',
  name: 'Ayesha Fernando',
  role: 'Product Manager',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
}];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            Kind Words
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            What people say about working with me.
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test, i) =>
          <FadeIn
            key={i}
            delay={i * 0.1}
            className="relative bg-surface p-8 rounded-3xl border border-border hover:border-accent/50 transition-colors group">
            
              <Quote
              size={48}
              className="text-accent/20 absolute top-6 right-6 group-hover:text-accent/40 transition-colors" />
            

              <div className="flex gap-1 mb-5 relative z-10">
                {[...Array(5)].map((_, i) =>
              <Star key={i} size={14} className="fill-accent text-accent" />
              )}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-8 relative z-10">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                src={test.image}
                alt={test.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-accent/30" />
              
                <div>
                  <h4 className="font-bold text-foreground">{test.name}</h4>
                  <p className="text-sm text-subtle">{test.role}</p>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>);

}