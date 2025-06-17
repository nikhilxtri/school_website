"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Baby, Sun, ToyBrick, Paintbrush, BookHeart, Activity } from "lucide-react"; 
import Link from "next/link";
import { Button } from "../ui/button";

const programs = [
  { name: "Tiny Tots Playschool", age: "1.5 - 2.5 Yrs", description: "A world of wonder! We focus on joyful play, making friends, and first steps in learning, all with a doodle twist.", icon: Baby, link: "#playschool", color: "bg-playful-blue-light/15", iconColor: "text-playful-blue-light" },
  { name: "Little Sprouts Nursery", age: "2.5 - 3.5 Yrs", description: "Nurturing young minds with creative activities, gentle guidance, and lots of fun in a safe, doodle-filled space.", icon: Sun, link: "#nursery", color: "bg-primary/15", iconColor: "text-primary" },
  { name: "FunZone Daycare", age: "All Day Fun!", description: "A happy and engaging daycare experience, filled with stories, games, and creative play for busy bees and little artists.", icon: Activity, link: "#daycare", color: "bg-playful-blue-dark/15", iconColor: "text-playful-blue-dark" },
];

export const ProgramsOverviewSection = () => {
  return (
    <section id="programs" className="py-20 md:py-28 bg-secondary wavy-border-bottom doodle-background">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5 font-headline">Our Adventures & Programs</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            London Kids offers exciting programs tailored for little learners, sparking curiosity and a love for discovery with every doodle and new friend!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className="h-full shadow-xl rounded-3xl hover:shadow-primary/20 transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1.5 bg-card border-2 border-transparent hover:border-primary/30">
                <CardHeader className={`items-center text-center p-8 ${program.color}`}>
                  <div className={`p-5 rounded-full mb-5 transition-transform duration-300 group-hover:scale-110 ${program.color}`}>
                    <program.icon className={`w-16 h-16 ${program.iconColor}`} />
                  </div>
                  <CardTitle className="font-headline text-2xl md:text-3xl text-foreground">{program.name}</CardTitle>
                  <CardDescription className={`text-sm font-medium ${program.iconColor}`}>{program.age}</CardDescription>
                </CardHeader>
                <CardContent className="text-center flex-grow p-6 md:p-8">
                  <CardDescription className="text-base text-muted-foreground">{program.description}</CardDescription>
                </CardContent>
                <div className="p-6 md:p-8 mt-auto">
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary/10 hover:text-primary rounded-xl py-3.5 text-base md:text-lg" asChild>
                    <Link href={program.link}>Learn More</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
