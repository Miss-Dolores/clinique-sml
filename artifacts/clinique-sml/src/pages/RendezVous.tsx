import { motion } from 'framer-motion';
import { CalendarDays, Clock, Phone, CheckCircle } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm';

const steps = [
  { icon: CalendarDays, title: 'Choisissez une spécialité', desc: 'Sélectionnez le type de consultation dont vous avez besoin.' },
  { icon: Clock, title: 'Indiquez vos préférences', desc: 'Précisez la date et le créneau horaire qui vous conviennent.' },
  { icon: CheckCircle, title: 'Confirmation rapide', desc: 'Notre équipe confirme votre rendez-vous dans les 24 heures.' },
];

export default function RendezVous() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#EBF5FD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-4">
              Réservation
            </span>
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#0A0A0A] mb-4">
              Prendre rendez-vous
            </h1>
            <p className="font-['Poppins'] text-[#3D3D3D] text-lg max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous pour demander un rendez-vous. Notre équipe vous contactera rapidement pour confirmer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Steps */}
              <div className="bg-[#EBF5FD] border border-[#C8E6FA] rounded-2xl p-6">
                <h2 className="font-['Space_Grotesk'] font-semibold text-lg text-[#0A0A0A] mb-5">Comment ça marche ?</h2>
                <div className="space-y-5">
                  {steps.map(({ icon: Icon, title, desc }, i) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-9 h-9 rounded-xl bg-[#C8E6FA] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-[#0057B7]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-['Space_Grotesk'] font-semibold text-sm text-[#0A0A0A] mb-0.5">
                          <span className="text-[#1A80D9]">{i + 1}.</span> {title}
                        </p>
                        <p className="font-['Poppins'] text-xs text-[#3D3D3D] leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone */}
              <div className="bg-[#0057B7] rounded-2xl p-6 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-semibold text-lg mb-2">Préférez-vous appeler ?</h3>
                <p className="font-['Poppins'] text-white/80 text-sm mb-4">Notre secrétariat est disponible du lundi au samedi de 7h à 19h.</p>
                <a
                  href="tel:+22300000000"
                  className="inline-block px-5 py-2.5 bg-white text-[#0057B7] font-semibold rounded-xl hover:bg-[#EBF5FD] transition-colors font-['Poppins'] text-sm"
                  aria-label="Appeler la clinique"
                >
                  +223 00 00 00 00
                </a>
              </div>

              {/* Urgency note */}
              <div className="bg-white border-2 border-[#C8E6FA] rounded-2xl p-5">
                <p className="font-['Poppins'] text-sm text-[#3D3D3D]">
                  <span className="font-semibold text-[#0057B7]">⚠ Urgence médicale ?</span>{' '}
                  Ne remplissez pas ce formulaire. Appelez immédiatement le{' '}
                  <a href="tel:+22300000000" className="text-[#0057B7] font-semibold hover:underline">+223 00 00 00 00</a> ou rendez-vous directement à notre service des urgences.
                </p>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white border border-[#C8E6FA] rounded-2xl p-8 shadow-sm"
            >
              <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-[#0A0A0A] mb-6">
                Formulaire de rendez-vous
              </h2>
              <AppointmentForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
