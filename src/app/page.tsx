import Link from 'next/link';
import { ArrowRight, Bot, Database, Mail, Video, Briefcase, ExternalLink, Terminal, Cpu, Workflow, Code2 } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Workflow Automation',
    description: 'n8n, Zapier, Make — your workflows, running on autopilot.',
    cmd: 'automate --all',
  },
  {
    icon: Database,
    title: 'Data Extraction',
    description: 'Custom scrapers and pipelines that feed your systems.',
    cmd: 'scrape --target',
  },
  {
    icon: Mail,
    title: 'Email Automation',
    description: 'Personalized campaigns that convert, while you sleep.',
    cmd: 'mail --bulk',
  },
  {
    icon: Video,
    title: 'AI Content Systems',
    description: 'Generate, repurpose, schedule — one piece becomes ten.',
    cmd: 'content --multiply',
  },
  {
    icon: Briefcase,
    title: 'Strategy & Implementation',
    description: 'From audit to execution. Hands-on, not hand-wavy.',
    cmd: 'plan --execute',
  },
];

const projects = [
  {
    name: 'Stravix',
    description: 'AI content creation platform for SMBs',
    url: 'https://stravix.com',
    role: 'CEO & Co-Founder',
    status: 'active',
  },
  {
    name: 'ChimeStream',
    description: 'Streaming media platform',
    url: 'https://chimestream.com',
    role: 'Founder',
    status: 'active',
  },
  {
    name: 'DecorateAI',
    description: 'AI-powered interior design tool',
    url: 'https://decorateai.app',
    role: 'Creator',
    status: 'shipped',
  },
  {
    name: 'MemographyAI',
    description: 'AI photo memory organization',
    url: '#',
    role: 'Creator',
    status: 'building',
  },
];

const stats = [
  { value: '10+', label: 'Years Building', icon: Code2 },
  { value: '50+', label: 'Projects Shipped', icon: Terminal },
  { value: '100+', label: 'Workflows Automated', icon: Workflow },
  { value: '∞', label: 'Hours Reclaimed', icon: Cpu },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-6 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Terminal status */}
          <div className="inline-flex items-center gap-3 border border-border rounded-lg px-4 py-2 mb-8 bg-surface/50">
            <span className="status-dot active" />
            <span className="text-sm text-text-muted">system online</span>
            <span className="text-text-muted">|</span>
            <span className="text-sm text-text-secondary">AI Automation Specialist</span>
          </div>
          
          {/* Main heading - terminal style */}
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="window-header">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="window-title">mission.sh</span>
              <span className="window-status">running</span>
            </div>
            <div className="window-content text-left">
              <div className="code-line mb-2">
                <span className="cmd-prefix">$</span>
                <span className="cmd-keyword ml-2">export</span>
                <span className="text-foreground ml-2">MISSION=</span>
                <span className="cmd-string">&quot;Build Once, Run Forever&quot;</span>
              </div>
              <div className="code-line">
                <span className="cmd-prefix">$</span>
                <span className="cmd-keyword ml-2">echo</span>
                <span className="cmd-string ml-2">&quot;AI systems that work while you sleep&quot;</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-text-secondary max-w-xl mx-auto mb-8">
            I help solo founders and small teams automate the boring stuff. 
            Custom AI systems that work while you focus on what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-primary px-8 py-4"
            >
              <span className="cmd-prefix" style={{ color: '#0a0a0a' }}>$</span>
              init --project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/services"
              className="btn px-8 py-4"
            >
              <span className="cmd-prefix">$</span>
              ls services/
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-border bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card border border-border rounded-lg bg-surface/50">
                <stat.icon size={24} className="mx-auto mb-3 text-text-muted" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="cmd-comment">// what I&apos;ve built</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Projects</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
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
                className="project-card group"
              >
                <div className="header">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">{project.name.toLowerCase()}.app</span>
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded ${
                    project.status === 'active' ? 'bg-success/20 text-success' :
                    project.status === 'building' ? 'bg-warning/20 text-warning' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="content">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-xs text-primary/70">{project.role}</span>
                    </div>
                    <ExternalLink size={16} className="text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-text-secondary text-sm">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-surface/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="cmd-comment">// what I do</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Services</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Whether you&apos;re a solo founder drowning in manual work or a small team 
              looking to punch above your weight — I&apos;ve got you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href="/services"
                className="service-card group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="icon" size={24} />
                  <code className="text-xs text-text-muted bg-background px-2 py-1 rounded">
                    {service.cmd}
                  </code>
                </div>
                <h3 className="group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p>{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
            >
              <span className="cmd-prefix">$</span>
              cat services/README.md
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="terminal-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="window-dot red" />
                  <span className="window-dot yellow" />
                  <span className="window-dot green" />
                </div>
                <span className="window-title">profile.json</span>
              </div>
              <div className="window-content text-sm">
                <pre className="text-text-secondary">
{`{
  "name": "Ash Hatef",
  "location": "Rotterdam, NL",
  "role": "AI Automation Specialist",
  "experience": "10+ years",
  "focus": [
    "AI/Automation",
    "Content Systems",
    "Data Pipelines"
  ],
  "motto": "Keep Creating"
}`}
                </pre>
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="cmd-comment">// about me</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Hey, I&apos;m <span className="text-primary">Ash</span>
              </h2>
              <p className="text-text-secondary mb-4">
                10+ years building digital things. Started in content and marketing, 
                evolved into automation and AI. Now I help founders and small teams 
                do more with less.
              </p>
              <p className="text-text-secondary mb-6">
                I run Stravix (AI content), built ChimeStream, DecorateAI, and a bunch 
                of other tools. Rotterdam-based, globally available.
              </p>
              <div className="border-l-2 border-primary pl-4 mb-6">
                <p className="text-lg text-primary">&quot;Keep Creating&quot;</p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
              >
                <span className="cmd-prefix">$</span>
                cat about.md
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="window-title">start-project.sh</span>
              <span className="window-status">awaiting input</span>
            </div>
            <div className="window-content text-center py-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to <span className="text-primary">Ship</span>?
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Whether it&apos;s a quick automation or a full AI system — 
                let&apos;s talk about what&apos;s slowing you down.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary px-8 py-4 text-lg"
              >
                <span className="cmd-prefix" style={{ color: '#0a0a0a' }}>$</span>
                ./start-conversation.sh
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
