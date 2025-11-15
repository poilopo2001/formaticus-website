'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Milk, Award, ChevronLeft, ShoppingCart } from 'lucide-react'

// Données enrichies du Comté Jeune
const fromage = {
  id: 1,
  slug: 'comte-jeune',
  nom: 'Comté Jeune',
  image: '/Séance Photo Nicolas 20220423/comte-jeune-03-composite.jpg',
  prix: 37.9,
  prixKg: 37.9,
  lait: 'vache',
  origine: 'France',
  region: 'Franche-Comté, France',
  aop: true,
  intensite: 3,

  // Description courte (pour le hero)
  descriptionCourte: 'Le Comté Jeune, un voyage gustatif au cœur du Jura. Sa pâte ivoire révèle des arômes délicats, témoins d\'un affinage respectueux et d\'un terroir d\'exception.',

  // Descriptions enrichies par l'IA
  description: 'Le Comté Jeune, un voyage gustatif au cœur du Jura. Sa pâte ivoire révèle des arômes délicats, témoins d\'un affinage respectueux et d\'un terroir d\'exception. Une promesse de douceur et d\'authenticité.',

  degustation: 'Ce Comté Jeune séduit par sa texture onctueuse et ses arômes délicats de beurre frais et de noisette. Son intensité est modérée, ce qui en fait un fromage accessible et agréable.',

  accords: 'Ce Comté se marie à merveille avec un vin blanc sec et fruité, comme un Jurançon sec aux notes d\'agrumes et de fruits exotiques, ou une bière d\'abbaye blonde, dont les saveurs maltées et épicées équilibreront sa douceur. Un Chablis premier cru offrira une minéralité complémentaire.',

  histoire: 'Le Comté est un fromage ancestral dont les origines remontent au Moyen Âge. Fabriqué dans les fruitières du Jura, il est le fruit d\'un savoir-faire unique et d\'une tradition fromagère profondément enracinée.',

  // Section Terroir
  terroir: {
    titre: 'Le Terroir',
    geographie: 'Le Comté Jeune est né dans le berceau du Massif Jurassien, une région de moyenne montagne aux paysages ondulants. Les vallées verdoyantes alternent avec les plateaux calcaires, offrant un environnement idéal pour l\'élevage. L\'altitude, variant entre 400 et 1500 mètres, influe directement sur la flore et donc sur le lait.',
    climat: 'Le climat du Jura est continental, caractérisé par des hivers rigoureux et des étés tempérés. Les précipitations, régulières tout au long de l\'année, favorisent la pousse d\'une herbe riche et variée, essentielle à la qualité du lait.',
    elevage: 'Les vaches de race Montbéliarde, reines de la région, paissent librement dans les prairies jurassiennes. Leur alimentation, composée principalement d\'herbe fraîche en été et de foin de qualité en hiver, confère au lait ses arômes si particuliers. Le respect du cycle naturel des animaux est primordial.',
    savoir_faire: 'Le savoir-faire fromager du Comté se transmet de génération en génération depuis des siècles. Chaque étape de la fabrication, du caillage à l\'affinage, est réalisée avec une attention méticuleuse, garantissant un produit d\'une qualité irréprochable.'
  },

  // Section Profil Gustatif
  profil_gustatif: {
    titre: 'Profil Gustatif Détaillé',
    visuel: 'Le Comté Jeune présente une pâte de couleur ivoire à jaune pâle, uniforme et brillante. Sa texture est lisse et peut présenter quelques petits "yeux" (trous) signe d\'une bonne fermentation. La croûte est fine, de couleur jaune paille.',
    texture: 'En bouche, le Comté Jeune offre une texture souple et fondante, légèrement élastique. Il est agréable à mâcher et ne présente pas de granulosité. Sa douceur est un atout.',
    aromes_primaires: 'Les arômes primaires dominants sont le beurre frais, la crème et la noisette fraîche. On retrouve également des notes lactiques agréables et discrètes.',
    aromes_secondaires: 'Des arômes secondaires subtils de fruits secs (amande, noisette grillée) et d\'herbes fraîches viennent complexifier le profil aromatique. Une légère pointe florale peut également se révéler.',
    evolution: 'L\'attaque est douce et beurrée, laissant rapidement place à des notes plus franches de noisette et de crème. La finale est longue et persistante, avec une légère amertume agréable qui appelle à une nouvelle dégustation. La longueur en bouche est notable.',
    temperature_service: 'Il est préférable de servir le Comté Jeune à température ambiante (environ 18-20°C) afin de libérer pleinement ses arômes.'
  },

  // Section Conservation
  conservation: {
    titre: 'Conservation et Service',
    temperature_conservation: 'Le Comté Jeune se conserve idéalement au réfrigérateur, dans sa partie la moins froide (entre 4 et 8°C).',
    avant_service: 'Sortez le Comté du réfrigérateur environ 30 minutes avant la dégustation. Cela permettra à la pâte de s\'assouplir et aux arômes de se développer pleinement.',
    coupe: 'Pour une dégustation optimale, coupez le Comté en fines tranches ou en petits dés. Cela permettra d\'apprécier au mieux sa texture fondante.',
    presentation: 'Présentez le Comté sur un plateau avec d\'autres fromages de caractère différent, accompagnés de fruits secs, de noix et de pain de campagne.',
    duree: 'Après ouverture, le Comté se conserve environ une semaine au réfrigérateur, enveloppé dans un papier sulfurisé ou un film alimentaire.'
  },

  // Données techniques
  producteur: 'Artisans Comtois',
  affinage: '6 à 8 mois minimum',
  pate: 'Pressée cuite, couleur ivoire à paille, texture souple et fondante',
  croute: 'Naturelle brossée, couleur brun doré',
  saveur: 'Arômes légers, beurrés et noisetés. Notes de fruits secs et de crème fraîche.',

  // Accords (tableau)
  accordsListe: [
    'Jurançon sec',
    'Vin blanc du Jura',
    'Bière d\'abbaye blonde',
    'Pain de campagne'
  ]
}

