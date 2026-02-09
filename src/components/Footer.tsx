import Link from 'next/link';
import { Linkedin, Mail, Github, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Terminal-style footer header */}
        <div className="terminal-window mb-8">
          <div className="window-header">
            <div className="window-dots">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
            </div>
            <span className="window-title">footer.sh</span>
            <span className="window-status">EOF</span>
          </div>
          <div className="window-content py-4">
            <div className="code-line">
              <span className="cmd-prefix">$</span>
              <span className="cmd-keyword">echo</span>
              <span className="cmd-string">&quot;Keep Creating&quot;</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary">~/</span>
              <span className="text-foreground font-semibold">ashketing</span>
            </div>
            <p className="text-text-secondary text-sm max-w-sm">
              Turning manual work into autonomous systems. AI automation for founders who&apos;d rather build than babysit.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h3>// navigate</h3>
            <div className="flex flex-col gap-2">
              <Link href="/services" className="footer-link">
                <span className="text-text-muted">→</span> services/
              </Link>
              <Link href="/about" className="footer-link">
                <span className="text-text-muted">→</span> about.md
              </Link>
              <Link href="/contact" className="footer-link">
                <span className="text-text-muted">→</span> contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="footer-section">
            <h3>// connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/ashhatef/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Linkedin size={14} />
                LinkedIn
                <ArrowUpRight size={10} className="text-text-muted" />
              </a>
              <a
                href="https://github.com/ashhatef"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <Github size={14} />
                GitHub
                <ArrowUpRight size={10} className="text-text-muted" />
              </a>
              <a
                href="mailto:ash@ashketing.com"
                className="footer-link"
              >
                <Mail size={14} />
                ash@ashketing.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            <span className="cmd-comment">/* © {new Date().getFullYear()} Ash Hatef. All rights reserved. */</span>
          </p>
          <p className="text-xs text-text-muted flex items-center gap-2">
            <span className="status-dot" style={{ width: 6, height: 6 }} />
            Rotterdam, Netherlands
          </p>
        </div>
      </div>
    </footer>
  );
}
