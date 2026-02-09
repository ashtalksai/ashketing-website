'use client';

import { useState } from 'react';
import { Send, Linkedin, Mail, Calendar, ArrowUpRight, CheckCircle, Loader2, Github } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setStatus('success');
    setFormState({ name: '', email: '', company: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="cmd-comment">// contact</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">
            Let&apos;s <span className="text-primary">Build</span> Something
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ready to automate your workflows? Have a question about AI? 
            Or just want to say hi? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="terminal-window mb-6">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">contact-info.json</span>
                </div>
                <div className="window-content">
                  <pre className="text-sm text-text-secondary">
{`{
  "email": "ash@ashketing.com",
  "location": "Rotterdam, NL",
  "timezone": "CET (UTC+1)",
  "response_time": "24-48h",
  "preferred": ["email", "linkedin"]
}`}
                  </pre>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:ash@ashketing.com"
                  className="flex items-center gap-4 p-4 terminal-window hover:border-primary/50 transition-colors group"
                >
                  <Mail className="text-primary" size={20} />
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">
                      ash@ashketing.com
                    </p>
                    <p className="text-text-muted text-xs">Primary contact</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ashhatef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 terminal-window hover:border-primary/50 transition-colors group"
                >
                  <Linkedin className="text-primary" size={20} />
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-text-muted text-xs">Professional network</p>
                  </div>
                  <ArrowUpRight className="text-text-muted" size={16} />
                </a>

                <a
                  href="https://github.com/ashhatef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 terminal-window hover:border-primary/50 transition-colors group"
                >
                  <Github className="text-primary" size={20} />
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-primary transition-colors">
                      GitHub
                    </p>
                    <p className="text-text-muted text-xs">Open source work</p>
                  </div>
                  <ArrowUpRight className="text-text-muted" size={16} />
                </a>
              </div>

              {/* Calendar */}
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">schedule-call.sh</span>
                </div>
                <div className="window-content">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-primary" size={20} />
                    <div>
                      <p className="font-medium">Book a Call</p>
                      <p className="text-text-muted text-xs">30-min free discovery call</p>
                    </div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg h-48 flex items-center justify-center mb-4">
                    <div className="text-center text-text-muted">
                      <Calendar size={32} className="mx-auto mb-2 opacity-50" />
                      <p className="text-xs cmd-comment">// Calendly embed</p>
                    </div>
                  </div>
                  
                  <a
                    href="#"
                    className="btn btn-primary w-full"
                  >
                    <span className="cmd-prefix" style={{ color: '#0a0a0a' }}>$</span>
                    ./book-call.sh
                    <Calendar size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="terminal-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="window-dot red" />
                    <span className="window-dot yellow" />
                    <span className="window-dot green" />
                  </div>
                  <span className="window-title">send-message.sh</span>
                  <span className="window-status">
                    {status === 'success' ? 'sent ✓' : 'ready'}
                  </span>
                </div>
                <div className="window-content">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-text-muted mb-2">
                        <span className="cmd-keyword">const</span> name <span className="text-text-muted">=</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="&quot;Your name&quot;"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs text-text-muted mb-2">
                        <span className="cmd-keyword">const</span> email <span className="text-text-muted">=</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="&quot;your@email.com&quot;"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs text-text-muted mb-2">
                        <span className="cmd-keyword">const</span> company <span className="text-text-muted">=</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="input"
                        placeholder="&quot;Company (optional)&quot;"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs text-text-muted mb-2">
                        <span className="cmd-keyword">const</span> message <span className="text-text-muted">=</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input resize-none"
                        placeholder="&quot;Tell me about your project...&quot;"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading' || status === 'success'}
                      className="btn btn-primary w-full py-4 disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Sending...
                        </>
                      ) : status === 'success' ? (
                        <>
                          <CheckCircle size={16} />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <span className="cmd-prefix" style={{ color: '#0a0a0a' }}>$</span>
                          ./send-message.sh
                          <Send size={14} />
                        </>
                      )}
                    </button>

                    {status === 'success' && (
                      <div className="text-center text-sm text-success">
                        <span className="cmd-comment">// Thanks! I&apos;ll get back to you soon.</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Note */}
      <section className="px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted text-sm">
            <span className="cmd-comment">
              // Response time: 24-48h. For urgent matters, reach out on{' '}
              <a
                href="https://www.linkedin.com/in/ashhatef/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors"
              >
                LinkedIn
              </a>
              .
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}
