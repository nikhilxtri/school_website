
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";
import { PlayCircle, Sparkles, MousePointer2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Simple SVG doodle example
const DoodleSwirl = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("absolute opacity-20 text-primary", className)} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 Q 50 10, 80 80 T 20 80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5" />
  </svg>
);

const DoodleStar = ({ className }: { className?: string }) => (
 <svg viewBox="0 0 100 100" className={cn("absolute opacity-30 text-playful-blue-medium", className)} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L61.8 35.5 L88.2 38.2 L68 56.5 L72.4 83 L50 70 L27.6 83 L32 56.5 L11.8 38.2 L38.2 35.5 Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
  </svg>
);

const DoodleScribble = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("absolute opacity-15 text-playful-blue-dark", className)} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30 Q 20 10, 30 30 T 50 30 Q 60 50, 70 30 T 90 30 Q 80 60, 70 70 T 50 70 Q 40 90, 30 70 T 10 70 Q 20 40, 10 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);


export const HeroSection = () => {
  useEffect(() => {
    const styleId = "hero-animation-styles";
    if (document.getElementById(styleId)) {
      return;
    }

    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      @keyframes blob {
        0% { transform: scale(1) translate(0, 0); }
        33% { transform: scale(1.1) translate(20px, -30px); }
        66% { transform: scale(0.9) translate(-20px, 20px); }
        100% { transform: scale(1) translate(0, 0); }
      }
      .animate-blob { animation: blob 15s infinite ease-in-out; }
      .animation-delay-2000 { animation-delay: -2s; }
      .animation-delay-4000 { animation-delay: -4s; }
    `;
    document.head.appendChild(style);

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle && document.head.contains(existingStyle)) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);


  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://cdn.pixabay.com/photo/2014/05/16/12/11/nursery-school-345518_960_720.jpg" 
          alt="Sparkling joy and curiosity at London Kids - happy children in a vibrant learning environment" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-1"></div> {/* Dark overlay for text contrast */}
      </div>

      {/* Doodle Elements Layer */}
      <div className="absolute inset-0 opacity-80 z-5">
        <Sparkles className="absolute top-1/4 left-1/4 w-12 h-12 md:w-16 md:h-16 text-playful-blue-light animate-pulse delay-100" />
        <MousePointer2 className="absolute bottom-1/3 right-1/4 w-10 h-10 md:w-12 md:h-12 text-playful-blue-medium animate-ping delay-300 opacity-50" />
        <div className="absolute top-10 right-10 md:right-20 w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-12 left-10 md:left-20 w-20 h-20 md:w-24 md:h-24 bg-primary/15 rounded-full animate-blob animation-delay-4000"></div>
        <DoodleSwirl className="w-24 h-24 top-1/3 left-1/5 transform -rotate-12" />
        <DoodleSwirl className="w-32 h-32 bottom-1/4 right-1/5 transform rotate-12 scale-x-[-1]" />
        <DoodleStar className="w-20 h-20 top-1/5 right-1/4 transform rotate-[25deg]" />
        <DoodleScribble className="w-40 h-40 bottom-1/5 left-1/4 transform -rotate-[15deg]" />
      </div>

      {/* Text Content Layer */}
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10"> {/* Removed pt-20 pb-10 md:pt-24 md:pb-12 for full screen image effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 font-headline">
            Sparking Joy & Curiosity at <br className="sm:hidden"/>
            <span className="block sm:inline bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent drop-shadow-[0px_0px_10px_rgba(0,85,255,0.5)] ">
              London Kids!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 md:mb-12 max-w-2xl mx-auto">
            Welcome to a vibrant world of play, learning, and laughter. Our playschool and nursery programs nurture little explorers every step of the way with a sprinkle of doodle magic!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground px-10 py-3.5 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link href="#about-us" className="flex items-center gap-2.5">
                <PlayCircle size={22}/>
                Explore Our World
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-primary-foreground bg-primary-foreground/50 border-primary-foreground/50 hover:bg-primary-foreground/10 hover:text-primary-foreground px-10 py-3.5 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-transform duration-300" asChild>
              <Link href="#programs">View Programs</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Wavy Border Layer */}
      <div className="absolute left-0 right-0 bottom-0 w-full z-20 -mb-1 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-x-150">
          <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V100H0V60Z" fill="hsl(var(--secondary))" />
          <path d="M0 65C240 125 480 5 720 65C960 125 1200 5 1440 65" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="6 6" className="opacity-30" />
        </svg>
      </div>
    </section>
  );
};
