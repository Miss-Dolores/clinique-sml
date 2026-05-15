import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(3, 'Le sujet est trop court'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
});

type FormData = z.infer<typeof schema>;

const inputClass = `w-full px-4 py-3 bg-[#EBF5FD] border border-[#5BABF0] rounded-xl text-[#0A0A0A]
  font-['Poppins'] text-sm placeholder:text-[#3D3D3D]/50 focus:outline-none focus:border-[#0057B7]
  focus:ring-2 focus:ring-[#0057B7]/20 transition-all`;

const errorClass = `text-xs text-red-500 mt-1 font-['Poppins']`;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Contact data:', data);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#EBF5FD] border border-[#C8E6FA] rounded-2xl p-8 text-center"
        >
          <div className="w-14 h-14 bg-[#C8E6FA] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-7 h-7 text-[#0057B7]" />
          </div>
          <h3 className="font-['Space_Grotesk'] font-bold text-xl text-[#0A0A0A] mb-2">Message envoyé !</h3>
          <p className="font-['Poppins'] text-sm text-[#3D3D3D] mb-5">
            Merci de nous avoir contactés. Nous vous répondrons dans les 24 heures ouvrables.
          </p>
          <button
            onClick={() => { reset(); setSubmitted(false); }}
            className="px-5 py-2.5 bg-[#0057B7] text-white text-sm font-medium rounded-xl hover:bg-[#003E8A] transition-colors font-['Poppins']"
          >
            Envoyer un autre message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Nom complet <span className="text-[#0057B7]">*</span>
              </label>
              <input id="name" type="text" placeholder="Votre nom" aria-label="Nom complet" className={inputClass} {...register('name')} />
              {errors.name && <p className={errorClass}>{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="cemail" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
                Email <span className="text-[#0057B7]">*</span>
              </label>
              <input id="cemail" type="email" placeholder="votre@email.com" aria-label="Email" className={inputClass} {...register('email')} />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
              Sujet <span className="text-[#0057B7]">*</span>
            </label>
            <input id="subject" type="text" placeholder="Objet de votre message" aria-label="Sujet" className={inputClass} {...register('subject')} />
            {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#0A0A0A] mb-1.5 font-['Poppins']">
              Message <span className="text-[#0057B7]">*</span>
            </label>
            <textarea id="message" rows={5} placeholder="Votre message..." aria-label="Message" className={`${inputClass} resize-none`} {...register('message')} />
            {errors.message && <p className={errorClass}>{errors.message.message}</p>}
          </div>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 bg-[#0057B7] text-white font-semibold rounded-xl hover:bg-[#003E8A] transition-colors font-['Poppins'] text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0057B7]/25 disabled:opacity-70"
            aria-label="Envoyer le message"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {loading ? 'Envoi...' : 'Envoyer le message'}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
