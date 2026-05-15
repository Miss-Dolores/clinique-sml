import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Accueil', link: '/' },
  { name: 'À propos', link: '/apropos' },
  { name: 'Services', link: '/services' },
  { name: 'Médecins', link: '/medecins' },
  { name: 'Contact', link: '/contact' },
];

/* ─────────────────────────────────────────
   Floating pill — visible when scrolled
───────────────────────────────────────── */
function FloatingPill() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          'fixed top-3 inset-x-0 z-50 mx-auto',
          'flex items-center justify-between',
          'max-w-[820px] px-4 py-2',
          'rounded-full bg-white/95 backdrop-blur-md',
          'border border-[#C8E6FA]',
          'shadow-[0_8px_32px_rgba(0,87,183,0.12),0_2px_8px_rgba(0,0,0,0.06)]',
        )}
      >
        {/* Logo */}
        <Link href="/" aria-label="Clinique SML — Accueil">
          <span className="flex items-center cursor-pointer select-none shrink-0">
            <span className="font-['Poppins'] text-[15px] text-[#3D3D3D]">Clinique</span>
            <span className="font-['Space_Grotesk'] font-bold text-[15px] text-[#0057B7] ml-1">SML</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.link} href={item.link}>
              <span
                className={cn(
                  'px-3 py-1.5 rounded-lg text-[13px] font-medium font-["Poppins"] cursor-pointer transition-colors',
                  location === item.link
                    ? 'text-[#0057B7] bg-[#EBF5FD]'
                    : 'text-[#3D3D3D] hover:text-[#0057B7] hover:bg-[#EBF5FD]',
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link href="/rendez-vous">
          <span className="hidden md:inline-flex items-center px-4 py-1.5 bg-[#0057B7] text-white text-[13px] font-medium rounded-full hover:bg-[#003E8A] transition-colors cursor-pointer font-['Poppins'] shrink-0">
            Prendre RDV
          </span>
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-1.5 rounded-full text-[#3D3D3D] hover:bg-[#EBF5FD] transition-colors"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </motion.div>

      {/* Mobile dropdown under the pill */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="fixed top-[60px] inset-x-3 z-50 bg-white border border-[#C8E6FA] rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="px-3 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.link} href={item.link}>
                  <span
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block px-4 py-2.5 rounded-xl text-sm font-medium font-["Poppins"] cursor-pointer transition-colors',
                      location === item.link
                        ? 'text-[#0057B7] bg-[#EBF5FD]'
                        : 'text-[#3D3D3D] hover:text-[#0057B7] hover:bg-[#EBF5FD]',
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="border-t border-[#C8E6FA] mt-1 pt-2">
                <Link href="/rendez-vous">
                  <span
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 bg-[#0057B7] text-white text-sm font-medium rounded-xl text-center cursor-pointer font-['Poppins'] hover:bg-[#003E8A] transition-colors"
                  >
                    Prendre rendez-vous
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─────────────────────────────────────────
   Full header — visible at top of page
───────────────────────────────────────── */
function FullHeader({ visible }: { visible: boolean }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 bg-white border-b border-[#C8E6FA]',
        !visible && 'pointer-events-none',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" aria-label="Clinique SML — Accueil">
            <span className="flex items-center cursor-pointer select-none">
              <span className="font-['Poppins'] text-[17px] text-[#3D3D3D]">Clinique</span>
              <span className="font-['Space_Grotesk'] font-bold text-[17px] text-[#0057B7] ml-1">SML</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link key={item.link} href={item.link}>
                <span
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-[13px] font-medium font-["Poppins"] cursor-pointer transition-colors',
                    location === item.link
                      ? 'text-[#0057B7] bg-[#EBF5FD]'
                      : 'text-[#3D3D3D] hover:text-[#0057B7] hover:bg-[#EBF5FD]',
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
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
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-[#C8E6FA] bg-white overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link key={item.link} href={item.link}>
                  <span
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block px-4 py-2.5 rounded-xl text-sm font-medium font-["Poppins"] cursor-pointer transition-colors',
                      location === item.link
                        ? 'text-[#0057B7] bg-[#EBF5FD]'
                        : 'text-[#3D3D3D] hover:text-[#0057B7] hover:bg-[#EBF5FD]',
                    )}
                  >
                    {item.name}
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
    </motion.header>
  );
}

/* ─────────────────────────────────────────
   Root export — orchestrates both states
───────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 80);
  });

  return (
    <>
      {/* Spacer so page content isn't hidden under the fixed bar */}
      <div className="h-14" aria-hidden="true" />

      {/* Full-width header fades out as you scroll */}
      <FullHeader visible={!scrolled} />

      {/* Floating pill slides in when scrolled */}
      <AnimatePresence>{scrolled && <FloatingPill />}</AnimatePresence>
    </>
  );
}
