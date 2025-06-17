"use client";

import * as React from "react";
import { SchoolNavbar } from "@/components/landing/SchoolNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { Footer } from "@/components/landing/Footer";
import { FacultyDirectorySection } from "@/components/landing/FacultyDirectorySection";
import { ProgramsOverviewSection } from "@/components/landing/ProgramsOverviewSection";
import { ContactFormSection } from "@/components/landing/ContactFormSection";
import { AboutUsSection } from "@/components/landing/AboutUsSection";


export default function SchoolLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SchoolNavbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <FeaturesSection />
        <ProgramsOverviewSection />
        <FacultyDirectorySection />
        <TestimonialsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
