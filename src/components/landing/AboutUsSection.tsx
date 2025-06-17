"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Eye, Award, Sparkles } from "lucide-react";



export const AboutUsSection = () => {

  return (
    <section id="about-us" className="py-20 md:py-28 bg-secondary doodle-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5 font-headline">Welcome to Our Happy Place!</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At London Kids, we believe in nurturing little dreamers and explorers in a world filled with joy, creativity, and endless possibilities, all drawn with a touch of doodle fun!
          </p>
        </motion.div>

        <div className="px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-12">
          {[
            {
              icon: Heart,
              title: "Our Heartfelt Mission",
              description: "To create a warm, safe, and stimulating space where every child feels loved, valued, and excited to learn through play and exploration."
            },
            {
              icon: Eye,
              title: "Our Playful Vision",
              description: "We envision a world where curiosity is celebrated, imaginations soar, and every child builds a strong foundation for a bright future.",
              
            },
            {
              icon: Award,
              title: "Our Core Values",
              description: "Kindness, Creativity, Curiosity, Community, and lots of Fun! These guide everything we do at London Kids.",
            
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
                <CardHeader className="items-star md:items-center pt-4 md:pt-10 pb-0 md:pb-8">
                  <div className={`p-5 bg-primary/10 rounded-full mb-3 md:mb-5 transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className={`w-4 h-4 md:w-12 md:h-12 text-primary`} />
                  </div>
                  <CardTitle className={`absolute md:relative font-headline top-6 md:top-0 left-28 md:left-0 text-base md:text-2xl text-primary`}>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow px-4 pb-4 md:px-6 md:pb-8">
                  <CardDescription className="text-sm md:text-base text-muted-foreground">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
