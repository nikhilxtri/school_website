
"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Palette, Music2, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { FeatureItem } from "@/types";
import Image from "next/legacy/image";

export const FeaturesSection = () => {
  const features: FeatureItem[] = [
    {
      title: "Playful Learning Adventures",
      description: "Our curriculum is a vibrant journey of discovery, where play and learning dance hand-in-hand, sparking imagination with every doodle and giggle.",
      icon: Rocket,
      type: 'full-card',
      image: "https://cdn.pixabay.com/photo/2023/10/06/06/09/girl-8297510_1280.jpg",
    },
    {
      title: "Warm & Caring Educators",
      description: "Meet our team of passionate teachers who create a second home filled with smiles, encouragement, and a touch of doodle magic.",
      icon: Users,
      type: 'full-card',
      image: "https://cdn.pixabay.com/photo/2017/04/05/08/18/kindergarten-2204239_1280.jpg",
    },
    {
      title: "Creative Corner & Doodles",
      description: "From finger painting to storytelling and fun doodles, we unlock every child's inner artist and storyteller.",
      icon: Palette,
      type: 'full-card',
      image: "https://cdn.pixabay.com/photo/2017/03/03/15/15/nursery-2114173_1280.jpg",
    },
    {
      title: "Melody, Movement & Giggles",
      description: "Sing, dance, and wiggle! Our music and movement activities boost coordination, joy, and lots of happy giggles.",
      icon: Music2,
      type: 'full-card',
      image: "https://cdn.pixabay.com/photo/2019/10/16/11/04/preschool-4554206_1280.jpg",
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background relative doodle-background">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5 font-headline">Why Little Explorers Love London Kids!</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We create magical early learning experiences where every child shines, explores, and grows with confidence, surrounded by playful doodles and fun.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              {feature.type === 'full-card' && feature.image ? (
                <Card className="group overflow-hidden shadow-2xl h-full flex flex-col bg-card text-card-foreground rounded-3xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1.5 border-2 border-transparent hover:border-primary/30">
                  <CardHeader className="p-0 relative">
                      <div className="relative h-72 w-full overflow-hidden">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-5 left-5 flex items-center p-3.5 bg-black/40 rounded-xl backdrop-blur-sm">
                          <feature.icon className="w-9 h-9 text-playful-blue-light text-white mr-3.5 shrink-0" />
                          <h3 className="text-xl font-semibold text-white font-headline">{feature.title}</h3>
                        </div>
                      </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8 flex-grow">
                    <p className="text-muted-foreground text-base md:text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="group p-6 md:p-8 shadow-2xl h-full flex flex-col items-center text-center bg-card text-card-foreground rounded-3xl hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1.5 border-2 border-transparent hover:border-primary/30">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center mb-5 bg-primary/10 p-5 rounded-full transition-transform group-hover:scale-110 duration-300">
                      <feature.icon className="w-14 h-14 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-semibold mb-2.5 font-headline text-primary">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-base md:text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
