import { Metadata } from 'next'
import Image from 'next/image'
import { SITE_DATA } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Users, Briefcase, Home, CheckCircle, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Service Traiteur & Événements Privés | Formaticus Luxembourg',
  description: 'Service traiteur fromage pour vos événements professionnels et privés. Plateaux artisanaux, soirées raclette, animations fromages. Devis gratuit sous 24h.',
  keywords: [
    'traiteur fromage Luxembourg',
    'événement entreprise Luxembourg',
    'animation fromage',
    'cocktail fromage',
    'team building fromage',
  ],
}

export default function TraiteurPage() {
  const traiteurService = SITE_DATA.services.find(s => s.slug === 'traiteur-evenements')

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
            alt="Service traiteur"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service Traiteur & Événements Privés
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Sublimez vos événements professionnels et privés avec nos plateaux fromages artisanaux et animations gourmandes
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">Devis gratuit sous 24h</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">Livraison possible</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold">De 10 à 200+ personnes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Nous Intervenons Pour Tous Vos Événements
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Événements professionnels, privés, team building... Nous nous adaptons à toutes vos demandes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <Briefcase className="w-16 h-16 text-accent-600 mb-4" />
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Événements d'Entreprise</h3>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Séminaires & conférences</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Cocktails professionnels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Team building fromage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Inaugurations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Événements clients</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <Home className="w-16 h-16 text-accent-600 mb-4" />
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Événements Privés</h3>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Mariages & fiançailles</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Anniversaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Baptêmes & communions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Réceptions familiales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Soirées entre amis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <Users className="w-16 h-16 text-accent-600 mb-4" />
              <h3 className="text-2xl font-bold text-primary-900 mb-4">Animations Spéciales</h3>
              <ul className="space-y-2 text-primary-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Soirée raclette sur site</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Atelier dégustation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Bar à fromages animé</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Démonstration fromager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                  <span>Conseils accords mets-vins</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Formules */}
      {traiteurService && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Nos Formules Traiteur
              </h2>
              <p className="text-xl text-primary-700 max-w-3xl mx-auto">
                Des formules flexibles adaptées à tous vos besoins et budgets
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={traiteurService.image}
                  alt="Formules traiteur"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                {traiteurService.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-primary-900 font-semibold">{benefit}</p>
                    </div>
                  </div>
                ))}

                <div className="bg-accent-50 rounded-xl p-6 mt-8">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-8 h-8 text-accent-700" />
                    <h3 className="text-xl font-bold text-primary-900">Tarifs indicatifs</h3>
                  </div>
                  <p className="text-primary-700 mb-2">
                    À partir de <span className="text-2xl font-bold text-accent-700">€{traiteurService.priceMin}</span> par personne
                  </p>
                  <p className="text-sm text-primary-600">
                    Devis personnalisé gratuit sous 24h selon vos besoins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Notre Processus */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Comment Ça Marche ?
              </h2>
              <p className="text-xl text-primary-700">
                Un processus simple et personnalisé
              </p>
            </div>

            <div className="space-y-6">
              {traiteurService?.process.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-primary-900 leading-relaxed">{step.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      {traiteurService?.guarantees && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  Nos Garanties
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {traiteurService.guarantees.map((guarantee, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-primary-900 font-semibold">{guarantee}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6 text-accent-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Demandez Votre Devis Gratuit
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="xl" className="min-w-[250px]">
                Demander un Devis
              </Button>
            </Link>
            <a href={`tel:${SITE_DATA.business.contact.phone}`}>
              <Button
                variant="outline"
                size="xl"
                className="min-w-[250px] border-white text-white hover:bg-white hover:text-primary-900"
              >
                Appelez-nous
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
