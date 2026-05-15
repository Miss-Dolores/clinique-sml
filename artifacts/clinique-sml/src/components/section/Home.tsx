import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Stethoscope, ArrowRight, ShieldCheck, HeartHandshake, Microscope } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

const stats = [
  { value: '20+', label: 'Médecins spécialistes', icon: Users },
  { value: '6', label: 'Spécialités médicales', icon: Stethoscope },
  { value: '24h/7j', label: 'Service des urgences', icon: Clock },
  { value: '100%', label: 'Dédié à vos soins', icon: ShieldCheck },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Expertise médicale reconnue',
    desc: 'Nos médecins sont sélectionnés pour leur excellence académique et leur expérience clinique. Chaque patient bénéficie de soins de niveau international.',
  },
  {
    icon: HeartHandshake,
    title: 'Une approche humaine',
    desc: "Nous plaçons l'humain au cœur de notre pratique. Chaque consultation est un moment d'écoute, de respect et de bienveillance pour le patient.",
  },
  {
    icon: Microscope,
    title: 'Équipements modernes',
    desc: 'La Clinique SML est équipée des technologies médicales les plus récentes pour assurer des diagnostics précis et des traitements efficaces.',
  },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Stats */}
      <section className="bg-[#EBF5FD] py-12" aria-label="Chiffres clés">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-[#C8E6FA] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-[#1A80D9]" aria-hidden="true" />
                </div>
                <p className="font-['Space_Grotesk'] font-bold text-3xl text-[#0057B7] mb-1">{value}</p>
                <p className="font-['Poppins'] text-sm text-[#3D3D3D]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white" aria-label="Nos services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-3">
              Nos spécialités
            </span>
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#0A0A0A] mb-3">
              Des soins adaptés à vos besoins
            </h2>
            <p className="font-['Poppins'] text-[#3D3D3D] max-w-xl mx-auto text-sm leading-relaxed">
              Découvrez l'ensemble de nos services médicaux, dispensés par une équipe de professionnels qualifiés et dévoués.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#0057B7] text-[#0057B7] font-medium rounded-xl cursor-pointer hover:bg-[#C8E6FA] transition-colors font-['Poppins'] text-sm">
                Voir tous nos services
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 bg-[#EBF5FD]" aria-label="Pourquoi choisir la Clinique SML">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-3">
              Nos engagements
            </span>
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#0A0A0A]">
              Pourquoi choisir la Clinique SML ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#C8E6FA] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#EBF5FD] rounded-2xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-[#1A80D9]" aria-hidden="true" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#0A0A0A] mb-3">{title}</h3>
                <p className="font-['Poppins'] text-[#3D3D3D] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" aria-label="Témoignages patients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-3">
              Témoignages
            </span>
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#0A0A0A]">
              Ils nous font confiance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-[#C8E6FA] rounded-2xl p-6 shadow-sm"
              >
                <div className="flex gap-1 mb-4" aria-label={`Note : ${t.rating} étoiles sur 5`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${idx < t.rating ? 'fill-[#1A80D9] text-[#1A80D9]' : 'text-[#C8E6FA]'}`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="font-['Poppins'] text-[#3D3D3D] text-sm leading-relaxed mb-5 italic">
                  "{t.comment}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#C8E6FA]">
                  <p className="font-['Space_Grotesk'] font-semibold text-[#0A0A0A] text-sm">{t.name}</p>
                  <p className="font-['Poppins'] text-xs text-[#3D3D3D]">{t.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0057B7]" aria-label="Appel à l'action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-white mb-4">
              Prenez soin de votre santé dès aujourd'hui
            </h2>
            <p className="font-['Poppins'] text-white/80 text-base mb-7 max-w-xl mx-auto">
              Notre équipe de spécialistes est prête à vous accueillir à Agla-Akplomey. Prenez rendez-vous en quelques clics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/rendez-vous">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#0057B7] font-semibold rounded-xl cursor-pointer hover:bg-[#EBF5FD] transition-colors font-['Poppins'] text-sm shadow-lg"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-white text-white font-semibold rounded-xl cursor-pointer hover:bg-white/10 transition-colors font-['Poppins'] text-sm"
                >
                  Nous contacter
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
