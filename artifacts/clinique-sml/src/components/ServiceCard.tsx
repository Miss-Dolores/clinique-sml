import { motion } from 'framer-motion';
import { Link } from 'wouter';
import {
  Stethoscope, Baby, Heart, Scan, UserRound, Ambulance, FlaskConical, Waves,
} from 'lucide-react';
import type { Service } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Baby, Heart, Scan, UserRound, Ambulance, FlaskConical, Waves,
};

interface Props {
  service: Service;
  index?: number;
}

const categoryLabel: Record<Service['category'], string> = {
  general: 'Général',
  specialist: 'Spécialisé',
  emergency: 'Urgence',
};

const categoryColor: Record<Service['category'], string> = {
  general: 'bg-[#C8E6FA] text-[#003E8A]',
  specialist: 'bg-[#C8E6FA] text-[#0057B7]',
  emergency: 'bg-[#C8E6FA] text-[#003E8A]',
};

export default function ServiceCard({ service, index = 0 }: Props) {
  const Icon = iconMap[service.icon] || Stethoscope;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,87,183,0.12)' }}
      className="bg-white border border-[#C8E6FA] rounded-2xl p-6 shadow-sm hover:border-[#5BABF0] transition-colors duration-200 flex flex-col cursor-default"
    >
      {/* Animated icon container */}
      <motion.div
        className="w-12 h-12 rounded-xl bg-[#EBF5FD] flex items-center justify-center mb-4 shrink-0"
        whileHover={{ scale: 1.15, rotate: 6, backgroundColor: '#C8E6FA' }}
        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      >
        <Icon className="w-6 h-6 text-[#1A80D9]" aria-hidden="true" />
      </motion.div>

      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full font-['Poppins'] ${categoryColor[service.category]}`}>
          {categoryLabel[service.category]}
        </span>
      </div>
      <h3 className="font-['Space_Grotesk'] font-semibold text-lg text-[#0A0A0A] mb-2">
        {service.title}
      </h3>
      <p className="font-['Poppins'] text-sm text-[#3D3D3D] leading-relaxed flex-1 mb-4">
        {service.description}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-[#C8E6FA]">
        <span className="inline-flex items-center gap-1 bg-[#C8E6FA] text-[#003E8A] text-xs font-semibold px-2.5 py-1 rounded-full font-['Poppins']">
          {service.duration}
        </span>
        <span className="font-['Space_Grotesk'] font-semibold text-[#0057B7] text-sm">
          {service.price}
        </span>
      </div>
      <Link href="/rendez-vous">
        <motion.span
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="mt-4 flex items-center gap-1 text-sm font-medium text-[#0057B7] hover:text-[#003E8A] font-['Poppins'] cursor-pointer transition-colors"
        >
          Prendre rendez-vous →
        </motion.span>
      </Link>
    </motion.div>
  );
}
