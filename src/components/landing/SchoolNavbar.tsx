"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Award } from "lucide-react";
import Link from "next/link";

const PlayfulCapIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M4 10V12C4 12.5304 4.21071 13.0391 4.58579 13.4142C4.96086 13.7893 5.46957 14 6 14H18C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 10L12 5L22 10L12 15L2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14V17C8 17.5304 8.21071 18.0391 8.58579 18.4142C8.96086 18.7893 9.46957 19 10 19H14C14.5304 19 15.0391 18.7893 15.4142 18.4142C15.7893 18.0391 16 17.5304 16 17V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 12L20 16C20 16.2652 19.8946 16.5196 19.7071 16.7071C19.5196 16.8946 19.2652 17 19 17H18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="17" r="1" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" strokeWidth="0.5" />
     <path d="M12 15V19" stroke="hsl(var(--playful-blue-light))" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);


export const SchoolNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-us" },
    { name: "Programs", href: "#programs" },
    { name: "Team", href: "#faculty" },
    { name: "Contact", href: "#admissions" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false); 
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2`}>
      <div className={`container mx-auto px-4 sm:px-6 flex justify-center`}>
        <div 
          className={`flex items-center justify-between w-full max-w-6xl py-3 px-5 sm:px-8 transition-all duration-300 bg-background/80 backdrop-blur-lg shadow-lg rounded-full`}
        >
          <Link href="#home" className="flex items-center space-x-2.5">
            <motion.div
              whileHover={{ rotate: [0, 12, -7, 0], scale: 1.15 }}
              transition={{ duration: 0.5 }}
            >
              <PlayfulCapIcon />
            </motion.div>
            <span className="font-bold text-xl md:text-2xl text-primary whitespace-nowrap font-headline">London Kids</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -4 }}
                transition={{ type: "ease"}}
              >
                <Link 
                  href={item.href} 
                  className="text-sm lg:text-base text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "ease"}}
          >
            <Link
              href="#admissions"
              className="inline-flex items-center justify-center px-6 py-3 text-sm lg:text-base text-primary-foreground bg-primary rounded-full hover:bg-primary/80 transition-colors shadow-md"
              onClick={() => setIsOpen(false)}
            >

              Apply Now
            </Link>
          </motion.div>

          <motion.button 
            className="md:hidden flex items-center p-2.5 rounded-md hover:bg-primary/10 text-primary" 
            onClick={toggleMenu} 
            whileTap={{ scale: 0.9 }} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-0 pt-[75px] h-screen mx-auto bg-background/98 backdrop-blur-md z-40 shadow-2xl"
            initial={{ opacity: 0, y: "-60%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-60%" }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
          >
            <div className="container mx-auto px-6 py-10 flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-lg text-foreground font-semibold hover:text-primary transition-colors flex items-center gap-2.5 py-2.5" 
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-8"
              >
                <Link
                  href="#admissions"
                  className="inline-flex items-center justify-center w-full px-8 py-3.5 text-lg text-primary-foreground bg-primary rounded-full hover:bg-primary/80 transition-colors shadow-lg"
                  onClick={toggleMenu}
                >
                  <Award size={24} className="mr-2.5"/>
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
