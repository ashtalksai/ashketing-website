import Link from 'next/link';
import { ArrowRight, Linkedin, MapPin, Building2, Sparkles, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ash Hatef',
  description: 'Learn about Ash Hatef - AI Automation Specialist with 10+ years in digital marketing, content creation, and building AI-powered systems.',
};

const journey = [
  {
    period: 'Early Days',
    title: 'Content Creator',
    description: 'Started my journey creating content for YouTube and Instagram in Turkey, learning the power of digital media and audience building.',
  },
  {
    period: 'Growth Phase',
    title: 'Marketing Manager',
    description: 'Transitioned into digital marketing, leading growth initiatives and discovering the potential of automation to scale operations.',
  },
  {
    period: 'Present',
    title: 'AI Automation Specialist',
    description: 'Now I combine my marketing expertise with cutting-edge AI to help businesses automate workflows and build intelligent systems.',
  },
];

const ventures = [
  {
    name: 'Stravix',
    role: 'CEO & Co-Founder',
    description: 'AI-powered content platform helping creators and businesses produce content at scale.',
  },
  {
    name: 'Gradient',
    role: 'Team Member',
    description: 'B2B AI agency helping enterprises implement AI solutions.',
  },
  {
    name: 'ChimeStream',
    role: 'Co-Founder',
    description: 'Building innovative streaming and content delivery solutions.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-surface border border-border rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted">
                  <Users size={80} className="mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Photo Placeholder</p>
                </div>
              </div>
            </div>

            {/* Intro */}
            <div className="order-1 md:order-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I'm Ash 👋
              </h1>
              <p className="text-lg text-muted mb-4">
                AI Automation Specialist helping businesses turn manual work into 
                autonomous systems.
              </p>
              <div className="flex items-center gap-2 text-muted mb-6">
                <MapPin size={18} className="text-accent" />
                <span>Rotterdam, Netherlands</span>
              </div>
              <a
                href="https://www.linkedin.com/in/ashhatef/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">The Story</h2>
          <div className="prose prose-invert max-w-none text-muted space-y-4">
            <p>
              With over a decade of experience in digital marketing and growth, I've worn 
              many hats—content creator, marketing manager, founder, and now AI automation 
              specialist.
            </p>
            <p>
              My journey started in Turkey, where I built audiences on YouTube and Instagram, 
              learning firsthand how powerful digital content can be. That experience taught 
              me to think about scale, systems, and audience-first content.
            </p>
            <p>
              As I moved into marketing leadership roles, I became obsessed with one question: 
              <em>"How can we do more with less?"</em> That led me deep into automation, and 
              eventually, AI.
            </p>
            <p>
              Today, I help businesses identify bottlenecks, design automated workflows, and 
              implement AI solutions that genuinely save time and money. I'm not interested 
              in automation for automation's sake—I care about impact.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-6 mb-20 bg-surface border-y border-border py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">The Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            
            <div className="space-y-12">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 mt-1.5" />
                  
                  {/* Content */}
                  <div className={`flex-1 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="text-sm text-accent font-medium">{item.period}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Ventures */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Current Ventures</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
              >
                <Building2 className="text-accent mb-4" size={24} />
                <h3 className="font-bold mb-1">{venture.name}</h3>
                <p className="text-sm text-accent mb-3">{venture.role}</p>
                <p className="text-sm text-muted">{venture.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="text-accent mx-auto mb-6" size={48} />
          <h2 className="text-2xl font-bold mb-4">My Philosophy</h2>
          <blockquote className="text-3xl md:text-4xl font-bold text-accent mb-6">
            "Keep Creating"
          </blockquote>
          <p className="text-muted max-w-xl mx-auto">
            Whether it's content, systems, or businesses—I believe in continuous creation 
            and improvement. Every automation I build is designed to free up time and 
            energy for what matters most: creating something meaningful.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto bg-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted mb-6 max-w-xl mx-auto">
            Whether you need automation, AI consulting, or just want to chat about 
            the future of work—I'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
