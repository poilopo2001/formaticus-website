'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Milk, Award, ChevronLeft, ShoppingCart } from 'lucide-react'
import { notFound } from 'next/navigation'

// Types
type TypeFromage = 'pate-molle' | 'pate-pressee' | 'pate-persillee' | 'chevre' | 'brebis'
type TypeLait = 'vache' | 'chevre' | 'brebis'

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
  producteur: string
  affinage: string
  pate: string
  croute: string
  saveur: string
  accord: string[]
  histoire: string
}

// Base de données des fromages (même que catalogue + infos détaillées)
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
    prixKg: 32,
    producteur: 'Fromagerie Marcel Petite',
    affinage: '24 mois minimum en caves du Jura',
    pate: 'Pressée cuite, couleur ivoire à dorée',
    croute: 'Naturelle, brossée, couleur brun doré',
    saveur: 'Complexe et persistante. Notes de noisette grillée, caramel, fruits secs et touches lactiques. Texture fondante et cristaux de tyrosine qui croquent sous la dent.',
    accord: ['Vin jaune du Jura', 'Côtes du Jura blanc', 'Champagne millésimé', 'Noix et fruits secs'],
    histoire: 'Le Comté est le fromage AOP le plus consommé en France. Fruit d\'un savoir-faire ancestral, chaque meule de 40kg nécessite 450 litres de lait cru. L\'affinage de 24 mois révèle toute la complexité aromatique de ce trésor du Jura.'
  },
  {
    id: 2,
    slug: 'epoisses-aop',
    nom: 'Époisses AOP',
    origine: 'france',
    region: 'Bourgogne, France',
    type: 'pate-molle',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
    aop: true,
    description: 'Fromage à croûte lavée au Marc de Bourgogne. Puissant et crémeux.',
    intensite: 5,
    prixKg: 38,
    producteur: 'Fromagerie Gaugry',
    affinage: '4 à 8 semaines, lavé au Marc de Bourgogne',
    pate: 'Molle, crémeuse, couleur crème à beige',
    croute: 'Lavée, brillante, orange à rouge brique',
    saveur: 'Puissante et persistante. Arômes de cave humide, champignon, sous-bois. Texture onctueuse qui coule à maturité. Finale longue et complexe.',
    accord: ['Marc de Bourgogne', 'Gevrey-Chambertin', 'Pain d\'épices', 'Pommes de terre chaudes'],
    histoire: 'Créé au XVIe siècle par les moines de l\'Abbaye de Cîteaux, l\'Époisses fut le fromage préféré de Brillat-Savarin qui le surnomma "le roi des fromages". Sa fabrication traditionnelle et son lavage au Marc de Bourgogne en font une icône de la gastronomie bourguignonne.'
  },
  {
    id: 3,
    slug: 'raclette-valais-aop',
    nom: 'Raclette du Valais AOP',
    origine: 'suisse',
    region: 'Valais, Suisse',
    type: 'pate-pressee',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2940',
    aop: true,
    description: 'Le vrai fromage à raclette suisse. Fondant et savoureux.',
    intensite: 3,
    prixKg: 28,
    producteur: 'Fromagerie du Val d\'Hérens',
    affinage: '3 à 6 mois en caves d\'alpage',
    pate: 'Semi-ferme, souple, couleur ivoire',
    croute: 'Naturelle, brossée, couleur brune',
    saveur: 'Douce et lactique à froid. Révèle des arômes fruités et noisette une fois fondue. Texture crémeuse et fondante idéale pour la raclette.',
    accord: ['Fendant du Valais', 'Chasselas', 'Pommes de terre', 'Charcuterie valaisanne'],
    histoire: 'Né dans les alpages du Valais, ce fromage était traditionnellement fondu au feu de bois par les bergers. La raclette est devenue un symbole de convivialité et de tradition suisse, parfaite pour les soirées hivernales.'
  },
  {
    id: 4,
    slug: 'roquefort-papillon',
    nom: 'Roquefort Papillon',
    origine: 'france',
    region: 'Aveyron, France',
    type: 'pate-persillee',
    lait: 'brebis',
    image: 'https://images.unsplash.com/photo-1551462576-8b37b8a79fd6?q=80&w=2940',
    aop: true,
    description: 'Le roi des bleus. Affiné dans les caves de Roquefort-sur-Soulzon.',
    intensite: 5,
    prixKg: 42,
    producteur: 'Société des Caves',
    affinage: 'Minimum 3 mois dans les caves naturelles de Roquefort',
    pate: 'Persillée, crémeuse, marbrée de bleu-vert',
    croute: 'Absente, enveloppé dans du papier étain',
    saveur: 'Puissante et complexe. Notes de champignon, cave, noisette. Texture fondante et onctueuse. Équilibre parfait entre le salé et les arômes lactiques du lait de brebis.',
    accord: ['Sauternes', 'Porto', 'Miel', 'Pain aux noix', 'Poire'],
    histoire: 'Selon la légende, un jeune berger oublia son casse-croûte dans une grotte. Quelques semaines plus tard, il découvrit que son pain et son fromage étaient couverts de moisissures bleues. Il goûta et... le Roquefort était né ! Seuls les fromages affinés dans les caves naturelles de Roquefort-sur-Soulzon peuvent porter ce nom prestigieux.'
  },
  {
    id: 5,
    slug: 'reblochon-fermier',
    nom: 'Reblochon Fermier AOP',
    origine: 'france',
    region: 'Haute-Savoie, France',
    type: 'pate-molle',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
    aop: true,
    description: 'Fromage savoyard emblématique, crémeux et onctueux.',
    intensite: 3,
    prixKg: 26,
    producteur: 'Fromagerie de la Mer de Glace',
    affinage: '2 à 8 semaines en caves humides',
    pate: 'Molle, crémeuse, couleur jaune pâle',
    croute: 'Fleurie, couleur safran orangée',
    saveur: 'Douce et crémeuse. Notes de noisette, crème fraîche et champignon. Texture fondante qui révèle toute sa richesse en bouche.',
    accord: ['Vin blanc de Savoie', 'Roussette', 'Tartiflette', 'Pommes de terre'],
    histoire: 'Le Reblochon tire son nom du terme savoyard "reblocher" qui signifie traire une seconde fois. Au Moyen Âge, les fermiers devaient payer une taxe sur la quantité de lait produite. Ils trichaient en ne trayant pas complètement leurs vaches lors du passage du contrôleur, puis effectuaient une seconde traite plus riche en matières grasses... donnant naissance à ce fromage d\'exception !'
  },
  {
    id: 6,
    slug: 'crottin-chavignol',
    nom: 'Crottin de Chavignol AOP',
    origine: 'france',
    region: 'Sancerre, France',
    type: 'chevre',
    lait: 'chevre',
    image: 'https://images.unsplash.com/photo-1533576387945-7a917ab80a5c?q=80&w=2940',
    aop: true,
    description: 'Petit fromage de chèvre du Berry. Caractère affirmé.',
    intensite: 4,
    prixKg: 35,
    producteur: 'Chèvrerie de Chavignol',
    affinage: '2 semaines à plusieurs mois',
    pate: 'Ferme à sèche selon affinage, couleur blanche à grise',
    croute: 'Naturelle, fine, bleutée',
    saveur: 'Jeune: doux et lacté. Affiné: corsé, notes de noisette et foin. Extra-vieux: très sec, saveurs intenses et persistantes.',
    accord: ['Sancerre blanc', 'Pouilly-Fumé', 'Salade de chèvre chaud', 'Miel de châtaignier'],
    histoire: 'Produit depuis le XVIe siècle dans le Berry, ce petit fromage rond doit son nom à sa forme et taille qui rappelaient une lampe à huile appelée "crot" en patois local. Il est l\'accompagnement traditionnel du Sancerre, mariage parfait entre le vin et le fromage du même terroir.'
  },
  {
    id: 7,
    slug: 'beaufort-ete',
    nom: 'Beaufort d\'Été AOP',
    origine: 'france',
    region: 'Savoie, France',
    type: 'pate-pressee',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
    aop: true,
    description: 'Prince des Gruyères. Production estivale d\'alpage.',
    intensite: 3,
    prixKg: 36,
    producteur: 'Coopérative de Beaufort',
    affinage: '5 à 12 mois en caves de montagne',
    pate: 'Pressée cuite, couleur jaune ivoire',
    croute: 'Naturelle, dure, couleur brun clair',
    saveur: 'Fruitée et florale. Notes de beurre, miel, noisette et fleurs des alpages. Texture fondante et arômes longs en bouche.',
    accord: ['Vin blanc de Savoie', 'Apremont', 'Fondue savoyarde', 'Gratin dauphinois'],
    histoire: 'Surnommé le "Prince des Gruyères" par Brillat-Savarin, le Beaufort d\'été est produit avec le lait des vaches qui paissent dans les alpages entre juin et octobre. Les fleurs d\'altitude donnent au fromage sa couleur jaune intense et ses arômes floraux uniques.'
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
    description: 'Icône française. Crémeux et authentique au lait cru.',
    intensite: 3,
    prixKg: 24,
    producteur: 'Fromagerie Beillevaire',
    affinage: 'Minimum 21 jours',
    pate: 'Molle, onctueuse, couleur jaune pâle',
    croute: 'Fleurie, duvet blanc',
    saveur: 'Équilibrée et crémeuse. Notes de champignon, beurre et noisette. Cœur coulant à maturité optimale.',
    accord: ['Cidre normand', 'Calvados', 'Pain de campagne', 'Pomme'],
    histoire: 'Créé en 1791 par Marie Harel à Camembert (Orne), ce fromage devint célèbre grâce à Napoléon III qui l\'adopta. L\'invention de la boîte en bois permit son transport et sa diffusion dans toute la France, faisant de lui le symbole du fromage français.'
  },
  {
    id: 9,
    slug: 'pecorino-romano',
    nom: 'Pecorino Romano DOP',
    origine: 'italie',
    region: 'Latium, Italie',
    type: 'brebis',
    lait: 'brebis',
    image: 'https://images.unsplash.com/photo-1542200842-5fc2b10e2b5b?q=80&w=2940',
    aop: true,
    description: 'Fromage italien traditionnel. Salé et corsé, idéal pour râper.',
    intensite: 5,
    prixKg: 30,
    producteur: 'Caseificio Tradizionale',
    affinage: 'Minimum 8 mois, jusqu\'à 12 mois',
    pate: 'Dure, granuleuse, couleur blanche à paille',
    croute: 'Dure, lisse, couleur noire ou brune',
    saveur: 'Salée et piquante. Saveur intense de brebis, légèrement épicée. Texture friable qui se râpe parfaitement.',
    accord: ['Chianti', 'Pâtes cacio e pepe', 'Fèves fraîches', 'Poires'],
    histoire: 'Fromage ancestral consommé par les légionnaires romains qui en emportaient dans leurs rations. Sa longue conservation et sa richesse nutritive en faisaient un aliment de choix pour les longues campagnes militaires. Tradition séculaire maintenue aujourd\'hui.'
  },
  {
    id: 10,
    slug: 'sainte-maure-touraine',
    nom: 'Sainte-Maure de Touraine AOP',
    origine: 'france',
    region: 'Touraine, France',
    type: 'chevre',
    lait: 'chevre',
    image: 'https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=2940',
    aop: true,
    description: 'Bûche de chèvre cendrée traversée d\'une paille de seigle.',
    intensite: 3,
    prixKg: 32,
    producteur: 'Chèvrerie de Touraine',
    affinage: '10 jours minimum',
    pate: 'Mi-ferme, couleur blanche',
    croute: 'Cendrée au charbon végétal, couleur gris-bleu',
    saveur: 'Douce et caprine. Notes de noisette, crème et sous-bois. La cendre apporte une touche minérale subtile.',
    accord: ['Sauvignon de Touraine', 'Sancerre', 'Miel d\'acacia', 'Salade verte'],
    histoire: 'Reconnaissable à sa paille de seigle qui la traverse et maintient sa forme, la Sainte-Maure porte le nom d\'un village de Touraine. La paille gravée garantit l\'origine et l\'authenticité du fromage. Tradition fromagère qui remonte au VIIIe siècle.'
  },
  {
    id: 11,
    slug: 'munster-gerome',
    nom: 'Munster-Géromé AOP',
    origine: 'france',
    region: 'Vosges, France',
    type: 'pate-molle',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940',
    aop: true,
    description: 'Fromage vosgien à croûte lavée. Puissant et onctueux.',
    intensite: 5,
    prixKg: 27,
    producteur: 'Fromagerie des Hautes Vosges',
    affinage: '21 jours à 3 mois, lavé régulièrement',
    pate: 'Molle, onctueuse, couleur jaune',
    croute: 'Lavée, lisse, orangée à rouge',
    saveur: 'Puissante et persistante. Arômes de cave, champignon, épices. Texture crémeuse qui fond en bouche. Contraste entre l\'odeur forte et le goût doux.',
    accord: ['Gewurztraminer', 'Pinot Gris d\'Alsace', 'Cumin', 'Pommes de terre'],
    histoire: 'Créé au VIIe siècle par les moines bénédictins de la vallée de Munster, ce fromage fut longtemps appelé "fromage de monastère". Les lavages réguliers à l\'eau salée développent sa croûte orange caractéristique et ses arômes puissants.'
  },
  {
    id: 12,
    slug: 'fromage-orval',
    nom: 'Fromage d\'Orval',
    origine: 'belgique',
    region: 'Gaume, Belgique',
    type: 'pate-molle',
    lait: 'vache',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
    aop: false,
    description: 'Fromage unique affiné à la bière trappiste d\'Orval.',
    intensite: 4,
    prixKg: 34,
    producteur: 'Fromagerie d\'Orval',
    affinage: '2 à 3 mois, lavé à la bière Orval',
    pate: 'Semi-ferme, souple, couleur crème',
    croute: 'Lavée à la bière, orangée',
    saveur: 'Complexe et aromatique. Notes maltées de la bière, caramel, épices douces. Amertume subtile qui s\'équilibre avec les notes lactiques.',
    accord: ['Bière Orval', 'Bières trappistes', 'Pain d\'Abbaye', 'Charcuterie ardennaise'],
    histoire: 'Produit à proximité de la célèbre Abbaye d\'Orval, ce fromage est lavé avec la bière trappiste brassée par les moines. Cette tradition monastique unique crée un mariage parfait entre deux savoir-faire d\'exception.'
  }
]

