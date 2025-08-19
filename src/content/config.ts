// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// RESIDENTS COLLECTION
const residents = defineCollection({
  type: 'data',
  schema: z.object({
    fullName: z.string(),
    dateOfBirth: z.date(),
    moveInDate: z.date(),
    facility: z.enum(['Haven House', 'Recovery Villa', 'Serenity Manor']),
    roomNumber: z.string(),
    emergencyContact: z.object({
      name: z.string(),
      phone: z.string(),
      relationship: z.string(),
    }),
    insuranceProvider: z.string().optional(),
    sobrietyDate: z.date(),
    programPhase: z.enum(['Phase 1 - Detox', 'Phase 2 - Stabilization', 'Phase 3 - Independent Living', 'Phase 4 - Aftercare']),
    monthlyRent: z.number(),
    status: z.enum(['Active', 'Extended Stay', 'Graduated', 'Terminated']),
    caseNotes: z.string().optional(),
    profilePhoto: z.string().optional(),
  }),
});

// LEADS COLLECTION - Fixed enum cases to match template usage
const leads = defineCollection({
  type: 'data',
  schema: z.object({
    fullName: z.string(),
    phone: z.string(),
    email: z.string().email(),
    source: z.enum(['Website', 'Google Ads', 'Facebook', 'Referral', 'Walk-in', 'Phone Call', 'SEO']),
    preferredFacility: z.enum(['Haven House', 'Recovery Villa', 'Serenity Manor', 'Any Available']).optional(),
    insuranceProvider: z.string().optional(),
    previousTreatment: z.string().optional(),
    message: z.string(),
    // Fixed: Changed to lowercase to match template comparisons
    status: z.enum(['new', 'contacted', 'scheduled', 'admitted', 'declined', 'lost']),
    priority: z.enum(['high', 'medium', 'low']),
    followUpDate: z.date().optional(),
    assignedStaff: z.string().optional(),
    createdAt: z.date().default(() => new Date()),
  }),
});

// STAFF COLLECTION
const staff = defineCollection({
  type: 'data',
  schema: z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    role: z.enum(['Administrator', 'House Manager', 'Case Manager', 'Counselor', 'Support Staff', 'Security']),
    facilityAssignment: z.enum(['All Facilities', 'Haven House', 'Recovery Villa', 'Serenity Manor']),
    hireDate: z.date(),
    active: z.boolean().default(true),
    permissions: z.array(z.enum(['Resident Management', 'Lead Management', 'Financial Reports', 'Clinical Notes', 'User Management', 'System Settings'])),
    profilePhoto: z.string().optional(),
    bio: z.string().optional(),
  }),
});

// FACILITIES COLLECTION - Fixed to include missing properties
const facilities = defineCollection({
  type: 'data',
  schema: z.object({
    facilityName: z.string(),
    slug: z.string(), // Added missing slug property
    address: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
    }),
    location: z.string(), // Added missing location property (city, state combo)
    capacity: z.number(),
    currentOccupancy: z.number(),
    rentRange: z.string(),
    monthlyRent: z.number(), // Added missing monthlyRent property
    programs: z.array(z.enum(['Detox', 'Residential Treatment', 'IOP', 'PHP', 'MAT', 'Counseling', 'Life Skills'])),
    amenities: z.array(z.enum(['Private Rooms', 'Shared Rooms', 'Kitchen', 'Laundry', 'Transportation', 'Gym', 'Pool', 'WiFi', 'Parking'])),
    // Fixed: Changed to lowercase to match template comparisons
    availability: z.enum(['accepting', 'waitlist', 'full']),
    featured: z.boolean().default(false),
    description: z.string(),
    images: z.array(z.string()),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

// DRUG TESTS COLLECTION
const drugTests = defineCollection({
  type: 'data',
  schema: z.object({
    resident: z.string(), // Reference to resident by fullName
    testDate: z.date(),
    testType: z.enum(['Urine', 'Breathalyzer', 'Saliva', 'Hair']),
    result: z.enum(['Pass', 'Fail', 'Inconclusive', 'Refused']),
    substancesDetected: z.array(z.enum(['None', 'Alcohol', 'Marijuana', 'Cocaine', 'Opiates', 'Amphetamines', 'Benzodiazepines', 'Other'])).optional(),
    administeredBy: z.string(), // Reference to staff by fullName
    notes: z.string().optional(),
  }),
});

// CASE NOTES COLLECTION
const caseNotes = defineCollection({
  type: 'data',
  schema: z.object({
    resident: z.string(), // Reference to resident by fullName
    date: z.date(),
    noteType: z.enum(['Clinical', 'Behavioral', 'Operational', 'Incident', 'Progress', 'Violation']),
    staffMember: z.string(), // Reference to staff by fullName
    content: z.string(),
    actionRequired: z.boolean().default(false),
    followUpDate: z.date().optional(),
    confidential: z.boolean().default(false),
  }),
});

// PAYMENTS COLLECTION
const payments = defineCollection({
  type: 'data',
  schema: z.object({
    resident: z.string(), // Reference to resident by fullName
    paymentDate: z.date(),
    amount: z.number(),
    paymentMethod: z.enum(['Cash', 'Check', 'Credit Card', 'ACH/Bank Transfer', 'Money Order', 'Insurance']),
    paymentType: z.enum(['Rent', 'Deposit', 'Late Fee', 'Damages', 'Other']),
    status: z.enum(['Completed', 'Pending', 'Failed', 'Refunded']),
    referenceNumber: z.string().optional(),
    notes: z.string().optional(),
  }),
});

// WEBSITE PAGES COLLECTION
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    metaDescription: z.string(),
    featuredImage: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

// BLOG COLLECTION
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(), // Reference to staff by fullName
    publishDate: z.date(),
    featuredImage: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    published: z.boolean().default(false),
  }),
});

// SETTINGS COLLECTION
const settings = defineCollection({
  type: 'data',
  schema: z.object({
    siteTitle: z.string(),
    siteDescription: z.string(),
    contactPhone: z.string(),
    contactEmail: z.string().email(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      zip: z.string(),
    }),
    socialMedia: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      linkedin: z.string().optional(),
    }),
  }),
});

// Export all collections
export const collections = {
  residents,
  leads,
  staff,
  facilities,
  'drug-tests': drugTests,
  'case-notes': caseNotes,
  payments,
  pages,
  blog,
  settings,
};