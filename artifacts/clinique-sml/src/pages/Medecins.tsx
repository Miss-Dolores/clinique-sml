import { motion } from 'framer-motion';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

export default function Medecins() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#EBF5FD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-4">
              Notre équipe
            </span>
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#0A0A0A] mb-4">
              Nos médecins
            </h1>
            <p className="font-['Poppins'] text-[#3D3D3D] text-lg max-w-2xl mx-auto">
              Une équipe de spécialistes reconnus, dévoués à votre santé et disponibles pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-[#EBF5FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#1A80D9] border-2 border-white shadow" />
              <span className="font-['Poppins'] text-sm text-[#3D3D3D]">Médecin disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#C8E6FA] border-2 border-white shadow" />
              <span className="font-['Poppins'] text-sm text-[#3D3D3D]">Médecin indisponible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join team */}
      <section className="py-12 bg-white border-t border-[#C8E6FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-[#0A0A0A] mb-3">
            Vous êtes professionnel de santé ?
          </h2>
          <p className="font-['Poppins'] text-[#3D3D3D] text-sm mb-6">
            La Clinique SML recrute régulièrement des médecins et praticiens spécialisés. Rejoignez notre équipe et participez à notre mission de soins d'excellence.
          </p>
          <a
            href="mailto:recrutement@cliniquesml.com"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0057B7] text-[#0057B7] font-medium rounded-xl hover:bg-[#C8E6FA] transition-colors font-['Poppins'] text-sm"
            aria-label="Candidater à la Clinique SML"
          >
            Candidater
          </a>
        </div>
      </section>
    </div>
  );
}
