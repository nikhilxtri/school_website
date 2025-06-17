
"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Removed CardDescription, CardFooter
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Loader2, Send, MapPin, PhoneCall, Clock, CalendarCheck2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import React from "react";

const contactFormSchema = z.object({
  parentName: z.string().min(2, { message: "Parent's name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number (e.g., 10 digits)." }),
  childAge: z.string().min(1, { message: "Child's age is required (e.g., '3 years')." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Sunshine Avenue, Playful Town",
  },
  {
    icon: PhoneCall,
    label: "Phone",
    value: "+91 1234567890",
    href: "tel:+911234567890",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@londonkids.school",
    href: "mailto:hello@londonkids.school",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday: 9:00 AM - 5:00 PM",
  },
];

export const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      childAge: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form data submitted:", data);
    toast({
      title: "Visit Request Sent!",
      description: "Thanks for reaching out! We'll contact you soon to confirm your visit details.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="admissions" className="py-20 md:py-28 bg-secondary doodle-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <CalendarCheck2 className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-5 font-headline">Get In Touch & Plan Your Visit</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're excited to show you around London Kids! Use the details below to connect with us, or fill out the form to schedule a visit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 md:gap-25 items-center">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="bg-primary/10 p-3.5 rounded-full flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-0.5">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Schedule a Visit Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="bg-blue/30 text-background p-2 sm:p-4 md:p-0 rounded-3xl shadow-2xl border-2 border-primary/20">
              <CardHeader className="p-6 md:p-8 text-center md:text-left">
                <CardTitle className="text-2xl md:text-3xl font-headline text-primary">
                  Schedule a Visit
                </CardTitle>
              </CardHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <CardContent className="p-6 md:p-8 space-y-6">
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground/80">Parent's Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-black/5 border-background/20 text-muted-foreground placeholder:text-muted-foreground rounded-xl py-3 px-4 text-base"/>
                          </FormControl>
                          <FormMessage className="text-primary/70" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground/80">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@gamil.com" {...field} className="bg-black/5 border-background/20 text-muted-foreground placeholder:text-muted-foreground rounded-xl py-3 px-4 text-base"/>
                          </FormControl>
                          <FormMessage className="text-primary/70" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground/80">Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(+91) 1234567890" {...field} className="bg-black/5 border-background/20 text-muted-foreground placeholder:text-muted-foreground rounded-xl py-3 px-4 text-base"/>
                          </FormControl>
                          <FormMessage className="text-primary/70" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="childAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground/80">Child's Age</FormLabel>
                          <FormControl>
                            <Input placeholder="E.g., 3 years" {...field} className="bg-black/5 border-background/20 text-muted-foreground placeholder:text-muted-foreground rounded-xl py-3 px-4 text-base"/>
                          </FormControl>
                          <FormMessage className="text-primary/70" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground/80">Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Any specific questions or preferred tour times?" {...field} rows={4} className="bg-black/5 border-background/20 text-muted-foreground placeholder:text-muted-foreground rounded-xl py-3 px-4 text-base"/>
                          </FormControl>
                          <FormMessage className="text-primary/70" />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <div className="p-6 md:p-8 pt-0">
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/80 text-primary-foreground rounded-full py-3.5 text-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending Request...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Schedule Visit
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

