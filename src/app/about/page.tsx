import Link from 'next/link';
import { ArrowRight, Linkedin, MapPin, Building2, Github, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ash Hatef',
  description: 'Learn about Ash Hatef - AI Automation Specialist with 10+ years in digital marketing, content creation, and building AI-powered systems.',
};

const journey = [
  {
    period: '2014-2018',
    title: 'Content Creator',
    description: 'Started creating content for YouTube and Instagram in Turkey. Learned the power of digital media and audience building.',
    status: 'completed',
  },
  {
    period: '2018-2022',
    title: 'Marketing Manager',
    description: 'Led growth initiatives and discovered the potential of automation to scale operations.',
    status: 'completed',
  },
  {
    period: '2022-Present',
    title: 'AI Automation Specialist',
    description: 'Combining marketing expertise with cutting-edge AI to help businesses automate and scale.',
    status: 'active',
  },
];

const ventures = [
  {
    name: 'Stravix',
    role: 'CEO & Co-Founder',
    description: 'AI-powered content platform for creators and businesses.',
    status: 'active',
  },
  {
    name: 'Gradient',
    role: 'AI Specialist',
    description: 'B2B AI agency helping enterprises implement AI solutions.',
    status: 'active',
  },
  {
    name: 'ChimeStream',
    role: 'Founder',
    description: 'Streaming and content delivery platform.',
    status: 'building',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Terminal */}
            <div className="terminal-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="window-dot red" />
                  <span className="window-dot yellow" />
                  <span className="window-dot green" />
                </div>
                <span className="window-title">whoami.sh</span>
                <span className="window-status">executed</span>
              </div>
              <div className="window-content">
                <div className="aspect-square bg-background border border-border rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-text-muted">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-xs cmd-comment">// photo.jpg</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-text-muted">name:</span>
                    <span className="text-foreground">Ash Hatef</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-text-muted">role:</span>
                    <span className="text-primary">AI Automation Specialist</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-text-muted">location:</span>
                    <span className="text-foreground">Rotterdam, NL</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-text-muted">status:</span>
                    <span className="text-success flex items-center gap-2">
                      <span className="status-dot" style={{ width: 6, height: 6 }} />
                      available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Intro */}
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="cmd-comment">// about me</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">
                Hi, I&apos;m <span className="text-primary">Ash</span> 👋
              </h1>
              <p className="text-text-secondary mb-6">
                AI Automation Specialist with 10+ years building digital things. 
                I help businesses turn manual work into autonomous systems that 
                work while they sleep.
              </p>
              
              <div className="flex items-center gap-2 text-text-secondary mb-6">
                <MapPin size={16} className="text-primary" />
                <span>Rotterdam, Netherlands</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/ashhatef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ashhatef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a href="mailto:ash@ashketing.com" className="btn">
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="px-6 mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="window-title">story.md</span>
            </div>
            <div className="window-content prose prose-invert text-text-secondary space-y-4">
              <p>
                With over a decade of experience in digital marketing and growth, I&apos;ve worn 
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
                <em className="text-primary">&quot;How can we do more with less?&quot;</em> That led me deep 
                into automation, and eventually, AI.
              </p>
              <p>
                Today, I help businesses identify bottlenecks, design automated workflows, and 
                implement AI solutions that genuinely save time and money. I&apos;m not interested 
                in automation for automation&apos;s sake—I care about impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-6 mb-20 bg-surface/30 border-y border-border py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="cmd-comment">// timeline</span>
            </div>
            <h2 className="text-2xl font-bold">
              <span className="text-primary">The Journey</span>
            </h2>
          </div>

          <div className="space-y-6">
            {journey.map((item, index) => (
              <div key={index} className="terminal-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">{item.period}</span>
                  <span className={`ml-auto text-xs px-2 py-0.5 rounded ${
                    item.status === 'active' 
                      ? 'bg-success/20 text-success' 
                      : 'bg-text-muted/20 text-text-muted'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <div className="window-content">
                  <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Ventures */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="cmd-comment">// ventures</span>
            </div>
            <h2 className="text-2xl font-bold">
              <span className="text-primary">Current Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ventures.map((venture, index) => (
              <div key={index} className="terminal-window group hover:border-primary/50 transition-colors">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">{venture.name.toLowerCase()}.app</span>
                </div>
                <div className="window-content">
                  <div className="flex items-center justify-between mb-3">
                    <Building2 className="text-primary" size={20} />
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      venture.status === 'active' 
                        ? 'bg-success/20 text-success' 
                        : 'bg-warning/20 text-warning'
                    }`}>
                      {venture.status}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {venture.name}
                  </h3>
                  <p className="text-xs text-primary mb-2">{venture.role}</p>
                  <p className="text-sm text-text-secondary">{venture.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 mb-20">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="window-title">philosophy.txt</span>
            </div>
            <div className="window-content text-center py-8">
              <div className="text-4xl font-bold text-primary mb-4">
                &quot;Keep Creating&quot;
              </div>
              <p className="text-text-secondary max-w-lg mx-auto">
                Whether it&apos;s content, systems, or businesses—I believe in continuous 
                creation and improvement. Every automation I build is designed to free 
                up time for what matters most: creating something meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="terminal-window">
            <div className="window-header">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="window-title">connect.sh</span>
              <span className="window-status">awaiting input</span>
            </div>
            <div className="window-content text-center py-12">
              <h2 className="text-2xl font-bold mb-4">
                Let&apos;s <span className="text-primary">Connect</span>
              </h2>
              <p className="text-text-secondary mb-8 max-w-xl mx-auto">
                Whether you need automation, AI consulting, or just want to chat 
                about the future of work—I&apos;d love to hear from you.
              </p>
              <Link href="/contact" className="btn btn-primary px-8 py-4">
                <span className="cmd-prefix" style={{ color: '#0a0a0a' }}>$</span>
                ./start-conversation.sh
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
