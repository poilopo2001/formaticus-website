import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { generateEvenementsMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Clock, Users, CheckCircle, Calendar } from 'lucide-react'

export const metadata: Metadata = generateEvenementsMetadata()

export default function EvenementsPage() {
  const events = SITE_DATA.services.filter(s => s.featured)

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1"
            alt="Soirées conviviales Formaticus"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Soirées Conviviales & Ateliers Fromage
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Partagez des moments uniques autour du fromage dans une ambiance chaleureuse et authentique
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">{SITE_DATA.stats.eventsPerMonth} soirées/mois</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">{SITE_DATA.stats.workshopsPerMonth} ateliers/mois</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">{SITE_DATA.stats.satisfactionRate}% satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liste des événements */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {events.map((event, index) => (
              <div
                key={event.slug}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-white">
                        <div className="text-4xl font-bold mb-2 text-accent-400">
                          {event.pricePerPerson?.split('-')[0] || `€${event.priceMin}`}
                        </div>
                        <div className="text-sm opacity-90">par personne</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div>
                    <div className="inline-block bg-accent-100 text-accent-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Soirée Conviviale
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                      {event.name}
                    </h2>
                    <p className="text-lg text-primary-700 leading-relaxed">
                      {event.shortDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-primary-700">
                      <Clock className="w-5 h-5 text-accent-600" />
                      <span className="font-medium">{event.estimatedDuration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-700">
                      <Users className="w-5 h-5 text-accent-600" />
                      <span className="font-medium">{event.schedule?.groupSize || '8-40 personnes'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-700">
                      <Calendar className="w-5 h-5 text-accent-600" />
                      <span className="font-medium">{event.schedule?.frequency || 'Sur réservation'}</span>
                    </div>
                  </div>

                  <div className="bg-primary-50 rounded-xl p-6">
                    <h3 className="font-bold text-primary-900 mb-3">Inclus dans la formule :</h3>
                    <ul className="space-y-2">
                      {event.benefits.slice(0, 5).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-primary-700">
                          <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/reserver" className="flex-1">
                      <Button variant="primary" size="lg" className="w-full">
                        Réserver Maintenant
                      </Button>
                    </Link>
                    <Link href={`/evenements/${event.slug}`}>
                      <Button variant="outline" size="lg">
                        Voir les Détails
                      </Button>
                    </Link>
                  </div>

                  {event.guarantees && (
                    <div className="text-sm text-primary-600 space-y-1">
                      {event.guarantees.slice(0, 2).map((guarantee, idx) => (
                        <div key={idx} className="flex items-center gap-2">
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Vivre une Expérience Inoubliable ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Réservez dès maintenant votre soirée ou atelier. Places limitées !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserver">
              <Button variant="primary" size="xl" className="min-w-[250px]">
                Réserver en Ligne
              </Button>
            </Link>
            <a href={`tel:${SITE_DATA.business.contact.phone}`}>
              <Button
                variant="outline"
                size="xl"
                className="min-w-[250px] border-white text-white hover:bg-white hover:text-primary-900"
              >
                Nous Appeler
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
