'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MapPin, Milk, ChevronDown } from 'lucide-react'
import { Ornament } from '@/components/ui/Ornament'

// Types de fromages
type TypeFromage = 'pate-fraiche' | 'pate-molle-croute-fleurie' | 'pate-molle-croute-lavee' | 'pate-pressee-non-cuite' | 'pate-pressee-cuite' | 'pate-persillee' | 'pate-fondue'
type TypeLait = 'vache' | 'chevre' | 'brebis'
type Origine = 'france' | 'suisse' | 'belgique' | 'italie'

interface Fromage {
  id: number
  slug: string
  nom: string
  origine: string
  region: string
  type: TypeFromage
  lait: TypeLait
  image: string
  aop: boolean
  description: string
  intensite: number
  prixKg: number
}

// Catalogue de fromages
const fromages: Fromage[] = [
  {
    id: 1,
    slug: 'comte-24-mois',
    nom: 'Comté 24 mois',
    origine: 'france',
    region: 'Jura, France',
    type: 'pate-pressee-cuite',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=2940',
    aop: true,
    description: 'Affinage exceptionnel de 24 mois. Notes de noisette, caramel et fruits secs.',
    intensite: 4,
    prixKg: 32
  },
  {
    id: 2,
    slug: 'epoisses',
    nom: 'Époisses AOP',
    origine: 'france',
    region: 'Bourgogne, France',
    type: 'pate-molle-croute-lavee',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
    aop: true,
    description: 'Lavé au marc de Bourgogne. Texture onctueuse, saveur puissante et raffinée.',
    intensite: 5,
    prixKg: 38
  },
  {
    id: 3,
    slug: 'raclette-valais',
    nom: 'Raclette du Valais AOP',
    origine: 'suisse',
    region: 'Valais, Suisse',
    type: 'pate-pressee-non-cuite',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2940',
    aop: true,
    description: 'La vraie raclette suisse. Fondant parfait, goût authentique de terroir alpin.',
    intensite: 3,
    prixKg: 28
  },
  {
    id: 4,
    slug: 'roquefort-papillon',
    nom: 'Roquefort Papillon',
    origine: 'france',
    region: 'Aveyron, France',
    type: 'pate-persillee',
    lait: 'brebis',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
    aop: true,
    description: 'Roi des bleus. Persillé équilibré, onctueux, saveur intense et persistante.',
    intensite: 5,
    prixKg: 42
  },
  {
    id: 5,
    slug: 'reblochon-fermier',
    nom: 'Reblochon Fermier AOP',
    origine: 'france',
    region: 'Savoie, France',
    type: 'pate-molle-croute-lavee',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940',
    aop: true,
    description: 'Produit en alpage. Croûte orangée, pâte crémeuse, douceur savoyarde.',
    intensite: 2,
    prixKg: 26
  },
  {
    id: 6,
    slug: 'crottin-chavignol',
    nom: 'Crottin de Chavignol AOP',
    origine: 'france',
    region: 'Sancerre, France',
    type: 'pate-molle-croute-fleurie',
    lait: 'chevre',
    image: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940',
    aop: true,
    description: 'Chèvre sec du Berry. Texture dense, saveur caprine marquée, noisette.',
    intensite: 4,
    prixKg: 34
  },
  {
    id: 7,
    slug: 'beaufort-ete',
    nom: "Beaufort d'Été",
    origine: 'france',
    region: 'Savoie, France',
    type: 'pate-pressee-cuite',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2940',
    aop: true,
    description: "Prince des Gruyères. Fabriqué en alpage l'été, arômes floraux délicats.",
    intensite: 3,
    prixKg: 36
  },
  {
    id: 8,
    slug: 'camembert-normandie',
    nom: 'Camembert de Normandie AOP',
    origine: 'france',
    region: 'Normandie, France',
    type: 'pate-molle-croute-fleurie',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
    aop: true,
    description: 'Au lait cru, moulé à la louche. Crémeux, champignon frais, beurre.',
    intensite: 3,
    prixKg: 24
  },
  {
    id: 9,
    slug: 'pecorino-romano',
    nom: 'Pecorino Romano DOP',
    origine: 'italie',
    region: 'Lazio, Italie',
    type: 'pate-pressee-cuite',
    lait: 'brebis',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940',
    aop: true,
    description: 'Fromage ancestral romain. Texture friable, goût salé et piquant.',
    intensite: 5,
    prixKg: 30
  },
  {
    id: 10,
    slug: 'sainte-maure-touraine',
    nom: 'Sainte-Maure de Touraine AOP',
    origine: 'france',
    region: 'Val de Loire, France',
    type: 'pate-molle-croute-fleurie',
    lait: 'chevre',
    image: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940',
    aop: true,
    description: "Bûche cendrée traversée d'une paille. Fondant, notes caprines subtiles.",
    intensite: 3,
    prixKg: 32
  },
  {
    id: 11,
    slug: 'munster-gerome',
    nom: 'Munster-Géromé AOP',
    origine: 'france',
    region: 'Alsace/Vosges, France',
    type: 'pate-molle-croute-lavee',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
    aop: true,
    description: 'Fromage de caractère vosgien. Croûte lavée, cœur fondant, arôme puissant.',
    intensite: 5,
    prixKg: 22
  },
  {
    id: 12,
    slug: 'fromage-orval',
    nom: "Fromage d'Orval",
    origine: 'belgique',
    region: 'Gaume, Belgique',
    type: 'pate-pressee-cuite',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=2940',
    aop: false,
    description: "Affiné à la bière trappiste d'Orval. Texture souple, notes maltées uniques.",
    intensite: 3,
    prixKg: 26
  }
]

// Options de filtres
const filtresType = [
  { value: '', label: 'Tous les types' },
  { value: 'pate-fraiche', label: 'Pâtes fraîches' },
  { value: 'pate-molle-croute-fleurie', label: 'Pâtes molles à croûte fleurie' },
  { value: 'pate-molle-croute-lavee', label: 'Pâtes molles à croûte lavée' },
  { value: 'pate-pressee-non-cuite', label: 'Pâtes pressées non cuites' },
  { value: 'pate-pressee-cuite', label: 'Pâtes pressées cuites' },
  { value: 'pate-persillee', label: 'Pâtes persillées' },
  { value: 'pate-fondue', label: 'Pâtes fondues' },
]

const filtresLait = [
  { value: '', label: 'Tous les laits' },
  { value: 'vache', label: 'Vache' },
  { value: 'chevre', label: 'Chèvre' },
  { value: 'brebis', label: 'Brebis' },
]

const filtresOrigine = [
  { value: '', label: 'Toutes origines' },
  { value: 'france', label: 'France' },
  { value: 'suisse', label: 'Suisse' },
  { value: 'belgique', label: 'Belgique' },
  { value: 'italie', label: 'Italie' },
]

export default function FromagesPage() {
  const [filtreType, setFiltreType] = useState<string>('')
  const [filtreLait, setFiltreLait] = useState<string>('')
  const [filtreOrigine, setFiltreOrigine] = useState<string>('')
  const [filtreAOP, setFiltreAOP] = useState<boolean>(false)

  // Fromages filtrés
  const fromagesFiltres = fromages.filter((fromage) => {
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
            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940"
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
              Plus de 150 fromages AOP et fermiers sélectionnés avec passion auprès des meilleurs artisans.
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
