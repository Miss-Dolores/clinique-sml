import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const infos = [
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['123 Avenue de la Santé', 'Bamako, Mali'],
  },
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['+223 00 00 00 00', '+223 00 00 00 01'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@cliniquesml.com', 'urgences@cliniquesml.com'],
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lun – Ven : 7h00 – 19h00', 'Samedi : 8h00 – 14h00', 'Urgences : 24h/24'],
  },
];

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#EBF5FD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-4">
              Nous joindre
            </span>
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#0A0A0A] mb-4">
              Contactez-nous
            </h1>
            <p className="font-['Poppins'] text-[#3D3D3D] text-lg max-w-2xl mx-auto">
              Notre équipe est à votre écoute. N'hésitez pas à nous contacter pour toute question ou demande d'information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              {infos.map(({ icon: Icon, title, lines }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 bg-[#EBF5FD] border border-[#C8E6FA] rounded-2xl p-5"
                >
                  <div className="w-10 h-10 bg-[#C8E6FA] rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#1A80D9]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-['Space_Grotesk'] font-semibold text-sm text-[#0A0A0A] mb-1">{title}</p>
                    {lines.map((line) => (
                      <p key={line} className="font-['Poppins'] text-sm text-[#3D3D3D]">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 bg-white border border-[#C8E6FA] rounded-2xl p-8 shadow-sm"
            >
              <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-[#0A0A0A] mb-6">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-14 bg-[#EBF5FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Space_Grotesk'] font-bold text-2xl text-[#0A0A0A] mb-6 text-center">
            Notre localisation
          </h2>
          <div className="rounded-2xl overflow-hidden border-4 border-[#C8E6FA] shadow-xl">
            <iframe
              title="Localisation de la Clinique SML à Bamako"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125346.88783783782!2d-8.0518!3d12.6392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xe51d0b3d45f8f5b%3A0x5d8fe5c3e0a02028!2sBamako%2C%20Mali!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Carte Google Maps — Clinique SML, Bamako"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
