'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Ornament } from '@/components/ui/Ornament'
import { Clock, Users, Calendar, ChevronLeft, ChevronRight, CheckCircle, Euro, Phone, Mail, MapPin } from 'lucide-react'
import { SITE_DATA } from '@/lib/constants'

// Données complètes des événements
const evenementsData = {
  'soiree-raclette': {
    slug: 'soiree-raclette',
    name: 'Soirée Raclette',
    tagline: 'Tradition Savoyarde',
    heroImage: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
    pricePerPerson: 42,
    estimatedDuration: '2h30 - 3h',
    groupSize: '8-40 personnes',
    frequency: 'Vendredis & Samedis soir',
    shortDescription: 'Vivez une authentique soirée raclette dans notre espace chaleureux.',
    longDescription: `Plongez dans l'authenticité d'une soirée raclette savoyarde dans notre espace chaleureux et convivial.

    Notre soirée raclette est bien plus qu'un simple repas : c'est une expérience immersive dans la tradition montagnarde. Nous avons sélectionné pour vous 4 variétés de fromages à raclette AOP, chacune révélant des arômes et des textures uniques qui feront voyager vos papilles.

    Accompagné de charcuterie fine soigneusement sélectionnée, de pommes de terre bio cultivées localement, et d'une sélection d'accompagnements traditionnels préparés maison, chaque bouchée vous transportera au cœur des Alpes.

    Nos experts fromagers animent la soirée, partageant anecdotes et secrets de fabrication, transformant votre repas en un véritable voyage gastronomique et culturel.`,

    gallery: [
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
      'https://images.unsplash.com/photo-1628180188089-dc64ab3db923?q=80&w=2940',
      'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940'
    ],

    included: [
      'Raclette artisanale à volonté (4 variétés AOP)',
      'Charcuterie fine et sélection de terroir',
      'Pommes de terre bio et accompagnements maison',
      'Animation par nos experts fromagers',
      'Ambiance montagne chaleureuse et authentique',
      'Vin blanc de Savoie ou boissons incluses'
    ],

    highlights: [
      {
        title: 'Fromages AOP Certifiés',
        description: 'Raclette de Savoie, Raclette Suisse, Morbier et Abondance',
        icon: '🧀'
      },
      {
        title: 'Charcuterie Artisanale',
        description: 'Jambon cru, rosette, saucisson et viande des Grisons',
        icon: '🥓'
      },
      {
        title: 'Accompagnements Maison',
        description: 'Cornichons, oignons grelots, pain artisanal frais',
        icon: '🥖'
      }
    ],

    faqs: [
      {
        question: 'Combien de personnes minimum pour réserver ?',
        answer: 'Nous acceptons les réservations à partir de 8 personnes. Pour les groupes de moins de 8 personnes, contactez-nous directement pour voir les disponibilités et possibilités de vous joindre à un autre groupe.'
      },
      {
        question: 'Quelle quantité de fromage est servie ?',
        answer: 'La raclette est servie à volonté ! Nos experts fromagers s\'assurent que vous ne manquez jamais de fromage. En moyenne, nous comptons 300-400g de fromage par personne, mais vous pouvez en reprendre autant que vous le souhaitez.'
      },
      {
        question: 'Proposez-vous des options végétariennes ?',
        answer: 'Absolument ! Nous pouvons adapter la formule pour les végétariens en remplaçant la charcuterie par des légumes grillés, champignons marinés et autres accompagnements végétariens délicieux.'
      },
      {
        question: 'Les boissons sont-elles incluses ?',
        answer: 'Oui, un vin blanc de Savoie ainsi que des boissons soft sont inclus dans le prix. Nous proposons également une carte de vins supplémentaires pour les amateurs.'
      },
      {
        question: 'Peut-on privatiser l\'espace pour un événement ?',
        answer: 'Oui, nous proposons la privatisation de notre espace pour les groupes de 20 personnes et plus. Idéal pour les anniversaires, événements d\'entreprise ou réunions familiales.'
      },
      {
        question: 'Faut-il réserver à l\'avance ?',
        answer: 'Oui, nous recommandons fortement de réserver au moins 48h à l\'avance, surtout pour les vendredis et samedis soir qui sont très demandés.'
      }
    ],

    testimonials: [
      {
        name: 'Marie L.',
        text: 'Une soirée mémorable ! Le fromage était exceptionnel et l\'ambiance parfaite. Nous reviendrons à coup sûr !',
        rating: 5
      },
      {
        name: 'Jean-Pierre D.',
        text: 'La meilleure raclette de Luxembourg ! Les fromagers sont passionnés et ça se sent dans la qualité.',
        rating: 5
      },
      {
        name: 'Sophie M.',
        text: 'Parfait pour un anniversaire ! L\'équipe était aux petits soins et les enfants ont adoré.',
        rating: 5
      }
    ]
  },

  'soiree-cheese-wine': {
    slug: 'soiree-cheese-wine',
    name: 'Soirée Cheese & Wine',
    tagline: 'Accords Parfaits',
    heroImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940',
    pricePerPerson: 48,
    estimatedDuration: '2h - 2h30',
    groupSize: '8-30 personnes',
    frequency: 'Jeudis & Vendredis soir',
    shortDescription: 'Découvrez l\'art subtil des accords fromages et vins lors d\'une soirée dégustation animée par nos sommeliers.',
    longDescription: `Embarquez pour un voyage sensoriel exceptionnel à travers les terroirs de France, Suisse et Italie. Notre soirée Cheese & Wine est une expérience œnologique et fromagère unique, conçue pour les amateurs comme pour les connaisseurs.

    Guidés par nos sommeliers experts, vous découvrirez comment 8 fromages d\'exception dialoguent avec 5 vins soigneusement sélectionnés. Chaque accord a été pensé pour sublimer les arômes, révéler des nuances insoupçonnées et créer des harmonies parfaites en bouche.

    Au-delà de la dégustation, nos sommeliers partagent leur passion et leur expertise : techniques de dégustation professionnelle, secrets de conservation, histoire des appellations, et conseils pour reproduire ces accords chez vous.

    Vous repartirez avec un livret d\'accords personnalisé et une nouvelle compréhension de l\'art subtil du mariage fromages-vins.`,

    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940',
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2940',
      'https://images.unsplash.com/photo-1543007631-283050bb3e8c?q=80&w=2940',
      'https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=2940',
      'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?q=80&w=2940'
    ],

    included: [
      '8 fromages d\'exception (France, Suisse, Italie)',
      '5 vins sélectionnés en accord parfait',
      'Animation par sommeliers experts diplômés',
      'Techniques de dégustation professionnelle',
      'Livret d\'accords personnalisé à emporter',
      'Pain artisanal et accompagnements raffinés'
    ],

    highlights: [
      {
        title: 'Fromages Exceptionnels',
        description: 'Comté 24 mois, Roquefort Papillon, Époisses AOP, Pecorino Tartufo...',
        icon: '🧀'
      },
      {
        title: 'Vins Sélectionnés',
        description: 'Vins bio de propriétaires : Bourgogne, Bordeaux, Jura, Loire',
        icon: '🍷'
      },
      {
        title: 'Expertise Sommelier',
        description: 'Animé par des sommeliers diplômés et passionnés',
        icon: '🎓'
      }
    ],

    faqs: [
      {
        question: 'Dois-je m\'y connaître en vin pour participer ?',
        answer: 'Absolument pas ! Cette soirée est conçue pour tous les niveaux. Nos sommeliers adaptent leurs explications et sont là pour répondre à toutes vos questions dans une ambiance décontractée.'
      },
      {
        question: 'Les vins sont-ils bio ?',
        answer: 'Oui, nous privilégions les vins bio et biodynamiques de petits propriétaires passionnés. Chaque vin est sélectionné pour sa qualité et son caractère unique.'
      },
      {
        question: 'Combien de vin est servi par personne ?',
        answer: 'Chaque participant reçoit environ 5 verres de dégustation (50-75ml par vin), soit environ 300ml au total. Des eaux minérales et du pain sont disponibles entre chaque accord.'
      },
      {
        question: 'Peut-on acheter les vins dégustés ?',
        answer: 'Oui ! À la fin de la soirée, vous pouvez commander les vins que vous avez préférés. Nous les faisons venir spécialement pour vous.'
      },
      {
        question: 'Y a-t-il un service de raccompagnement ?',
        answer: 'Nous ne proposons pas de service de raccompagnement, mais nous pouvons vous appeler un taxi ou vous conseiller les transports en commun à proximité.'
      }
    ],

    testimonials: [
      {
        name: 'Antoine R.',
        text: 'Une découverte exceptionnelle ! Les accords étaient parfaits et j\'ai appris énormément.',
        rating: 5
      },
      {
        name: 'Claire B.',
        text: 'Sommeliers passionnants et fromages divins. Le livret d\'accords est un vrai plus !',
        rating: 5
      }
    ]
  },

  'soiree-tartiflette': {
    slug: 'soiree-tartiflette',
    name: 'Soirée Tartiflette',
    tagline: 'Convivialité Savoyarde',
    heroImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940',
    pricePerPerson: 38,
    estimatedDuration: '2h - 2h30',
    groupSize: '10-40 personnes',
    frequency: 'Samedis & Dimanches midi/soir',
    shortDescription: 'Plongez dans la tradition savoyarde avec notre tartiflette authentique.',
    longDescription: `Redécouvrez la tartiflette comme vous ne l\'avez jamais goûtée ! Notre recette authentique respecte la tradition savoyarde tout en privilégiant les meilleurs produits artisanaux.

    Au cœur de notre tartiflette : le Reblochon fermier AOP, fromage emblématique de Savoie au caractère affirmé et à la texture crémeuse incomparable. Nous le sélectionnons directement auprès de petits producteurs des Aravis qui perpétuent un savoir-faire ancestral.

    Les pommes de terre grenaille bio fondent sous le Reblochon coulant, tandis que les lardons fumés artisanaux de montagne apportent cette touche fumée si caractéristique. Les oignons confits maison ajoutent une douceur subtile qui équilibre parfaitement l\'ensemble.

    Servie généreusement dans des plats en terre cuite authentiques, notre tartiflette est accompagnée d\'une salade verte de saison pour apporter fraîcheur et légèreté. Une expérience conviviale qui réchauffe les cœurs autant que les corps !`,

    gallery: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940',
      'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=2940',
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
      'https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=2940'
    ],

    included: [
      'Tartiflette au Reblochon fermier AOP à volonté',
      'Lardons fumés artisanaux de montagne',
      'Pommes de terre grenaille bio',
      'Oignons confits maison',
      'Salade verte de saison',
      'Vin blanc de Savoie ou cidre artisanal'
    ],

    highlights: [
      {
        title: 'Reblochon Fermier AOP',
        description: 'Sélectionné directement chez les producteurs des Aravis',
        icon: '🧀'
      },
      {
        title: 'Lardons Artisanaux',
        description: 'Fumés au bois de hêtre selon la tradition montagnarde',
        icon: '🥓'
      },
      {
        title: 'Recette Authentique',
        description: 'Transmise de génération en génération',
        icon: '👨‍🍳'
      }
    ],

    faqs: [
      {
        question: 'La tartiflette est-elle servie à volonté ?',
        answer: 'Oui ! Nous préparons des quantités généreuses et vous pouvez vous resservir autant que vous le souhaitez. En moyenne, nous comptons 400-500g par personne.'
      },
      {
        question: 'Proposez-vous une version végétarienne ?',
        answer: 'Oui, nous pouvons préparer une version végétarienne en remplaçant les lardons par des champignons des bois et des légumes de saison.'
      },
      {
        question: 'D\'où provient le Reblochon ?',
        answer: 'Notre Reblochon fermier AOP provient exclusivement de fermes des Aravis en Haute-Savoie. Nous travaillons en direct avec les producteurs pour garantir authenticité et qualité.'
      },
      {
        question: 'La tartiflette est-elle préparée sur place ?',
        answer: 'Oui, chaque tartiflette est préparée le jour même dans notre cuisine avec des ingrédients frais. Elle est ensuite gratinée au four juste avant le service.'
      },
      {
        question: 'Convient-elle aux enfants ?',
        answer: 'Absolument ! Les enfants adorent la tartiflette. Nous proposons des portions adaptées et pouvons atténuer le caractère du Reblochon si nécessaire.'
      }
    ],

    testimonials: [
      {
        name: 'François G.',
        text: 'La meilleure tartiflette que j\'ai jamais mangée ! Le Reblochon fermier fait toute la différence.',
        rating: 5
      },
      {
        name: 'Amélie P.',
        text: 'Parfait pour un repas familial. Les enfants ont adoré et les portions sont très généreuses !',
        rating: 5
      }
    ]
  },

  'soiree-fondue': {
    slug: 'soiree-fondue',
    name: 'Soirée Fondue',
    tagline: 'Tradition Alpine',
    heroImage: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940',
    pricePerPerson: 44,
    estimatedDuration: '2h30 - 3h',
    groupSize: '8-35 personnes',
    frequency: 'Tous les soirs sauf lundi',
    shortDescription: 'Savourez une fondue savoyarde traditionnelle préparée avec un mélange de 3 fromages AOP.',
    longDescription: `Parttagez un moment convivial unique autour de notre fondue savoyarde traditionnelle, préparée selon la recette ancestrale qui a fait la réputation de ce plat emblématique des Alpes.

    Notre secret ? Un mélange parfaitement équilibré de 3 fromages AOP soigneusement affinés : le Comté 18 mois pour sa complexité aromatique, le Beaufort d\'été pour son onctuosité, et l\'Emmental de Savoie pour son caractère doux et fondant. Chaque fromage apporte sa personnalité pour créer une fondue crémeuse, parfumée et irrésistiblement gourmande.

    Le caquelon mijote doucement au centre de votre table, diffusant des arômes réconfortants tandis que vous trempez des cubes de pain artisanal frais du jour. La charcuterie fine de montagne et les cornichons & oignons grelots faits maison accompagnent parfaitement ce festin fromager.

    Un verre de vin blanc de Savoie vient sublimer l\'expérience, créant un accord parfait avec le fromage fondu. Plus qu\'un simple repas, c\'est un rituel de partage et de convivialité qui unit les convives autour du caquelon fumant.`,

    gallery: [
      'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=2940',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940',
      'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940',
      'https://images.unsplash.com/photo-1628180188089-dc64ab3db923?q=80&w=2940'
    ],

    included: [
      'Fondue 3 fromages AOP (Comté, Beaufort, Emmental)',
      'Pain artisanal frais du jour à volonté',
      'Charcuterie fine de montagne',
      'Cornichons & oignons grelots maison',
      'Vin blanc de Savoie inclus (1 bouteille pour 2)',
      'Kirsch traditionnel pour accompagner'
    ],

    highlights: [
      {
        title: 'Fromages AOP des Alpes',
        description: 'Comté 18 mois, Beaufort d\'été, Emmental de Savoie',
        icon: '🧀'
      },
      {
        title: 'Pain Artisanal',
        description: 'Boulangerie locale, différentes variétés, frais du jour',
        icon: '🥖'
      },
      {
        title: 'Recette Traditionnelle',
        description: 'Préparée selon la méthode savoyarde authentique',
        icon: '⚗️'
      }
    ],

    faqs: [
      {
        question: 'Combien de fromage y a-t-il par personne ?',
        answer: 'Nous comptons environ 250g de fromage par personne, ce qui représente une portion généreuse. Le pain est servi à volonté pour vous permettre de profiter pleinement de la fondue.'
      },
      {
        question: 'Le vin est-il inclus dans le prix ?',
        answer: 'Oui, nous incluons une bouteille de vin blanc de Savoie pour 2 personnes. Vous pouvez commander des bouteilles supplémentaires à la carte si vous le souhaitez.'
      },
      {
        question: 'Que se passe-t-il si je perds mon morceau de pain ?',
        answer: 'Selon la tradition, celui qui perd son morceau de pain dans le caquelon doit offrir une tournée ! Mais pas d\'inquiétude, c\'est avant tout un moment de partage et de rires.'
      },
      {
        question: 'La fondue peut-elle être préparée sans alcool ?',
        answer: 'Oui, nous pouvons préparer une fondue sans vin blanc ni kirsch, en utilisant du bouillon et du jus de citron. Le goût sera légèrement différent mais tout aussi délicieux.'
      },
      {
        question: 'Combien de temps dure la soirée ?',
        answer: 'Comptez 2h30 à 3h pour profiter pleinement de l\'expérience. La fondue se déguste lentement, c\'est tout l\'art de ce moment convivial !'
      },
      {
        question: 'Proposez-vous un dessert ?',
        answer: 'Oui, nous recommandons une salade de fruits ou une mousse au chocolat légère pour terminer en douceur après ce repas copieux.'
      }
    ],

    testimonials: [
      {
        name: 'Laurent M.',
        text: 'Une vraie fondue comme en Savoie ! Le mélange des 3 fromages est parfaitement dosé.',
        rating: 5
      },
      {
        name: 'Isabelle D.',
        text: 'Moment magique entre amis. L\'ambiance est chaleureuse et le service impeccable.',
        rating: 5
      },
      {
        name: 'Thomas K.',
        text: 'J\'y retourne régulièrement ! La qualité est constante et l\'équipe adorable.',
        rating: 5
      }
    ]
  }
}

