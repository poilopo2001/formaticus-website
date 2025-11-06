'use client'

import { useState } from 'react'
import { SITE_DATA } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import {
  Users,
  Clock,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone as PhoneIcon,
  User,
  MessageSquare,
} from 'lucide-react'

type BookingStep = 1 | 2 | 3 | 4

interface BookingData {
  eventSlug: string
  eventName: string
  date: string
  time: string
  numberOfPeople: number
  specialRequests: string
  addOns: string[]
  firstName: string
  lastName: string
  email: string
  phone: string
  postalCode: string
  message: string
  acceptTerms: boolean
}

export default function ReserverPage() {
  const [currentStep, setCurrentStep] = useState<BookingStep>(1)
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({
    numberOfPeople: 2,
    addOns: [],
    acceptTerms: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const events = SITE_DATA.services.filter(s => s.featured)

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as BookingStep)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as BookingStep)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous intégreriez avec votre API backend
    console.log('Booking data:', bookingData)
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData({ ...bookingData, ...data })
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle2 className="w-24 h-24 mx-auto text-accent-600 mb-6" />
              <h1 className="text-4xl font-bold text-primary-900 mb-4">
                Réservation Confirmée !
              </h1>
              <p className="text-xl text-primary-700 mb-8">
                Vous allez recevoir un email de confirmation avec tous les détails à{' '}
                <span className="font-semibold text-accent-700">{bookingData.email}</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg mb-8 text-left">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Récapitulatif de votre réservation
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-primary-200 pb-3">
                  <span className="text-primary-700">Événement</span>
                  <span className="font-semibold text-primary-900">{bookingData.eventName}</span>
                </div>
                <div className="flex justify-between border-b border-primary-200 pb-3">
                  <span className="text-primary-700">Date</span>
                  <span className="font-semibold text-primary-900">{bookingData.date}</span>
                </div>
                <div className="flex justify-between border-b border-primary-200 pb-3">
                  <span className="text-primary-700">Heure</span>
                  <span className="font-semibold text-primary-900">{bookingData.time}</span>
                </div>
                <div className="flex justify-between border-b border-primary-200 pb-3">
                  <span className="text-primary-700">Nombre de personnes</span>
                  <span className="font-semibold text-primary-900">{bookingData.numberOfPeople}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">Contact</span>
                  <span className="font-semibold text-primary-900">
                    {bookingData.firstName} {bookingData.lastName}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-accent-50 rounded-xl p-6 mb-8">
              <p className="text-primary-900 mb-2">
                <strong>Important :</strong> Un acompte de 30% vous sera demandé pour confirmer votre réservation.
              </p>
              <p className="text-primary-700">
                Annulation gratuite jusqu'à 72h avant l'événement.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" onClick={() => window.location.href = '/'}>
                Retour à l'Accueil
              </Button>
              <a href={`tel:${SITE_DATA.business.contact.phone}`}>
                <Button variant="outline" size="lg">
                  Nous Appeler
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Réservez Votre Expérience
          </h1>

          {/* Progress bar */}
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step <= currentStep
                        ? 'bg-accent-600 text-primary-900'
                        : 'bg-primary-700 text-primary-300'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step < currentStep ? 'bg-accent-600' : 'bg-primary-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm">
              <span className={currentStep >= 1 ? 'text-accent-400' : 'text-primary-300'}>
                Événement
              </span>
              <span className={currentStep >= 2 ? 'text-accent-400' : 'text-primary-300'}>
                Date & Personnes
              </span>
              <span className={currentStep >= 3 ? 'text-accent-400' : 'text-primary-300'}>
                Options
              </span>
              <span className={currentStep >= 4 ? 'text-accent-400' : 'text-primary-300'}>
                Coordonnées
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Choose Event */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  Choisissez Votre Événement
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {events.map((event) => (
                    <button
                      key={event.slug}
                      type="button"
                      onClick={() => {
                        updateBookingData({ eventSlug: event.slug, eventName: event.name })
                        handleNext()
                      }}
                      className={`text-left bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border-2 ${
                        bookingData.eventSlug === event.slug
                          ? 'border-accent-600'
                          : 'border-transparent'
                      }`}
                    >
                      <h3 className="text-xl font-bold text-primary-900 mb-3">{event.name}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-primary-700">
                          <Clock className="w-4 h-4 text-accent-600" />
                          <span className="text-sm">{event.estimatedDuration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary-700">
                          <Users className="w-4 h-4 text-accent-600" />
                          <span className="text-sm">{event.schedule?.groupSize || '8-40 personnes'}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-accent-600">
                        {event.pricePerPerson?.split('-')[0] || `€${event.priceMin}`}
                      </div>
                      <div className="text-sm text-primary-600">par personne</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Number of People */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  Date & Nombre de Personnes
                </h2>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <label className="block text-lg font-semibold text-primary-900 mb-4">
                    Choisissez une date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.date || ''}
                    onChange={(e) => updateBookingData({ date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                  />
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <label className="block text-lg font-semibold text-primary-900 mb-4">
                    Nombre de personnes * (min. 2, max. 40)
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        updateBookingData({
                          numberOfPeople: Math.max(2, (bookingData.numberOfPeople || 2) - 1),
                        })
                      }
                      className="w-12 h-12 rounded-full bg-primary-100 hover:bg-primary-200 flex items-center justify-center text-primary-900 font-bold text-xl transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      required
                      min="2"
                      max="40"
                      value={bookingData.numberOfPeople || 2}
                      onChange={(e) =>
                        updateBookingData({ numberOfPeople: parseInt(e.target.value) })
                      }
                      className="w-24 text-center text-2xl font-bold text-primary-900 px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        updateBookingData({
                          numberOfPeople: Math.min(40, (bookingData.numberOfPeople || 2) + 1),
                        })
                      }
                      className="w-12 h-12 rounded-full bg-primary-100 hover:bg-primary-200 flex items-center justify-center text-primary-900 font-bold text-xl transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <label className="block text-lg font-semibold text-primary-900 mb-4">
                    Demandes spéciales (optionnel)
                  </label>
                  <textarea
                    value={bookingData.specialRequests || ''}
                    onChange={(e) => updateBookingData({ specialRequests: e.target.value })}
                    rows={4}
                    placeholder="Régime alimentaire, allergies, occasion spéciale..."
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Time & Add-ons */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  Horaire & Options
                </h2>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <label className="block text-lg font-semibold text-primary-900 mb-4">
                    Choisissez l'horaire *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['18h30', '19h00', '19h30', '20h00'].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => updateBookingData({ time })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          bookingData.time === time
                            ? 'bg-accent-600 text-primary-900'
                            : 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">
                    Options supplémentaires
                  </h3>
                  <div className="space-y-3">
                    {[
                      { id: 'boissons', label: 'Ajouter des boissons (vins, bières)', price: '+15€/pers' },
                      { id: 'plateau', label: 'Plateau de fromages à emporter', price: '+25€' },
                      { id: 'cadeau', label: 'Bon cadeau pour un invité', price: 'Gratuit' },
                    ].map((addon) => (
                      <label
                        key={addon.id}
                        className="flex items-center gap-3 p-4 rounded-lg hover:bg-primary-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={bookingData.addOns?.includes(addon.id)}
                          onChange={(e) => {
                            const currentAddOns = bookingData.addOns || []
                            if (e.target.checked) {
                              updateBookingData({ addOns: [...currentAddOns, addon.id] })
                            } else {
                              updateBookingData({
                                addOns: currentAddOns.filter((id) => id !== addon.id),
                              })
                            }
                          }}
                          className="w-5 h-5 text-accent-600 rounded focus:ring-accent-600"
                        />
                        <span className="flex-1 text-primary-900">{addon.label}</span>
                        <span className="font-semibold text-accent-700">{addon.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-primary-900 mb-6">
                  Vos Coordonnées
                </h2>

                <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-primary-900 mb-2">
                        Prénom *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                        <input
                          type="text"
                          required
                          value={bookingData.firstName || ''}
                          onChange={(e) => updateBookingData({ firstName: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary-900 mb-2">
                        Nom *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                        <input
                          type="text"
                          required
                          value={bookingData.lastName || ''}
                          onChange={(e) => updateBookingData({ lastName: e.target.value })}
                          className="w-full pl-11 pr-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-900 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                      <input
                        type="email"
                        required
                        value={bookingData.email || ''}
                        onChange={(e) => updateBookingData({ email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-900 mb-2">
                      Téléphone *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" />
                      <input
                        type="tel"
                        required
                        value={bookingData.phone || ''}
                        onChange={(e) => updateBookingData({ phone: e.target.value })}
                        className="w-full pl-11 pr-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-900 mb-2">
                      Code postal (optionnel)
                    </label>
                    <input
                      type="text"
                      value={bookingData.postalCode || ''}
                      onChange={(e) => updateBookingData({ postalCode: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary-900 mb-2">
                      Message (optionnel)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-primary-400" />
                      <textarea
                        value={bookingData.message || ''}
                        onChange={(e) => updateBookingData({ message: e.target.value })}
                        rows={4}
                        className="w-full pl-11 pr-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={bookingData.acceptTerms || false}
                      onChange={(e) => updateBookingData({ acceptTerms: e.target.checked })}
                      className="w-5 h-5 mt-1 text-accent-600 rounded focus:ring-accent-600"
                    />
                    <span className="text-sm text-primary-700">
                      J'accepte les{' '}
                      <a href="/mentions-legales" className="text-accent-700 hover:underline">
                        conditions générales
                      </a>{' '}
                      et la{' '}
                      <a href="/politique-confidentialite" className="text-accent-700 hover:underline">
                        politique de confidentialité
                      </a>{' '}
                      *
                    </span>
                  </label>
                </div>

                <div className="bg-accent-50 rounded-xl p-6">
                  <p className="text-primary-900 mb-2">
                    <strong>Important :</strong> Un acompte de 30% vous sera demandé pour confirmer votre réservation.
                  </p>
                  <p className="text-primary-700">
                    Annulation gratuite jusqu'à 72h avant l'événement.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleBack}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Retour
                </Button>
              )}
              <div className={currentStep === 1 ? 'ml-auto' : ''}>
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !bookingData.eventSlug) ||
                      (currentStep === 2 && (!bookingData.date || !bookingData.numberOfPeople)) ||
                      (currentStep === 3 && !bookingData.time)
                    }
                    className="flex items-center gap-2"
                  >
                    Suivant
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={
                      !bookingData.firstName ||
                      !bookingData.lastName ||
                      !bookingData.email ||
                      !bookingData.phone ||
                      !bookingData.acceptTerms
                    }
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Confirmer la Réservation
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
