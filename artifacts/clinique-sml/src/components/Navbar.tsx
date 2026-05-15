import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/apropos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/medecins', label: 'Médecins' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60);
    if (y <= 60) setMobileOpen(false);
  });

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      {/* Navbar pill / bar */}
      <div className="flex justify-center px-3">
        <motion.div
          animate={
            scrolled
              ? {
                  maxWidth: 800,
                  borderRadius: 9999,
                  marginTop: 10,
                  boxShadow:
                    '0 8px 32px rgba(0,87,183,0.13), 0 2px 8px rgba(0,0,0,0.06)',
                }
              : {
                  maxWidth: 1440,
                  borderRadius: 0,
                  marginTop: 0,
                  boxShadow: 'none',
                }
          }
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className={`w-full bg-white ${
            scrolled
              ? 'border border-[#C8E6FA]'
              : 'border-b border-[#C8E6FA]'
          }`}
          style={{ overflow: 'hidden' }}
        >
          <div className="flex items-center justify-between h-14 px-5 sm:px-7">
            {/* Logo */}
            <Link href="/" aria-label="Clinique SML — Accueil">
              <span className="flex items-center cursor-pointer select-none shrink-0">
                <span className="font-['Poppins'] font-normal text-[17px] text-[#3D3D3D]">Clinique</span>
                <span className="font-['Space_Grotesk'] font-bold text-[17px] text-[#0057B7] ml-1">SML</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors cursor-pointer font-['Poppins'] ${
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
            <div className="hidden md:flex items-center gap-2 shrink-0">
              <a
                href="tel:+22901000000"
                className="flex items-center gap-1.5 text-[13px] text-[#1A80D9] font-medium font-['Poppins'] hover:text-[#0057B7] transition-colors"
                aria-label="Appeler la clinique"
              >
                <Phone className="w-3.5 h-3.5" />
                +229 01 00 00 00
              </a>
              <Link href="/rendez-vous">
                <span className="px-3.5 py-1.5 bg-[#0057B7] text-white text-[13px] font-medium rounded-full hover:bg-[#003E8A] transition-colors cursor-pointer font-['Poppins']">
                  Prendre RDV
                </span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-lg text-[#3D3D3D] hover:bg-[#EBF5FD] transition-colors"
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile dropdown — outside the pill so it's not clipped */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden mx-3 mt-1 bg-white border border-[#C8E6FA] rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium font-['Poppins'] cursor-pointer transition-colors ${
                      location === link.href
                        ? 'text-[#0057B7] bg-[#EBF5FD]'
                        : 'text-[#3D3D3D] hover:text-[#0057B7] hover:bg-[#EBF5FD]'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="border-t border-[#C8E6FA] mt-1 pt-2">
                <a
                  href="tel:+22901000000"
                  className="flex items-center gap-2 px-4 py-2 text-sm text-[#1A80D9] font-['Poppins']"
                >
                  <Phone className="w-4 h-4" />
                  +229 01 00 00 00
                </a>
                <Link href="/rendez-vous">
                  <span
                    onClick={() => setMobileOpen(false)}
                    className="block mt-1 px-4 py-2.5 bg-[#0057B7] text-white text-sm font-medium rounded-xl text-center cursor-pointer font-['Poppins'] hover:bg-[#003E8A] transition-colors"
                  >
                    Prendre rendez-vous
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
