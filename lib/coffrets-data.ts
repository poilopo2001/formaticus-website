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
    image: '/Séance Photo Nicolas 20220423/plateau-fromages-01.jpg',
    prix: 48,
    description: 'Un voyage gustatif à travers 5 fromages artisanaux soigneusement sélectionnés, alliant douceur et caractère. Plateau composé de spécialités françaises et suisses.',
    contenu: [
      'Tomme aux fleurs',
      'Morbier Truffe',
      'Tomme artisanale',
      'Comté Vieux',
      'St Félicien',
      'Raisins frais'
    ],
    ideal: 'Parfait pour découvrir des fromages de caractère',
    badge: 'Best-Seller',
    caracteristiques: [
      '5 fromages artisanaux sélectionnés',
      'Poids total : environ 1 kg',
      'Raisins frais inclus',
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
    nom: 'Coffret Dégustation',
    slug: 'coffret-degustation',
    image: '/Séance Photo Nicolas 20220423/plateau-fromages-02.jpg',
    prix: 42,
    description: 'Une sélection harmonieuse de 3 fromages d\'exception alliant tradition et finesse. Un plateau équilibré pour une dégustation raffinée.',
    contenu: [
      'Bandon',
      'Comté Vieux',
      'Bouqueteau (chèvre)',
      'Raisins frais',
      'Décoration végétale'
    ],
    ideal: 'Le cadeau parfait pour une soirée dégustation',
    badge: 'Premium',
    caracteristiques: [
      '3 fromages d\'exception',
      'Poids total : environ 700g',
      'Affinages sélectionnés',
      'Présentation soignée',
      'Raisins frais inclus',
      'Emballage élégant'
    ],
    accords: [
      'Grands vins de Bourgogne',
      'Champagne',
      'Pain de seigle',
      'Miel de châtaignier',
      'Fruits secs premium'
    ]
  },
  {
    id: 3,
    nom: 'Coffret Prestige',
    slug: 'coffret-prestige',
    image: '/Séance Photo Nicolas 20220423/plateau-fromages-03.jpg',
    prix: 52,
    description: 'Une composition prestigieuse de 4 fromages de terroirs variés, du caractère du Nord à la finesse de la pâte molle. Un plateau pour les véritables amateurs.',
    contenu: [
      'T\'chiot Biloute',
      'Abondance',
      'Bleu D\'Auvergne',
      'Brie de Nangis',
      'Raisins frais'
    ],
    ideal: 'Pour les connaisseurs et occasions spéciales',
    badge: 'Spécialité',
    caracteristiques: [
      '4 fromages de terroirs variés',
      'Poids total : environ 1.2 kg',
      'Du Nord aux Alpes en passant par l\'Auvergne',
      'Palette de saveurs complète',
      'Raisins frais inclus',
      'Emballage cadeau luxe'
    ],
    accords: [
      'Vin rouge Côtes du Rhône',
      'Vin blanc sec Alsace',
      'Pain aux céréales',
      'Confiture d\'oignons',
      'Noix fraîches'
    ]
  }
]

export const coffretSlugs = coffrets.map(c => c.slug)
