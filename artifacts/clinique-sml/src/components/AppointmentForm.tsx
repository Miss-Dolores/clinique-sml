import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';
import type { AppointmentFormData } from '../types';

const schema = z.object({
  fullName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(8, 'Numéro de téléphone invalide'),
  specialty: z.string().min(1, 'Veuillez choisir une spécialité'),
  date: z.string().min(1, 'Veuillez sélectionner une date'),
  timePreference: z.enum(['morning', 'afternoon', 'evening'], {
    required_error: 'Veuillez choisir un créneau',
  }),
  reason: z.string().min(10, 'Veuillez décrire le motif (minimum 10 caractères)'),
});

const specialties = [
  'Médecine générale',
  'Pédiatrie',
  'Cardiologie',
  'Dermatologie',
  'Gynécologie',
  'Urgences',
];

const inputClass = `w-full px-4 py-3 bg-[#EBF5FD] border border-[#5BABF0] rounded-xl text-[#0A0A0A] 
  font-['Poppins'] text-sm placeholder:text-[#3D3D3D]/50 focus:outline-none focus:border-[#0057B7] 
  focus:ring-2 focus:ring-[#0057B7]/20 transition-all`;

const errorClass = `text-xs text-red-500 mt-1 font-['Poppins']`;

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AppointmentFormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: AppointmentFormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Appointment data:', data);
    setLoading(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="bg-[#EBF5FD] border border-[#C8E6FA] rounded-2xl p-10 text-center"
        >
          <div className="w-16 h-16 bg-[#C8E6FA] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#0057B7]" />
          </div>
          <h3 className="font-['Space_Grotesk'] font-bold text-2xl text-[#0A0A0A] mb-2">
            Demande envoyée !
          </h3>
          <p className="font-['Poppins'] text-[#3D3D3D] mb-6">
            Votre demande de rendez-vous a bien été reçue. Notre équipe vous contactera dans les plus brefs délais pour confirmer votre rendez-vous.
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-[#0057B7] text-white font-medium rounded-xl hover:bg-[#003E8A] transition-colors font-['Poppins'] text-sm"
          >
            Prendre un autre rendez-vous
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Nom complet <span className="text-[#0057B7]">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Ex : Amadou Koné"
                aria-label="Nom complet"
                className={inputClass}
                {...register('fullName')}
              />
              {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Email <span className="text-[#0057B7]">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="votre@email.com"
                aria-label="Adresse email"
                className={inputClass}
                {...register('email')}
              />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Téléphone <span className="text-[#0057B7]">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+223 XX XX XX XX"
                aria-label="Numéro de téléphone"
                className={inputClass}
                {...register('phone')}
              />
              {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
            </div>
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Spécialité <span className="text-[#0057B7]">*</span>
              </label>
              <select
                id="specialty"
                aria-label="Spécialité médicale"
                className={`${inputClass} cursor-pointer`}
                {...register('specialty')}
              >
                <option value="">Choisir une spécialité</option>
                {specialties.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.specialty && <p className={errorClass}>{errors.specialty.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Date souhaitée <span className="text-[#0057B7]">*</span>
              </label>
              <input
                id="date"
                type="date"
                aria-label="Date souhaitée"
                min={new Date().toISOString().split('T')[0]}
                className={inputClass}
                {...register('date')}
              />
              {errors.date && <p className={errorClass}>{errors.date.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Créneau préféré <span className="text-[#0057B7]">*</span>
              </label>
              <div className="flex gap-2">
                {[
                  { value: 'morning', label: 'Matin' },
                  { value: 'afternoon', label: 'Après-midi' },
                  { value: 'evening', label: 'Soir' },
                ].map(({ value, label }) => (
                  <label
                    key={value}
                    className="flex-1 cursor-pointer"
                    aria-label={label}
                  >
                    <input
                      type="radio"
                      value={value}
                      className="sr-only peer"
                      {...register('timePreference')}
                    />
                    <span className="block text-center py-2.5 px-2 border-2 border-[#5BABF0] rounded-xl text-xs font-medium font-['Poppins'] text-[#3D3D3D] peer-checked:border-[#0057B7] peer-checked:bg-[#0057B7] peer-checked:text-white transition-all cursor-pointer">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
              {errors.timePreference && <p className={errorClass}>{errors.timePreference.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
              Motif de la consultation <span className="text-[#0057B7]">*</span>
            </label>
            <textarea
              id="reason"
              rows={4}
              placeholder="Décrivez brièvement votre motif de consultation..."
              aria-label="Motif de la consultation"
              className={`${inputClass} resize-none`}
              {...register('reason')}
            />
            {errors.reason && <p className={errorClass}>{errors.reason.message}</p>}
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full py-3.5 bg-[#0057B7] text-white font-semibold rounded-xl hover:bg-[#003E8A] transition-colors font-['Poppins'] text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0057B7]/25 disabled:opacity-70"
            aria-label="Envoyer la demande de rendez-vous"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
