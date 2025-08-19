/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_TITLE: string;
  readonly PUBLIC_SITE_DESCRIPTION: string;
  readonly PUBLIC_CONTACT_PHONE: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_CONTACT_PHONE: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Netlify Identity Widget
interface NetlifyIdentity {
  on(event: 'init', callback: (user: any) => void): void;
  on(event: 'login', callback: () => void): void;
  on(event: 'logout', callback: () => void): void;
  on(event: 'error', callback: (err: Error) => void): void;
  on(event: 'open', callback: () => void): void;
  on(event: 'close', callback: () => void): void;
  open(): void;
  close(): void;
  currentUser(): any;
  logout(): void;
}

declare global {
  interface Window {
    netlifyIdentity: NetlifyIdentity;
  }
}

// Facility type for NewBridge Living
export interface Facility {
  facilityName: string;
  slug: string;
  monthlyRent: string;
  capacity: number;
  location: string;
  address: string;
  programs: string[];
  amenities: string[];
  images: string[];
  description: string;
  availability: 'accepting' | 'waitlist' | 'full';
  featured: boolean;
  createdAt: string;
  metaTitle?: string;
  metaDescription?: string;
}

// Inquiry type for CRM
export interface Inquiry {
  name: string;
  phone: string;
  email: string;
  emergencyContact?: string;
  insuranceProvider?: string;
  previousTreatment?: string;
  message: string;
  preferredProgram?: string;
  source: string;
  status: 'new' | 'contacted' | 'scheduled' | 'admitted' | 'declined';
  priority: 'high' | 'medium' | 'low';
  createdAt: string;
  lastContactDate?: string;
  notes?: string;
}