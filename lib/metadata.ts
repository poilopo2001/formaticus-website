import type { Metadata } from 'next'
import { SITE_DATA } from './constants'

const baseUrl = 'https://www.formaticus.lu'

/**
 * Generate metadata for homepage
 */
export function generateHomeMetadata(): Metadata {
  return {
    title: SITE_DATA.seo.metaTitle,
    description: SITE_DATA.seo.metaDescription,
    keywords: SITE_DATA.seo.keywords,
    openGraph: {
      title: SITE_DATA.seo.metaTitle,
      description: SITE_DATA.seo.metaDescription,
      url: baseUrl,
      siteName: SITE_DATA.business.name,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Formaticus - Fromagerie Artisanale Luxembourg',
        },
      ],
      locale: 'fr_LU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_DATA.seo.metaTitle,
      description: SITE_DATA.seo.metaDescription,
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: baseUrl,
    },
  }
}

/**
 * Generate metadata for fromages catalog page
 */
export function generateFromagesMetadata(): Metadata {
  return {
    title: '150+ Fromages Artisanaux | Fromagerie Formaticus Luxembourg',
    description: 'Découvrez notre sélection exceptionnelle de plus de 150 fromages artisanaux : fermiers, AOP/AOC, affinés. Pâtes molles, pressées, persillées, chèvres, brebis. Dégustation gratuite et conseils experts.',
    keywords: [
      'fromages artisanaux Luxembourg',
      'fromagerie Luxembourg',
      'fromages AOP AOC',
      'fromages fermiers',
      'comté beaufort luxembourg',
      'roquefort camembert luxembourg',
    ],
    openGraph: {
      title: '150+ Fromages Artisanaux | Fromagerie Formaticus',
      description: 'Plus de 150 fromages artisanaux fermiers, AOP/AOC, affinés. Conseils experts et dégustation gratuite.',
      url: `${baseUrl}/fromages`,
      images: [{ url: 'https://images.unsplash.com/photo-1452195100486-9cc805987862' }],
    },
    alternates: {
      canonical: `${baseUrl}/fromages`,
    },
  }
}

/**
 * Generate metadata for events page
 */
