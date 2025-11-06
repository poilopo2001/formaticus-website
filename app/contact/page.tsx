import { Metadata } from 'next'
import { generateContactMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = generateContactMetadata()

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Contactez-Nous
            </h1>
            <p className="text-xl text-primary-700">
              Une question sur nos fromages, événements ou services ? Nous sommes là pour vous répondre !
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Informations de contact */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  Coordonnées
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary-900 mb-1">Téléphone</div>
                      <a
                        href={`tel:${SITE_DATA.business.contact.phone}`}
                        className="text-primary-700 hover:text-accent-600 transition-colors"
                      >
                        {SITE_DATA.business.contact.phoneDisplay}
                      </a>
                      <br />
                      <a
                        href={`tel:${SITE_DATA.business.contact.mobile}`}
                        className="text-primary-700 hover:text-accent-600 transition-colors"
                      >
                        {SITE_DATA.business.contact.mobileDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary-900 mb-1">Email</div>
                      <a
                        href={`mailto:${SITE_DATA.business.contact.email}`}
                        className="text-primary-700 hover:text-accent-600 transition-colors"
                      >
                        {SITE_DATA.business.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary-900 mb-1">Adresse</div>
                      <div className="text-primary-700">
                        {SITE_DATA.business.contact.address.street}<br />
                        {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}<br />
                        {SITE_DATA.business.contact.address.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-primary-900 mb-1">Horaires</div>
                      <div className="text-primary-700 space-y-1">
                        <div>{SITE_DATA.business.hours.monday}</div>
                        <div>{SITE_DATA.business.hours.weekdays}</div>
                        <div>{SITE_DATA.business.hours.saturday}</div>
                        <div>{SITE_DATA.business.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  Réponse Rapide Garantie
                </h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600">•</span>
                    <span>Réponse par email sous {SITE_DATA.stats.responseTime}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600">•</span>
                    <span>Conseils experts gratuits par téléphone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-600">•</span>
                    <span>Langues parlées : {SITE_DATA.business.languages.join(', ')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Envoyez-nous un Message
              </h2>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-primary-900 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-primary-900 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-primary-900 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="fromages">Question sur les fromages</option>
                    <option value="reservation">Réservation événement/atelier</option>
                    <option value="plateau">Commande plateau sur-mesure</option>
                    <option value="traiteur">Service traiteur</option>
                    <option value="autre">Autre question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                    Votre Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:border-accent-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-primary-100 h-96 flex items-center justify-center">
              <div className="text-center text-primary-700">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary-600" />
                <p className="text-lg font-semibold">Carte interactive</p>
                <p className="text-sm">(À intégrer avec Google Maps API)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
