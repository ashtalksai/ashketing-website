import Link from 'next/link';
import { ArrowRight, Bot, Database, Mail, Video, Briefcase, Zap, Clock, Target, Users } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Workflow Automation',
    description: 'Automate repetitive tasks with n8n, Zapier, and custom solutions.',
  },
  {
    icon: Database,
    title: 'Data Extraction',
    description: 'Build scrapers and data pipelines that feed your systems.',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Smart campaigns with AI personalization at scale.',
  },
  {
    icon: Video,
    title: 'AI Content Systems',
    description: 'Generate, repurpose, and schedule content automatically.',
  },
  {
    icon: Briefcase,
    title: 'Consulting & Strategy',
    description: 'Audits, roadmaps, and hands-on implementation.',
  },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100+', label: 'Workflows Automated' },
  { value: '1M+', label: 'Hours Saved' },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-2 mb-6">
            <Zap size={16} className="text-accent" />
            <span className="text-sm text-muted">AI Automation Specialist</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Turn Manual Work Into{' '}
            <span className="text-accent">Autonomous Systems</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8">
            I help businesses automate workflows, extract data, and build AI-powered systems 
            that work while you sleep. Based in Rotterdam, Netherlands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Let's Talk
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="bg-surface border border-border hover:border-accent text-white px-8 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-border bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I Can Build For You
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From simple automations to complex AI systems, I help businesses 
              reclaim time and scale operations without scaling headcount.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="group bg-surface border border-border rounded-xl p-6 hover:border-accent transition-all hover:-translate-y-1"
              >
                <service.icon className="text-accent mb-4" size={32} />
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
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6 bg-surface border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* Photo Placeholder */}
              <div className="aspect-square bg-background border border-border rounded-2xl flex items-center justify-center">
                <div className="text-center text-muted">
                  <Users size={64} className="mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Photo</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hi, I'm Ash 👋
              </h2>
              <p className="text-muted mb-4">
                With over 10 years in digital marketing and growth, I've evolved from 
                content creation to building AI-powered automation systems that help 
                businesses scale efficiently.
              </p>
              <p className="text-muted mb-6">
                I'm the CEO & Co-Founder of Stravix, an AI content platform, and work 
                at Gradient, a B2B AI agency. I believe in one thing above all:
              </p>
              <blockquote className="border-l-4 border-accent pl-4 mb-6">
                <p className="text-xl font-medium italic">"Keep Creating"</p>
              </blockquote>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
              >
                Learn More About Me
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-muted mb-8 max-w-2xl mx-auto">
            Let's discuss how AI and automation can transform your workflows 
            and give you back time to focus on what matters.
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
