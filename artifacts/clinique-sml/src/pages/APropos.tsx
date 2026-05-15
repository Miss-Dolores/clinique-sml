import { motion } from 'framer-motion';
import { Heart, Award, Lightbulb, Users, Target, Handshake } from 'lucide-react';

const values = [
  { icon: Award, title: 'Excellence', desc: 'Nous visons l\'excellence dans chaque acte médical, avec des protocoles rigoureux et une formation continue de nos équipes.' },
  { icon: Heart, title: 'Humanité', desc: 'Chaque patient est unique. Nous l\'écoutons, le respectons et adaptons nos soins à sa situation personnelle.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Nous investissons en permanence dans les technologies médicales les plus récentes pour offrir les meilleurs traitements possibles.' },
  { icon: Users, title: 'Équipe', desc: 'Nos professionnels travaillent en synergie pour assurer une prise en charge globale et coordonnée de chaque patient.' },
  { icon: Target, title: 'Précision', desc: 'Des diagnostics précis grâce à des équipements de pointe et une expertise médicale de haut niveau.' },
  { icon: Handshake, title: 'Confiance', desc: 'Bâtir une relation de confiance durable avec nos patients et leur famille est au cœur de notre mission.' },
];

const stats = [
  { value: '2009', label: 'Année de fondation' },
  { value: '20+', label: 'Médecins spécialistes' },
  { value: '10 000+', label: 'Patients traités' },
  { value: '6', label: 'Spécialités médicales' },
];

export default function APropos() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#EBF5FD] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-4">
              Notre histoire
            </span>
            <h1 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl text-[#0A0A0A] mb-5">
              À propos de la Clinique SML
            </h1>
            <p className="font-['Poppins'] text-[#3D3D3D] text-lg leading-relaxed">
              Fondée en 2009, la Clinique SML est devenue un établissement de référence en matière de soins médicaux au Mali, alliant expertise, modernité et bienveillance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-4">
                Notre histoire
              </span>
              <h2 className="font-['Space_Grotesk'] font-bold text-3xl text-[#0A0A0A] mb-5">
                15 ans au service de votre santé
              </h2>
              <div className="space-y-4 font-['Poppins'] text-[#3D3D3D] text-sm leading-relaxed">
                <p>
                  La Clinique SML a été fondée en 2009 par un groupe de médecins visionnaires désireux d'offrir des soins médicaux de qualité accessible à toute la population. Dès ses débuts, l'établissement s'est distingué par son approche humaine et son engagement sans faille envers l'excellence médicale.
                </p>
                <p>
                  Au fil des années, nous avons développé notre capacité d'accueil, enrichi notre plateau technique et recruté les meilleurs spécialistes. Aujourd'hui, la Clinique SML dispose de plus de 20 médecins couvrant 6 spécialités médicales et accueille chaque année des milliers de patients.
                </p>
                <p>
                  Notre mission reste inchangée : offrir à chaque patient des soins de qualité dans un environnement chaleureux, respectueux et propice à la guérison.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://picsum.photos/seed/clinic2/600/450"
                alt="La Clinique SML"
                className="rounded-2xl shadow-xl border-4 border-[#C8E6FA] w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#0057B7] text-white rounded-2xl p-5 shadow-xl">
                <p className="font-['Space_Grotesk'] font-bold text-3xl">15</p>
                <p className="font-['Poppins'] text-xs text-white/80">ans d'excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-[#EBF5FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-white rounded-2xl p-6 border border-[#C8E6FA] shadow-sm"
              >
                <p className="font-['Space_Grotesk'] font-bold text-4xl text-[#0057B7] mb-1">{value}</p>
                <p className="font-['Poppins'] text-sm text-[#3D3D3D]">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Valeurs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold rounded-full font-['Poppins'] uppercase tracking-wide mb-3">
              Nos valeurs
            </span>
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl text-[#0A0A0A]">
              Mission et valeurs
            </h2>
            <p className="font-['Poppins'] text-[#3D3D3D] text-sm mt-3 max-w-xl mx-auto">
              Les valeurs qui guident chacune de nos actions au quotidien et qui font la force de notre équipe.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-[#C8E6FA] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#5BABF0] transition-all"
              >
                <div className="w-12 h-12 bg-[#EBF5FD] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1A80D9]" aria-hidden="true" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#0A0A0A] mb-2">{title}</h3>
                <p className="font-['Poppins'] text-sm text-[#3D3D3D] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-16 bg-[#EBF5FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl text-[#0A0A0A] mb-4">Notre équipe médicale</h2>
          <p className="font-['Poppins'] text-[#3D3D3D] text-sm mb-8 max-w-xl mx-auto">
            Une équipe de professionnels de santé soudée, formée dans les meilleures institutions et animée par la passion du soin.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#C8E6FA] max-w-4xl mx-auto">
            <img
              src="https://picsum.photos/seed/team1/900/400"
              alt="Équipe médicale de la Clinique SML"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
