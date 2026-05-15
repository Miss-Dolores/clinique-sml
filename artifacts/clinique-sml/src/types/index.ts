export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  available: boolean;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  price: string;
  category: 'general' | 'specialist' | 'emergency';
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  specialty: string;
  date: string;
  timePreference: 'morning' | 'afternoon' | 'evening';
  reason: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}
