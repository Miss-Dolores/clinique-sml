import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
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
  { name: 'Spécialités', link: '/specialites' },
  { name: 'Contact', link: '/contact' },
];

const Logo = ({ height = 46 }: { height?: number }) => (
  <Link href="/" aria-label="Sainte ML Clinique — Accueil">
    <img
      src="/logo.png"
      alt="Sainte ML Clinique"
      style={{ height }}
      className="w-auto cursor-pointer select-none object-contain"
    />
  </Link>
);

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
          'max-w-[820px] px-4 py-1.5',
          'rounded-full bg-white/95 backdrop-blur-md',
          'border border-[#C8E6FA]',
          'shadow-[0_8px_32px_rgba(0,87,183,0.12),0_2px_8px_rgba(0,0,0,0.06)]',
        )}
      >
        <Logo height={40} />

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
          <Logo height={46} />

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
          <div className="hidden md:flex items-center shrink-0">
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
      <div className="h-14" aria-hidden="true" />
      <FullHeader visible={!scrolled} />
      <AnimatePresence>{scrolled && <FloatingPill />}</AnimatePresence>
    </>
  );
}
