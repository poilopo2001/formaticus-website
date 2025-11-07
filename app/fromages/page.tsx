'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MapPin, Milk, ChevronDown } from 'lucide-react'

// Types de fromages
type TypeFromage = 'pate-molle' | 'pate-pressee' | 'pate-persillee' | 'chevre' | 'brebis'
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
    type: 'pate-pressee',
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
    type: 'pate-molle',
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
    type: 'pate-pressee',
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
    type: 'pate-molle',
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
    type: 'chevre',
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
    type: 'pate-pressee',
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
    type: 'pate-molle',
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
    type: 'pate-pressee',
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
    type: 'chevre',
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
    type: 'pate-molle',
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
    type: 'pate-pressee',
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
  { value: 'pate-molle', label: 'Pâte Molle' },
  { value: 'pate-pressee', label: 'Pâte Pressée' },
  { value: 'pate-persillee', label: 'Pâte Persillée' },
  { value: 'chevre', label: 'Chèvre' },
  { value: 'brebis', label: 'Brebis' },
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
    <main className="min-h-screen bg-primary-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940"
            alt="Notre Sélection de Fromages - Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Sélection Artisanale
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-8 leading-tight">
              Notre Cave Affinée
            </h1>

            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Plus de 150 fromages AOP et fermiers sélectionnés avec passion auprès des meilleurs artisans.
            </p>
          </div>
        </div>
      </section>

      {/* Section Filtres */}
      <section className="py-12 bg-primary-950 border-b border-accent-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-accent-600 text-sm tracking-wider uppercase text-center mb-8">
              Affiner votre recherche
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="relative">
                <label className="block text-gray-400 text-xs tracking-wider uppercase mb-2">
                  Type de fromage
                </label>
                <div className="relative">
                  <select
                    value={filtreType}
                    onChange={(e) => setFiltreType(e.target.value)}
                    className="w-full bg-primary-900 border border-accent-600/30 text-white px-4 py-3 appearance-none cursor-pointer focus:border-accent-600 focus:outline-none transition-colors"
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
                <label className="block text-gray-400 text-xs tracking-wider uppercase mb-2">
                  Type de lait
                </label>
                <div className="relative">
                  <select
                    value={filtreLait}
                    onChange={(e) => setFiltreLait(e.target.value)}
                    className="w-full bg-primary-900 border border-accent-600/30 text-white px-4 py-3 appearance-none cursor-pointer focus:border-accent-600 focus:outline-none transition-colors"
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
                <label className="block text-gray-400 text-xs tracking-wider uppercase mb-2">
                  Origine
                </label>
                <div className="relative">
                  <select
                    value={filtreOrigine}
                    onChange={(e) => setFiltreOrigine(e.target.value)}
                    className="w-full bg-primary-900 border border-accent-600/30 text-white px-4 py-3 appearance-none cursor-pointer focus:border-accent-600 focus:outline-none transition-colors"
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
                <label className="block text-gray-400 text-xs tracking-wider uppercase mb-2">
                  Appellation
                </label>
                <button
                  onClick={() => setFiltreAOP(!filtreAOP)}
                  className={`w-full border px-4 py-3 text-left transition-all duration-300 ${
                    filtreAOP
                      ? 'bg-accent-600 border-accent-600 text-primary-900'
                      : 'bg-primary-900 border-accent-600/30 text-white hover:border-accent-600'
                  }`}
                >
                  AOP / IGP uniquement
                </button>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-8">
              <span className="text-accent-600 font-light">{fromagesFiltres.length}</span> fromage{fromagesFiltres.length > 1 ? 's' : ''} trouvé{fromagesFiltres.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Catalogue de fromages */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fromagesFiltres.map((fromage) => (
              <Link
                key={fromage.id}
                href={`/fromages/${fromage.slug}`}
                className="group relative bg-primary-950 overflow-hidden hover:bg-primary-900 transition-all duration-500"
              >
                {fromage.aop && (
                  <div className="absolute top-4 right-4 z-20 bg-accent-600 text-primary-900 px-3 py-1 text-xs tracking-wider uppercase font-light">
                    AOP
                  </div>
                )}

                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={fromage.image}
                    alt={fromage.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent-600/0 group-hover:bg-accent-600/10 transition-all duration-500" />
                  <div className="absolute inset-4 border border-accent-600/0 group-hover:border-accent-600/50 transition-all duration-500" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-light text-white mb-3 group-hover:text-accent-600 transition-colors duration-300">
                    {fromage.nom}
                  </h3>

                  <div className="flex items-center gap-2 text-accent-600/70 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{fromage.region}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Milk className="w-4 h-4 text-accent-600" />
                    <span className="capitalize">Lait de {fromage.lait}</span>
                  </div>

                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-4">
                    {fromage.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-500 text-xs tracking-wider uppercase">Intensité</span>
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

                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-light text-accent-600">{fromage.prixKg}€</span>
                    <span className="text-gray-500 text-sm">/kg</span>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-accent-600/50 to-transparent" />
              </Link>
            ))}
          </div>

          {fromagesFiltres.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg font-light mb-6">
                Aucun fromage ne correspond à vos critères.
              </p>
              <button
                onClick={() => {
                  setFiltreType('')
                  setFiltreLait('')
                  setFiltreOrigine('')
                  setFiltreAOP(false)
                }}
                className="px-8 py-3 border border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-primary-900 transition-all duration-300 tracking-wider uppercase text-sm"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
              Besoin de Conseils ?
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
              Nos fromagers passionnés vous guident dans le choix de vos fromages lors de nos dégustations guidées.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/producteurs"
                className="group relative px-10 py-4 border-2 border-accent-600 text-accent-600 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:text-primary-900"
              >
                <span className="relative z-10">Nos Producteurs</span>
                <div className="absolute inset-0 bg-accent-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/#events"
                className="group relative px-10 py-4 bg-accent-600 text-primary-900 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-accent-700"
              >
                <span className="relative z-10">Réserver une Soirée</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
