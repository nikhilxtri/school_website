"use client";

import * as React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { generatePersonalizedInfo, type PersonalizedInfoInput, type PersonalizedInfoOutput } from "@/ai/flows/personalized-school-info";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  childName: z.string().min(2, { message: "Child's name must be at least 2 characters." }),
  childInterests: z.string().min(10, { message: "Please describe your child's interests (min 10 characters)." }),
  educationalGoals: z.string().min(10, { message: "Please describe your educational goals (min 10 characters)." }),
});

type PersonalizedInfoFormValues = z.infer<typeof formSchema>;

export const PersonalizedInfoForm = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<PersonalizedInfoOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<PersonalizedInfoFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      childName: "",
      childInterests: "",
      educationalGoals: "",
    },
  });

  const onSubmit: SubmitHandler<PersonalizedInfoFormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await generatePersonalizedInfo(data);
      setResult(response);
    } catch (error) {
      console.error("Error generating personalized info:", error);
      toast({
        title: "Error",
        description: "Failed to generate personalized information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="personalized-info" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 font-headline">Discover London Kids For Your Child</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us a bit about your child, and we'll share how London Kids can be the perfect start for their learning journey.
          </p>
        </motion.div>
        
        <Card className="max-w-2xl mx-auto shadow-xl rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
              <Sparkles className="w-6 h-6 text-primary" />
              Personalized Playschool & Nursery Insights
            </CardTitle>
            <CardDescription>
              Fill out the form below to receive tailored information.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="childName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Child's Name</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g., Lily Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="childInterests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Child's Interests</FormLabel>
                      <FormControl>
                        <Textarea placeholder="E.g., Loves playing with blocks, singing songs, and outdoor adventures" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="educationalGoals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Educational Goals for Child</FormLabel>
                      <FormControl>
                        <Textarea placeholder="E.g., Develop social skills, foster curiosity, prepare for kindergarten" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Get Personalized Info"
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <Card className="max-w-2xl mx-auto shadow-xl rounded-xl bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-primary">{result.welcomeMessage}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm sm:prose dark:prose-invert max-w-none text-foreground">
                    <p className="whitespace-pre-line">{result.schoolInformation}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
