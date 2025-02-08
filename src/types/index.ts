export interface Project {
  id: number;
  title: string;
  client: string;
  description: string;
  technologies: string[];
  outcome: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}