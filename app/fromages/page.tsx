'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MapPin, Milk, ChevronDown } from 'lucide-react'
import { Ornament } from '@/components/ui/Ornament'
import { fromagesReels } from '@/data/fromages-reels'

// Options de filtres
const filtresType = [
  { value: '', label: 'Tous les types' },
  { value: 'pate-molle-croute-fleurie', label: 'Pâtes molles à croûte fleurie' },
  { value: 'pate-molle-croute-lavee', label: 'Pâtes molles à croûte lavée' },
  { value: 'pate-pressee-non-cuite', label: 'Pâtes pressées non cuites' },
  { value: 'pate-pressee-cuite', label: 'Pâtes pressées cuites' },
  { value: 'pate-persillee', label: 'Pâtes persillées' },
  { value: 'chevre', label: 'Fromages de chèvre' },
  { value: 'brebis', label: 'Fromages de brebis' },
]

const filtresLait = [
  { value: '', label: 'Tous les laits' },
  { value: 'vache', label: 'Vache' },
  { value: 'chevre', label: 'Chèvre' },
  { value: 'brebis', label: 'Brebis' },
  { value: 'mixte', label: 'Mixte' },
]

const filtresOrigine = [
  { value: '', label: 'Toutes origines' },
  { value: 'France', label: 'France' },
  { value: 'Suisse', label: 'Suisse' },
  { value: 'Italie', label: 'Italie' },
  { value: 'Espagne', label: 'Espagne' },
  { value: 'Pays-Bas', label: 'Pays-Bas' },
  { value: 'Angleterre', label: 'Angleterre' },
]