// Fromages similaires basés sur le type
function getFromagesSimilaires(fromageActuel: Fromage): Fromage[] {
  return fromages
    .filter(f => f.type === fromageActuel.type && f.id !== fromageActuel.id)
    .slice(0, 3)
}

export default function FromageDetailPage({ params }: { params: { slug: string } }) {
  // Trouver le fromage par son slug
  const fromage = fromages.find(f => f.slug === params.slug)

  // Si le fromage n'existe pas, afficher 404
  if (!fromage) {
    notFound()
  }

  const fromagesSimilaires = getFromagesSimilaires(fromage)

  return (
    <main className="min-h-screen bg-primary-900">
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
      <section className="py-16 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src={fromage.image}
                alt={fromage.nom}
                fill
                className="object-cover"
                priority
              />
              {/* Badge AOP */}
              {fromage.aop && (
                <div className="absolute top-6 right-6 bg-accent-600 text-primary-900 px-4 py-2 text-sm tracking-wider uppercase font-light">
                  AOP
                </div>
              )}
              {/* Cadre doré décoratif */}
              <div className="absolute inset-6 border border-accent-600/30" />
            </div>

            {/* Informations principales */}
            <div>
              {/* Catégorie */}
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-4">
                {fromage.region}
              </p>

              {/* Nom */}
              <h1 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
                {fromage.nom}
              </h1>

              {/* Description courte */}
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                {fromage.description}
              </p>

              {/* Caractéristiques en grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Origine */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="tracking-wider uppercase text-xs">Origine</span>
                  </div>
                  <p className="text-white font-light">{fromage.region}</p>
                </div>

                {/* Type de lait */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-2">
                    <Milk className="w-4 h-4" />
                    <span className="tracking-wider uppercase text-xs">Lait</span>
                  </div>
                  <p className="text-white font-light capitalize">Lait de {fromage.lait}</p>
                </div>

                {/* Producteur */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-2">
                    <Award className="w-4 h-4" />
                    <span className="tracking-wider uppercase text-xs">Producteur</span>
                  </div>
                  <p className="text-white font-light">{fromage.producteur}</p>
                </div>

                {/* Affinage */}
                <div>
                  <div className="text-accent-600 text-xs tracking-wider uppercase mb-2">
                    Affinage
                  </div>
                  <p className="text-white font-light">{fromage.affinage}</p>
                </div>
              </div>

              {/* Intensité */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-gray-500 text-xs tracking-wider uppercase">Intensité</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-8 h-2 transition-colors ${
                        level <= fromage.intensite ? 'bg-accent-600' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-light">{fromage.intensite}/5</span>
              </div>

              {/* Prix */}
              <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-accent-600/20">
                <span className="text-4xl font-light text-accent-600">{fromage.prixKg}€</span>
                <span className="text-gray-500 text-lg">/kg</span>
              </div>

              {/* CTA Commander */}
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-accent-600 text-primary-900 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-accent-700"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="relative z-10">Commander ce fromage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Caractéristiques détaillées */}
      <section className="py-16 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white text-center mb-12">
              Caractéristiques
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Pâte */}
              <div className="bg-primary-950 p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-wider uppercase text-xs mb-4">Pâte</h3>
                <p className="text-gray-300 font-light leading-relaxed">{fromage.pate}</p>
              </div>

              {/* Croûte */}
              <div className="bg-primary-950 p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-wider uppercase text-xs mb-4">Croûte</h3>
                <p className="text-gray-300 font-light leading-relaxed">{fromage.croute}</p>
              </div>

              {/* Saveur */}
              <div className="bg-primary-950 p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-wider uppercase text-xs mb-4">Saveur</h3>
                <p className="text-gray-300 font-light leading-relaxed">{fromage.saveur}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Accords */}
      <section className="py-16 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white text-center mb-4">
              Accords Recommandés
            </h2>
            <p className="text-center text-gray-400 font-light mb-12">
              Sublimez votre dégustation avec ces associations parfaites
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {fromage.accord.map((accord, idx) => (
                <div
                  key={idx}
                  className="bg-primary-900 border border-accent-600/30 p-6 text-center hover:border-accent-600 transition-colors duration-300"
                >
                  <p className="text-white font-light">{accord}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="py-16 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent-600" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase">
                Histoire & Tradition
              </p>
              <div className="w-12 h-px bg-accent-600" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-8">
              L'Histoire du {fromage.nom}
            </h2>

            <p className="text-lg text-gray-300 font-light leading-relaxed">
              {fromage.histoire}
            </p>
          </div>
        </div>
      </section>

      {/* Section Fromages Similaires */}
      {fromagesSimilaires.length > 0 && (
        <section className="py-16 bg-primary-950">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white text-center mb-12">
                Fromages Similaires
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {fromagesSimilaires.map((fromage) => (
                  <Link
                    key={fromage.id}
                    href={`/fromages/${fromage.slug}`}
                    className="group bg-primary-900 overflow-hidden hover:bg-primary-800 transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={fromage.image}
                        alt={fromage.nom}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {fromage.aop && (
                        <div className="absolute top-4 right-4 bg-accent-600 text-primary-900 px-3 py-1 text-xs tracking-wider uppercase">
                          AOP
                        </div>
                      )}
                      <div className="absolute inset-0 bg-accent-600/0 group-hover:bg-accent-600/10 transition-all duration-500" />
                    </div>

                    {/* Contenu */}
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-light text-white mb-2 group-hover:text-accent-600 transition-colors duration-300">
                        {fromage.nom}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">{fromage.region}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-light text-accent-600">{fromage.prixKg}€</span>
                        <span className="text-gray-500 text-sm">/kg</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-16 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Prêt à déguster ce fromage d'exception ?
            </h2>
            <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed">
              Commandez dès maintenant ou rejoignez-nous lors d'une soirée dégustation pour découvrir ce fromage et bien d'autres.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#contact"
                className="group relative px-10 py-4 bg-accent-600 text-primary-900 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-accent-700"
              >
                <span className="relative z-10">Commander</span>
              </Link>

              <Link
                href="/#events"
                className="group relative px-10 py-4 border-2 border-accent-600 text-accent-600 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:text-primary-900"
              >
                <span className="relative z-10">Nos Soirées</span>
                <div className="absolute inset-0 bg-accent-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
