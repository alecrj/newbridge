import { defineCollection, z } from 'astro:content';

const facilities = defineCollection({
  type: 'data',
  schema: z.object({
    facilityName: z.string(),
    slug: z.string(),
    monthlyRent: z.string(),
    capacity: z.number(),
    location: z.string(),
    address: z.string(),
    programs: z.array(z.string()),
    amenities: z.array(z.string()),
    images: z.array(z.string()),
    description: z.string(),
    availability: z.enum(['accepting', 'waitlist', 'full']),
    featured: z.boolean().default(false),
    createdAt: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional()
  })
});

const inquiries = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    emergencyContact: z.string().optional(),
    insuranceProvider: z.string().optional(),
    previousTreatment: z.string().optional(),
    message: z.string(),
    preferredProgram: z.string().optional(),
    source: z.string(),
    status: z.enum(['new', 'contacted', 'scheduled', 'admitted', 'declined']),
    priority: z.enum(['high', 'medium', 'low']),
    createdAt: z.string(),
    lastContactDate: z.string().optional(),
    notes: z.string().optional()
  })
});

export const collections = { facilities, inquiries };