export default function FromagesPage() {
  const [filtreType, setFiltreType] = useState<string>('')
  const [filtreLait, setFiltreLait] = useState<string>('')
  const [filtreOrigine, setFiltreOrigine] = useState<string>('')
  const [filtreAOP, setFiltreAOP] = useState<boolean>(false)

  // Fromages filtrés
  const fromagesFiltres = fromagesReels.filter((fromage) => {
    if (filtreType && fromage.type !== filtreType) return false
    if (filtreLait && fromage.lait !== filtreLait) return false
    if (filtreOrigine && fromage.origine !== filtreOrigine) return false
    if (filtreAOP && !fromage.aop) return false
    return true
  })

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Séance Photo Nicolas 20220423/hero-fromages-cave.jpg"
            alt="Notre Sélection de Fromages - Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Sélection Artisanale
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Notre Cave<br />Affinée
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              42 fromages AOP et fermiers sélectionnés avec passion auprès des meilleurs artisans.
            </p>
          </div>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="py-20 bg-primary-900 border-b border-accent-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase text-center mb-12">
              Affiner votre recherche
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <label className="block text-primary-300 text-xs tracking-[0.15em] uppercase mb-3 font-light">
                  Type de fromage
                </label>
                <div className="relative">
                  <select
                    value={filtreType}
                    onChange={(e) => setFiltreType(e.target.value)}
                    className="w-full bg-black border border-accent-600/30 text-white px-4 py-4 appearance-none cursor-pointer focus:border-accent-600 focus:outline-none transition-colors font-light"
                  >
                    {filtresType.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-600 pointer-events-none" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-primary-300 text-xs tracking-[0.15em] uppercase mb-3 font-light">
                  Type de lait
                </label>
                <div className="relative">
                  <select
                    value={filtreLait}
                    onChange={(e) => setFiltreLait(e.target.value)}
                    className="w-full bg-black border border-accent-600/30 text-white px-4 py-4 appearance-none cursor-pointer focus:border-accent-600 focus:outline-none transition-colors font-light"
                  >
                    {filtresLait.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-600 pointer-events-none" />
                </div>
              </div>

              <div className="relative">
                <label className="block text-primary-300 text-xs tracking-[0.15em] uppercase mb-3 font-light">
                  Origine
                </label>
                <div className="relative">
                  <select
                    value={filtreOrigine}
                    onChange={(e) => setFiltreOrigine(e.target.value)}
                    className="w-full bg-black border border-accent-600/30 text-white px-4 py-4 appearance-none cursor-pointer focus:border-accent-600 focus:outline-none transition-colors font-light"
                  >
                    {filtresOrigine.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-accent-600 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-primary-300 text-xs tracking-[0.15em] uppercase mb-3 font-light">
                  Appellation
                </label>
                <button
                  onClick={() => setFiltreAOP(!filtreAOP)}
                  className={`w-full border px-4 py-4 text-left transition-all duration-500 font-light tracking-wide ${
                    filtreAOP
                      ? 'bg-accent-600 border-accent-600 text-black'
                      : 'bg-black border-accent-600/30 text-white hover:border-accent-600'
                  }`}
                >
                  AOP / IGP uniquement
                </button>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <p className="text-center text-primary-300 text-sm mt-8 font-light">
              <span className="text-accent-600 text-lg">{fromagesFiltres.length}</span> fromage{fromagesFiltres.length > 1 ? 's' : ''} trouvé{fromagesFiltres.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue de fromages */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {fromagesFiltres.map((fromage) => (
              <Link
                key={fromage.id}
                href={`/fromages/${fromage.slug}`}
                className="group text-center"
              >
                {/* Ornement étoile top avec pulse au hover */}
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                {/* Badge AOP */}
                {fromage.aop && (
                  <div className="relative z-20 mb-4">
                    <span className="inline-block bg-accent-600 text-black px-4 py-1 text-[10px] tracking-[0.2em] uppercase font-medium">
                      AOP
                    </span>
                  </div>
                )}

                {/* Image avec glow et lift effect */}
                <div className="relative h-96 mb-8 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src={fromage.image}
                    alt={fromage.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay avec infos au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                    <div className="text-white/90 text-sm font-light leading-relaxed text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-accent-600" />
                        <span className="text-accent-600">{fromage.region}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Milk className="w-4 h-4 text-accent-600" />
                        <span className="capitalize">Lait de {fromage.lait}</span>
                      </div>
                      <p className="mb-3">{fromage.description}</p>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-xs tracking-wider uppercase text-primary-300">Intensité</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`w-6 h-1 ${
                                level <= fromage.intensite ? 'bg-accent-600' : 'bg-gray-700'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow border interne */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                  </div>
                </div>

                {/* Ornement géométrique bottom */}
                <div className="mb-8 flex justify-center">
                  <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                    <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>

                {/* Titre */}
                <h3 className="text-3xl font-serif font-light text-white mb-4 group-hover:text-accent-600 transition-colors duration-300">
                  {fromage.nom}
                </h3>

                {/* Prix */}
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-3xl font-serif text-accent-600">{fromage.prixKg}€</span>
                  <span className="text-primary-300 text-lg font-light">/kg</span>
                </div>

                {/* CTA avec bordure solide */}
                <button className="px-10 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                  Découvrir
                </button>
              </Link>
            ))}
          </div>

          {fromagesFiltres.length === 0 && (
            <div className="text-center py-20">
              <Ornament className="text-accent-600 mx-auto mb-8" />
              <p className="text-primary-200 text-xl font-light mb-8 leading-relaxed">
                Aucun fromage ne correspond à vos critères.
              </p>
              <button
                onClick={() => {
                  setFiltreType('')
                  setFiltreLait('')
                  setFiltreOrigine('')
                  setFiltreAOP(false)
                }}
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Expertise & Passion
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Besoin de Conseils ?
            </h2>
            <p className="text-primary-200 text-lg mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Nos fromagers passionnés vous guident dans le choix de vos fromages lors de nos dégustations guidées. Découvrez l'art de composer un plateau parfait ou trouvez l'accord idéal pour vos événements.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/producteurs"
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Nos Producteurs
              </Link>

              <Link
                href="/reserver"
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
              >
                Réserver une Soirée
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
