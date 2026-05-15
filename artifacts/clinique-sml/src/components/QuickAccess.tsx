import { useState } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarCheck, Clock, MessageSquareWarning, Star,
  ShieldCheck, Phone, ChevronRight, X, MessageCircle,
} from 'lucide-react';

const WHATSAPP = '2290144913373';
const PHONE = '+229 01 44 91 33 73';

const quickItems = [
  {
    icon: CalendarCheck,
    label: 'Prendre rendez-vous',
    href: '/rendez-vous',
    internal: true,
  },
  {
    icon: Clock,
    label: 'Horaires de consultation',
    href: '/contact',
    internal: true,
  },
  {
    icon: MessageSquareWarning,
    label: 'Faire une plainte ou réclamation',
    href: '/contact',
    internal: true,
  },
  {
    icon: Star,
    label: 'Témoignage de satisfaction',
    href: '/contact',
    internal: true,
  },
  {
    icon: ShieldCheck,
    label: 'Assurance partenaires',
    href: '/contact',
    internal: true,
  },
  {
    icon: Phone,
    label: 'Contactez-nous',
    href: '/contact',
    internal: true,
  },
];

export default function QuickAccess() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Quick Access panel — right side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center">
        {/* Tab trigger */}
        <AnimatePresence initial={false}>
          {!open && (
            <motion.button
              key="tab"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(true)}
              className="
                flex flex-col items-center justify-center gap-1
                bg-[#0057B7] hover:bg-[#003E8A] text-white
                px-2 py-5 rounded-l-xl shadow-lg
                transition-colors cursor-pointer
                writing-mode-vertical
              "
              aria-label="Ouvrir le menu rapide"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              <ChevronRight className="w-4 h-4 rotate-180" />
              <span className="font-['Poppins'] text-[11px] font-semibold tracking-wide mt-1 select-none">
                Accès rapide
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expanded panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="
                bg-white rounded-l-2xl shadow-2xl border border-[#C8E6FA]
                w-64 overflow-hidden
              "
            >
              {/* Panel header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0057B7]">
                <span className="font-['Space_Grotesk'] font-semibold text-white text-sm">
                  Accès rapide
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items */}
              <ul className="divide-y divide-[#EBF5FD]">
                {quickItems.map(({ icon: Icon, label, href, internal }) => (
                  <li key={label}>
                    {internal ? (
                      <Link href={href}>
                        <span
                          onClick={() => setOpen(false)}
                          className="
                            flex items-center gap-3 px-4 py-3.5
                            text-[#0A0A0A] hover:bg-[#EBF5FD] hover:text-[#0057B7]
                            cursor-pointer transition-colors
                            font-['Poppins'] text-sm font-medium
                            group
                          "
                        >
                          <span className="w-8 h-8 rounded-lg bg-[#EBF5FD] group-hover:bg-[#C8E6FA] flex items-center justify-center shrink-0 transition-colors">
                            <Icon className="w-4 h-4 text-[#1A80D9]" />
                          </span>
                          {label}
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="
                          flex items-center gap-3 px-4 py-3.5
                          text-[#0A0A0A] hover:bg-[#EBF5FD] hover:text-[#0057B7]
                          cursor-pointer transition-colors
                          font-['Poppins'] text-sm font-medium
                          group
                        "
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#EBF5FD] group-hover:bg-[#C8E6FA] flex items-center justify-center shrink-0 transition-colors">
                          <Icon className="w-4 h-4 text-[#1A80D9]" />
                        </span>
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Phone quick link */}
              <div className="px-4 py-3 bg-[#EBF5FD] border-t border-[#C8E6FA]">
                <a
                  href={`tel:${WHATSAPP}`}
                  className="flex items-center gap-2 text-[#0057B7] font-['Poppins'] text-xs font-semibold hover:text-[#003E8A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {PHONE}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* WhatsApp floating button — bottom right */}
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous contacter sur WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 rounded-full shadow-lg
          flex items-center justify-center
          transition-transform hover:scale-110
        "
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </a>
    </>
  );
}
