'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_DATA } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Ornament } from '@/components/ui/Ornament'
import {
  Users,
  Calendar,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone as PhoneIcon,
  User,
  MessageSquare,
  Clock,
  MapPin,
  Euro,
  PartyPopper,
} from 'lucide-react'

type BookingStep = 1 | 2 | 3 | 4

interface EventType {
  id: string
  name: string
  description: string
  price: number
  image: string
  icon: string
}

interface BookingData {
  eventType: string
  eventName: string
  date: string
  numberOfPeople: number
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  acceptTerms: boolean
}

const EVENT_TYPES: EventType[] = [
  {
    id: 'raclette',
    name: 'Soirée Raclette',
    description: 'Fromage fondu et convivialité à l\'état pur',
    price: 35,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2940',
    icon: '🧀',
  },
  {
    id: 'fondue',
    name: 'Soirée Fondue',
    description: 'L\'authentique expérience savoyarde',
    price: 38,
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=2940',
    icon: '🫕',
  },
  {
    id: 'tartiflette',
    name: 'Soirée Tartiflette',
    description: 'Le classique des Alpes revisité',
    price: 32,
    image: 'https://images.unsplash.com/photo-1619378082972-44bc0c30838f?q=80&w=2940',
    icon: '🥔',
  },
]

export default function ReserverPage() {
  const [currentStep, setCurrentStep] = useState<BookingStep>(1)
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({
    numberOfPeople: 4,
    acceptTerms: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Calculate total price
  useEffect(() => {
    if (bookingData.eventType && bookingData.numberOfPeople) {
      const event = EVENT_TYPES.find((e) => e.id === bookingData.eventType)
      if (event) {
        setTotalPrice(event.price * bookingData.numberOfPeople)
      }
    }
  }, [bookingData.eventType, bookingData.numberOfPeople])

  const handleNext = () => {
    if (currentStep < 4) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep((currentStep + 1) as BookingStep)
        setIsAnimating(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 300)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStep((currentStep - 1) as BookingStep)
        setIsAnimating(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 300)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Booking data:', bookingData)
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData({ ...bookingData, ...data })
  }

  const getMinDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  // Generate available dates (every 2 weeks)
  const getAvailableDates = () => {
    const dates = []
    const startDate = new Date()

    // Start from next Friday
    startDate.setDate(startDate.getDate() + ((5 - startDate.getDay() + 7) % 7 || 7))

    // Generate 6 dates (12 weeks = 3 months)
    for (let i = 0; i < 6; i++) {
      const date = new Date(startDate)
      date.setDate(startDate.getDate() + (i * 14)) // Every 2 weeks
      dates.push({
        date: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('fr-FR', { weekday: 'long' }),
        dayNumber: date.getDate(),
        month: date.toLocaleDateString('fr-FR', { month: 'long' }),
        year: date.getFullYear(),
      })
    }

    return dates
  }

  const availableDates = getAvailableDates()

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!bookingData.eventType
      case 2:
        return !!bookingData.date && !!bookingData.numberOfPeople
      case 3:
        return true // Step 3 has no required fields
      case 4:
        return (
          !!bookingData.firstName &&
          !!bookingData.lastName &&
          !!bookingData.email &&
          !!bookingData.phone &&
          !!bookingData.acceptTerms
        )
      default:
        return false
    }
  }

  // Success page
  if (isSubmitted) {
    const selectedEvent = EVENT_TYPES.find((e) => e.id === bookingData.eventType)

    return (
      <main className="min-h-screen bg-black">
        {/* Success Hero */}
        <section className="relative min-h-screen flex items-center justify-center py-32">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940"
              alt="Réservation confirmée"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Star ornament */}
              <div className="mb-8 flex justify-center">
                <svg className="w-12 h-12 text-accent-600 animate-pulse" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <CheckCircle2 className="w-24 h-24 mx-auto text-accent-600 mb-8" strokeWidth={1.5} />

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
                Réservation<br />Confirmée
              </h1>

              <p className="text-lg md:text-xl text-white font-light mb-12 max-w-2xl mx-auto">
                Un email de confirmation a été envoyé à{' '}
                <span className="text-accent-600">{bookingData.email}</span>
              </p>

              {/* Geometric ornament */}
              <div className="flex justify-center mb-12">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Booking summary */}
        <section className="py-32 bg-primary-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Ornament className="text-accent-600 mx-auto mb-6" />

              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6 text-center">
                Récapitulatif
              </p>

              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-12 leading-tight text-center">
                Votre Soirée<br />Gourmande
              </h2>

              <div className="bg-black/40 border border-accent-600/30 p-8 md:p-12 space-y-8">
                <div className="flex items-start gap-4 pb-8 border-b border-accent-600/20">
                  <div className="text-5xl">{selectedEvent?.icon}</div>
                  <div className="flex-1">
                    <div className="text-accent-600 tracking-[0.2em] text-xs font-light uppercase mb-2">
                      Événement
                    </div>
                    <div className="text-3xl md:text-4xl font-serif font-light text-white">
                      {bookingData.eventName}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent-600 mt-1" />
                    <div>
                      <div className="text-accent-600 text-xs tracking-[0.2em] uppercase mb-2 font-light">Date</div>
                      <div className="text-lg text-white font-light">
                        {new Date(bookingData.date + 'T00:00:00').toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent-600 mt-1" />
                    <div>
                      <div className="text-accent-600 text-xs tracking-[0.2em] uppercase mb-2 font-light">Convives</div>
                      <div className="text-lg text-white font-light">
                        {bookingData.numberOfPeople} personne{bookingData.numberOfPeople! > 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-accent-600 mt-1" />
                    <div>
                      <div className="text-accent-600 text-xs tracking-[0.2em] uppercase mb-2 font-light">Contact</div>
                      <div className="text-lg text-white font-light">
                        {bookingData.firstName} {bookingData.lastName}
                      </div>
                      <div className="text-sm text-primary-200 mt-1">{bookingData.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Euro className="w-5 h-5 text-accent-600 mt-1" />
                    <div>
                      <div className="text-accent-600 text-xs tracking-[0.2em] uppercase mb-2 font-light">Prix total</div>
                      <div className="text-lg text-white font-light">{totalPrice}€</div>
                      <div className="text-sm text-primary-200 mt-1">
                        {selectedEvent?.price}€ / personne
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/"
                  className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 text-center"
                >
                  Retour à l'Accueil
                </Link>
                <a
                  href={`tel:${SITE_DATA.business.contact.phone}`}
                  className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 text-center flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-4 h-4" />
                  Nous Appeler
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  // Booking form
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1530554764233-e79e16c91d08?q=80&w=2940"
            alt="Réserver une soirée - Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Expérience Gourmande
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Réservez Votre<br />Soirée Fromagère
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              Une expérience conviviale autour des meilleurs fromages artisanaux
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Progress bar */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6 relative">
                {/* Connection line */}
                <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-accent-600/20 -translate-y-1/2" />
                <div
                  className="absolute left-0 top-1/2 h-0.5 bg-accent-600 -translate-y-1/2 transition-all duration-500"
                  style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                />

                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-light text-lg transition-all duration-500 ${
                        step <= currentStep
                          ? 'bg-accent-600 text-black shadow-[0_0_20px_rgba(228,197,144,0.4)]'
                          : 'bg-black border border-accent-600/30 text-accent-600/50'
                      }`}
                    >
                      {step < currentStep ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        step
                      )}
                    </div>
                    <div
                      className={`hidden md:block absolute top-full mt-4 text-xs tracking-[0.2em] uppercase whitespace-nowrap transition-colors font-light ${
                        step <= currentStep ? 'text-accent-600' : 'text-primary-400'
                      }`}
                    >
                      {step === 1 && 'Type'}
                      {step === 2 && 'Date'}
                      {step === 3 && 'Message'}
                      {step === 4 && 'Contact'}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div
                className={`transition-opacity duration-300 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {/* Step 1: Choose Event Type */}
                {currentStep === 1 && (
                  <div className="space-y-12 animate-fade-in-up">
                    <div className="text-center">
                      <Ornament className="text-accent-600 mx-auto mb-6" />
                      <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-4">
                        Choisissez Votre<br />Expérience
                      </h2>
                      <p className="text-primary-200 font-light">
                        Trois soirées emblématiques de la tradition savoyarde
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                      {EVENT_TYPES.map((event) => (
                        <button
                          key={event.id}
                          type="button"
                          onClick={() => {
                            updateBookingData({ eventType: event.id, eventName: event.name })
                            setTimeout(handleNext, 300)
                          }}
                          className="group text-center"
                        >
                          {/* Star ornament */}
                          <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                            <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                              <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                              <circle cx="16" cy="16" r="2" fill="black"/>
                            </svg>
                          </div>

                          {/* Image */}
                          <div className="relative h-80 mb-8 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                            <Image
                              src={event.image}
                              alt={event.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                              <div className="text-white/90 text-sm font-light text-center">
                                <p>{event.description}</p>
                              </div>
                            </div>
                            {/* Glow border */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                              <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                            </div>
                          </div>

                          {/* Geometric ornament */}
                          <div className="mb-8 flex justify-center">
                            <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                              <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                              <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                            </svg>
                          </div>

                          <h3 className="text-3xl font-serif font-light text-white mb-4 group-hover:text-accent-600 transition-colors duration-300">
                            {event.name}
                          </h3>

                          <div className="text-2xl text-accent-600 font-light mb-6">
                            {event.price}€ <span className="text-sm text-primary-400">/ personne</span>
                          </div>

                          <div className="px-10 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase group-hover:bg-accent-600 group-hover:text-black transition-all duration-500">
                            Sélectionner
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Number of People */}
                {currentStep === 2 && (
                  <div className="space-y-12 animate-fade-in-up">
                    <div className="text-center">
                      <Ornament className="text-accent-600 mx-auto mb-6" />
                      <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-4">
                        Planifions<br />Votre Soirée
                      </h2>
                      <p className="text-primary-200 font-light">
                        Choisissez la date et le nombre de convives
                      </p>
                    </div>

                    {/* Date selection */}
                    <div className="bg-black/40 border border-accent-600/30 p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-8">
                        <Calendar className="w-6 h-6 text-accent-600" />
                        <h3 className="text-xl font-serif font-light text-white">
                          Date disponible
                        </h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {availableDates.map((availableDate) => (
                          <button
                            key={availableDate.date}
                            type="button"
                            onClick={() => updateBookingData({ date: availableDate.date })}
                            className={`group text-left p-6 border transition-all duration-500 ${
                              bookingData.date === availableDate.date
                                ? 'border-accent-600 bg-accent-600/10 shadow-[0_0_20px_rgba(228,197,144,0.2)]'
                                : 'border-accent-600/30 hover:border-accent-600/60'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`flex-shrink-0 w-16 h-16 flex flex-col items-center justify-center font-light transition-colors ${
                                bookingData.date === availableDate.date
                                  ? 'bg-accent-600 text-black'
                                  : 'bg-black/60 text-accent-600 border border-accent-600/30'
                              }`}>
                                <div className="text-2xl">{availableDate.dayNumber}</div>
                                <div className="text-xs uppercase tracking-wider">{availableDate.month.substring(0, 3)}</div>
                              </div>

                              <div className="flex-1">
                                <div className={`text-lg font-light capitalize mb-1 ${
                                  bookingData.date === availableDate.date
                                    ? 'text-accent-600'
                                    : 'text-white'
                                }`}>
                                  {availableDate.dayName}
                                </div>
                                <div className="text-sm text-primary-300 font-light">
                                  {availableDate.dayNumber} {availableDate.month} {availableDate.year}
                                </div>
                                <div className="text-xs text-primary-400 mt-1 flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  19h00
                                </div>
                              </div>

                              {bookingData.date === availableDate.date && (
                                <CheckCircle2 className="w-6 h-6 text-accent-600 flex-shrink-0" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Number of people */}
                    <div className="bg-black/40 border border-accent-600/30 p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-8">
                        <Users className="w-6 h-6 text-accent-600" />
                        <h3 className="text-xl font-serif font-light text-white">
                          Nombre de convives
                        </h3>
                      </div>

                      <div className="flex items-center justify-center gap-6 md:gap-8">
                        <button
                          type="button"
                          onClick={() =>
                            updateBookingData({
                              numberOfPeople: Math.max(2, (bookingData.numberOfPeople || 4) - 1),
                            })
                          }
                          className="w-14 h-14 md:w-16 md:h-16 border border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-black flex items-center justify-center font-light text-2xl md:text-3xl transition-all duration-500"
                        >
                          −
                        </button>

                        <div className="text-center min-w-[140px]">
                          <div className="text-6xl md:text-7xl font-serif font-light text-accent-600 mb-2">
                            {bookingData.numberOfPeople || 4}
                          </div>
                          <div className="text-sm md:text-base text-primary-300 font-light tracking-wider uppercase">
                            personne{(bookingData.numberOfPeople || 4) > 1 ? 's' : ''}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            updateBookingData({
                              numberOfPeople: Math.min(40, (bookingData.numberOfPeople || 4) + 1),
                            })
                          }
                          className="w-14 h-14 md:w-16 md:h-16 border border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-black flex items-center justify-center font-light text-2xl md:text-3xl transition-all duration-500"
                        >
                          +
                        </button>
                      </div>

                      {/* Price preview */}
                      {bookingData.eventType && (
                        <div className="mt-12 pt-8 border-t border-accent-600/20">
                          <div className="flex items-center justify-between">
                            <span className="text-primary-200 font-light tracking-wider uppercase text-sm">Prix estimé</span>
                            <div className="text-right">
                              <div className="text-4xl font-serif font-light text-accent-600">{totalPrice}€</div>
                              <div className="text-sm text-primary-400 font-light">
                                {EVENT_TYPES.find((e) => e.id === bookingData.eventType)?.price}€ × {bookingData.numberOfPeople}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Additional Message */}
                {currentStep === 3 && (
                  <div className="space-y-12 animate-fade-in-up">
                    <div className="text-center">
                      <Ornament className="text-accent-600 mx-auto mb-6" />
                      <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-4">
                        Un Message<br />Particulier ?
                      </h2>
                      <p className="text-primary-200 font-light">
                        Partagez vos envies, allergies ou occasions spéciales
                      </p>
                    </div>

                    <div className="bg-black/40 border border-accent-600/30 p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-6">
                        <MessageSquare className="w-6 h-6 text-accent-600" />
                        <label className="text-xl font-serif font-light text-white">
                          Message (optionnel)
                        </label>
                      </div>
                      <textarea
                        value={bookingData.message || ''}
                        onChange={(e) => updateBookingData({ message: e.target.value })}
                        rows={6}
                        placeholder="Exemple : Nous célébrons un anniversaire, mon ami est végétarien..."
                        className="w-full px-6 py-5 text-base bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all resize-none font-light"
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Information */}
                {currentStep === 4 && (
                  <div className="space-y-12 animate-fade-in-up">
                    <div className="text-center">
                      <Ornament className="text-accent-600 mx-auto mb-6" />
                      <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-4">
                        Vos<br />Coordonnées
                      </h2>
                      <p className="text-primary-200 font-light">
                        Dernière étape pour confirmer votre réservation
                      </p>
                    </div>

                    <div className="bg-black/40 border border-accent-600/30 p-8 md:p-12 space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm text-accent-600 tracking-[0.2em] uppercase mb-3 font-light flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Prénom *
                          </label>
                          <input
                            type="text"
                            required
                            value={bookingData.firstName || ''}
                            onChange={(e) => updateBookingData({ firstName: e.target.value })}
                            className="w-full px-6 py-4 text-base bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                            placeholder="Jean"
                          />
                        </div>
                        <div>
                          <label className="block text-sm text-accent-600 tracking-[0.2em] uppercase mb-3 font-light flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Nom *
                          </label>
                          <input
                            type="text"
                            required
                            value={bookingData.lastName || ''}
                            onChange={(e) => updateBookingData({ lastName: e.target.value })}
                            className="w-full px-6 py-4 text-base bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                            placeholder="Dupont"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-accent-600 tracking-[0.2em] uppercase mb-3 font-light flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={bookingData.email || ''}
                          onChange={(e) => updateBookingData({ email: e.target.value })}
                          className="w-full px-6 py-4 text-base bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                          placeholder="jean.dupont@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-accent-600 tracking-[0.2em] uppercase mb-3 font-light flex items-center gap-2">
                          <PhoneIcon className="w-4 h-4" />
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingData.phone || ''}
                          onChange={(e) => updateBookingData({ phone: e.target.value })}
                          className="w-full px-6 py-4 text-base bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                          placeholder="+352 621 234 567"
                        />
                      </div>

                      <div className="pt-6">
                        <label className="flex items-start gap-4 cursor-pointer group">
                          <input
                            type="checkbox"
                            required
                            checked={bookingData.acceptTerms || false}
                            onChange={(e) => updateBookingData({ acceptTerms: e.target.checked })}
                            className="w-6 h-6 mt-0.5 accent-accent-600 border-accent-600/30"
                          />
                          <span className="text-sm text-primary-200 font-light leading-relaxed">
                            J'accepte les{' '}
                            <Link href="/mentions-legales" className="text-accent-600 hover:underline">
                              conditions générales
                            </Link>{' '}
                            et la{' '}
                            <Link href="/politique-confidentialite" className="text-accent-600 hover:underline">
                              politique de confidentialité
                            </Link>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation buttons */}
              <div className="flex flex-col-reverse sm:flex-row justify-between gap-6 mt-16 pt-8 border-t border-accent-600/20">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Retour</span>
                  </button>
                )}

                <div className={`${currentStep === 1 ? 'w-full sm:ml-auto sm:w-auto' : 'w-full sm:w-auto'}`}>
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className="w-full px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>Continuer</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!isStepValid()}
                      className="w-full px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Confirmer</span>
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
