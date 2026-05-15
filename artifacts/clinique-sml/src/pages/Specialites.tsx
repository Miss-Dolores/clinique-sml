import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Stethoscope, Baby, Heart, Scan, UserRound, Ambulance,
  FlaskConical, Waves, CalendarCheck, ArrowRight,
} from 'lucide-react';
import { services } from '../data/services';
import { doctors } from '../data/doctors';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Baby, Heart, Scan, UserRound, Ambulance, FlaskConical, Waves,
};

const colorCycles = [
  { bg: '#EBF5FD', icon: '#1A80D9', border: '#C8E6FA' },
  { bg: '#E8F4FF', icon: '#0057B7', border: '#B8DAFF' },
  { bg: '#F0F8FF', icon: '#003E8A', border: '#C8E6FA' },
];

const specialtyToDoctor: Record<string, string> = {
  'Consultation générale': 'Médecine générale',
  'Pédiatrie': 'Pédiatrie',
  'Cardiologie': 'Cardiologie',
  'Dermatologie': 'Dermatologie',
  'Gynécologie': 'Gynécologie',
  'Urgences médicales': 'Urgences',
};

export default function Specialites() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#EBF5FD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-4">
              Notre expertise
            </span>
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#0A0A0A] mb-4">
              Nos spécialités
            </h1>
            <p className="font-['Poppins'] text-[#3D3D3D] text-lg max-w-2xl mx-auto">
              De la médecine générale aux soins spécialisés, la Sainte ML Clinique vous offre une prise en charge complète et personnalisée.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialty cards */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Stethoscope;
              const colors = colorCycles[i % colorCycles.length];
              const matchedDoc = doctors.find(
                (d) => d.specialty === specialtyToDoctor[service.title],
              );

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                  className="group flex gap-5 rounded-2xl border p-6 hover:shadow-lg transition-shadow duration-300"
                  style={{ borderColor: colors.border, backgroundColor: '#FAFCFF' }}
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.bg }}
                  >
                    <Icon className="w-7 h-7" style={{ color: colors.icon }} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-['Space_Grotesk'] font-bold text-lg text-[#0A0A0A] mb-1.5">
                      {service.title}
                    </h2>
                    <p className="font-['Poppins'] text-sm text-[#3D3D3D] leading-relaxed mb-3">
                      {service.description}
                    </p>

                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-['Poppins'] text-[#1A80D9] mb-3">
                      <span>⏱ {service.duration}</span>
                      <span>💳 {service.price}</span>
                    </div>

                    {/* Doctor badge */}
                    {matchedDoc && (
                      <div className="flex items-center gap-2 mt-1">
                        <img
                          src={matchedDoc.imageUrl}
                          alt={matchedDoc.name}
                          className="w-7 h-7 rounded-full object-cover border-2 border-white shadow"
                        />
                        <span className="font-['Poppins'] text-xs text-[#3D3D3D]">
                          <span className="text-[#0057B7] font-medium">{matchedDoc.name}</span>
                          {' '}·{' '}
                          <span
                            className="inline-block px-1.5 py-0.5 rounded-full text-[10px] font-semibold"
                            style={{
                              backgroundColor: matchedDoc.available ? '#D1FAE5' : '#F3F4F6',
                              color: matchedDoc.available ? '#065F46' : '#6B7280',
                            }}
                          >
                            {matchedDoc.available ? 'Disponible' : 'Indisponible'}
                          </span>
                        </span>
                      </div>
                    )}

                    {/* CTA */}
                    <Link href="/rendez-vous">
                      <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-[#0057B7] hover:text-[#003E8A] font-['Poppins'] cursor-pointer transition-colors group-hover:underline">
                        Prendre rendez-vous <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="py-14 bg-[#EBF5FD] border-t border-[#C8E6FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarCheck className="w-10 h-10 text-[#1A80D9] mx-auto mb-4" />
          <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-[#0A0A0A] mb-3">
            Besoin d'une consultation ?
          </h2>
          <p className="font-['Poppins'] text-[#3D3D3D] text-sm mb-6 max-w-lg mx-auto">
            Prenez rendez-vous en ligne ou appelez-nous directement. Notre équipe vous oriente vers le spécialiste adapté à votre besoin.
          </p>
          <Link href="/rendez-vous">
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-[#0057B7] text-white font-medium rounded-xl hover:bg-[#003E8A] transition-colors cursor-pointer font-['Poppins'] text-sm">
              Prendre rendez-vous <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
