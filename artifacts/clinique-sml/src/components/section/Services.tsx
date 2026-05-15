import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import type { Service } from '@/types';

type FilterCategory = 'all' | Service['category'];

const filters: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'Tous' },
  { value: 'general', label: 'Consultation' },
  { value: 'specialist', label: 'Spécialisé' },
  { value: 'emergency', label: 'Urgence' },
];

export default function Services() {
  const [active, setActive] = useState<FilterCategory>('all');

  const filtered = active === 'all' ? services : services.filter((s) => s.category === active);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#EBF5FD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-4">
              Nos prestations
            </span>
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#0A0A0A] mb-4">
              Nos services médicaux
            </h1>
            <p className="font-['Poppins'] text-[#3D3D3D] text-lg max-w-2xl mx-auto">
              Une offre de soins complète et diversifiée, dispensée par des spécialistes qualifiés et passionnés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-10" role="group" aria-label="Filtrer par catégorie">
            {filters.map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setActive(value)}
                aria-pressed={active === value}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all font-['Poppins'] border-2 ${
                  active === value
                    ? 'bg-[#0057B7] border-[#0057B7] text-white shadow-md shadow-[#0057B7]/20'
                    : 'border-[#C8E6FA] text-[#3D3D3D] hover:border-[#5BABF0] hover:text-[#0057B7] bg-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Services grid */}
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-['Poppins'] text-[#3D3D3D]">Aucun service dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info banner */}
      <section className="py-10 bg-[#EBF5FD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-['Poppins'] text-[#3D3D3D] text-sm">
            <span className="font-semibold text-[#0057B7]">Vous ne trouvez pas ce que vous cherchez ?</span>{' '}
            Contactez-nous au <a href="tel:+22300000000" className="text-[#0057B7] hover:underline">+223 00 00 00 00</a> — notre équipe vous orientera vers le spécialiste adapté à votre situation.
          </p>
        </div>
      </section>
    </div>
  );
}
