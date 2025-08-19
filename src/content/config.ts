import { defineCollection, z } from 'astro:content';

// 🏠 FACILITIES COLLECTION (Sober Living Homes)
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

// 🎯 LEADS COLLECTION (CRM Feature)
const leads = defineCollection({
  type: 'data',
  schema: z.object({
    // Personal Information
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string(),
    gender: z.enum(['male', 'female', 'non-binary', 'prefer-not-to-say']),
    
    // Contact Information
    phone: z.string(),
    email: z.string(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipCode: z.string().optional(),
    
    // Emergency Contact
    emergencyContactName: z.string(),
    emergencyContactPhone: z.string(),
    emergencyContactRelationship: z.string(),
    
    // Insurance & Payment
    insuranceProvider: z.string().optional(),
    insuranceID: z.string().optional(),
    paymentMethod: z.enum(['insurance', 'self-pay', 'family', 'other']),
    
    // Treatment History
    previousTreatment: z.string().optional(),
    currentSobrietyDate: z.string().optional(),
    substancesUsed: z.array(z.string()).default([]),
    lastUseDate: z.string().optional(),
    detoxCompleted: z.boolean().default(false),
    detoxLocation: z.string().optional(),
    
    // Current Situation
    message: z.string(),
    currentLiving: z.string().optional(),
    transportation: z.boolean().default(false),
    employment: z.string().optional(),
    legalIssues: z.boolean().default(false),
    medicalIssues: z.string().optional(),
    
    // Preferences
    preferredFacility: z.string().optional(),
    preferredProgram: z.string().optional(),
    moveInDate: z.string().optional(),
    lengthOfStay: z.string().optional(),
    
    // CRM Tracking
    source: z.string(),
    referredBy: z.string().optional(),
    status: z.enum(['new', 'contacted', 'scheduled', 'qualified', 'admitted', 'declined', 'lost']).default('new'),
    priority: z.enum(['high', 'medium', 'low']).default('medium'),
    createdAt: z.string(),
    lastContactDate: z.string().optional(),
    nextFollowUp: z.string().optional(),
    staffAssigned: z.string().optional(),
    
    // Internal Notes
    notes: z.string().optional(),
    privateNotes: z.string().optional(),
    leadScore: z.number().default(0),
    conversionProbability: z.number().default(50)
  })
});

// 👥 RESIDENTS COLLECTION (CRM Feature)
const residents = defineCollection({
  type: 'data',
  schema: z.object({
    // Personal Information
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string(),
    ssn: z.string().optional(), // Store encrypted
    photo: z.string().optional(),
    gender: z.enum(['male', 'female', 'other']),
    
    // Contact Information
    phone: z.string(),
    email: z.string(),
    address: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipCode: z.string().optional(),
    
    // Emergency Contacts
    emergencyContact1: z.object({
      name: z.string(),
      relationship: z.string(),
      phone: z.string(),
      email: z.string().optional()
    }),
    emergencyContact2: z.object({
      name: z.string(),
      relationship: z.string(),
      phone: z.string(),
      email: z.string().optional()
    }).optional(),
    
    // Insurance Information
    insuranceProvider: z.string().optional(),
    insuranceID: z.string().optional(),
    policyNumber: z.string().optional(),
    groupNumber: z.string().optional(),
    
    // Admission Information
    admissionDate: z.string(),
    expectedDischargeDate: z.string().optional(),
    actualDischargeDate: z.string().optional(),
    facilityAssigned: z.string(),
    bedNumber: z.string().optional(),
    roomNumber: z.string().optional(),
    
    // Recovery Information
    sobrietyDate: z.string(),
    substancesOfConcern: z.array(z.string()).default([]),
    previousTreatmentHistory: z.string().optional(),
    currentMedications: z.array(z.string()).default([]),
    allergies: z.array(z.string()).default([]),
    
    // Legal Information
    probationOfficer: z.string().optional(),
    probationPhone: z.string().optional(),
    courtDates: z.array(z.string()).default([]),
    legalConditions: z.array(z.string()).default([]),
    
    // Program Information
    programType: z.enum(['standard', 'extended', 'transitional', 'specialized']),
    phase: z.enum(['phase-1', 'phase-2', 'phase-3', 'graduated']).default('phase-1'),
    privileges: z.array(z.string()).default([]),
    restrictions: z.array(z.string()).default([]),
    
    // Financial Information
    monthlyRent: z.number(),
    securityDeposit: z.number(),
    paymentMethod: z.enum(['insurance', 'self-pay', 'family', 'other']),
    paymentSchedule: z.enum(['weekly', 'bi-weekly', 'monthly']),
    balanceOwed: z.number().default(0),
    
    // Status
    status: z.enum(['active', 'discharged', 'violated', 'transferred', 'medical-leave']).default('active'),
    dischargeReason: z.string().optional(),
    
    // Metadata
    createdAt: z.string(),
    updatedAt: z.string(),
    caseManager: z.string().optional(),
    notes: z.string().optional()
  })
});

// 📝 CASE NOTES COLLECTION (New CRM Feature)
const caseNotes = defineCollection({
  type: 'data',
  schema: z.object({
    // Basic Information
    id: z.string(),
    residentId: z.string(),
    staffMember: z.string(),
    
    // Note Classification
    noteType: z.enum(['daily', 'incident', 'medical', 'family', 'progress', 'behavioral', 'meeting', 'phone-call', 'assessment']),
    urgency: z.enum(['low', 'medium', 'high', 'critical']).default('medium'),
    confidential: z.boolean().default(false),
    
    // Content
    title: z.string(),
    content: z.string(),
    actionItems: z.array(z.string()).default([]),
    followUpRequired: z.boolean().default(false),
    followUpDate: z.string().optional(),
    followUpWith: z.string().optional(),
    
    // Categorization
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    
    // Tracking
    createdAt: z.string(),
    updatedAt: z.string(),
    witnessed: z.boolean().default(false),
    witnessName: z.string().optional(),
    
    // Incident Specific
    incidentSeverity: z.enum(['minor', 'moderate', 'major', 'critical']).optional(),
    policeInvolved: z.boolean().default(false),
    familyNotified: z.boolean().default(false),
    medicationRelated: z.boolean().default(false),
    
    // Review
    reviewed: z.boolean().default(false),
    reviewedBy: z.string().optional(),
    reviewedAt: z.string().optional(),
    supervisorNotified: z.boolean().default(false)
  })
});

// 👨‍💼 STAFF COLLECTION (CRM Feature)
const staff = defineCollection({
  type: 'data',
  schema: z.object({
    // Personal Information
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string().optional(),
    
    // Employment
    employeeId: z.string(),
    role: z.enum(['house-manager', 'case-manager', 'admin', 'clinical', 'maintenance', 'director']),
    department: z.string(),
    hireDate: z.string(),
    terminationDate: z.string().optional(),
    status: z.enum(['active', 'inactive', 'terminated', 'on-leave']).default('active'),
    
    // Access & Permissions
    facilities: z.array(z.string()).default([]), // References to facilities
    permissions: z.array(z.string()).default([]),
    accessLevel: z.enum(['basic', 'standard', 'advanced', 'admin']).default('basic'),
    
    // Schedule
    shiftType: z.enum(['day', 'evening', 'night', 'rotating', 'on-call']).optional(),
    hoursPerWeek: z.number().optional(),
    
    // Qualifications
    certifications: z.array(z.string()).default([]),
    licenseNumbers: z.array(z.string()).default([]),
    backgroundCheckDate: z.string().optional(),
    
    // Performance
    performanceRating: z.number().default(0),
    lastReviewDate: z.string().optional(),
    nextReviewDate: z.string().optional(),
    
    // Metadata
    createdAt: z.string(),
    updatedAt: z.string(),
    notes: z.string().optional()
  })
});

// 🧪 DRUG TESTS COLLECTION (New - Sobriety Hub Feature)
const drugTests = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    residentId: z.string(),
    testType: z.enum(['urinalysis', 'breathalyzer', 'blood', 'saliva']),
    testDate: z.string(),
    testTime: z.string(),
    result: z.enum(['pass', 'fail', 'dilute', 'invalid', 'pending']),
    substances: z.array(z.string()).default([]),
    notes: z.string().optional(),
    staffMember: z.string(),
    randomTest: z.boolean().default(false),
    labResults: z.string().optional(),
    chainOfCustody: z.boolean().default(true),
    followUpRequired: z.boolean().default(false),
    followUpDate: z.string().optional(),
    createdAt: z.string()
  })
});

