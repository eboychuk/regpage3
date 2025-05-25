export interface Speaker {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface WebinarDetails {
  title: string;
  date: string;
  time: string;
  duration: string;
  language: string;
  level: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  howHeard: string;
  specialRequirements: string;
  agreeToTerms: boolean;
}