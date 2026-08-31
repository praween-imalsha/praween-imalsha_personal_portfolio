import React, { useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Dribbble } from
'lucide-react';
import { toast } from 'sonner';
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 900);
  };
  const inputClass =
  'w-full px-4 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors duration-200 text-foreground placeholder:text-subtle/60';
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 text-balance">
            Let's create something{' '}
            <span className="italic gradient-text">together.</span>
          </h2>
          <p className="text-subtle text-lg">
            Have a project in mind, a question, or just want to say hi? I'd love
            to hear from you.
          </p>
        </FadeIn>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <FadeIn direction="right" className="space-y-4">
            {[
            {
              icon: Mail,
              label: 'Email',
              value: 'praween.imalsha@example.com',
              href: 'mailto:praween.imalsha@example.com'
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '+94 77 000 0000',
              href: 'tel:+94770000000'
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Colombo, Sri Lanka',
              href: null
            }].
            map((item) =>
            <div
              key={item.label}
              className="flex items-start gap-4 p-5 bg-surface border border-border rounded-2xl hover:border-accent/50 transition-colors group">
              
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.href ?
                <a
                  href={item.href}
                  className="font-semibold text-foreground hover:text-accent transition-colors">
                  
                      {item.value}
                    </a> :

                <p className="font-semibold text-foreground">
                      {item.value}
                    </p>
                }
                </div>
              </div>
            )}

            <div className="p-5 bg-surface border border-border rounded-2xl">
              <p className="text-xs font-semibold text-subtle uppercase tracking-wider mb-3">
                Find me online
              </p>
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
                map((s) =>
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="p-2.5 rounded-xl bg-muted border border-border text-subtle hover:bg-accent hover:text-background hover:border-accent transition-colors">
                  
                    <s.icon size={18} />
                  </a>
                )}
              </div>
            </div>
          </FadeIn>

          <FadeIn
            direction="left"
            className="bg-surface p-8 md:p-10 rounded-3xl border border-border shadow-float">
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground/90">
                    
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={inputClass}
                    placeholder="John Doe" />
                  
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground/90">
                    
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={inputClass}
                    placeholder="john@example.com" />
                  
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground/90">
                  
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className={inputClass}
                  placeholder="Project Inquiry" />
                
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground/90">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className={inputClass + ' resize-none'}
                  placeholder="Tell me about your project..." />
                
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-accent text-background rounded-xl font-semibold hover:bg-accent-soft transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-glow">
                
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send size={18} />}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>);

}