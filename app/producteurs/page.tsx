'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Award, Heart } from 'lucide-react'
import { Ornament } from '@/components/ui/Ornament'

// Données des producteurs partenaires
const producteurs = [
  {
    id: 1,
    nom: "Fromagerie Gaugry",
    region: "Brochon, Bourgogne, France",
    specialite: "Époisses AOP",
    image: "https://images.unsplash.com/photo-1554009975-d74653b879f1?q=80&w=2940",
    description: "Depuis 1946, la Fromagerie Gaugry perpétue le savoir-faire ancestral de l'Époisses. Famille passionnée, gardienne d'une tradition fromagère d'exception.",
    valeurs: ["AOP", "Artisanal", "Familial"]
  },
  {
    id: 2,
    nom: "Fromagerie Beillevaire",
    region: "Machecoul, Pays de la Loire, France",
    specialite: "Beurre et fromages affinés",
    image: "https://images.unsplash.com/photo-1628180188089-dc64ab3db923?q=80&w=2940",
    description: "Meilleurs Ouvriers de France, les artisans Beillevaire sélectionnent et affinent des fromages d'exception dans le respect des terroirs.",
    valeurs: ["MOF", "Affinage", "Excellence"]
  },
  {
    id: 3,
    nom: "Fromagerie du Val d'Hérens",
    region: "Valais, Suisse",
    specialite: "Raclette AOP du Valais",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2940",
    description: "Au cœur des Alpes suisses, cette fromagerie produit la véritable Raclette du Valais AOP, fromage emblématique des soirées conviviales.",
    valeurs: ["AOP", "Montagne", "Tradition"]
  },
  {
    id: 4,
    nom: "Fromagerie Marcel Petite",
    region: "Franche-Comté, France",
    specialite: "Comté Extra Vieux",
    image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=2940",
    description: "Affineurs passionnés depuis 1966, ils sélectionnent et élèvent les meilleurs Comté dans leurs caves du Jura, pour une complexité aromatique unique.",
    valeurs: ["Affinage", "Sélection", "Patience"]
  },
  {
    id: 5,
    nom: "Fromagerie de la Mer de Glace",
    region: "Chamonix, Haute-Savoie, France",
    specialite: "Reblochon fermier et Tomme",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940",
    description: "Face au Mont-Blanc, cette fromagerie d'alpage produit des fromages savoyards authentiques selon des méthodes ancestrales transmises de génération en génération.",
    valeurs: ["Alpage", "Fermier", "Savoie"]
  },
  {
    id: 6,
    nom: "Fromagerie d'Orval",
    region: "Gaume, Belgique",
    specialite: "Fromage d'Orval à la bière",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940",
    description: "À deux pas du Luxembourg, cette fromagerie produit un fromage unique affiné à la bière trappiste d'Orval, mariage subtil entre tradition monastique et art fromager.",
    valeurs: ["Monastique", "Local", "Unique"]
  }
]

export default function ProducteursPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940"
            alt="Nos Producteurs - Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Artisans Partenaires
            </p>

            {/* Ornement décoratif */}
            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Nos Producteurs<br />d'Exception
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              Découvrez les artisans passionnés qui perpétuent les traditions fromagères ancestrales et font la richesse de notre sélection.
            </p>
          </div>
        </div>
      </section>

      {/* Section Engagement */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Notre Engagement
            </p>

            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Des Artisans,<br />Une Passion Commune
            </h2>

            <div className="space-y-6 text-lg text-primary-200 font-light leading-relaxed">
              <p>
                Chez <span className="text-accent-600">Formaticus</span>, nous croyons que chaque fromage raconte une histoire.
                Celle d'un terroir unique, d'un savoir-faire transmis de génération en génération, et d'une passion dévorante pour l'excellence.
              </p>
              <p>
                Nous parcourons les routes de France, de Suisse et de Belgique pour rencontrer les artisans qui partagent nos valeurs :
                <span className="text-white"> authenticité, qualité et respect des traditions</span>.
              </p>
              <p>
                Chaque producteur est sélectionné avec soin pour la qualité exceptionnelle de ses fromages,
                son engagement envers les méthodes artisanales, et sa capacité à transmettre l'âme de son terroir dans chaque meule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid des Producteurs */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {producteurs.map((producteur) => (
              <div
                key={producteur.id}
                className="group text-center"
              >
                {/* Ornement étoile top avec pulse au hover */}
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                {/* Image avec glow et lift effect */}
                <div className="relative h-96 mb-8 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src={producteur.image}
                    alt={producteur.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay avec description au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                    <div className="text-white/90 text-sm font-light leading-relaxed text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-accent-600" />
                        <span className="text-accent-600 text-xs">{producteur.region}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-accent-600" />
                        <span className="text-xs">{producteur.specialite}</span>
                      </div>
                      <p>{producteur.description}</p>
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

                {/* Nom */}
                <h3 className="text-3xl font-serif font-light text-white mb-4 group-hover:text-accent-600 transition-colors duration-300">
                  {producteur.nom}
                </h3>

                {/* Valeurs / Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {producteur.valeurs.map((valeur, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1 border border-accent-600/30 text-accent-600 text-[10px] tracking-[0.2em] uppercase"
                    >
                      {valeur}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="px-10 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                  Découvrir
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Excellence & Terroir
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Goûtez l'Excellence<br />de nos Terroirs
            </h2>
            <p className="text-primary-200 text-lg mb-12 leading-relaxed font-light max-w-2xl mx-auto">
              Découvrez notre sélection de fromages issus de ces artisans d'exception,
              ou rejoignez-nous lors d'une soirée conviviale pour une dégustation guidée.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/fromages"
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Voir nos Fromages
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
