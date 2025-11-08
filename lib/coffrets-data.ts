// Données des coffrets fromage-vin

export interface Coffret {
  id: number
  nom: string
  slug: string
  image: string
  prix: number
  description: string
  contenu: string[]
  ideal: string
  badge: string
  caracteristiques?: string[]
  accords?: string[]
}

export const coffrets: Coffret[] = [
  {
    id: 1,
    nom: 'Coffret Découverte',
    slug: 'coffret-decouverte',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
    prix: 45,
    description: 'Un voyage gustatif à travers 6 fromages AOP soigneusement sélectionnés pour découvrir la diversité fromagère française et européenne.',
    contenu: [
      'Camembert de Normandie AOP',
      'Comté 18 mois AOP',
      'Roquefort AOP',
      'Crottin de Chavignol AOP',
      'Reblochon fermier AOP',
      'Morbier AOP'
    ],
    ideal: 'Parfait pour découvrir les grands classiques',
    badge: 'Best-Seller',
    caracteristiques: [
      '6 fromages AOP sélectionnés',
      'Poids total : environ 1.2 kg',
      'Livret de dégustation inclus',
      'Emballage cadeau premium',
      'Conservation optimale garantie',
      'Découpe artisanale'
    ],
    accords: [
      'Vin blanc sec de Loire',
      'Vin rouge léger du Beaujolais',
      'Pain aux noix',
      'Confiture de figues'
    ]
  },
  {
    id: 2,
    nom: 'Coffret Prestige',
    slug: 'coffret-prestige',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
    prix: 85,
    description: 'Une sélection premium de 8 fromages d\'exception pour les palais les plus exigeants. Fromages rares et affinages d\'excellence.',
    contenu: [
      'Comté 24 mois AOP Extra',
      'Époisses AOP lavé au marc',
      'Beaufort d\'alpage AOP',
      'Roquefort Papillon AOP',
      'Brie de Meaux AOP',
      'Saint-Nectaire fermier AOP',
      'Ossau-Iraty AOP',
      'Munster-Géromé AOP'
    ],
    ideal: 'Le cadeau parfait pour les connaisseurs',
    badge: 'Premium',
    caracteristiques: [
      '8 fromages d\'exception',
      'Poids total : environ 2 kg',
      'Affinages 18-24 mois minimum',
      'Sélection artisanale exclusive',
      'Livret expert dégustation',
      'Emballage luxe avec conservation'
    ],
    accords: [
      'Grands vins de Bourgogne',
      'Champagne millésimé',
      'Pain de seigle',
      'Miel de châtaignier',
      'Fruits secs premium'
    ]
  },
  {
    id: 3,
    nom: 'Coffret Raclette Party',
    slug: 'coffret-raclette-party',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2940',
    prix: 52,
    description: 'Tout le nécessaire pour une soirée raclette réussie avec 4 variétés de raclette artisanale et accompagnements traditionnels.',
    contenu: [
      'Raclette du Valais AOP (500g)',
      'Raclette fumée artisanale (500g)',
      'Raclette aux herbes (500g)',
      'Raclette au poivre (500g)',
      'Charcuterie fine sélection',
      'Cornichons et oignons grelots'
    ],
    ideal: 'Pour 4 à 6 personnes',
    badge: 'Soirée',
    caracteristiques: [
      '2kg de fromages à raclette',
      'Charcuterie fine incluse',
      'Accompagnements traditionnels',
      'Recettes et conseils de préparation',
      'Conservation sous vide',
      'Prêt à déguster'
    ],
    accords: [
      'Vin blanc de Savoie Apremont',
      'Fendant du Valais',
      'Pommes de terre grenaille',
      'Bière blanche artisanale'
    ]
  },
  {
    id: 4,
    nom: 'Coffret Fromages de Chèvre',
    slug: 'coffret-chevre',
    image: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940',
    prix: 42,
    description: 'Une exploration complète des fromages de chèvre, des plus doux aux plus affinés. Découvrez toute la finesse des fromages caprins.',
    contenu: [
      'Crottin de Chavignol AOP frais',
      'Crottin de Chavignol AOP sec',
      'Sainte-Maure de Touraine AOP',
      'Valençay AOP',
      'Pouligny-Saint-Pierre AOP',
      'Cabécou du Périgord'
    ],
    ideal: 'Pour les amateurs de fromages caprins',
    badge: 'Spécialité',
    caracteristiques: [
      '6 fromages de chèvre AOP',
      'Poids total : environ 900g',
      'Du frais au sec affiné',
      'Terroirs variés de France',
      'Livret dégustation chèvres',
      'Emballage préservant fraîcheur'
    ],
    accords: [
      'Vin blanc sec Sancerre',
      'Vin rosé de Provence',
      'Pain aux céréales',
      'Miel d\'acacia',
      'Noix fraîches'
    ]
  }
]

export const coffretSlugs = coffrets.map(c => c.slug)
