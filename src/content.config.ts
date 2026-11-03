import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Case studies: one MDX file per project in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['Self-initiated', 'University', 'Team', 'Volunteer', 'Hackathon', 'Work']),
    role: z.string(),
    method: z.string(),
    duration: z.string(),
    team: z.string(),
    outcome: z.string(), // one-line headline result shown on the project list
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

// GRC write-ups: policies, compliance summaries and articles in src/content/grc/
const grc = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/grc' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Policy', 'Compliance summary', 'Article', 'Awareness']),
    summary: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { projects, grc };
