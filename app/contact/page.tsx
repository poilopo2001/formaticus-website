import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateContactMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Ornament } from '@/components/ui/Ornament'
import { FadeInSection } from '@/components/ui/FadeInSection'

export const metadata: Metadata = {
  ...generateContactMetadata(),
  title: 'Contact Fromagerie Luxembourg | Fromager Artisanal Dudelange - Formaticus',
  description: 'Fromagerie artisanale à Luxembourg ✓ Fromages AOP ✓ Cave d\'affinage ✓ Conseil expert ✓ Livraison Luxembourg-Ville. Contactez notre fromager au +352 XX XX XX XX. Ouvert du lundi au samedi.',
  keywords: 'fromagerie luxembourg, fromager luxembourg, fromager dudelange, fromagerie artisanale luxembourg, où acheter fromage luxembourg, cave fromage luxembourg, fromages aop luxembourg, meilleur fromager luxembourg, boutique fromage luxembourg ville',
  openGraph: {
    title: 'Formaticus - Fromagerie Artisanale Luxembourg | Contact',
    description: 'Découvrez notre fromagerie au cœur de Luxembourg. Plus de 100 fromages artisanaux AOP, cave d\'affinage, conseil personnalisé.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
        width: 1200,
        height: 630,
        alt: 'Fromagerie Formaticus Luxembourg - Fromages Artisanaux'
      }
    ]
  }
}

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
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              {/* Informations de contact */}
              <FadeInSection delay={0.2} direction="left">
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
              </FadeInSection>

              {/* Formulaire de contact */}
              <FadeInSection delay={0.4} direction="right">
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
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Photos Boutique */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Notre Fromagerie
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Découvrez<br />Notre Espace
                </h2>
                <p className="text-lg text-primary-200 font-light max-w-2xl mx-auto">
                  Une fromagerie artisanale au cœur de Luxembourg, dédiée aux fromages d&apos;exception
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Photo 1 - Extérieur */}
                <div className="group relative h-80 overflow-hidden border border-accent-600/30">
                  <Image
                    src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2940"
                    alt="Extérieur Fromagerie Formaticus Luxembourg"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-serif text-xl font-light">Devanture</p>
                    <p className="text-accent-600 text-sm">Notre boutique</p>
                  </div>
                </div>

                {/* Photo 2 - Intérieur cave */}
                <div className="group relative h-80 overflow-hidden border border-accent-600/30">
                  <Image
                    src="https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940"
                    alt="Cave d'affinage Formaticus - Fromager Luxembourg"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-serif text-xl font-light">Cave d&apos;Affinage</p>
                    <p className="text-accent-600 text-sm">Température contrôlée</p>
                  </div>
                </div>

                {/* Photo 3 - Comptoir */}
                <div className="group relative h-80 overflow-hidden border border-accent-600/30">
                  <Image
                    src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940"
                    alt="Comptoir fromages artisanaux Luxembourg Dudelange"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-serif text-xl font-light">Comptoir</p>
                    <p className="text-accent-600 text-sm">Service personnalisé</p>
                  </div>
                </div>

                {/* Photo 4 - Sélection fromages */}
                <div className="group relative h-80 overflow-hidden border border-accent-600/30">
                  <Image
                    src="https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=2940"
                    alt="Sélection fromages artisanaux AOP Luxembourg"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-serif text-xl font-light">Notre Sélection</p>
                    <p className="text-accent-600 text-sm">Plus de 100 fromages</p>
                  </div>
                </div>

                {/* Photo 5 - Espace dégustation */}
                <div className="group relative h-80 overflow-hidden border border-accent-600/30">
                  <Image
                    src="https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=2940"
                    alt="Espace dégustation fromages Luxembourg"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-serif text-xl font-light">Espace Dégustation</p>
                    <p className="text-accent-600 text-sm">Soirées & ateliers</p>
                  </div>
                </div>

                {/* Photo 6 - Notre équipe */}
                <div className="group relative h-80 overflow-hidden border border-accent-600/30">
                  <Image
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2940"
                    alt="Fromager expert Luxembourg - Conseil personnalisé"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-serif text-xl font-light">Notre Fromager</p>
                    <p className="text-accent-600 text-sm">Expert & passionné</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Nous Trouver
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Fromagerie Artisanale<br />à Luxembourg
                </h2>
                <p className="text-lg text-primary-200 font-light max-w-2xl mx-auto">
                  Facilement accessible en voiture ou transports en commun. Parking gratuit à proximité.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="group">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="overflow-hidden shadow-2xl border border-accent-600/30 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.8579!2d6.0922!3d49.4615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDI3JzQxLjQiTiA2wrAwNSczMS45IkU!5e0!3m2!1sfr!2slu!4v1234567890"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Localisation Formaticus - Fromagerie Artisanale Luxembourg"
                />
              </div>

              <div className="mt-8 flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Informations Pratiques d'Accès */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center mb-16">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                  Comment Nous Rejoindre
                </h2>
                <p className="text-primary-200 font-light">
                  Votre fromagerie artisanale au cœur de Luxembourg
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-3 gap-8">
              <FadeInSection delay={0.3}>
                <div className="bg-black/40 border border-accent-600/30 p-8 text-center transition-all duration-500 hover:border-accent-600 hover:shadow-[0_10px_40px_-10px_rgba(228,197,144,0.4)]">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent-600/50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-white mb-4">
                    En Voiture
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed mb-4">
                    Parking gratuit disponible à 50m
                  </p>
                  <p className="text-accent-600 text-sm font-light">
                    5 min depuis autoroute A1
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.4}>
                <div className="bg-black/40 border border-accent-600/30 p-8 text-center transition-all duration-500 hover:border-accent-600 hover:shadow-[0_10px_40px_-10px_rgba(228,197,144,0.4)]">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent-600/50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-white mb-4">
                    En Bus
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed mb-4">
                    Arrêt &quot;Luxembourg Centre&quot;
                  </p>
                  <p className="text-accent-600 text-sm font-light">
                    Lignes 3, 12, 18 - 2 min à pied
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay={0.5}>
                <div className="bg-black/40 border border-accent-600/30 p-8 text-center transition-all duration-500 hover:border-accent-600 hover:shadow-[0_10px_40px_-10px_rgba(228,197,144,0.4)]">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent-600/50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-white mb-4">
                    Livraison
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed mb-4">
                    Luxembourg-Ville et environs
                  </p>
                  <p className="text-accent-600 text-sm font-light">
                    Gratuite dès 80€ d&apos;achat
                  </p>
                </div>
              </FadeInSection>
            </div>

            {/* Pourquoi nous visiter */}
            <FadeInSection delay={0.6}>
              <div className="mt-20 bg-black/60 border border-accent-600/30 p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
                    Pourquoi Visiter Notre Fromagerie ?
                  </h3>
                  <p className="text-primary-200 font-light max-w-2xl mx-auto">
                    Plus qu&apos;une simple boutique, Formaticus est un lieu de passion et de partage autour du fromage
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-serif text-accent-600 mb-3">100+</div>
                    <p className="text-white font-light">Fromages artisanaux</p>
                    <p className="text-primary-300 text-sm mt-1">AOP et fermiers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif text-accent-600 mb-3">15+</div>
                    <p className="text-white font-light">Années d&apos;expérience</p>
                    <p className="text-primary-300 text-sm mt-1">Expertise fromager</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif text-accent-600 mb-3">3</div>
                    <p className="text-white font-light">Pays producteurs</p>
                    <p className="text-primary-300 text-sm mt-1">France, Suisse, Belgique</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-serif text-accent-600 mb-3">5★</div>
                    <p className="text-white font-light">Satisfaction client</p>
                    <p className="text-primary-300 text-sm mt-1">Sur Google Reviews</p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <Link
                    href="/a-propos"
                    className="inline-block px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
                  >
                    Découvrir Notre Histoire
                  </Link>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  )
}
