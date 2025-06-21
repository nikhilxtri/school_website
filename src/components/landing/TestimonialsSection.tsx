
"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Heart } from "lucide-react";
import type { Testimonial } from "@/types";
import Image from "next/legacy/image";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  const testimonialsData: Testimonial[] = [
    {
      quote: "London Kids is like a second home for my daughter! She's learned so much and made so many friends. The teachers are true superheroes with a knack for doodles!",
      name: "Sarah P.",
      designation: "Parent of a Happy Doodler",
      src: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
    },
    {
      quote: "The playschool program is fantastic! My son runs in every morning with a huge smile. We love the creative activities, caring staff, and all the fun drawings.",
      name: "Michael B.",
      designation: "Playschool Parent & Art Fan",
      src: "https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg",
    },
    {
      quote: "Absolutely wonderful nursery. They focus on play-based learning and my child is thriving. The doodle-friendly environment is a big plus! Highly recommend London Kids!",
      name: "Anita K.",
      designation: "Nursery Parent & Doodle Appreciator",
      src: "https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056_960_720.jpg",
    }
  ];

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonialsData.length);
  }, [testimonialsData.length]);

  useEffect(() => {
    if (!mounted || testimonialsData.length <= 1) return;
    const interval = setInterval(handleNext, 7000); 
    return () => clearInterval(interval);
  }, [handleNext, testimonialsData.length, mounted]);

  if (!mounted || testimonialsData.length === 0) {
    return null; 
  }

  const slideVariants = {
    enter: {
      x: "100%",
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
      opacity: 0,
    },
  };

  return (
    <section id="testimonials" className="py-10 md:py-28 bg-secondary doodle-background">
      {/* Wavy Border Layer */}
      <div className="relative left-0 right-0 bottom-0 -mt-1.5 md:-mt-20 -top-20 md:-top-14 w-full z-20 -mb-1 pointer-events-none">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full -scale-x-100 -scale-y-100">
          <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V100H0V60Z" fill="hsl(var(--background))" />
          <path d="M0 65C240 125 480 5 720 65C960 125 1200 5 1440 65" stroke="hsl(var(--primary))" strokeWidth="4" strokeDasharray="6 6" className="opacity-30" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5 font-headline">Happy Parents, Happy Kids!</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Hear what families are saying about their London Kids adventure, filled with joy and doodles.</p>
        </motion.div>

        <Card className="max-w-7xl h-[25rem] mx-auto p-6 sm:p-8 md:p-12 shadow-xl rounded-3xl bg-card overflow-hidden border-2 border-primary/10">
          <div className="relative min-h-[26rem] md:min-h-[22rem] flex flex-row items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "ease"},
                  opacity: { duration: 0.3 },
                }}
                className="flex -mt-10 flex-col items-center w-full md:absolute"
              >
                <div className="relative w-32 h-32 mb-6 -mt-8 md:w-72 md:h-72 md:-left-[26rem]">
                  <Image
                    src={testimonialsData[active].src}
                    alt={testimonialsData[active].name}
                    width={250}
                    height={250}
                    className="rounded-full object-cover shadow-lg border-4"
                    priority={true}
                  />
                  
                </div>
                <div className="flex justify-center mb-4 md:-mr-[20rem] md:-mt-[18rem]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-5 text-playful-blue-light/10 fill-yellow-300" />
                  ))}
                </div>

                <p className="text-sm md:text-xl text-foreground mb-8 italic md:w-[35rem] md:-mr-[20rem]">
                  "{testimonialsData[active].quote}"
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-primary -mt-3 font-headline md:-mr-[20rem]">
                  {testimonialsData[active].name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground md:-mr-[20rem]">
                  {testimonialsData[active].designation}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Card>
      </div>
    </section>
  );
};
