import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[88vh] flex items-center">
      {/* Decorative background shape */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 600 700" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
          <defs>
            <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EBF5FD" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#C8E6FA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#5BABF0" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <ellipse cx="400" cy="350" rx="380" ry="420" fill="url(#heroGrad)" />
          <circle cx="500" cy="120" r="80" fill="#C8E6FA" opacity="0.3" />
          <circle cx="200" cy="580" r="50" fill="#5BABF0" opacity="0.15" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] tracking-wide uppercase">
              <MapPin className="w-3 h-3" />
              Agla-Akplomey, Cotonou — Bénin
            </span>
          </div>
          <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] leading-tight mb-5">
            Votre santé entre{' '}
            <span className="text-[#0057B7]">de bonnes mains</span>
          </h1>
          <p className="font-['Poppins'] text-lg text-[#3D3D3D] leading-relaxed mb-7 max-w-xl">
            La Clinique SML vient d'ouvrir ses portes à Agla-Akplomey. Une équipe de médecins expérimentés vous accompagne avec expertise et bienveillance pour tous vos besoins de santé.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/rendez-vous">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0057B7] text-white font-medium rounded-xl cursor-pointer hover:bg-[#003E8A] transition-colors font-['Poppins'] text-sm shadow-lg shadow-[#0057B7]/25"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-[#0057B7] text-[#0057B7] font-medium rounded-xl cursor-pointer hover:bg-[#C8E6FA] transition-colors font-['Poppins'] text-sm"
              >
                Nos services
              </motion.span>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-5 mt-9">
            {[
              { icon: Shield, label: 'Soins certifiés' },
              { icon: Clock, label: 'Urgences 24h/24' },
              { icon: MapPin, label: 'Agla-Akplomey, Bénin' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EBF5FD] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#1A80D9]" />
                </div>
                <span className="text-sm text-[#3D3D3D] font-['Poppins']">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            <div className="w-96 h-96 rounded-3xl overflow-hidden border-4 border-[#C8E6FA] shadow-2xl">
              <img
                src="https://picsum.photos/seed/clinic1/400/400"
                alt="Médecins de la Clinique SML"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-5 -left-10 bg-white rounded-2xl shadow-xl p-4 border border-[#C8E6FA]"
            >
              <p className="font-['Space_Grotesk'] font-bold text-2xl text-[#0057B7]">20+</p>
              <p className="font-['Poppins'] text-xs text-[#3D3D3D] mt-0.5">Médecins spécialistes</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -top-5 -right-8 bg-white rounded-2xl shadow-xl p-4 border border-[#C8E6FA]"
            >
              <p className="font-['Space_Grotesk'] font-bold text-2xl text-[#0057B7]">6</p>
              <p className="font-['Poppins'] text-xs text-[#3D3D3D] mt-0.5">Spécialités médicales</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