export default function TestProduitPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Bouton Retour */}
      <div className="bg-primary-950 border-b border-accent-600/20">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/fromages"
            className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Retour au catalogue</span>
          </Link>
        </div>
      </div>

      {/* Hero Section - Image + Info principale */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[600px] overflow-hidden shadow-2xl">
                <Image
                  src={fromage.image}
                  alt={fromage.nom}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Badge AOP */}
                {fromage.aop && (
                  <div className="absolute top-6 right-6 bg-accent-600 text-black px-6 py-3 text-sm tracking-[0.2em] uppercase font-medium shadow-lg">
                    AOP
                  </div>
                )}
              </div>
              {/* Ornement sous l'image */}
              <div className="flex justify-center mt-8">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Informations principales */}
            <div className="pt-8">
              {/* Catégorie */}
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                {fromage.region}
              </p>

              {/* Nom */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 leading-[1.1]">
                {fromage.nom}
              </h1>

              {/* Description courte */}
              <p className="text-xl text-primary-200 font-light leading-relaxed mb-10">
                {fromage.descriptionCourte}
              </p>

              {/* Caractéristiques en grid */}
              <div className="grid grid-cols-2 gap-8 mb-10">
                {/* Origine */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="tracking-[0.2em] uppercase text-xs">Origine</span>
                  </div>
                  <p className="text-white font-light text-lg">{fromage.region}</p>
                </div>

                {/* Type de lait */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-3">
                    <Milk className="w-4 h-4" />
                    <span className="tracking-[0.2em] uppercase text-xs">Lait</span>
                  </div>
                  <p className="text-white font-light text-lg capitalize">Lait de {fromage.lait}</p>
                </div>

                {/* Producteur */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-3">
                    <Award className="w-4 h-4" />
                    <span className="tracking-[0.2em] uppercase text-xs">Producteur</span>
                  </div>
                  <p className="text-white font-light text-lg">{fromage.producteur}</p>
                </div>

                {/* Affinage */}
                <div>
                  <div className="text-accent-600 text-xs tracking-[0.2em] uppercase mb-3">
                    Affinage
                  </div>
                  <p className="text-white font-light text-lg">{fromage.affinage}</p>
                </div>
              </div>

              {/* Intensité */}
              <div className="flex items-center gap-4 mb-10 pb-10 border-b border-accent-600/20">
                <span className="text-primary-300 text-xs tracking-[0.2em] uppercase">Intensité</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-10 h-2 transition-all duration-300 ${
                        level <= fromage.intensite ? 'bg-accent-600' : 'bg-gray-800'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-light text-lg">{fromage.intensite}/5</span>
              </div>

              {/* Prix */}
              <div className="flex items-baseline gap-3 mb-10">
                <span className="text-5xl font-light text-accent-600">{(fromage.prixKg / 5).toFixed(2)}€</span>
                <span className="text-primary-400 text-xl font-light">/200g</span>
              </div>

              {/* CTA Commander */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-12 py-5 bg-accent-600 text-black font-light tracking-[0.2em] text-sm uppercase hover:bg-accent-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Commander ce fromage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Description complète */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-px bg-accent-600" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase">
                  Découverte
                </p>
                <div className="w-16 h-px bg-accent-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white">
                Un Fromage d'Exception
              </h2>
            </div>

            <p className="text-lg text-primary-200 font-light leading-relaxed text-center">
              {fromage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Section Terroir */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                {fromage.terroir.titre}
              </h2>
              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Géographie */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Géographie
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.geographie}
                </p>
              </div>

              {/* Climat */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Climat
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.climat}
                </p>
              </div>

              {/* Élevage */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Élevage
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.elevage}
                </p>
              </div>

              {/* Savoir-faire */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Savoir-faire
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.savoir_faire}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dégustation */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-10">
              Notes de Dégustation
            </h2>

            <p className="text-xl text-primary-200 font-light leading-relaxed">
              {fromage.degustation}
            </p>
          </div>
        </div>
      </section>

      {/* Section Profil Gustatif Détaillé */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                {fromage.profil_gustatif.titre}
              </h2>
              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="space-y-12">
              {/* Analyse Visuelle */}
              <div className="bg-black p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Analyse Visuelle
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.profil_gustatif.visuel}
                </p>
              </div>

              {/* Texture en Bouche */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black p-8 border border-accent-600/20">
                  <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                    Texture en Bouche
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed text-lg">
                    {fromage.profil_gustatif.texture}
                  </p>
                </div>

                <div className="bg-black p-8 border border-accent-600/20">
                  <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                    Température de Service
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed text-lg">
                    {fromage.profil_gustatif.temperature_service}
                  </p>
                </div>
              </div>

              {/* Palette Aromatique */}
              <div className="bg-black p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-6 font-medium">
                  Palette Aromatique
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white text-sm mb-3 tracking-wider">Arômes Primaires</h4>
                    <p className="text-primary-200 font-light leading-relaxed">
                      {fromage.profil_gustatif.aromes_primaires}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm mb-3 tracking-wider">Arômes Secondaires</h4>
                    <p className="text-primary-200 font-light leading-relaxed">
                      {fromage.profil_gustatif.aromes_secondaires}
                    </p>
                  </div>
                </div>
              </div>

              {/* Évolution en Bouche */}
              <div className="bg-black p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Évolution en Bouche
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.profil_gustatif.evolution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Accords */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-6">
              Accords Recommandés
            </h2>
            <p className="text-center text-primary-300 font-light mb-12 text-lg">
              {fromage.accords}
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {fromage.accordsListe.map((accord, idx) => (
                <div
                  key={idx}
                  className="bg-black border border-accent-600/30 p-8 text-center hover:border-accent-600 hover:bg-primary-900 transition-all duration-300"
                >
                  <p className="text-white font-light text-lg">{accord}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-accent-600" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase">
                Histoire & Tradition
              </p>
              <div className="w-16 h-px bg-accent-600" />
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-10">
              L'Histoire du {fromage.nom}
            </h2>

            <p className="text-xl text-primary-200 font-light leading-relaxed">
              {fromage.histoire}
            </p>
          </div>
        </div>
      </section>

      {/* Section Conservation et Service */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                {fromage.conservation.titre}
              </h2>
              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Température de conservation */}
              <div className="bg-black p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Conservation
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.temperature_conservation}
                </p>
              </div>

              {/* Avant service */}
              <div className="bg-black p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Avant Dégustation
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.avant_service}
                </p>
              </div>

              {/* Coupe */}
              <div className="bg-black p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Coupe
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.coupe}
                </p>
              </div>

              {/* Présentation */}
              <div className="bg-black p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Présentation
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.presentation}
                </p>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="mt-8 bg-black p-8 border border-accent-600/30 text-center">
              <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                Durée de Conservation
              </h3>
              <p className="text-primary-200 font-light leading-relaxed text-lg">
                {fromage.conservation.duree}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <svg className="w-16 h-16 text-accent-600 mx-auto mb-8" viewBox="0 0 64 64" fill="none">
              <path d="M32 0l4 28 28 4-28 4-4 28-4-28L0 32l28-4z" fill="currentColor"/>
              <circle cx="32" cy="32" r="4" fill="black"/>
            </svg>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
              Prêt à déguster ce fromage d'exception ?
            </h2>
            <p className="text-lg text-primary-300 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Commandez dès maintenant ou rejoignez-nous lors d'une soirée dégustation pour découvrir ce fromage et bien d'autres.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-5 bg-accent-600 text-black font-light tracking-[0.2em] text-sm uppercase hover:bg-accent-700 transition-all duration-300"
              >
                Commander
              </Link>

              <Link
                href="/evenements"
                className="px-12 py-5 border border-accent-600 text-accent-600 font-light tracking-[0.2em] text-sm uppercase hover:bg-accent-600 hover:text-black transition-all duration-300"
              >
                Nos Soirées
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
