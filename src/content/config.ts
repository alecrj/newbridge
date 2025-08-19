import { defineCollection, z } from 'astro:content';

// 🏠 FACILITIES COLLECTION (Enhanced)
const facilities = defineCollection({
  type: 'data',
  schema: z.object({
    facilityName: z.string(),
    slug: z.string(),
    monthlyRent: z.string(),
    capacity: z.number(),
    currentOccupancy: z.number().default(0),
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
    metaDescription: z.string().optional(),
    
    // Enhanced CRM fields
    facilityType: z.enum(['men', 'women', 'mixed']).default('men'),
    licenseNumber: z.string().optional(),
    lastInspection: z.string().optional(),
    houseManager: z.string().optional(),
    emergencyContact: z.string().optional(),
    specializations: z.array(z.string()).default([]),
    ageRange: z.string().default('18+'),
    lengthOfStayAvg: z.number().default(90)
  })
});

// 📞 INQUIRIES COLLECTION (Enhanced)
const inquiries = defineCollection({
  type: 'data',
  schema: z.object({
    // Basic Contact
    name: z.string(),
    phone: z.string(),
    email: z.string(),
    age: z.number().optional(),
    gender: z.enum(['male', 'female', 'other']).optional(),
    
    // Emergency & Support
    emergencyContact: z.string().optional(),
    emergencyPhone: z.string().optional(),
    relationship: z.string().optional(),
    
    // Insurance & Financial
    insuranceProvider: z.string().optional(),
    insuranceID: z.string().optional(),
    paymentMethod: z.enum(['insurance', 'self-pay', 'family', 'other']).default('self-pay'),
    
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

// 👥 RESIDENTS COLLECTION (New Enterprise Feature)
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
    groupNumber: z.string().optional(),
    subscriberName: z.string().optional(),
    
    // Residency Information
    facility: z.string(), // Reference to facility
    roomNumber: z.string().optional(),
    bedAssignment: z.string().optional(),
    checkInDate: z.string(),
    expectedCheckOutDate: z.string().optional(),
    actualCheckOutDate: z.string().optional(),
    lengthOfStay: z.number().default(90), // Days
    
    // Status
    currentStatus: z.enum(['active', 'discharged', 'awol', 'suspended', 'transferred']).default('active'),
    dischargeReason: z.string().optional(),
    dischargeType: z.enum(['successful', 'against-advice', 'violation', 'medical', 'other']).optional(),
    
    // Recovery Information
    sobrietyDate: z.string().optional(),
    substanceHistory: z.array(z.string()).default([]),
    treatmentHistory: z.string().optional(),
    medications: z.array(z.string()).default([]),
    allergies: z.array(z.string()).default([]),
    medicalConditions: z.array(z.string()).default([]),
    
    // Program Participation
    program: z.string(),
    meetingsRequired: z.number().default(7), // Per week
    meetingsAttended: z.number().default(0),
    sponsor: z.string().optional(),
    sponsorContact: z.string().optional(),
    homeGroup: z.string().optional(),
    
    // Employment & Education
    employmentStatus: z.enum(['employed', 'unemployed', 'student', 'disabled', 'retired']).optional(),
    employer: z.string().optional(),
    jobTitle: z.string().optional(),
    workPhone: z.string().optional(),
    education: z.string().optional(),
    
    // Financial Information
    monthlyRent: z.number(),
    securityDeposit: z.number().default(0),
    balanceOwed: z.number().default(0),
    paymentMethod: z.enum(['cash', 'check', 'card', 'insurance', 'family']).default('cash'),
    paymentSchedule: z.enum(['weekly', 'monthly', 'other']).default('monthly'),
    
    // Legal Information
    legalIssues: z.boolean().default(false),
    probationOfficer: z.string().optional(),
    courtDates: z.array(z.string()).default([]),
    legalNotes: z.string().optional(),
    
    // Case Management
    caseManager: z.string().optional(),
    treatmentPlan: z.string().optional(),
    goals: z.array(z.string()).default([]),
    lastAssessment: z.string().optional(),
    nextAssessment: z.string().optional(),
    
    // System Fields
    createdAt: z.string(),
    updatedAt: z.string(),
    createdBy: z.string(),
    lastModifiedBy: z.string(),
    
    // Privacy & Permissions
    photoPermission: z.boolean().default(false),
    mediaPermission: z.boolean().default(false),
    familyContactPermission: z.boolean().default(true),
    
    // Notes
    admissionNotes: z.string().optional(),
    behavioralNotes: z.string().optional(),
    medicalNotes: z.string().optional(),
    progressNotes: z.string().optional()
  })
});

