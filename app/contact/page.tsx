import { Metadata } from 'next'
import Image from 'next/image'
import { generateContactMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Ornament } from '@/components/ui/Ornament'

export const metadata: Metadata = generateContactMetadata()

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940"
            alt="Contactez Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Prenons Contact
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Contactez-<br />Nous
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              Une question sur nos fromages, événements ou services ? Nous sommes là pour vous répondre
            </p>
          </div>
        </div>
      </section>

      {/* Coordonnées & Formulaire */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Informations de contact */}
              <div className="space-y-12">
                <div>
                  <Ornament className="text-accent-600 mb-6" />
                  <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                    Nos Coordonnées
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
                    Restons en<br />Contact
                  </h2>
                </div>

                <div className="bg-black/40 border border-accent-600/30 p-8 space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-accent-600 text-sm tracking-[0.2em] uppercase mb-2">Téléphone</div>
                      <a
                        href={`tel:${SITE_DATA.business.contact.phone}`}
                        className="text-white font-light hover:text-accent-600 transition-colors block"
                      >
                        {SITE_DATA.business.contact.phoneDisplay}
                      </a>
                      <a
                        href={`tel:${SITE_DATA.business.contact.mobile}`}
                        className="text-white font-light hover:text-accent-600 transition-colors block"
                      >
                        {SITE_DATA.business.contact.mobileDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-6 border-t border-accent-600/30">
                    <Mail className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-accent-600 text-sm tracking-[0.2em] uppercase mb-2">Email</div>
                      <a
                        href={`mailto:${SITE_DATA.business.contact.email}`}
                        className="text-white font-light hover:text-accent-600 transition-colors"
                      >
                        {SITE_DATA.business.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-6 border-t border-accent-600/30">
                    <MapPin className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-accent-600 text-sm tracking-[0.2em] uppercase mb-2">Adresse</div>
                      <div className="text-white font-light">
                        {SITE_DATA.business.contact.address.street}<br />
                        {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}<br />
                        {SITE_DATA.business.contact.address.country}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-6 border-t border-accent-600/30">
                    <Clock className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-accent-600 text-sm tracking-[0.2em] uppercase mb-2">Horaires</div>
                      <div className="text-white font-light space-y-1">
                        <div>{SITE_DATA.business.hours.monday}</div>
                        <div>{SITE_DATA.business.hours.weekdays}</div>
                        <div>{SITE_DATA.business.hours.saturday}</div>
                        <div>{SITE_DATA.business.hours.sunday}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 border border-accent-600/30 p-8">
                  <h3 className="text-2xl font-serif font-light text-white mb-6">
                    Réponse Rapide Garantie
                  </h3>
                  <ul className="space-y-4 text-primary-200 font-light">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Réponse par email sous {SITE_DATA.stats.responseTime}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Conseils experts gratuits par téléphone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Langues parlées : {SITE_DATA.business.languages.join(', ')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Formulaire de contact */}
              <div className="group">
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                <div className="bg-black/40 border border-accent-600/30 p-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <h2 className="text-3xl font-serif font-light text-white mb-8">
                    Envoyez-nous<br />un Message
                  </h2>

                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-accent-600 text-xs tracking-[0.2em] uppercase mb-3">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-6 py-4 bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                          placeholder="Jean"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-accent-600 text-xs tracking-[0.2em] uppercase mb-3">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-6 py-4 bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                          placeholder="Dupont"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-accent-600 text-xs tracking-[0.2em] uppercase mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-6 py-4 bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                        placeholder="jean.dupont@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-accent-600 text-xs tracking-[0.2em] uppercase mb-3">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-6 py-4 bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all font-light"
                        placeholder="+352 123 456 789"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-accent-600 text-xs tracking-[0.2em] uppercase mb-3">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        required
                        className="w-full px-6 py-4 bg-black/60 border border-accent-600/30 text-white focus:border-accent-600 focus:outline-none transition-all font-light"
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
                      <label htmlFor="message" className="block text-accent-600 text-xs tracking-[0.2em] uppercase mb-3">
                        Votre Message *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        className="w-full px-6 py-4 bg-black/60 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-all resize-none font-light"
                        placeholder="Votre message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
                    >
                      Envoyer le Message
                    </button>
                  </form>
                </div>

                <div className="mt-8 flex justify-center">
                  <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                    <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Nous Trouver
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Notre<br />Emplacement
              </h2>
            </div>

            <div className="group">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <div className="bg-primary-800 h-96 flex items-center justify-center border border-accent-600/30">
                  <div className="text-center text-primary-200">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-accent-600" />
                    <p className="text-lg font-serif font-light text-white">Carte interactive</p>
                    <p className="text-sm font-light">(À intégrer avec Google Maps API)</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
