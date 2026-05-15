import { Link } from 'wouter';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#003E8A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-['Poppins'] font-normal text-xl text-white/80">Clinique</span>
              <span className="font-['Space_Grotesk'] font-bold text-xl text-white ml-1">SML</span>
            </div>
            <p className="text-white/70 text-sm font-['Poppins'] leading-relaxed">
              Votre santé entre de bonnes mains. Nouvellement ouverte à Agla-Akplomey, Cotonou — votre clinique de quartier, au niveau d'une structure internationale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-['Space_Grotesk'] font-semibold text-white mb-4 text-base">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/apropos', label: 'À propos' },
                { href: '/services', label: 'Nos services' },
                { href: '/medecins', label: 'Nos médecins' },
                { href: '/rendez-vous', label: 'Rendez-vous' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-white/70 hover:text-white text-sm font-['Poppins'] cursor-pointer transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-['Space_Grotesk'] font-semibold text-white mb-4 text-base">Spécialités</h3>
            <ul className="space-y-2">
              {['Médecine générale', 'Pédiatrie', 'Cardiologie', 'Dermatologie', 'Gynécologie', 'Urgences'].map((s) => (
                <li key={s}>
                  <span className="text-white/70 text-sm font-['Poppins']">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Space_Grotesk'] font-semibold text-white mb-4 text-base">Nous contacter</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#5BABF0] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm font-['Poppins']">Quartier Agla-Akplomey, Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#5BABF0] shrink-0" />
                <a href="tel:+22901000000" className="text-white/70 hover:text-white text-sm font-['Poppins'] transition-colors">
                  +229 01 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#5BABF0] shrink-0" />
                <a href="mailto:contact@cliniquesml.bj" className="text-white/70 hover:text-white text-sm font-['Poppins'] transition-colors">
                  contact@cliniquesml.bj
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#5BABF0] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm font-['Poppins']">Lun – Sam : 7h00 – 19h00<br />Urgences : 24h/24</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm font-['Poppins']">
            © {new Date().getFullYear()} Clinique SML — Agla-Akplomey, Cotonou, Bénin. Tous droits réservés.
          </p>
          <p className="text-white/50 text-sm font-['Poppins']">
            Excellence médicale au service de tous
          </p>
        </div>
      </div>
    </footer>
  );
}