// 💰 PAYMENTS COLLECTION (New)
const payments = defineCollection({
  type: 'data',
  schema: z.object({
    resident: z.string(), // Reference to resident
    amount: z.number(),
    paymentDate: z.string(),
    dueDate: z.string(),
    paymentMethod: z.enum(['cash', 'check', 'card', 'bank-transfer', 'insurance', 'money-order']),
    paymentType: z.enum(['rent', 'security-deposit', 'fees', 'utilities', 'other']),
    status: z.enum(['pending', 'completed', 'failed', 'refunded', 'partial']).default('pending'),
    
    // Payment Details
    checkNumber: z.string().optional(),
    referenceNumber: z.string().optional(),
    receiptNumber: z.string().optional(),
    
    // Tracking
    recordedBy: z.string(),
    recordedAt: z.string(),
    notes: z.string().optional(),
    
    // Periods
    periodStart: z.string().optional(),
    periodEnd: z.string().optional(),
    
    // Finance
    lateFee: z.number().default(0),
    processingFee: z.number().default(0),
    totalAmount: z.number()
  })
});

// 📝 CASE NOTES COLLECTION (New)
const caseNotes = defineCollection({
  type: 'data',
  schema: z.object({
    resident: z.string(), // Reference to resident
    staffMember: z.string(),
    noteDate: z.string(),
    noteTime: z.string(),
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

// 👨‍💼 STAFF COLLECTION (New)
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
    hoursPerWeek: z.number().default(40),
    schedule: z.string().optional(), // JSON string for complex schedules
    
    // Qualifications
    certifications: z.array(z.string()).default([]),
    licenseNumber: z.string().optional(),
    licenseExpiration: z.string().optional(),
    education: z.string().optional(),
    
    // Emergency Contact
    emergencyContact: z.object({
      name: z.string(),
      relationship: z.string(),
      phone: z.string()
    }),
    
    // System
    createdAt: z.string(),
    updatedAt: z.string(),
    lastLogin: z.string().optional(),
    
    // Notes
    notes: z.string().optional(),
    performanceNotes: z.string().optional(),
    
    // Salary/Payroll (if applicable)
    hourlyRate: z.number().optional(),
    salaryAnnual: z.number().optional(),
    payFrequency: z.enum(['weekly', 'bi-weekly', 'monthly']).optional()
  })
});

// 🤝 REFERRAL PARTNERS COLLECTION (New)
const referralPartners = defineCollection({
  type: 'data',
  schema: z.object({
    organizationName: z.string(),
    contactPerson: z.string(),
    title: z.string().optional(),
    email: z.string(),
    phone: z.string(),
    address: z.string().optional(),
    
    // Partner Type
    partnerType: z.enum(['treatment-center', 'hospital', 'therapist', 'case-manager', 'court', 'family', 'alumni', 'other']),
    specialization: z.array(z.string()).default([]),
    
    // Relationship
    partnerSince: z.string(),
    referralsReceived: z.number().default(0),
    referralsSent: z.number().default(0),
    successRate: z.number().default(0),
    
    // Status
    status: z.enum(['active', 'inactive', 'preferred']).default('active'),
    notes: z.string().optional(),
    
    // Tracking
    lastReferral: z.string().optional(),
    nextContact: z.string().optional(),
    
    createdAt: z.string(),
    updatedAt: z.string()
  })
});

// Export all collections
export const collections = { 
  facilities, 
  inquiries,
  residents,
  payments,
  caseNotes,
  staff,
  referralPartners
};