// 💰 PAYMENTS COLLECTION (New - Sobriety Hub Feature)  
const payments = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    residentId: z.string(),
    amount: z.number(),
    paymentDate: z.string(),
    paymentMethod: z.enum(['cash', 'card', 'bank', 'money-order', 'insurance']),
    paymentType: z.enum(['rent', 'deposit', 'fees', 'medical', 'other']),
    status: z.enum(['pending', 'completed', 'failed', 'refunded']),
    description: z.string(),
    receiptNumber: z.string(),
    staffMember: z.string(),
    facilityId: z.string(),
    createdAt: z.string()
  })
});

// 🏆 OUTCOMES COLLECTION (New - Sobriety Hub Feature)
const outcomes = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    residentId: z.string(),
    dischargeDate: z.string(),
    lengthOfStay: z.number(),
    dischargeReason: z.enum(['successful', 'voluntary', 'violation', 'medical', 'transfer']),
    dischargeType: z.enum(['planned', 'unplanned']),
    sobrietyMaintained: z.boolean(),
    employmentSecured: z.boolean(),
    housingSecured: z.boolean(),
    followUpDate: z.string().optional(),
    successScore: z.number().default(0),
    alumni: z.boolean().default(false),
    createdAt: z.string()
  })
});

// Export collections
export const collections = {
  facilities,
  leads,
  residents,
  caseNotes,
  staff,
  drugTests,
  payments,
  outcomes
};