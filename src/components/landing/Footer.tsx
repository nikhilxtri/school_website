"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Sparkles,
  Paintbrush // Added Paintbrush for doodle theme
} from "lucide-react";
import type { FooterSection, FooterLink } from "@/types";
import Link from "next/link";

const PlayfulCapIconFooter = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M4 10V12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7893 5.46957 14 6 14H18C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 10L12 5L22 10L12 15L2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14V17C8 17.5304 8.21071 18.0391 8.58579 18.4142C8.96086 18.7893 9.46957 19 10 19H14C14.5304 19 15.0391 18.7893 15.4142 18.4142C15.7893 18.0391 16 17.5304 16 17V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12L20 16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="17" r="1" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
    <path d="M12 15V19" stroke="hsl(var(--playful-blue-light))" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 14L6 18" stroke="hsl(var(--playful-blue-medium))" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
  </svg>
);

const footerAnimation = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const Footer = () => {
  const footerLinksData: FooterSection[] = [
    {
      label: 'Our Programs',
      links: [
        { title: 'Tiny Tots Playschool', href: '#playschool' },
        { title: 'Little Sprouts Nursery', href: '#nursery' },
        { title: 'FunZone Daycare', href: '#daycare' },
      ],
    },
    {
      label: 'Quick Links',
      links: [
        { title: 'Meet Our Team', href: '#faculty' },
        { title: 'Parent Stories', href: '#testimonials' },
        { title: 'Contact Us', href: '#admissions' },
      ],
    },
    {
      label: 'Follow the Fun!',
      links: [
        { title: 'Facebook', href: 'https://facebook.com/', icon: Facebook },
        { title: 'Instagram', href: 'https://instagram.com/', icon: Instagram },
        { title: 'Youtube', href: 'https://youtube.com/', icon: Youtube },
      ],
    },
  ];

  return (
    <footer id="contact-footer" className="relative w-full bg-black/90 text-background px-4 sm:px-6 py-8 lg:py-10 overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10 pt-6 md:pt-10">
        <div className="grid w-full gap-12 lg:grid-cols-3 xl:gap-20">
          {/*<motion.div className="space-y-6 items-center mx-auto" {...footerAnimation} transition={{ ...footerAnimation.transition, delay: 0.1 }}>
            <Link href="#home" className="flex items-center space-x-3 group">
              <PlayfulCapIconFooter />
              <span className="text-3xl md:text-4xl font-bold text-primary font-headline group-hover:text-primary/80 transition-colors">London Kids</span>
            </Link>
            <p className="text-background/80 text-sm md:text-base max-w-sm">
              Where giggles grow and little minds bloom with doodles! Join our playschool and nursery for an unforgettable journey of discovery and fun.
            </p>
            <div className="space-y-3.5">
              <div className="flex items-center space-x-3 text-background/70 hover:text-primary transition-colors">
                <MapPin className="w-5 h-5 shrink-0" />
                <span className="text-sm">123 Sunshine Avenue, Playful Town</span>
              </div>
              <a href="tel:+442071234567" className="flex items-center space-x-3 text-background/70 hover:text-primary transition-colors">
                <Phone className="w-5 h-5 shrink-0" />
                <span className="text-sm">+91 1234567890</span>
              </a>
              <a href="mailto:hello@londonkids.school" className="flex items-center space-x-3 text-background/70 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 shrink-0" />
                <span className="text-sm">hello@londonkids.school</span>
              </a>
            </div>
          </motion.div>*/}

          <div className="grid grid-cols-3 gap-30 sm:grid-cols-3 xl:col-span-3">
            {footerLinksData.map((section, index) => (
              <motion.div key={section.label} {...footerAnimation} transition={{ ...footerAnimation.transition, delay: 0.2 + index * 0.06 }}>
                <div>
                  <h3 className="pl-12 text-primary font-semibold mb-6 text-lg md:text-xl font-headline">{section.label}</h3>
                  <ul className="space-y-3.5 pl-12">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-background/80 hover:text-primary inline-flex items-center transition-colors duration-300 text-sm md:text-base group"
                        >
                          {link.icon && <link.icon className="w-5 h-5 mr-2.5 transition-transform group-hover:scale-110 text-primary/70 group-hover:text-primary" />}
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div {...footerAnimation} transition={{ ...footerAnimation.transition, delay: 0.55 }} className="mt-10 md:mt-15 pt-6 border-t border-background/20 text-center">
          <p className="text-background/70 text-sm flex items-center justify-center">
            © {new Date().getFullYear()} London Kids. Crafted with <span className="text-red-400 mx-1.5">❤</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
