import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/apropos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/medecins', label: 'Médecins' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#C8E6FA] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" aria-label="Clinique SML — Accueil">
            <span className="flex items-center gap-0.5 cursor-pointer select-none">
              <span className="font-['Poppins'] font-normal text-xl text-[#3D3D3D]">Clinique</span>
              <span className="font-['Space_Grotesk'] font-bold text-xl text-[#0057B7] ml-1">SML</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer font-['Poppins'] ${
                    location === link.href
                      ? 'text-[#0057B7] bg-[#EBF5FD]'
                      : 'text-[#3D3D3D] hover:text-[#0057B7] hover:bg-[#EBF5FD]'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+22300000000"
              className="flex items-center gap-1.5 text-sm text-[#1A80D9] font-medium font-['Poppins'] hover:text-[#0057B7] transition-colors"
              aria-label="Appeler la clinique"
            >
              <Phone className="w-4 h-4" />
              +223 00 00 00 00
            </a>
            <Link href="/rendez-vous">
              <span className="px-4 py-2 bg-[#0057B7] text-white text-sm font-medium rounded-lg hover:bg-[#003E8A] transition-colors cursor-pointer font-['Poppins']">
                Prendre RDV
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#3D3D3D] hover:bg-[#EBF5FD] transition-colors"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#C8E6FA] bg-white overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium font-['Poppins'] cursor-pointer transition-colors ${
                      location === link.href
                        ? 'text-[#0057B7] bg-[#EBF5FD]'
                        : 'text-[#3D3D3D] hover:text-[#0057B7] hover:bg-[#EBF5FD]'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <Link href="/rendez-vous">
                <span
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 px-4 py-2.5 bg-[#0057B7] text-white text-sm font-medium rounded-lg text-center cursor-pointer font-['Poppins'] hover:bg-[#003E8A] transition-colors"
                >
                  Prendre rendez-vous
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
