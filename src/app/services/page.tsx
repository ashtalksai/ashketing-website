import { Bot, Sparkles, Mail, Zap, MessageSquare, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Bot,
    title: 'AI Workflow Automation',
    cmd: 'automate --all',
    description: 'Transform repetitive tasks into automated workflows using n8n, Zapier, and custom solutions.',
    features: [
      'Custom n8n/Zapier workflows',
      'API integrations',
      'Scheduled automations',
      'Error handling & monitoring',
    ],
    price: 'From €2,500',
  },
  {
    icon: Sparkles,
    title: 'Data Extraction & Web Scraping',
    cmd: 'scrape --deep',
    description: 'Convert websites and documents into structured, actionable data.',
    features: [
      'Custom web scrapers',
      'PDF & document parsing',
      'API development',
      'Data pipelines & ETL',
    ],
    price: 'From €1,500',
  },
  {
    icon: Mail,
    title: 'Email Marketing Automation',
    cmd: 'mail --sequence',
    description: 'Build email systems that nurture leads and drive conversions on autopilot.',
    features: [
      'Sequence design & setup',
      'Segmentation strategies',
      'A/B testing frameworks',
      'Analytics & reporting',
    ],
    price: 'From €2,000/mo',
  },
  {
    icon: Zap,
    title: 'AI Content Systems',
    cmd: 'content --scale',
    description: 'Generate, optimize, and publish content at scale using AI.',
    features: [
      'AI content generation',
      'Multi-language support',
      'SEO optimization',
      'Publishing automation',
    ],
    price: 'From €1,500/mo',
  },
  {
    icon: MessageSquare,
    title: 'Consulting & Strategy',
    cmd: 'consult --audit',
    description: 'Get expert guidance on automation strategy and implementation.',
    features: [
      'Automation audits',
      'ROI analysis',
      'Tool selection',
      'Implementation roadmap',
    ],
    price: 'From €200/hr',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="cmd-comment">// services</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-primary">Services</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From quick automations to enterprise-grade systems. 
            Solutions that save time and generate revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="terminal-window group hover:border-primary/50 transition-colors"
            >
              <div className="window-header">
                <div className="window-dots">
                  <span className="window-dot red" />
                  <span className="window-dot yellow" />
                  <span className="window-dot green" />
                </div>
                <span className="window-title">{service.title.toLowerCase().replace(/ /g, '-')}.service</span>
                <code className="ml-auto text-xs text-text-muted bg-background px-2 py-0.5 rounded">
                  {service.cmd}
                </code>
              </div>
              <div className="window-content">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="text-primary" size={28} />
                      <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-text-secondary mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                          <Check size={14} className="text-success flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:text-right lg:border-l lg:border-border lg:pl-8 flex flex-col justify-between">
                    <div>
                      <p className="text-xs text-text-muted mb-1">starting at</p>
                      <p className="text-2xl font-bold text-primary mb-4">{service.price}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="btn hover:border-primary/50"
                    >
                      <span className="cmd-prefix">$</span>
                      get-quote
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="terminal-window max-w-2xl mx-auto">
            <div className="window-header">
              <div className="window-dots">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
              </div>
              <span className="window-title">custom-project.sh</span>
            </div>
            <div className="window-content py-8">
              <p className="text-text-secondary mb-6">
                Need something custom? Let&apos;s figure it out together.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                <span className="cmd-prefix" style={{ color: '#0a0a0a' }}>$</span>
                ./start-conversation.sh
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
