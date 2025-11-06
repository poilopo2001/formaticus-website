import { type ClassValue, clsx } from 'clsx'

/**
 * Utility function to merge class names
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs)
}

/**
 * Format price in euros
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-LU', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price)
}

/**
 * Format date in French format
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj)
}

/**
 * Generate slug from string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

/**
 * Calculate number of cheeses needed per person
 */
export function calculateCheeseQuantity(numberOfPeople: number, cheeseCount: number = 5): string {
  // Formule fromagère : environ 50-80g par fromage par personne
  const gramsPerCheese = 60
  const totalGrams = numberOfPeople * gramsPerCheese * cheeseCount
  const totalKg = (totalGrams / 1000).toFixed(1)

  return `${totalKg} kg`
}

/**
 * Get cheese family display name
 */
export function getCheeseFamilyName(family: string): string {
  const families: Record<string, string> = {
    'pates_molles': 'Pâte Molle',
    'pates_pressees': 'Pâte Pressée',
    'pates_persillees': 'Pâte Persillée',
    'chevres': 'Chèvre',
    'brebis': 'Brebis',
    'raclettes_fondues': 'Raclette/Fondue',
    'specialites': 'Spécialité',
  }

  return families[family] || family
}

/**
 * Get event type badge color
 */
export function getEventTypeBadge(type: string): { bg: string; text: string } {
  const types: Record<string, { bg: string; text: string }> = {
    'soiree': { bg: 'bg-accent-100', text: 'text-accent-800' },
    'atelier': { bg: 'bg-primary-100', text: 'text-primary-800' },
    'cours': { bg: 'bg-amber-100', text: 'text-amber-800' },
  }

  return types[type.toLowerCase()] || { bg: 'bg-gray-100', text: 'text-gray-800' }
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone format (Luxembourg)
 */
export function isValidPhone(phone: string): boolean {
  // Format Luxembourg : +352 XX XX XX XX ou +352 6XX XXX XXX
  const phoneRegex = /^\+352\s?\d{2,3}\s?\d{3}\s?\d{3}$/
  return phoneRegex.test(phone.replace(/\s+/g, ' '))
}

/**
 * Format phone number for display
 */
export function formatPhoneDisplay(phone: string): string {
  // Remove all non-digit characters except +
  const cleaned = phone.replace(/[^\d+]/g, '')

  // Format as +352 XX XX XX XX
  if (cleaned.startsWith('+352')) {
    const number = cleaned.substring(4)
    if (number.length === 8) {
      return `+352 ${number.substring(0, 2)} ${number.substring(2, 4)} ${number.substring(4, 6)} ${number.substring(6, 8)}`
    } else if (number.length === 9) {
      // Mobile format +352 6XX XXX XXX
      return `+352 ${number.substring(0, 3)} ${number.substring(3, 6)} ${number.substring(6, 9)}`
    }
  }

  return phone
}

/**
 * Get initials from name
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

/**
 * Calculate rating percentage
 */
export function getRatingPercentage(rating: number, maxRating: number = 5): number {
  return (rating / maxRating) * 100
}

/**
 * Get time slots for booking
 */
export function getTimeSlots(): string[] {
  return ['19h00', '20h30']
}

/**
 * Check if date is available for booking (example logic)
 */
export function isDateAvailable(date: Date): boolean {
  const dayOfWeek = date.getDay()
  // Fromagerie fermée le lundi (0 = dimanche, 1 = lundi)
  if (dayOfWeek === 1) return false

  // Check if date is in the past
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  if (date < today) return false

  return true
}

/**
 * Get available dates for next 30 days
 */
export function getAvailableDates(): Date[] {
  const dates: Date[] = []
  const today = new Date()

  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() + i)

    if (isDateAvailable(date)) {
      dates.push(date)
    }
  }

  return dates
}

/**
 * Calculate deposit amount (30% for events)
 */
export function calculateDeposit(totalPrice: number): number {
  return Math.round(totalPrice * 0.3)
}

/**
 * Format duration string
 */
export function formatDuration(duration: string): string {
  return duration
    .replace('h', 'h')
    .replace('min', ' min')
}

/**
 * Get SEO-friendly image alt text
 */
export function getImageAlt(context: string, subject: string): string {
  return `${subject} - Formaticus Fromagerie Artisanale Luxembourg`
}
