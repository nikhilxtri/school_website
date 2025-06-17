
"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Heart } from "lucide-react";
import type { Testimonial } from "@/types";
import Image from "next/image";
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
      src: "https://cdn.pixabay.com/photo/2018/01/15/18/05/adult-3084400_960_720.jpg",
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
    <section id="testimonials" className="py-20 md:py-28 bg-secondary wavy-border-bottom doodle-background">
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

        <Card className="max-w-3xl mx-auto p-6 sm:p-8 md:p-12 shadow-2xl rounded-3xl bg-card overflow-hidden border-2 border-primary/10">
          <div className="relative min-h-[26rem] md:min-h-[22rem] flex flex-col items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                }}
                className="flex flex-col items-center w-full"
              >
                <div className="relative w-32 h-32 md:w-36 md:h-36 mb-8">
                  <Image
                    src={testimonialsData[active].src}
                    alt={testimonialsData[active].name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover shadow-lg border-4 border-primary/20"
                    priority={true}
                  />
                   <Heart className="absolute -bottom-2 -right-2 w-10 h-10 text-primary/70 fill-primary/20 transform rotate-12" />
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-playful-blue-light fill-playful-blue-light" />
                  ))}
                </div>
                <MessageSquare className="w-10 h-10 text-primary/30 mb-5" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic max-w-xl">
                  "{testimonialsData[active].quote}"
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-primary mb-1.5 font-headline">
                  {testimonialsData[active].name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
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
