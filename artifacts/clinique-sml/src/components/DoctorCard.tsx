import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { CalendarDays } from 'lucide-react';
import type { Doctor } from '../types';

interface Props {
  doctor: Doctor;
  index?: number;
}

export default function DoctorCard({ doctor, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,87,183,0.12)' }}
      className="bg-white border border-[#C8E6FA] rounded-2xl p-6 shadow-sm hover:border-[#5BABF0] transition-colors duration-200 flex flex-col items-center text-center"
    >
      <motion.div
        className="relative mb-4"
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <img
          src={doctor.imageUrl}
          alt={`Photo de ${doctor.name}`}
          className="w-24 h-24 rounded-full object-cover border-4 border-[#C8E6FA]"
        />
        <span
          className={`absolute bottom-0 right-0 w-5 h-5 rounded-full border-2 border-white ${
            doctor.available ? 'bg-[#1A80D9]' : 'bg-[#C8E6FA]'
          }`}
          aria-label={doctor.available ? 'Disponible' : 'Indisponible'}
        />
      </motion.div>

      <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#0A0A0A] mb-1">
        {doctor.name}
      </h3>

      <span className="inline-block bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold px-3 py-1 rounded-full font-['Poppins'] mb-3">
        {doctor.specialty}
      </span>

      <p className="font-['Poppins'] text-sm text-[#3D3D3D] leading-relaxed mb-4 flex-1">
        {doctor.description}
      </p>

      <div className="flex items-center gap-2 mb-5">
        <span
          className={`text-xs font-medium font-['Poppins'] ${
            doctor.available ? 'text-[#1A80D9]' : 'text-[#3D3D3D]'
          }`}
        >
          {doctor.available ? '● Disponible' : '○ Indisponible'}
        </span>
      </div>

      <Link href="/rendez-vous">
        <motion.span
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#0057B7] text-white text-sm font-medium rounded-xl cursor-pointer hover:bg-[#003E8A] transition-colors font-['Poppins'] shadow-md shadow-[#0057B7]/20"
          aria-label={`Prendre rendez-vous avec ${doctor.name}`}
        >
          <CalendarDays className="w-4 h-4" />
          Prendre RDV
        </motion.span>
      </Link>
    </motion.div>
  );
}
