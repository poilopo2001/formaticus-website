import { Metadata } from 'next'
import Image from 'next/image'
import { generateAboutMetadata } from '@/lib/metadata'
import { SITE_DATA } from '@/lib/constants'
import { Award, Heart, Users, Leaf, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Ornament } from '@/components/ui/Ornament'

export const metadata: Metadata = generateAboutMetadata()

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940"
            alt="À Propos de Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Notre Histoire
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Notre Passion<br />du Fromage
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              Plus qu'une fromagerie, une destination gourmande où tradition et convivialité se rencontrent
            </p>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="group">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="relative h-96 md:h-[500px] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Image
                  src="https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940"
                  alt="Notre histoire"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
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

            {/* Contenu */}
            <div>
              <Ornament className="text-accent-600 mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Notre Histoire
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
                L'Excellence<br />Fromagère
              </h2>
              <div className="space-y-6 text-lg text-primary-200 font-light leading-relaxed">
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
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Nos Valeurs
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Principes<br />Fondamentaux
            </h2>
            <p className="text-lg text-primary-200 font-light max-w-3xl mx-auto leading-relaxed">
              Les principes qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="bg-black/40 border border-accent-600/30 p-8 mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Award className="w-16 h-16 mx-auto mb-6 text-accent-600" />
                <h3 className="text-2xl font-serif font-light text-white mb-4">Qualité</h3>
                <p className="text-primary-200 font-light">
                  Sélection rigoureuse des meilleurs fromages artisanaux et fermiers
                </p>
              </div>

              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="bg-black/40 border border-accent-600/30 p-8 mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Heart className="w-16 h-16 mx-auto mb-6 text-accent-600" />
                <h3 className="text-2xl font-serif font-light text-white mb-4">Passion</h3>
                <p className="text-primary-200 font-light">
                  Un amour inconditionnel du fromage transmis avec enthousiasme
                </p>
              </div>

              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="bg-black/40 border border-accent-600/30 p-8 mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Users className="w-16 h-16 mx-auto mb-6 text-accent-600" />
                <h3 className="text-2xl font-serif font-light text-white mb-4">Convivialité</h3>
                <p className="text-primary-200 font-light">
                  Créer des moments de partage authentiques autour du fromage
                </p>
              </div>

              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="bg-black/40 border border-accent-600/30 p-8 mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Leaf className="w-16 h-16 mx-auto mb-6 text-accent-600" />
                <h3 className="text-2xl font-serif font-light text-white mb-4">Durabilité</h3>
                <p className="text-primary-200 font-light">
                  Soutien aux producteurs locaux et aux pratiques respectueuses
                </p>
              </div>

              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      {SITE_DATA.team && SITE_DATA.team.members && SITE_DATA.team.members.length > 0 && (
        <section className="py-32 bg-primary-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Notre Équipe
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Experts<br />Passionnés
              </h2>
              <p className="text-lg text-primary-200 font-light max-w-3xl mx-auto leading-relaxed">
                Des experts passionnés à votre service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {SITE_DATA.team.members.map((member, idx) => (
                <div key={idx} className="group text-center">
                  <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                    <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                      <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                      <circle cx="16" cy="16" r="2" fill="black"/>
                    </svg>
                  </div>

                  <div className="bg-black/40 border border-accent-600/30 overflow-hidden transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                    <div className="relative h-64 bg-gradient-to-br from-primary-800 to-primary-700 flex items-center justify-center">
                      <div className="text-6xl font-serif font-light text-accent-600">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-serif font-light text-white mb-2">{member.name}</h3>
                      <div className="text-accent-600 text-sm tracking-[0.2em] uppercase mb-4">{member.role}</div>
                      <p className="text-primary-200 font-light mb-4">{member.experience}</p>
                      {member.certifications && member.certifications.length > 0 && (
                        <div className="space-y-2 border-t border-accent-600/30 pt-4">
                          {member.certifications.map((cert, certIdx) => (
                            <div key={certIdx} className="flex items-center gap-2 text-sm text-primary-300 font-light">
                              <CheckCircle className="w-4 h-4 text-accent-600" />
                              <span>{cert}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nos Engagements */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Engagements
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Notre<br />Responsabilité
              </h2>
            </div>

            <div className="space-y-6">
              {SITE_DATA.sustainability && SITE_DATA.sustainability.commitments && SITE_DATA.sustainability.commitments.map((commitment, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8">
                  <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                  <p className="text-primary-200 font-light">{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      {SITE_DATA.certifications && SITE_DATA.certifications.length > 0 && (
        <section className="py-32 bg-primary-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Reconnaissance
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Certifications<br />& Labels
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {SITE_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="group text-center">
                  <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                    <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                      <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                      <circle cx="16" cy="16" r="2" fill="black"/>
                    </svg>
                  </div>

                  <div className="bg-black/40 border border-accent-600/30 p-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                    <Award className="w-12 h-12 mx-auto mb-4 text-accent-600" />
                    <div className="text-white font-light">{cert}</div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                      <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                      <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Rejoignez-nous
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Prêt à Vivre<br />l'Expérience Formaticus ?
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Venez nous rencontrer en boutique ou réservez votre prochaine soirée conviviale
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/reserver"
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
              >
                Réserver une Soirée
              </Link>
              <Link
                href="/contact"
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
