'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Award, Heart } from 'lucide-react'

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
    <main className="min-h-screen bg-primary-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940"
            alt="Nos Producteurs - Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Artisans Partenaires
            </p>

            {/* Ornement décoratif */}
            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-8 leading-tight">
              Nos Producteurs
            </h1>

            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
              Découvrez les artisans passionnés qui perpétuent les traditions fromagères ancestrales et font la richesse de notre sélection.
            </p>
          </div>
        </div>
      </section>

      {/* Section Engagement */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Heart className="w-5 h-5 text-accent-600" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase">
                Notre Engagement
              </p>
              <Heart className="w-5 h-5 text-accent-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
              Des Artisans, Une Passion Commune
            </h2>

            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
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
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {producteurs.map((producteur) => (
              <div
                key={producteur.id}
                className="group relative bg-primary-950 overflow-hidden hover:bg-primary-900 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={producteur.image}
                    alt={producteur.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay doré au hover */}
                  <div className="absolute inset-0 bg-accent-600/0 group-hover:bg-accent-600/10 transition-all duration-500" />

                  {/* Cadre doré qui apparaît au hover */}
                  <div className="absolute inset-4 border border-accent-600/0 group-hover:border-accent-600/50 transition-all duration-500" />
                </div>

                {/* Contenu */}
                <div className="p-8">
                  {/* Nom */}
                  <h3 className="text-2xl font-serif font-light text-white mb-2 group-hover:text-accent-600 transition-colors duration-300">
                    {producteur.nom}
                  </h3>

                  {/* Région */}
                  <div className="flex items-center gap-2 text-accent-600/70 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{producteur.region}</span>
                  </div>

                  {/* Spécialité */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <Award className="w-4 h-4 text-accent-600" />
                    <span>{producteur.specialite}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                    {producteur.description}
                  </p>

                  {/* Valeurs / Tags */}
                  <div className="flex flex-wrap gap-2">
                    {producteur.valeurs.map((valeur, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border border-accent-600/30 text-accent-600 text-xs tracking-wider uppercase"
                      >
                        {valeur}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ligne dorée en bas */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent-600/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
              Goûtez l'Excellence de nos Terroirs
            </h2>
            <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
              Découvrez notre sélection de fromages issus de ces artisans d'exception,
              ou rejoignez-nous lors d'une soirée conviviale pour une dégustation guidée.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/fromages"
                className="group relative px-10 py-4 border-2 border-accent-600 text-accent-600 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:text-primary-900"
              >
                <span className="relative z-10">Voir nos Fromages</span>
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
