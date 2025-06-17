"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import { Menu, X, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export const SchoolNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
            <Image
              src="/londonkidslogodesktop.png"
              alt="London Kids Logo"
              width={200}
              height={50}
              priority
            />
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
                  className="text-sm lg:text-base text-muted-foreground hover:text-primary transition-colors font-medium"
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
            {isOpen ? <X className="h-7 w-7 z-45" /> : <Menu className="h-7 w-7 z-45" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 top-0 pt-[0px] h-screen mx-auto bg-black/98 backdrop-blur-md z-40 shadow-2xl"
            initial={{ opacity: 0, y: "-60%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-60%" }}
            transition={{ type: "ease"}}
          >

            <button
              className="absolute top-5 right-6 p-2 rounded-full text-white hover:bg-white/10 z-50"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>

            <div className="container h-full bg-black/50 mx-auto px-6 py-10 flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-lg text-white justify-center font-semibold hover:text-primary transition-colors flex items-center gap-2.5 py-2.5" 
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
