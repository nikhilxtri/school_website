'use server';

/**
 * @fileOverview Generates personalized information for London Kids playschool and nursery programs.
 *
 * - generatePersonalizedInfo - A function that generates personalized information.
 * - PersonalizedInfoInput - The input type for the generatePersonalizedInfo function.
 * - PersonalizedInfoOutput - The return type for the generatePersonalizedInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedInfoInputSchema = z.object({
  childName: z.string().describe("The child's name."),
  childInterests: z.string().describe("The child's interests (e.g., loves drawing, building, singing)."),
  educationalGoals: z.string().describe('The educational goals for the child (e.g., social skills, curiosity, kindergarten readiness).'),
});
export type PersonalizedInfoInput = z.infer<typeof PersonalizedInfoInputSchema>;

const PersonalizedInfoOutputSchema = z.object({
  welcomeMessage: z.string().describe('A personalized welcome message for the child and parent.'),
  schoolInformation: z.string().describe('Information about London Kids playschool/nursery tailored to the child.'),
});
export type PersonalizedInfoOutput = z.infer<typeof PersonalizedInfoOutputSchema>;

export async function generatePersonalizedInfo(input: PersonalizedInfoInput): Promise<PersonalizedInfoOutput> {
  return personalizedInfoFlow(input);
}

const personalizedInfoPrompt = ai.definePrompt({
  name: 'personalizedInfoPrompt',
  input: {schema: PersonalizedInfoInputSchema},
  output: {schema: PersonalizedInfoOutputSchema},
  prompt: `You are an expert in creating personalized information about playschool and nursery programs for London Kids.

  Based on the following information, create a personalized welcome message and information about how London Kids' playschool and nursery programs can benefit the child.
  Focus on a warm, inviting tone suitable for parents of young children. Highlight aspects relevant to early childhood development, play-based learning, and a nurturing environment.

  Child's Name: {{{childName}}}
  Child's Interests: {{{childInterests}}}
  Educational Goals: {{{educationalGoals}}}

  Output format should be:
  Welcome Message: [Generate a friendly welcome message here]
  School Information: [Generate tailored information about London Kids' relevant programs and approach here]`,
});

const personalizedInfoFlow = ai.defineFlow(
  {
    name: 'personalizedInfoFlow',
    inputSchema: PersonalizedInfoInputSchema,
    outputSchema: PersonalizedInfoOutputSchema,
  },
  async input => {
    const {output} = await personalizedInfoPrompt(input);
    return output!;
  }
);
