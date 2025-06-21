
export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  hint?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  type: 'card' | 'full-card';
  image?: string;
  imageHint?: string;
}

export interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface FooterSection {
  label: string;
  links: FooterLink[];
}
