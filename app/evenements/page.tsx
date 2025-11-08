import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateEvenementsMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Ornament } from '@/components/ui/Ornament'
import { Clock, Users, CheckCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = generateEvenementsMetadata()

// Événements disponibles
const evenements = [
  {
    slug: 'soiree-raclette',
    name: 'Soirée Raclette',
    shortDescription: 'Vivez une authentique soirée raclette dans notre espace chaleureux. Raclette artisanale à volonté avec 4 variétés de fromages AOP, charcuterie fine, pommes de terre bio et accompagnements traditionnels.',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
    pricePerPerson: '42€',
    priceMin: 42,
    estimatedDuration: '2h30 - 3h',
    schedule: {
      groupSize: '8-40 personnes',
      frequency: 'Vendredis & Samedis soir'
    },
    benefits: [
      'Raclette artisanale à volonté (4 variétés AOP)',
      'Charcuterie fine et sélection de terroir',
      'Pommes de terre bio et accompagnements',
      'Animation par nos experts fromagers',
      'Ambiance montagne chaleureuse'
    ],
    guarantees: [
      'Fromages AOP certifiés',
      'Satisfaction garantie ou remboursement'
    ]
  },
  {
    slug: 'soiree-cheese-wine',
    name: 'Soirée Cheese & Wine',
    shortDescription: 'Découvrez l\'art subtil des accords fromages et vins lors d\'une soirée dégustation animée par nos sommeliers. 8 fromages d\'exception accompagnés de 5 vins soigneusement sélectionnés.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940',
    pricePerPerson: '48€',
    priceMin: 48,
    estimatedDuration: '2h - 2h30',
    schedule: {
      groupSize: '8-30 personnes',
      frequency: 'Jeudis & Vendredis soir'
    },
    benefits: [
      '8 fromages d\'exception (France, Suisse, Italie)',
      '5 vins sélectionnés en accord parfait',
      'Animation par sommeliers experts',
      'Techniques de dégustation professionnelle',
      'Livret d\'accords à emporter'
    ],
    guarantees: [
      'Vins de propriétaires certifiés bio',
      'Dégustation guidée par des experts'
    ]
  },
  {
    slug: 'soiree-tartiflette',
    name: 'Soirée Tartiflette',
    shortDescription: 'Plongez dans la tradition savoyarde avec notre tartiflette authentique. Reblochon fermier AOP, pommes de terre grenaille, lardons fumés artisanaux et oignons confits maison.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940',
    pricePerPerson: '38€',
    priceMin: 38,
    estimatedDuration: '2h - 2h30',
    schedule: {
      groupSize: '10-40 personnes',
      frequency: 'Samedis & Dimanches midi/soir'
    },
    benefits: [
      'Tartiflette au Reblochon fermier AOP',
      'Lardons fumés artisanaux de montagne',
      'Pommes de terre grenaille bio',
      'Salade verte de saison',
      'Ambiance conviviale savoyarde'
    ],
    guarantees: [
      'Reblochon fermier AOP certifié',
      'Ingrédients 100% artisanaux'
    ]
  },
  {
    slug: 'soiree-fondue',
    name: 'Soirée Fondue',
    shortDescription: 'Savourez une fondue savoyarde traditionnelle préparée avec un mélange de 3 fromages AOP. Pain artisanal, charcuterie de montagne et cornichons maison pour une expérience authentique.',
    image: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940',
    pricePerPerson: '44€',
    priceMin: 44,
    estimatedDuration: '2h30 - 3h',
    schedule: {
      groupSize: '8-35 personnes',
      frequency: 'Tous les soirs sauf lundi'
    },
    benefits: [
      'Fondue 3 fromages AOP (Comté, Beaufort, Emmental)',
      'Pain artisanal frais du jour',
      'Charcuterie fine de montagne',
      'Cornichons & oignons grelots maison',
      'Vin blanc de Savoie inclus'
    ],
    guarantees: [
      'Fromages AOP des Alpes',
      'Recette traditionnelle savoyarde'
    ]
  }
]

export default function EvenementsPage() {
  const events = evenements

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940"
            alt="Soirées conviviales Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Moments Conviviaux
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Soirées & Ateliers<br />Fromagers
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              Partagez des moments uniques autour du fromage dans une ambiance chaleureuse et authentique
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">{SITE_DATA.stats.eventsPerMonth}</span> soirées/mois
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">{SITE_DATA.stats.workshopsPerMonth}</span> ateliers/mois
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">{SITE_DATA.stats.satisfactionRate}%</span> satisfaits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des événements */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Nos Formules
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Expériences<br />Gourmandes
            </h2>
          </div>

          <div className="grid gap-20">
            {events.map((event, index) => (
              <div
                key={event.slug}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  {/* Star ornament */}
                  <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                    <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                      <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                      <circle cx="16" cy="16" r="2" fill="black"/>
                    </svg>
                  </div>

                  <div className="relative h-96 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Price overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                      <div className="text-white/90 text-center">
                        <div className="text-5xl font-serif font-light text-accent-600 mb-2">
                          {event.pricePerPerson?.split('-')[0] || `${event.priceMin}€`}
                        </div>
                        <div className="text-sm font-light">par personne</div>
                      </div>
                    </div>
                    {/* Glow border */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                    </div>
                  </div>

                  {/* Geometric ornament */}
                  <div className="mt-8 flex justify-center">
                    <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                    </svg>
                  </div>
                </div>

                {/* Contenu */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div>
                    <div className="inline-block px-4 py-1 border border-accent-600/30 text-accent-600 text-[10px] tracking-[0.2em] uppercase mb-6">
                      Soirée Conviviale
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                      {event.name}
                    </h2>
                    <p className="text-lg text-primary-200 font-light leading-relaxed">
                      {event.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2 text-primary-200">
                      <Clock className="w-5 h-5 text-accent-600" />
                      <span className="font-light">{event.estimatedDuration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-200">
                      <Users className="w-5 h-5 text-accent-600" />
                      <span className="font-light">{event.schedule?.groupSize || '8-40 personnes'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-200">
                      <Calendar className="w-5 h-5 text-accent-600" />
                      <span className="font-light">{event.schedule?.frequency || 'Sur réservation'}</span>
                    </div>
                  </div>

                  <div className="bg-black/40 border border-accent-600/30 p-8">
                    <h3 className="text-accent-600 tracking-[0.2em] text-xs font-light uppercase mb-6">Inclus dans la formule</h3>
                    <ul className="space-y-3">
                      {event.benefits.slice(0, 5).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-primary-200 font-light">
                          <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/reserver"
                      className="flex-1 px-8 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 text-center"
                    >
                      Réserver
                    </Link>
                    <Link
                      href={`/evenements/${event.slug}`}
                      className="px-8 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 text-center"
                    >
                      Détails
                    </Link>
                  </div>

                  {event.guarantees && (
                    <div className="space-y-2">
                      {event.guarantees.slice(0, 2).map((guarantee, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-primary-300 font-light">
                          <span className="text-accent-600">✓</span>
                          <span>{guarantee}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Réservation
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Prêt à Vivre une<br />Expérience Inoubliable ?
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Réservez dès maintenant votre soirée ou atelier. Places limitées !
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/reserver"
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
              >
                Réserver en Ligne
              </Link>
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Nous Appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
