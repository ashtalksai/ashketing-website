'use client';

import { useState } from 'react';
import { Send, Linkedin, Mail, Calendar, ArrowUpRight, CheckCircle, Loader2 } from 'lucide-react';

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
    // Replace with actual form handling (e.g., API route, Formspree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // For now, just show success
    setStatus('success');
    setFormState({ name: '', email: '', company: '', message: '' });
    
    // Reset after 5 seconds
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Together
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Ready to automate your workflows? Have a question about AI? 
            Or just want to say hi? I'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <a
                  href="mailto:ash@ashketing.com"
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-medium group-hover:text-accent transition-colors">Email</p>
                    <p className="text-muted text-sm">ash@ashketing.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/ashhatef/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-[#0A66C2]" size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-accent transition-colors">LinkedIn</p>
                    <p className="text-muted text-sm">Connect with me</p>
                  </div>
                  <ArrowUpRight className="text-muted" size={18} />
                </a>
              </div>

              {/* Calendly Placeholder */}
              <div className="bg-surface border border-border rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Calendar className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Book a Call</p>
                    <p className="text-muted text-sm">Schedule a free discovery call</p>
                  </div>
                </div>
                
                {/* Calendly embed placeholder */}
                <div className="bg-background border border-border rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-muted">
                    <Calendar size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Calendly Embed</p>
                    <p className="text-xs mt-1">Add your Calendly widget here</p>
                  </div>
                </div>
                
                {/* Alternative: Direct link to Calendly */}
                <a
                  href="#"
                  className="mt-4 w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Schedule a Call
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-surface border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-center text-sm text-accent">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Note */}
      <section className="px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted">
            I typically respond within 24-48 hours. For urgent matters, 
            feel free to connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/ashhatef/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
