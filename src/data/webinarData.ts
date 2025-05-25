import { WebinarDetails, Speaker, Testimonial, FAQ } from '../types';

export const webinarDetails: WebinarDetails = {
  title: "Effective Communication Strategies for Global Teams",
  date: "June 15, 2025",
  time: "10:00 AM - 12:00 PM EST",
  duration: "2 hours",
  language: "English",
  level: "Intermediate",
  price: "Free for organizations"
};

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    title: "Head of Corporate Language Training",
    bio: "Dr. Chen has over 15 years of experience developing language training programs for multinational corporations. She specializes in cross-cultural communication and has helped thousands of professionals improve their language skills.",
    imageUrl: "https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "Global Communications Consultant",
    bio: "Michael has worked with Fortune 500 companies across 4 continents, helping teams overcome language barriers and improve productivity. His approach combines practical exercises with theoretical frameworks.",
    imageUrl: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Thompson",
    company: "Global Tech Solutions",
    role: "HR Director",
    quote: "The language training webinar provided actionable strategies that we implemented immediately. Our international team communication improved within weeks.",
    imageUrl: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Toshiro Yamamoto",
    company: "Innovate Financial",
    role: "Team Lead",
    quote: "The techniques shared in this webinar helped our diverse team bridge cultural gaps. We've seen a 30% improvement in project completion times.",
    imageUrl: "https://images.pexels.com/photos/8191582/pexels-photo-8191582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Maria Gonzalez",
    company: "EuroMed Healthcare",
    role: "Operations Manager",
    quote: "Implementing the communication frameworks from this webinar has transformed how our global teams collaborate. Highly recommended!",
    imageUrl: "https://images.pexels.com/photos/5717577/pexels-photo-5717577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Who should attend this webinar?",
    answer: "This webinar is ideal for HR professionals, team leaders, and managers who work with multicultural or international teams. It's designed for organizations looking to improve communication efficiency across language barriers."
  },
  {
    id: 2,
    question: "Will there be a recording available?",
    answer: "Yes, all registered participants will receive a recording of the webinar and additional resources within 24 hours after the live session."
  },
  {
    id: 3,
    question: "What technical requirements are needed to join?",
    answer: "You'll need a stable internet connection and a device with audio capabilities. We recommend using Chrome or Firefox browsers for the best experience."
  },
  {
    id: 4,
    question: "Can multiple people from my organization attend?",
    answer: "Absolutely! We encourage teams to attend together. Simply register each participant separately using the registration form."
  },
  {
    id: 5,
    question: "How interactive is the webinar?",
    answer: "The webinar includes polling, Q&A sessions, and interactive exercises. We encourage active participation to maximize learning outcomes."
  }
];

export const benefits = [
  "Develop clear communication strategies for multilingual teams",
  "Learn techniques to overcome cultural barriers in virtual meetings",
  "Discover tools for improving written communication across languages",
  "Understand how to give feedback across different cultural contexts",
  "Create action plans for ongoing language skill development in your organization"
];