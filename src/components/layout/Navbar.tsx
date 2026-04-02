'use client';

import Link from 'next/link';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/Button';

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Movies', href: '/movies' },
  { label: 'Theaters', href: '/theaters' },
  { label: 'Booking', href: '/booking' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20 border-b border-border-default bg-bg-void/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-wider text-text-primary">
          CineVault
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-text-secondary md:flex">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="transition hover:text-text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button size="sm" variant="ghost" className="hidden md:inline-flex">
            Sign in
          </Button>
          <Button size="sm" variant="primary" className="hidden md:inline-flex">
            Join Free
          </Button>
          <button className="rounded-full bg-bg-elevated p-2 text-text-primary" aria-label="Cart">
            <ShoppingCart size={18} />
          </button>
          <button className="rounded-full bg-bg-elevated p-2 text-text-primary" aria-label="Profile">
            <User size={18} />
          </button>
          <button
            className="rounded-full bg-bg-elevated p-2 text-text-primary md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col gap-3 border-t border-border-default bg-bg-surface/80 px-6 pb-4 md:hidden">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="py-1 text-sm text-text-secondary">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
