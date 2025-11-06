import { Metadata } from 'next'
import Image from 'next/image'
import { generateAboutMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Button } from '@/components/ui/Button'
import { Award, Heart, Users, Leaf, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = generateAboutMetadata()

export default function AProposPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notre Passion du Fromage
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Plus qu'une fromagerie, une destination gourmande où tradition et convivialité se rencontrent
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1452195100486-9cc805987862"
                alt="Notre histoire"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-lg text-primary-700 leading-relaxed">
                <p>
                  {SITE_DATA.business.description}
                </p>
                <p>
                  Fondée par des passionnés de fromage, {SITE_DATA.business.name} s'est donné pour mission de faire découvrir la richesse du patrimoine fromager européen tout en créant des moments de partage authentiques.
                </p>
                <p>
                  Notre sélection de plus de {SITE_DATA.stats.cheeseSelection} fromages artisanaux est le fruit d'un travail minutieux de recherche auprès des meilleurs producteurs fermiers et affineurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow">
              <Award className="w-16 h-16 mx-auto mb-4 text-accent-600" />
              <h3 className="text-xl font-bold text-primary-900 mb-3">Qualité</h3>
              <p className="text-primary-700">
                Sélection rigoureuse des meilleurs fromages artisanaux et fermiers
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow">
              <Heart className="w-16 h-16 mx-auto mb-4 text-accent-600" />
              <h3 className="text-xl font-bold text-primary-900 mb-3">Passion</h3>
              <p className="text-primary-700">
                Un amour inconditionnel du fromage transmis avec enthousiasme
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow">
              <Users className="w-16 h-16 mx-auto mb-4 text-accent-600" />
              <h3 className="text-xl font-bold text-primary-900 mb-3">Convivialité</h3>
              <p className="text-primary-700">
                Créer des moments de partage authentiques autour du fromage
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow">
              <Leaf className="w-16 h-16 mx-auto mb-4 text-accent-600" />
              <h3 className="text-xl font-bold text-primary-900 mb-3">Durabilité</h3>
              <p className="text-primary-700">
                Soutien aux producteurs locaux et aux pratiques respectueuses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      {SITE_DATA.team && SITE_DATA.team.members && SITE_DATA.team.members.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Notre Équipe
              </h2>
              <p className="text-xl text-primary-700 max-w-3xl mx-auto">
                Des experts passionnés à votre service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {SITE_DATA.team.members.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{member.name}</h3>
                    <div className="text-accent-700 font-semibold mb-3">{member.role}</div>
                    <p className="text-primary-700 mb-3">{member.experience}</p>
                    {member.certifications && member.certifications.length > 0 && (
                      <div className="space-y-1">
                        {member.certifications.map((cert, certIdx) => (
                          <div key={certIdx} className="flex items-center gap-2 text-sm text-primary-600">
                            <CheckCircle className="w-4 h-4 text-accent-600" />
                            <span>{cert}</span>
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
      )}

      {/* Nos Engagements */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Nos Engagements
              </h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-6">
                {SITE_DATA.sustainability && SITE_DATA.sustainability.commitments && SITE_DATA.sustainability.commitments.map((commitment, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-primary-900 font-semibold">{commitment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      {SITE_DATA.certifications && SITE_DATA.certifications.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Certifications & Labels
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {SITE_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <Award className="w-12 h-12 mx-auto mb-3 text-accent-600" />
                  <div className="font-semibold text-primary-900">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à Vivre l'Expérience Formaticus ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Venez nous rencontrer en boutique ou réservez votre prochaine soirée conviviale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reserver">
              <Button variant="primary" size="xl" className="min-w-[250px]">
                Réserver une Soirée
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="min-w-[250px] border-white text-white hover:bg-white hover:text-primary-900"
              >
                Nous Contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
