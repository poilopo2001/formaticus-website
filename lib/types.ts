// Types for Formaticus website

export interface Business {
  name: string
  shortName: string
  sector: string
  tagline: string
  description: string
  founded: string | null
  siret: string | null
  tva: string | null
  contact: Contact
  hours: Hours
  languages: string[]
  social: Social
}

export interface Contact {
  phone: string
  phoneDisplay: string
  mobile: string
  mobileDisplay: string
  email: string
  website: string
  address: Address
  shop: Shop
  coordinates: Coordinates
  serviceRadius: string
}

export interface Address {
  street: string
  city: string
  postalCode: string
  canton?: string
  country: string
}

export interface Shop {
  street: string
  city: string
  postalCode: string
  hours: string
  description: string
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface Hours {
  weekdays: string
  saturday: string
  sunday: string
  monday: string
  events?: string
  workshops?: string
}

export interface Social {
  facebook?: string
  instagram?: string
  linkedin?: string
  tripadvisor?: string
  youtube?: string
}

export interface Branding {
  primaryColor: string
  secondaryColor: string
  accentColor: string
  neutralColor: string
  colorScheme: string
  fontFamily: string
}

export interface Service {
  name: string
  slug: string
  shortDescription: string
  fullDescription: string
  priceRange: string
  priceMin: number
  priceMax: number
  pricePerPerson?: string
  benefits: string[]
  categories?: CheeseCategories
  whatsIncluded?: Record<string, string>
  notIncluded?: Record<string, string>
  schedule?: Schedule
  process: string[]
  guarantees: string[]
  featured: boolean
  icon: string
  image: string
  videoUrl?: string
  estimatedDuration: string
  program?: Record<string, string>
  cheeseSelection?: Record<string, string>
  included?: Record<string, string>
  formulas?: Record<string, Formula>
  delivery?: Delivery
  coffrets?: Record<string, Coffret>
  customization?: Customization
  shipping?: Shipping
  cheesesMade?: Record<string, string>
  services?: Record<string, ServiceOption>
  options?: Record<string, string>
  eventTypes?: Record<string, string>
}

export interface CheeseCategories {
  pates_molles?: string[]
  pates_pressees?: string[]
  pates_persillees?: string[]
  chevres?: string[]
  brebis?: string[]
  raclettes_fondues?: string[]
  specialites?: string[]
}

export interface Schedule {
  frequency: string
  time?: string
  booking: string
  groupSize: string
  privatization?: string
  duration?: string
  ageMin?: string
  private?: string
}

export interface Formula {
  name: string
  cheeses?: string
  servings?: string
  price: string
  description: string
  content?: string
  accompaniments?: string
  packaging?: string
  ideal?: string
  themes?: string[]
  options?: string[]
}

export interface Delivery {
  available: boolean
  zone: string
  cost: string
  schedule: string
  pickup: string
}

export interface Coffret {
  name: string
  content: string
  accompaniments: string
  packaging: string
  price: string
  ideal: string
  themes?: string[]
}

export interface Customization {
  message: string
  engraving?: string
  selection?: string
  corporate?: string
}

export interface Shipping {
  local: string
  national?: string
  europe?: string
  pickup: string
}

export interface ServiceOption {
  name: string
  description: string
  price: string
  ideal: string
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  service: string
  date: string
}

export interface Project {
  title: string
  description: string
  serviceType: string
  location: string
  imageBefore: string
  imageAfter: string
  metric: Metric
}

export interface Metric {
  label: string
  value: string
  description: string
}

export interface Stats {
  projectsCompleted: number
  yearsExperience: number | null
  satisfactionRate: number
  responseTime: string
  cheeseSelection: number
  eventsPerMonth: number
  workshopsPerMonth: number
}

export interface Team {
  description: string
  members: TeamMember[]
}

export interface TeamMember {
  name: string
  role: string
  experience: string
  certifications: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Warranties {
  freshness: string
  traceability: string
  satisfaction: string
  advice: string
  events: string
}

export interface Financing {
  available: boolean
  options: string[]
  giftCards: string
  loyalty: string
}

export interface SEO {
  keywords: string[]
  metaTitle: string
  metaDescription: string
  structuredData: StructuredData
}

export interface StructuredData {
  '@context': string
  '@type': string
  name: string
  image: string
  priceRange: string
  address: SchemaAddress
  telephone: string
  openingHours: string
  aggregateRating: AggregateRating
  servesCuisine: string
}

export interface SchemaAddress {
  '@type': string
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressCountry: string
}

export interface AggregateRating {
  '@type': string
  ratingValue: string
  reviewCount: string
}

export interface AdditionalServices {
  freeServices: string[]
  paidOptions: string[]
}

export interface Suppliers {
  france: string[]
  europe: string[]
  accompaniments: string[]
}

export interface Sustainability {
  commitments: string[]
  labels: string[]
}

export interface SiteData {
  business: Business
  branding: Branding
  services: Service[]
  testimonials: Testimonial[]
  projects: Project[]
  stats: Stats
  team: Team
  faq: FAQ[]
  certifications: string[]
  warranties: Warranties
  financing: Financing
  seo: SEO
  additionalServices: AdditionalServices
  suppliers: Suppliers
  sustainability: Sustainability
}

// Booking form types
export interface BookingFormData {
  eventType: string
  date: Date
  numberOfPeople: number
  timeSlot: string
  addOns: string[]
  firstName: string
  lastName: string
  email: string
  phone: string
  postalCode?: string
  message?: string
  gdprConsent: boolean
}

export interface CheeseCard {
  name: string
  family: string
  origin: string
  pricePerKg: number
  aromas: string[]
  image: string
  slug: string
}

export interface EventCard {
  name: string
  slug: string
  type: string
  duration: string
  groupSize: string
  pricePerPerson: number
  benefits: string[]
  image: string
}
