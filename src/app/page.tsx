import Link from 'next/link';
import { ArrowRight, Bot, Database, Mail, Video, Briefcase, Zap, Clock, Target, Users, ExternalLink } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Workflow Automation',
    description: 'n8n, Zapier, Make — your workflows, running on autopilot.',
  },
  {
    icon: Database,
    title: 'Data Extraction',
    description: 'Custom scrapers and pipelines that feed your systems.',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Personalized campaigns that convert, while you sleep.',
  },
  {
    icon: Video,
    title: 'AI Content Systems',
    description: 'Generate, repurpose, schedule — one piece becomes ten.',
  },
  {
    icon: Briefcase,
    title: 'Strategy & Implementation',
    description: 'From audit to execution. Hands-on, not hand-wavy.',
  },
];

const projects = [
  {
    name: 'Stravix',
    description: 'AI content creation platform',
    url: 'https://stravix.com',
    role: 'CEO & Co-Founder',
  },
  {
    name: 'ChimeStream',
    description: 'Streaming media platform',
    url: 'https://chimestream.com',
    role: 'Founder',
  },
  {
    name: 'DecorateAI',
    description: 'AI-powered interior design',
    url: 'https://decorateai.app',
    role: 'Creator',
  },
  {
    name: 'MemographyAI',
    description: 'AI photo memory tool',
    url: '#',
    role: 'Creator',
  },
];

const stats = [
  { value: '10+', label: 'Years Building' },
  { value: '50+', label: 'Projects Shipped' },
  { value: '100+', label: 'Workflows Automated' },
  { value: '∞', label: 'Hours Reclaimed' },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
          <div className="inline-flex items-center gap-2 bg-surface/80 backdrop-blur border border-accent/20 rounded-full px-4 py-2 mb-6 shadow-glow-sm">
            <Zap size={16} className="text-accent" />
            <span className="text-sm text-muted font-mono">AI Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Build Once,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">
              Run Forever
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            I help solo founders and small teams automate the boring stuff. 
            Custom AI systems that work while you focus on what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-glow-md flex items-center justify-center gap-2"
            >
              Let's Build Something
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="bg-surface border border-border hover:border-accent/50 text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 hover:shadow-glow-sm"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-accent/10 bg-surface/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Things I've <span className="text-accent">Built</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Side projects, startups, and tools — all built with the same obsession 
              for automation and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-glow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-accent transition-colors font-mono">
                      {project.name}
                    </h3>
                    <span className="text-xs text-accent/70 uppercase tracking-wider">{project.role}</span>
                  </div>
                  <ExternalLink size={18} className="text-muted group-hover:text-accent transition-colors" />
                </div>
                <p className="text-muted">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-surface/30 border-y border-accent/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="text-accent">Do</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Whether you're a solo founder drowning in manual work or a small team 
              looking to punch above your weight — I've got you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group bg-background border border-border rounded-xl p-6 hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-glow-sm"
              >
                <service.icon className="text-accent mb-4" size={28} />
                <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-sm">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium font-mono"
            >
              all_services.md
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Photo Placeholder - will be replaced with actual image */}
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-accent-secondary/10 border border-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <div className="text-center text-muted relative z-10">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-sm font-mono text-accent/60">// photo.jpg</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hey, I'm <span className="text-accent">Ash</span>
              </h2>
              <p className="text-muted mb-4">
                10+ years building digital things. Started in content and marketing, 
                evolved into automation and AI. Now I help founders and small teams 
                do more with less.
              </p>
              <p className="text-muted mb-6">
                I run Stravix (AI content), built ChimeStream, DecorateAI, and a bunch 
                of other tools. Rotterdam-based, globally available.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 mb-6">
                <p className="text-lg font-mono text-accent/90">"Keep Creating"</p>
              </blockquote>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium font-mono"
              >
                about.md
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-accent/10">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent rounded-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-accent">Ship</span>?
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto">
              Whether it's a quick automation or a full AI system — 
              let's talk about what's slowing you down.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-glow-md inline-flex items-center gap-2"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
