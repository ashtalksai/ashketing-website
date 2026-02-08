import { Bot, Sparkles, Mail, Zap, MessageSquare, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Bot,
    title: 'AI Workflow Automation',
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
    description: 'Build email systems that nurture leads and drive conversions on autopilot.',
    features: [
      'Sequence design & setup',
      'Segmentation strategies',
      'A/B testing frameworks',
      'Analytics & reporting',
    ],
    price: 'From €2,000/month',
  },
  {
    icon: Zap,
    title: 'AI Content Systems',
    description: 'Generate, optimize, and publish content at scale using AI.',
    features: [
      'AI content generation',
      'Multi-language support',
      'SEO optimization',
      'Publishing automation',
    ],
    price: 'From €1,500/month',
  },
  {
    icon: MessageSquare,
    title: 'Consulting & Strategy',
    description: 'Get expert guidance on automation strategy and implementation.',
    features: [
      'Automation audits',
      'ROI analysis',
      'Tool selection',
      'Implementation roadmap',
    ],
    price: 'From €200/hour',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            From quick automations to enterprise-grade systems, I deliver solutions that save time and generate revenue.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="h-10 w-10 text-blue-400" />
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-zinc-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-zinc-300">
                        <span className="text-green-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:text-right">
                  <p className="text-2xl font-bold text-white mb-4">{service.price}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-zinc-800 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
