import Link from 'next/link';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold">
              ash<span className="text-accent">keting</span>
            </Link>
            <p className="mt-4 text-muted max-w-sm">
              Helping businesses turn manual work into autonomous systems using AI and automation.
            </p>
            <p className="mt-4 text-sm text-muted italic">
              "Keep Creating"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/services" className="text-muted hover:text-accent transition-colors text-sm">
                Services
              </Link>
              <Link href="/about" className="text-muted hover:text-accent transition-colors text-sm">
                About
              </Link>
              <Link href="/contact" className="text-muted hover:text-accent transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/ashhatef/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors text-sm flex items-center gap-1"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight size={12} />
              </a>
              <a
                href="mailto:ash@ashketing.com"
                className="text-muted hover:text-accent transition-colors text-sm flex items-center gap-1"
              >
                <Mail size={16} />
                ash@ashketing.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Ash Hatef. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Based in Rotterdam, Netherlands 🇳🇱
          </p>
        </div>
      </div>
    </footer>
  );
}
