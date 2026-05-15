import type { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Amadou Diallo',
    specialty: 'Médecine générale',
    imageUrl: 'https://picsum.photos/seed/doctor1/300/300',
    available: true,
    description: 'Médecin généraliste avec plus de 12 ans d\'expérience, spécialisé dans le suivi des maladies chroniques et la médecine préventive.',
  },
  {
    id: '2',
    name: 'Dr. Fatou Koné',
    specialty: 'Pédiatrie',
    imageUrl: 'https://picsum.photos/seed/doctor2/300/300',
    available: true,
    description: 'Pédiatre passionnée, dédiée à la santé des enfants de la naissance à l\'adolescence, avec une expertise en développement infantile.',
  },
  {
    id: '3',
    name: 'Dr. Moussa Traoré',
    specialty: 'Cardiologie',
    imageUrl: 'https://picsum.photos/seed/doctor3/300/300',
    available: false,
    description: 'Cardiologue reconnu, spécialisé dans le diagnostic et le traitement des maladies cardiovasculaires et l\'insuffisance cardiaque.',
  },
  {
    id: '4',
    name: 'Dr. Aïcha Bamba',
    specialty: 'Dermatologie',
    imageUrl: 'https://picsum.photos/seed/doctor4/300/300',
    available: true,
    description: 'Dermatologue expérimentée, prenant en charge les affections cutanées, la dermatologie esthétique et les maladies auto-immunes de la peau.',
  },
  {
    id: '5',
    name: 'Dr. Mariam Coulibaly',
    specialty: 'Gynécologie',
    imageUrl: 'https://picsum.photos/seed/doctor5/300/300',
    available: true,
    description: 'Gynécologue-obstétricienne, accompagnant les femmes à toutes les étapes de leur vie, de la contraception à la ménopause.',
  },
  {
    id: '6',
    name: 'Dr. Seydou Ouédraogo',
    specialty: 'Urgences',
    imageUrl: 'https://picsum.photos/seed/doctor6/300/300',
    available: true,
    description: 'Urgentiste chevronné, formé à la prise en charge rapide et efficace des situations d\'urgence médicale et traumatologiques.',
  },
];
