
"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { PencilRuler, ChevronLeft, ChevronRight } from "lucide-react";

const facultyMembers = [
  { name: "Ms. Daisy Doodles", title: "Head of Happy Learning & Chief Doodler", imgSrc: "https://placehold.co/300x300.png", hint: "woman teacher cartoon doodle style" },
  { name: "Mr. Leo Adventure", title: "Lead Play Explorer & Story Weaver", imgSrc: "https://placehold.co/300x300.png", hint: "man teacher friendly doodle illustration" },
  { name: "Ms. Rosie Rainbow", title: "Creative Arts Sparkler & Paint Pot Pro", imgSrc: "https://placehold.co/300x300.png", hint: "woman artist playful doodle character" },
  { name: "Mrs. Lily Lullaby", title: "Nursery Nurturer & Comfort Creator", imgSrc: "https://placehold.co/300x300.png", hint: "woman educator kind doodle art" },
  { name: "Mr. Barnaby Blocks", title: "Play & Build Guide & Tower Architect", imgSrc: "https://placehold.co/300x300.png", hint: "man friendly energetic doodle style builder" },
  { name: "Ms. Sunny Stories", title: "Daycare Storyteller & Imagination Igniter", imgSrc: "https://placehold.co/300x300.png", hint: "woman animated storyteller doodle character" },
];

const NUM_VISIBLE_CARDS = 3;

const variants = {
  enter: (direction: 'next' | 'prev') => {
    return {
      x: direction === 'next' ? "100%" : "-100%",
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: 'next' | 'prev') => {
    return {
      zIndex: 0,
      x: direction === 'next' ? "-100%" : "100%",
      opacity: 0
    };
  }
};

export const FacultyDirectorySection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0); 
  const [direction, setDirection] = React.useState<'next' | 'prev'>('next');

  const handleNext = () => {
    setDirection('next');
    setActiveIndex((prevIndex) => (prevIndex + 1) % facultyMembers.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setActiveIndex((prevIndex) => (prevIndex - 1 + facultyMembers.length) % facultyMembers.length);
  };

  const facultyToShow = React.useMemo(() => {
    const toShow = [];
    if (facultyMembers.length === 0) return [];

    for (let i = 0; i < NUM_VISIBLE_CARDS; i++) {
      const memberIndex = (activeIndex + i) % facultyMembers.length;
      toShow.push(facultyMembers[memberIndex]);
    }
    
    let tempIndex = 0;
    while (toShow.length < NUM_VISIBLE_CARDS && facultyMembers.length > 0 && facultyMembers.length < NUM_VISIBLE_CARDS) {
        toShow.push(facultyMembers[tempIndex % facultyMembers.length]);
        tempIndex++;
    }
    return toShow;
  }, [activeIndex]);


  return (
    <section id="faculty" className="py-20 md:py-28 bg-background doodle-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="flex justify-center items-center mb-4">
            <PencilRuler className="w-10 h-10 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary font-headline">Our Friendly Faces!</h2>
            <PencilRuler className="w-10 h-10 text-primary ml-3 transform scale-x-[-1]" />
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the amazing team at London Kids who make every day an adventure in learning, fun, and creative doodling!
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto mt-10 overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex} 
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              className="flex gap-6 justify-center" 
            >
              {facultyToShow.map((member, i) => (
                <div key={`${member.name}-${activeIndex}-${i}`} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0"> 
                  <Card className="text-center overflow-hidden shadow-xl rounded-3xl group bg-card border-2 border-primary/10 h-full flex flex-col">
                    <CardHeader className="p-0 relative">
                       <div className="relative w-full h-60"> {/* Adjusted image height from h-72 to h-60 */}
                         <Image 
                            src={member.imgSrc} 
                            alt={member.name} 
                            layout="fill" 
                            objectFit="cover" 
                            data-ai-hint={member.hint}
                            className="transition-transform duration-300 group-hover:scale-105"
                          />
                       </div>
                       <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-card to-transparent"></div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow flex flex-col justify-center bg-card"> 
                      <div>
                        <CardTitle className="text-xl mb-1.5 font-headline text-foreground group-hover:text-primary transition-colors">{member.name}</CardTitle>
                        <CardDescription className="text-primary/80 text-sm font-medium">{member.title}</CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {facultyMembers.length > NUM_VISIBLE_CARDS && ( 
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -translate-y-1/2 left-2 md:left-0 z-10 bg-primary/70 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Previous member group"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 right-2 md:right-0 z-10 bg-primary/70 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Next member group"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
