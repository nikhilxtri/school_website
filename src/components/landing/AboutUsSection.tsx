"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Eye, Award, Sparkles } from "lucide-react";
import Image from "next/image";

export const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-20 md:py-28 bg-secondary doodle-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5 font-headline">Welcome to Our Happy Place!</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At London Kids, we believe in nurturing little dreamers and explorers in a world filled with joy, creativity, and endless possibilities, all drawn with a touch of doodle fun!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              icon: Heart,
              title: "Our Heartfelt Mission",
              description: "To create a warm, safe, and stimulating space where every child feels loved, valued, and excited to learn through play and exploration.",
              iconColor: "text-primary",
              bgColor: "bg-primary/10",
            },
            {
              icon: Eye,
              title: "Our Playful Vision",
              description: "We envision a world where curiosity is celebrated, imaginations soar, and every child builds a strong foundation for a bright future.",
              iconColor: "text-playful-blue-medium",
              bgColor: "bg-playful-blue-medium/10",
            },
            {
              icon: Award,
              title: "Our Core Values",
              description: "Kindness, Creativity, Curiosity, Community, and lots of Fun! These guide everything we do at London Kids.",
              iconColor: "text-playful-blue-dark",
              bgColor: "bg-playful-blue-dark/10",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className="h-full shadow-xl rounded-2xl hover:shadow-primary/15 transition-all duration-300 flex flex-col text-center transform hover:-translate-y-1.5 bg-card">
                <CardHeader className="items-center pt-10 pb-5">
                  <div className={`p-5 ${item.bgColor} rounded-full mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className={`w-12 h-12 ${item.iconColor}`} />
                  </div>
                  <CardTitle className={`font-headline text-2xl text-primary`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-6 pb-10">
                  <CardDescription className="text-base text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 md:mt-24 text-center"
          >
            <Image 
                src="https://placehold.co/800x350.png" 
                alt="Group of diverse children and teachers in a doodle-art styled classroom at London Kids, engaged in playful learning activities"
                width={800}
                height={350}
                className="mx-auto rounded-3xl shadow-xl border-2 border-white"
                data-ai-hint="children teachers diverse playing learning doodle art classroom"
            />
        </motion.div>
      </div>
    </section>
  );
};
