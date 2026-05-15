import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock } from 'lucide-react';

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const fadeLeft = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white min-h-[88vh] flex items-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        aria-hidden="true"
      >
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
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text — staggered children */}
        <motion.div variants={stagger} initial="initial" animate="animate">
          <motion.h1
            variants={fadeUp}
            className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] leading-tight mb-5"
          >
            Votre santé,{' '}
            <span className="text-[#0057B7]">notre priorité</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-['Poppins'] text-lg text-[#3D3D3D] leading-relaxed mb-7 max-w-xl"
          >
            La Sainte ML Clinique vient d'ouvrir ses portes à Agla-Akplomè. Une équipe de médecins expérimentés vous accompagne avec expertise et bienveillance pour tous vos besoins de santé.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
            <Link href="/rendez-vous">
              <motion.span
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0057B7] text-white font-medium rounded-xl cursor-pointer hover:bg-[#003E8A] transition-colors font-['Poppins'] text-sm shadow-lg shadow-[#0057B7]/25"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link href="/services">
              <motion.span
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-[#0057B7] text-[#0057B7] font-medium rounded-xl cursor-pointer hover:bg-[#C8E6FA] transition-colors font-['Poppins'] text-sm"
              >
                Nos services
              </motion.span>
            </Link>
          </motion.div>

          {/* Trust badges — staggered */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-5 mt-9">
            {[
              { icon: Shield, label: 'Soins certifiés' },
              { icon: Clock, label: 'Urgences 24h/24' },
            ].map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="flex items-center gap-2"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <div className="w-8 h-8 rounded-full bg-[#EBF5FD] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#1A80D9]" />
                </div>
                <span className="text-sm text-[#3D3D3D] font-['Poppins']">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual — float in from right */}
        <motion.div
          variants={fadeLeft}
          initial="initial"
          animate="animate"
          className="relative hidden lg:block"
        >
          {/* Floating stat cards */}
          <motion.div
            className="absolute -top-6 right-4 z-10 bg-white rounded-2xl shadow-xl px-5 py-3 border border-[#C8E6FA]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="font-['Space_Grotesk'] font-bold text-2xl text-[#0057B7]">6</p>
            <p className="font-['Poppins'] text-xs text-[#3D3D3D]">Spécialités médicales</p>
          </motion.div>

          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border-4 border-[#C8E6FA] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop"
              alt="Sainte ML Clinique — soins médicaux"
              className="w-full h-full object-cover"
            />
          </div>

          <motion.div
            className="absolute -bottom-6 left-4 z-10 bg-white rounded-2xl shadow-xl px-5 py-3 border border-[#C8E6FA]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <p className="font-['Space_Grotesk'] font-bold text-2xl text-[#0057B7]">20+</p>
            <p className="font-['Poppins'] text-xs text-[#3D3D3D]">Médecins spécialistes</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