export default function SoireePage({ params }: { params: { slug: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const evenement = evenementsData[params.slug as keyof typeof evenementsData]

  if (!evenement) {
    notFound()
  }

  // Dates disponibles
  const datesDisponibles = [
    { date: 'Vendredi 15 Nov', places: '12 places restantes', available: true },
    { date: 'Samedi 16 Nov', places: 'Complet', available: false },
    { date: 'Vendredi 22 Nov', places: '18 places restantes', available: true },
    { date: 'Samedi 23 Nov', places: '8 places restantes', available: true },
    { date: 'Vendredi 29 Nov', places: '20 places restantes', available: true },
    { date: 'Samedi 30 Nov', places: '15 places restantes', available: true },
    { date: 'Vendredi 6 Déc', places: '25 places restantes', available: true },
    { date: 'Samedi 7 Déc', places: '22 places restantes', available: true }
  ]

  // Prochaine date disponible
  const prochaineDate = datesDisponibles.find(d => d.available)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % evenement.gallery.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + evenement.gallery.length) % evenement.gallery.length)
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={evenement.heroImage}
            alt={evenement.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              {evenement.tagline}
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              {evenement.name}
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              {evenement.shortDescription}
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <Clock className="w-5 h-5 text-accent-600 inline mr-2" />
                <span className="font-light">{evenement.estimatedDuration}</span>
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <Users className="w-5 h-5 text-accent-600 inline mr-2" />
                <span className="font-light">{evenement.groupSize}</span>
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <Calendar className="w-5 h-5 text-accent-600 inline mr-2" />
                <span className="font-light">{evenement.frequency}</span>
              </div>
              <div className="px-6 py-3 bg-accent-600 text-black">
                <Euro className="w-5 h-5 inline mr-2" />
                <span className="font-semibold">{evenement.pricePerPerson}€</span>
                <span className="font-light text-sm ml-1">/pers.</span>
              </div>
            </div>

            {/* Prochaine Date Disponible */}
            {prochaineDate && (
              <div className="mb-12 max-w-md mx-auto">
                <div className="bg-black/40 backdrop-blur-md border-2 border-accent-600/50 p-6 shadow-[0_0_30px_rgba(228,197,144,0.3)] hover:shadow-[0_0_40px_rgba(228,197,144,0.5)] transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <svg className="w-6 h-6 text-accent-600" viewBox="0 0 32 32" fill="none">
                      <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                      <circle cx="16" cy="16" r="2" fill="black"/>
                    </svg>
                  </div>
                  <p className="text-accent-600 tracking-[0.3em] text-[10px] uppercase mb-3 text-center">
                    Prochaine Date Disponible
                  </p>
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-2 text-center">
                    {prochaineDate.date}
                  </h3>
                  <p className="text-accent-600 text-sm font-light mb-4 text-center">
                    {prochaineDate.places}
                  </p>
                  <Link
                    href="/reserver"
                    className="block w-full px-8 py-3 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 text-center"
                  >
                    Réserver Cette Date
                  </Link>
                </div>
              </div>
            )}

            <Link
              href="/reserver"
              className="inline-block px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
            >
              Autres Dates Disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Points Forts
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Ce Qui Rend Cette<br />Soirée Unique
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {evenement.highlights.map((highlight, idx) => (
                <div key={idx} className="text-center group">
                  <div className="mb-6 text-6xl">{highlight.icon}</div>
                  <h3 className="text-2xl font-serif font-light text-white mb-4 group-hover:text-accent-600 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prochaines Dates Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Disponibilités
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Prochaines<br />Dates Disponibles
              </h2>
              <p className="text-primary-200 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                {evenement.frequency} • Places limitées • Réservation recommandée 48h à l'avance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Date cards */}
              {[
                { date: 'Vendredi 15 Nov', places: '12 places restantes', available: true },
                { date: 'Samedi 16 Nov', places: 'Complet', available: false },
                { date: 'Vendredi 22 Nov', places: '18 places restantes', available: true },
                { date: 'Samedi 23 Nov', places: '8 places restantes', available: true },
                { date: 'Vendredi 29 Nov', places: '20 places restantes', available: true },
                { date: 'Samedi 30 Nov', places: '15 places restantes', available: true },
                { date: 'Vendredi 6 Déc', places: '25 places restantes', available: true },
                { date: 'Samedi 7 Déc', places: '22 places restantes', available: true }
              ].slice(0, evenement.frequency.includes('sauf') ? 8 : 4).map((dateInfo, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden border ${
                    dateInfo.available
                      ? 'border-accent-600/30 hover:border-accent-600 bg-primary-900/40 hover:bg-primary-900/60'
                      : 'border-primary-700/30 bg-primary-900/20 opacity-60'
                  } p-6 transition-all duration-300`}
                >
                  {/* Star ornament */}
                  <div className="mb-4 flex justify-center">
                    <svg className="w-6 h-6 text-accent-600" viewBox="0 0 32 32" fill="none">
                      <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                      <circle cx="16" cy="16" r="2" fill="black"/>
                    </svg>
                  </div>

                  <div className="text-center">
                    <Calendar className="w-8 h-8 text-accent-600 mx-auto mb-3" />
                    <h3 className="text-xl font-serif font-light text-white mb-2">
                      {dateInfo.date}
                    </h3>
                    <p className={`text-sm font-light mb-4 ${
                      dateInfo.available ? 'text-accent-600' : 'text-primary-400'
                    }`}>
                      {dateInfo.places}
                    </p>
                    {dateInfo.available && (
                      <Link
                        href="/reserver"
                        className="inline-block px-6 py-2 border border-accent-600/50 text-accent-600 text-xs tracking-[0.15em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-300"
                      >
                        Réserver
                      </Link>
                    )}
                  </div>

                  {/* Glow effect on hover */}
                  {dateInfo.available && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-accent-600/5 to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-primary-300 font-light mb-6">
                Vous ne trouvez pas de date qui vous convient ?
              </p>
              <Link
                href="/contact"
                className="inline-block px-10 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Contactez-nous pour une date personnalisée
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6 text-center">
              L'Expérience
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-12 leading-tight text-center">
              Une Soirée<br />Inoubliable
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              {evenement.longDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-lg text-primary-200 font-light leading-relaxed mb-6">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Included & Gallery Section Combined */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Formule Complète
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
                Inclus dans le Prix & Ambiance
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Included Items */}
              <div>
                <div className="mb-8 flex justify-center">
                  <svg className="w-8 h-8 text-accent-600" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                <div className="bg-black/60 border border-accent-600/30 p-8 md:p-12 h-full">
                  <h3 className="text-2xl font-serif font-light text-white mb-8 text-center">
                    Ce qui est Inclus
                  </h3>
                  <ul className="space-y-4">
                    {evenement.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-primary-200 font-light text-base md:text-lg">
                        <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex justify-center">
                  <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                    <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Right: Gallery Slider */}
              <div className="relative group">
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                {/* Main slider */}
                <div className="relative h-[500px] md:h-[600px] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src={evenement.gallery[currentImageIndex]}
                    alt={`${evenement.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />

                  {/* Navigation buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all duration-300 border border-accent-600/30 hover:border-accent-600"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all duration-300 border border-accent-600/30 hover:border-accent-600"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Dots indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {evenement.gallery.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? 'bg-accent-600 w-8'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Aller à l'image ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Glow border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                  </div>
                </div>

                {/* Geometric ornament */}
                <div className="mt-8 flex justify-center">
                  <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                    <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Questions Fréquentes
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Tout Savoir sur<br />Cette Soirée
              </h2>
            </div>

            <div className="space-y-4">
              {evenement.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 border border-accent-600/30 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-black/60 transition-colors"
                  >
                    <span className="text-white font-light text-lg pr-8">{faq.question}</span>
                    <span className={`text-accent-600 transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-8 pb-6 pt-2">
                      <p className="text-primary-200 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {evenement.testimonials && evenement.testimonials.length > 0 && (
        <section className="py-32 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Témoignages
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Ils Ont Adoré<br />Cette Expérience
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {evenement.testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-black/60 border border-accent-600/30 p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent-600 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-primary-200 font-light leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="text-white font-light">
                      — {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Réservation
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Prêt à Vivre<br />Cette Expérience ?
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Réservez dès maintenant votre {evenement.name.toLowerCase()}. Places limitées !
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Link
                href="/reserver"
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
              >
                Réserver en Ligne
              </Link>
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Nous Appeler
              </a>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center text-primary-200 text-sm font-light">
              <div className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4 text-accent-600" />
                <span>{SITE_DATA.business.contact.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Mail className="w-4 h-4 text-accent-600" />
                <span>{SITE_DATA.business.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4 text-accent-600" />
                <span>{SITE_DATA.business.contact.address.city}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
