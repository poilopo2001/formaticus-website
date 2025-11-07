'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_DATA } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
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
    image: '/images/raclette.jpg',
    icon: '🧀',
  },
  {
    id: 'fondue',
    name: 'Soirée Fondue',
    description: 'L\'authentique expérience savoyarde',
    price: 38,
    image: '/images/fondue.jpg',
    icon: '🫕',
  },
  {
    id: 'tartiflette',
    name: 'Soirée Tartiflette',
    description: 'Le classique des Alpes revisité',
    price: 32,
    image: '/images/tartiflette.jpg',
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
      <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success animation */}
            <div className="text-center mb-12 animate-scale-in">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-accent-600 rounded-full animate-ping opacity-25"></div>
                <CheckCircle2 className="relative w-24 h-24 mx-auto text-accent-600" strokeWidth={1.5} />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-4">
                Réservation Confirmée !
              </h1>
              <p className="text-xl text-primary-700 max-w-2xl mx-auto">
                Merci pour votre confiance. Un email de confirmation a été envoyé à{' '}
                <span className="font-semibold text-accent-700">{bookingData.email}</span>
              </p>
            </div>

            {/* Booking summary card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 border border-primary-100">
              <div className="bg-gradient-to-r from-accent-600 to-accent-700 p-6 text-primary-900">
                <div className="flex items-center gap-3 mb-2">
                  <PartyPopper className="w-6 h-6" />
                  <h2 className="text-2xl font-serif font-bold">Récapitulatif de votre soirée</h2>
                </div>
                <p className="text-primary-800">Votre expérience gourmande vous attend</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-primary-100">
                  <div className="text-4xl">{selectedEvent?.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-accent-700 uppercase tracking-wider mb-1">
                      Événement
                    </div>
                    <div className="text-2xl font-serif font-bold text-primary-900">
                      {bookingData.eventName}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-accent-600 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-primary-600 mb-1">Date</div>
                      <div className="text-lg font-semibold text-primary-900">
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
                      <div className="text-sm font-semibold text-primary-600 mb-1">Convives</div>
                      <div className="text-lg font-semibold text-primary-900">
                        {bookingData.numberOfPeople} personne{bookingData.numberOfPeople! > 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-accent-600 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-primary-600 mb-1">Contact</div>
                      <div className="text-lg font-semibold text-primary-900">
                        {bookingData.firstName} {bookingData.lastName}
                      </div>
                      <div className="text-sm text-primary-600 mt-1">{bookingData.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Euro className="w-5 h-5 text-accent-600 mt-1" />
                    <div>
                      <div className="text-sm font-semibold text-primary-600 mb-1">Prix total</div>
                      <div className="text-lg font-semibold text-primary-900">{totalPrice}€</div>
                      <div className="text-sm text-primary-600 mt-1">
                        {selectedEvent?.price}€ / personne
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important info */}
            <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-xl p-6 mb-8 border border-accent-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-900" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary-900 mb-2">Informations importantes</h3>
                  <ul className="space-y-2 text-sm text-primary-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-700 flex-shrink-0" />
                      <span>Un acompte de 30% ({Math.round(totalPrice * 0.3)}€) vous sera demandé pour confirmer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-700 flex-shrink-0" />
                      <span>Annulation gratuite jusqu'à 72h avant l'événement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-accent-700 flex-shrink-0" />
                      <span>Notre équipe vous contactera sous 24h pour finaliser les détails</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Retour à l'Accueil
                </Button>
              </Link>
              <a href={`tel:${SITE_DATA.business.contact.phone}`}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" />
                  Nous Appeler
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // Booking form
  return (
    <main className="min-h-screen pt-32 pb-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-900 mb-4">
              Réservez Votre Soirée Gourmande
            </h1>
            <p className="text-lg md:text-xl text-primary-700 max-w-2xl mx-auto">
              Une expérience conviviale autour des meilleurs fromages
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 relative">
              {/* Connection line */}
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-primary-200 -translate-y-1/2" />
              <div
                className="absolute left-0 top-1/2 h-1 bg-accent-600 -translate-y-1/2 transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />

              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                      step <= currentStep
                        ? 'bg-accent-600 text-primary-900 shadow-lg scale-110'
                        : 'bg-white text-primary-400 border-2 border-primary-200'
                    }`}
                  >
                    {step < currentStep ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      step
                    )}
                  </div>
                  <div
                    className={`hidden md:block absolute top-full mt-3 text-xs md:text-sm font-medium whitespace-nowrap transition-colors ${
                      step <= currentStep ? 'text-accent-700' : 'text-primary-400'
                    }`}
                  >
                    {step === 1 && 'Type de soirée'}
                    {step === 2 && 'Date & Convives'}
                    {step === 3 && 'Message'}
                    {step === 4 && 'Coordonnées'}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile step labels */}
            <div className="md:hidden text-center mt-8">
              <p className="text-sm font-medium text-accent-700">
                {currentStep === 1 && 'Type de soirée'}
                {currentStep === 2 && 'Date & Convives'}
                {currentStep === 3 && 'Message (optionnel)'}
                {currentStep === 4 && 'Vos coordonnées'}
              </p>
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
                <div className="space-y-6 animate-fade-in-up">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-3">
                      Quelle soirée souhaitez-vous vivre ?
                    </h2>
                    <p className="text-primary-600">
                      Choisissez l'expérience fromagère qui vous fait rêver
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {EVENT_TYPES.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => {
                          updateBookingData({ eventType: event.id, eventName: event.name })
                          setTimeout(handleNext, 300)
                        }}
                        className={`group relative text-left bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
                          bookingData.eventType === event.id
                            ? 'border-accent-600 ring-4 ring-accent-200'
                            : 'border-transparent'
                        }`}
                      >
                        {/* Image placeholder */}
                        <div className="relative h-48 bg-gradient-to-br from-accent-100 to-accent-200 flex items-center justify-center overflow-hidden">
                          <div className="text-7xl group-hover:scale-110 transition-transform duration-300">
                            {event.icon}
                          </div>
                          {bookingData.eventType === event.id && (
                            <div className="absolute top-4 right-4">
                              <CheckCircle2 className="w-8 h-8 text-accent-600 bg-white rounded-full" />
                            </div>
                          )}
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-serif font-bold text-primary-900 mb-2 group-hover:text-accent-700 transition-colors">
                            {event.name}
                          </h3>
                          <p className="text-sm text-primary-600 mb-4 line-clamp-2">
                            {event.description}
                          </p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-accent-600">{event.price}€</span>
                            <span className="text-sm text-primary-500">/ personne</span>
                          </div>
                        </div>

                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-accent-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Number of People */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-3">
                      Planifions votre soirée
                    </h2>
                    <p className="text-primary-600">
                      Choisissez la date et le nombre de convives
                    </p>
                  </div>

                  {/* Date selection */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary-100">
                    <div className="flex items-center gap-3 mb-6">
                      <Calendar className="w-6 h-6 text-accent-600" />
                      <label className="text-lg font-bold text-primary-900">
                        Choisissez une date <span className="text-accent-600">*</span>
                      </label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {availableDates.map((availableDate) => (
                        <button
                          key={availableDate.date}
                          type="button"
                          onClick={() => updateBookingData({ date: availableDate.date })}
                          className={`group relative text-left p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                            bookingData.date === availableDate.date
                              ? 'border-accent-600 bg-gradient-to-br from-accent-50 to-accent-100 shadow-md'
                              : 'border-primary-200 bg-white hover:border-accent-300'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            {/* Date number */}
                            <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex flex-col items-center justify-center font-bold transition-colors ${
                              bookingData.date === availableDate.date
                                ? 'bg-accent-600 text-primary-900'
                                : 'bg-primary-100 text-primary-900 group-hover:bg-accent-100'
                            }`}>
                              <div className="text-2xl">{availableDate.dayNumber}</div>
                              <div className="text-xs uppercase">{availableDate.month.substring(0, 3)}</div>
                            </div>

                            {/* Date info */}
                            <div className="flex-1">
                              <div className={`text-lg font-bold capitalize mb-1 ${
                                bookingData.date === availableDate.date
                                  ? 'text-accent-700'
                                  : 'text-primary-900'
                              }`}>
                                {availableDate.dayName}
                              </div>
                              <div className="text-sm text-primary-600">
                                {availableDate.dayNumber} {availableDate.month} {availableDate.year}
                              </div>
                              <div className="text-xs text-primary-500 mt-1 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                19h00
                              </div>
                            </div>

                            {/* Checkmark */}
                            {bookingData.date === availableDate.date && (
                              <CheckCircle2 className="w-6 h-6 text-accent-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    <p className="mt-4 text-sm text-primary-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Nouvelles dates disponibles toutes les 2 semaines
                    </p>
                  </div>

                  {/* Number of people */}
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-6 h-6 text-accent-600" />
                      <label className="text-lg font-bold text-primary-900">
                        Nombre de convives <span className="text-accent-600">*</span>
                      </label>
                    </div>
                    <div className="flex items-center justify-center gap-4 md:gap-6">
                      <button
                        type="button"
                        onClick={() =>
                          updateBookingData({
                            numberOfPeople: Math.max(2, (bookingData.numberOfPeople || 4) - 1),
                          })
                        }
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 hover:from-accent-100 hover:to-accent-200 flex items-center justify-center text-primary-900 font-bold text-2xl md:text-3xl transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        −
                      </button>
                      <div className="text-center min-w-[120px]">
                        <div className="text-5xl md:text-6xl font-bold text-accent-600 mb-2">
                          {bookingData.numberOfPeople || 4}
                        </div>
                        <div className="text-sm md:text-base text-primary-600 font-medium">
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
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 hover:from-accent-100 hover:to-accent-200 flex items-center justify-center text-primary-900 font-bold text-2xl md:text-3xl transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        +
                      </button>
                    </div>
                    <p className="mt-6 text-sm text-center text-primary-500">
                      Minimum 2 personnes • Maximum 40 personnes
                    </p>

                    {/* Price preview */}
                    {bookingData.eventType && (
                      <div className="mt-6 pt-6 border-t border-primary-100">
                        <div className="flex items-center justify-between">
                          <span className="text-primary-700 font-medium">Prix estimé</span>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-accent-600">{totalPrice}€</div>
                            <div className="text-sm text-primary-500">
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
                <div className="space-y-6 animate-fade-in-up">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-3">
                      Un message particulier ?
                    </h2>
                    <p className="text-primary-600">
                      Partagez-nous vos envies, allergies ou occasions spéciales
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary-100">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare className="w-6 h-6 text-accent-600" />
                      <label className="text-lg font-bold text-primary-900">
                        Message (optionnel)
                      </label>
                    </div>
                    <textarea
                      value={bookingData.message || ''}
                      onChange={(e) => updateBookingData({ message: e.target.value })}
                      rows={6}
                      placeholder="Exemple : Nous célébrons un anniversaire, mon ami est végétarien, j'aimerais un fromage moins fort..."
                      className="w-full px-4 md:px-6 py-4 md:py-5 text-base md:text-lg border-2 border-primary-200 rounded-xl focus:border-accent-600 focus:ring-4 focus:ring-accent-100 focus:outline-none transition-all resize-none"
                    />
                    <p className="mt-3 text-sm text-primary-500">
                      Ces informations nous aident à personnaliser votre expérience
                    </p>
                  </div>

                  {/* Quick suggestions */}
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 border border-accent-200">
                    <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                      <PartyPopper className="w-5 h-5 text-accent-600" />
                      Suggestions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Occasion spéciale',
                        'Allergies alimentaires',
                        'Préférences végétariennes',
                        'Fromages doux uniquement',
                        'Anniversaire',
                      ].map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => {
                            const current = bookingData.message || ''
                            const newMessage = current ? `${current}\n${suggestion}` : suggestion
                            updateBookingData({ message: newMessage })
                          }}
                          className="px-4 py-2 bg-white hover:bg-accent-200 text-primary-700 text-sm rounded-full border border-accent-300 transition-colors"
                        >
                          + {suggestion}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in-up">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-900 mb-3">
                      Vos coordonnées
                    </h2>
                    <p className="text-primary-600">
                      Dernière étape pour confirmer votre réservation
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary-100 space-y-6">
                    {/* Name fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-2 flex items-center gap-2">
                          <User className="w-4 h-4 text-accent-600" />
                          Prénom <span className="text-accent-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.firstName || ''}
                          onChange={(e) => updateBookingData({ firstName: e.target.value })}
                          className="w-full px-4 py-4 text-base border-2 border-primary-200 rounded-xl focus:border-accent-600 focus:ring-4 focus:ring-accent-100 focus:outline-none transition-all"
                          placeholder="Jean"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary-900 mb-2 flex items-center gap-2">
                          <User className="w-4 h-4 text-accent-600" />
                          Nom <span className="text-accent-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingData.lastName || ''}
                          onChange={(e) => updateBookingData({ lastName: e.target.value })}
                          className="w-full px-4 py-4 text-base border-2 border-primary-200 rounded-xl focus:border-accent-600 focus:ring-4 focus:ring-accent-100 focus:outline-none transition-all"
                          placeholder="Dupont"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-bold text-primary-900 mb-2 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-accent-600" />
                        Email <span className="text-accent-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={bookingData.email || ''}
                        onChange={(e) => updateBookingData({ email: e.target.value })}
                        className="w-full px-4 py-4 text-base border-2 border-primary-200 rounded-xl focus:border-accent-600 focus:ring-4 focus:ring-accent-100 focus:outline-none transition-all"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-bold text-primary-900 mb-2 flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-accent-600" />
                        Téléphone <span className="text-accent-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={bookingData.phone || ''}
                        onChange={(e) => updateBookingData({ phone: e.target.value })}
                        className="w-full px-4 py-4 text-base border-2 border-primary-200 rounded-xl focus:border-accent-600 focus:ring-4 focus:ring-accent-100 focus:outline-none transition-all"
                        placeholder="+352 621 234 567"
                      />
                    </div>

                    {/* Terms */}
                    <div className="pt-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          required
                          checked={bookingData.acceptTerms || false}
                          onChange={(e) => updateBookingData({ acceptTerms: e.target.checked })}
                          className="w-6 h-6 mt-0.5 text-accent-600 rounded-md focus:ring-accent-600 focus:ring-2 border-2 border-primary-300 transition-all"
                        />
                        <span className="text-sm text-primary-700 leading-relaxed">
                          J'accepte les{' '}
                          <Link href="/mentions-legales" className="text-accent-700 hover:underline font-semibold">
                            conditions générales
                          </Link>{' '}
                          et la{' '}
                          <Link href="/politique-confidentialite" className="text-accent-700 hover:underline font-semibold">
                            politique de confidentialité
                          </Link>{' '}
                          <span className="text-accent-600">*</span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Important info */}
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 border border-accent-200">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-accent-600 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-primary-900" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-primary-900 mb-2">Avant de confirmer</h3>
                        <ul className="space-y-2 text-sm text-primary-800">
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span>Un acompte de 30% sera demandé pour valider votre réservation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span>Annulation gratuite jusqu'à 72h avant l'événement</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-accent-600 font-bold">•</span>
                            <span>Vous recevrez une confirmation par email et SMS</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 mt-8 pt-8 border-t border-primary-200">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 min-h-[56px]"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Retour</span>
                </Button>
              )}

              <div className={`${currentStep === 1 ? 'w-full sm:ml-auto sm:w-auto' : 'w-full sm:w-auto'}`}>
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="w-full flex items-center justify-center gap-2 min-h-[56px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Continuer</span>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={!isStepValid()}
                    className="w-full flex items-center justify-center gap-2 min-h-[56px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Confirmer la Réservation</span>
                  </Button>
                )}
              </div>
            </div>
          </form>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-primary-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <div className="font-bold text-primary-900">Paiement Sécurisé</div>
                  <div className="text-sm text-primary-600">Protection de vos données</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <div className="font-bold text-primary-900">Confirmation Rapide</div>
                  <div className="text-sm text-primary-600">Réponse sous 24h</div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <div className="font-bold text-primary-900">Support Disponible</div>
                  <div className="text-sm text-primary-600">
                    <a href={`tel:${SITE_DATA.business.contact.phone}`} className="text-accent-600 hover:underline">
                      {SITE_DATA.business.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
