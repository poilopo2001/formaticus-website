import { Metadata } from 'next'
import Image from 'next/image'
import { generateFromagesMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Milk, CheckCircle, Star, Award } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = generateFromagesMetadata()

export default function FromagesPage() {
  const cheeseService = SITE_DATA.services[0]
  const categories = Object.entries(cheeseService.categories || {})

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent-600 text-primary-900 px-4 py-2 rounded-full mb-6">
              <Milk className="w-5 h-5" />
              <span className="font-semibold">{SITE_DATA.stats.cheeseSelection}+ Fromages Artisanaux</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notre Sélection Exceptionnelle
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Découvrez plus de {SITE_DATA.stats.cheeseSelection} fromages artisanaux soigneusement sélectionnés : fermiers, AOP/AOC, affinés
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                <div className="font-semibold">AOP/AOC Certifiés</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                <div className="font-semibold">Lait Cru Fermier</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="w-8 h-8 mx-auto mb-2 text-accent-400" />
                <div className="font-semibold">Affinage Expert</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories de fromages */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Explorez nos Familles de Fromages
            </h2>
            <p className="text-lg text-primary-700 max-w-2xl mx-auto">
              De la pâte molle crémeuse aux fromages persillés puissants, découvrez toute la diversité fromagère
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map(([family, cheeses]) => {
              const familyNames: Record<string, string> = {
                pates_molles: 'Pâtes Molles',
                pates_pressees: 'Pâtes Pressées',
                pates_persillees: 'Pâtes Persillées',
                chevres: 'Fromages de Chèvre',
                brebis: 'Fromages de Brebis',
                raclettes_fondues: 'Raclettes & Fondues',
                specialites: 'Spécialités',
              }

              const familyImages: Record<string, string> = {
                pates_molles: 'https://images.unsplash.com/photo-1452195100486-9cc805987862',
                pates_pressees: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d',
                pates_persillees: 'https://images.unsplash.com/photo-1452195100486-9cc805987862',
                chevres: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
                brebis: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c',
                raclettes_fondues: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1',
                specialites: 'https://images.unsplash.com/photo-1452195100486-9cc805987862',
              }

              return (
                <div
                  key={family}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={familyImages[family]}
                      alt={familyNames[family]}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white">
                        {familyNames[family]}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 text-sm text-accent-600 font-semibold">
                      {(cheeses as string[]).length} fromages disponibles
                    </div>
                    <ul className="space-y-2 mb-6">
                      {(cheeses as string[]).slice(0, 4).map((cheese, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-primary-700">
                          <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                          <span>{cheese}</span>
                        </li>
                      ))}
                      {(cheeses as string[]).length > 4 && (
                        <li className="text-primary-600 font-medium">
                          + {(cheeses as string[]).length - 4} autres fromages
                        </li>
                      )}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Découvrir
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nos garanties */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Nos Garanties Qualité
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {cheeseService.guarantees.map((guarantee, idx) => (
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

      {/* Notre processus */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Votre Expérience en Boutique
              </h2>
              <p className="text-lg text-primary-700">
                Un accompagnement personnalisé du premier contact à la dégustation
              </p>
            </div>

            <div className="space-y-6">
              {cheeseService.process.map((step, idx) => (
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Venez Découvrir Notre Sélection
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Dégustation gratuite et conseils experts vous attendent en boutique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl" className="min-w-[250px]">
              Voir les Horaires
            </Button>
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