export function generateEvenementsMetadata(): Metadata {
  return {
    title: 'Soirées Raclette, Fondue & Ateliers Fromage | Formaticus Luxembourg',
    description: 'Vivez des expériences fromagères uniques : soirées raclette, fondue savoyarde, tartiflette, ateliers dégustation, cours fabrication fromage. Ambiance conviviale garantie. Réservez en ligne !',
    keywords: [
      'soirée raclette Luxembourg',
      'soirée fondue Luxembourg',
      'atelier dégustation fromage',
      'cours fabrication fromage',
      'soirée tartiflette Luxembourg',
      'événement fromage Luxembourg',
    ],
    openGraph: {
      title: 'Soirées Conviviales & Ateliers Fromage | Formaticus',
      description: 'Raclette, fondue, tartiflette, ateliers dégustation. Expériences fromagères authentiques à Luxembourg.',
      url: `${baseUrl}/evenements`,
      images: [{ url: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1' }],
    },
    alternates: {
      canonical: `${baseUrl}/evenements`,
    },
  }
}

/**
 * Generate metadata for individual event page
 */
export function generateEventMetadata(eventName: string, eventSlug: string, description: string): Metadata {
  return {
    title: `${eventName} à Luxembourg | Réservez en Ligne | Formaticus`,
    description: `${description.substring(0, 155)}...`,
    keywords: [
      `${eventName.toLowerCase()} Luxembourg`,
      'réservation événement fromage',
      'soirée conviviale Luxembourg',
      'formaticus luxembourg',
    ],
    openGraph: {
      title: `${eventName} | Formaticus Luxembourg`,
      description: description.substring(0, 200),
      url: `${baseUrl}/evenements/${eventSlug}`,
      type: 'article',
    },
    alternates: {
      canonical: `${baseUrl}/evenements/${eventSlug}`,
    },
  }
}

/**
 * Generate metadata for individual cheese page
 */
export function generateCheeseMetadata(cheeseName: string, cheeseSlug: string, family: string, origin: string): Metadata {
  return {
    title: `${cheeseName} ${origin} | Fromage Artisanal | Formaticus Luxembourg`,
    description: `Découvrez notre ${cheeseName}, fromage artisanal ${family} d'origine ${origin}. Dégustation gratuite, conseils experts, découpe minute. Disponible chez Formaticus Luxembourg.`,
    keywords: [
      `${cheeseName} Luxembourg`,
      `fromage ${family} Luxembourg`,
      `fromage ${origin} Luxembourg`,
      'fromagerie artisanale Luxembourg',
    ],
    openGraph: {
      title: `${cheeseName} ${origin} | Formaticus`,
      description: `Fromage artisanal ${family} d'origine ${origin}. Disponible chez Formaticus.`,
      url: `${baseUrl}/fromages/${cheeseSlug}`,
    },
    alternates: {
      canonical: `${baseUrl}/fromages/${cheeseSlug}`,
    },
  }
}

/**
 * Generate metadata for reservation page
 */
export function generateReservationMetadata(): Metadata {
  return {
    title: 'Réserver une Soirée ou un Atelier | Formaticus Luxembourg',
    description: 'Réservez en ligne votre soirée raclette, fondue, tartiflette ou atelier dégustation. Places limitées. Annulation gratuite 72h avant. Paiement sécurisé.',
    keywords: [
      'réservation raclette Luxembourg',
      'réserver soirée fondue',
      'booking atelier fromage',
      'réservation en ligne Luxembourg',
    ],
    openGraph: {
      title: 'Réserver une Expérience Fromagère | Formaticus',
      description: 'Réservation en ligne facile. Soirées conviviales et ateliers fromage à Luxembourg.',
      url: `${baseUrl}/reserver`,
    },
    alternates: {
      canonical: `${baseUrl}/reserver`,
    },
  }
}

/**
 * Generate metadata for contact page
 */
export function generateContactMetadata(): Metadata {
  return {
    title: 'Contactez-Nous | Formaticus Fromagerie Artisanale Luxembourg',
    description: `Contactez Formaticus pour toute question : ${SITE_DATA.business.contact.phone} | ${SITE_DATA.business.contact.email}. Boutique ouverte ${SITE_DATA.business.hours.weekdays}. Luxembourg-Ville.`,
    keywords: [
      'contact fromagerie Luxembourg',
      'horaires formaticus',
      'adresse fromagerie Luxembourg',
      'téléphone formaticus',
    ],
    openGraph: {
      title: 'Contactez Formaticus | Fromagerie Luxembourg',
      description: 'Posez-nous vos questions sur nos fromages, événements ou services. Réponse rapide garantie.',
      url: `${baseUrl}/contact`,
    },
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
  }
}

/**
 * Generate metadata for about page
 */
export function generateAboutMetadata(): Metadata {
  return {
    title: 'Notre Histoire & Passion du Fromage | Formaticus Luxembourg',
    description: 'Découvrez l\'histoire de Formaticus, notre passion pour les fromages artisanaux et notre engagement envers les producteurs fermiers. Plus qu\'une fromagerie, une destination gourmande à Luxembourg.',
    keywords: [
      'histoire formaticus',
      'fromagerie artisanale Luxembourg',
      'passion fromage',
      'producteurs fermiers',
      'maître fromager Luxembourg',
    ],
    openGraph: {
      title: 'Notre Passion du Fromage | Formaticus',
      description: 'L\'histoire d\'une passion pour les fromages artisanaux et la convivialité.',
      url: `${baseUrl}/a-propos`,
    },
    alternates: {
      canonical: `${baseUrl}/a-propos`,
    },
  }
}

/**
 * Generate metadata for plateau sur-mesure page
 */
export function generatePlateauMetadata(): Metadata {
  return {
    title: 'Plateau de Fromages Sur-Mesure | Livraison Luxembourg | Formaticus',
    description: 'Commandez votre plateau de fromages sur-mesure pour vos événements. Sélection experte de 5 à 15 fromages artisanaux, accompagnements premium, présentation soignée. Livraison Luxembourg-Ville.',
    keywords: [
      'plateau fromages Luxembourg',
      'plateau sur-mesure Luxembourg',
      'livraison fromages Luxembourg',
      'plateau fromages événement',
      'commande plateau fromages',
    ],
    openGraph: {
      title: 'Plateaux de Fromages Sur-Mesure | Formaticus',
      description: 'Plateaux personnalisés pour vos événements. Livraison Luxembourg.',
      url: `${baseUrl}/plateau-sur-mesure`,
    },
    alternates: {
      canonical: `${baseUrl}/plateau-sur-mesure`,
    },
  }
}

/**
 * Generate metadata for traiteur page
 */
export function generateTraiteurMetadata(): Metadata {
  return {
    title: 'Service Traiteur Fromage | Mariages & Événements | Formaticus Luxembourg',
    description: 'Service traiteur fromager pour vos événements : mariages, entreprise, anniversaires. Buffets fromagers, animations dégustation, bar à raclette mobile. Devis gratuit.',
    keywords: [
      'traiteur fromage Luxembourg',
      'traiteur mariage Luxembourg',
      'buffet fromage événement',
      'bar à raclette mobile',
      'animation fromage entreprise',
    ],
    openGraph: {
      title: 'Service Traiteur Fromage | Formaticus Luxembourg',
      description: 'Sublimez vos événements avec notre service traiteur fromager sur-mesure.',
      url: `${baseUrl}/traiteur`,
    },
    alternates: {
      canonical: `${baseUrl}/traiteur`,
    },
  }
}
