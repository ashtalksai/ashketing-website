'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'home', cmd: 'cd ~' },
  { href: '/services', label: 'services', cmd: 'ls services/' },
  { href: '/about', label: 'about', cmd: 'cat about.md' },
  { href: '/contact', label: 'contact', cmd: 'mail -s' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center gap-2">
            <span className="status-dot active" />
            <span className="text-text-muted text-xs">ready</span>
          </div>
          <div className="flex items-center">
            <span className="text-primary">~/</span>
            <span className="text-foreground font-semibold">ashketing</span>
            <span className="cursor" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-cmd ${pathname === item.href ? 'active' : ''}`}
            >
              <span className="cmd-prefix">$</span>
              <span className={pathname === item.href ? 'text-primary' : ''}>{item.cmd}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border border-border rounded-lg hover:border-primary/50 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`nav-cmd justify-start ${pathname === item.href ? 'active' : ''}`}
              >
                <span className="cmd-prefix">$</span>
                <span className={pathname === item.href ? 'text-primary' : ''}>{item.cmd}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
