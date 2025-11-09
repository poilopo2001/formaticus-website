import type { SiteData } from './types'

export const SITE_DATA: SiteData = {
  "business": {
    "name": "Formaticus",
    "shortName": "Formaticus",
    "sector": "fromagerie-artisanale",
    "tagline": "Fromagerie artisanale & expériences fromagères au Luxembourg",
    "description": "Fromagerie artisanale d'exception et lieu d'expériences culinaires à Luxembourg. Sélection pointue de fromages de terroir, événements conviviaux (Raclette, Fondue, Tartiflette), ateliers de dégustation et cours autour du fromage. Vente au détail, vente à emporter et livraison. Plus qu'une fromagerie : une destination gourmande pour célébrer la culture fromagère.",
    "founded": null,
    "siret": null,
    "tva": null,
    "contact": {
      "phone": "+352 27 51 78 85",
      "phoneDisplay": "+352 27 51 78 85",
      "mobile": "+352 27 51 78 85",
      "mobileDisplay": "+352 27 51 78 85",
      "email": "contact@formaticus.lu",
      "website": "www.formaticus.lu",
      "address": {
        "street": "2 Am Duerf",
        "city": "Dudelange",
        "postalCode": "3436",
        "canton": "Esch-sur-Alzette",
        "country": "Luxembourg"
      },
      "shop": {
        "street": "2 Am Duerf",
        "city": "Dudelange",
        "postalCode": "3436",
        "hours": "Mar-Sam 10h-19h, Dim 10h-14h",
        "description": "Boutique fromagère avec espace dégustation et événements"
      },
      "coordinates": {
        "lat": 49.4813,
        "lng": 6.0868
      },
      "serviceRadius": "Grand-Duché de Luxembourg + livraison zones frontalières"
    },
    "hours": {
      "weekdays": "Mardi - Vendredi: 10h00 - 19h00",
      "saturday": "Samedi: 10h00 - 19h00",
      "sunday": "Dimanche: 10h00 - 14h00",
      "monday": "Lundi: Fermé",
      "events": "Soirées événements : voir calendrier en ligne",
      "workshops": "Ateliers sur réservation : Mar-Sam 18h30 ou Sam-Dim 14h00"
    },
    "languages": ["Français", "Luxembourgeois", "Allemand", "Anglais"],
    "social": {
      "facebook": "https://facebook.com/formaticus.lu",
      "instagram": "https://instagram.com/formaticus_luxembourg",
      "linkedin": "https://linkedin.com/company/formaticus",
      "tripadvisor": "https://tripadvisor.com/formaticus",
      "youtube": "https://youtube.com/@FormaticusLuxembourg"
    }
  },
  "branding": {
    "primaryColor": "#d97706",
    "secondaryColor": "#92400e",
    "accentColor": "#fbbf24",
    "neutralColor": "#78350f",
    "colorScheme": "amber-cheese-warmth",
    "fontFamily": "Merriweather, Inter"
  },
  "services": [
    {
      "name": "Sélection de Fromages Artisanaux",
      "slug": "fromages-artisanaux-selection",
      "shortDescription": "Plus de 150 fromages artisanaux sélectionnés avec passion : fermiers, AOP/AOC, affinés.",
      "fullDescription": "Découvrez notre sélection exceptionnelle de plus de 150 fromages artisanaux soigneusement choisis auprès des meilleurs producteurs et affineurs d'Europe. Fromages fermiers au lait cru, AOP/AOC français et européens, fromages affinés en cave, spécialités rares et saisonnières, fromages bio. Nos fromages proviennent de France (Normandie, Savoie, Auvergne, Pyrénées, Alpes), Suisse, Italie, Belgique, Pays-Bas et Luxembourg. Chaque fromage est accompagné de son histoire, de conseils de dégustation et d'accords parfaits. Service de découpe minute pour une fraîcheur optimale. Nos experts fromagers vous conseillent personnellement pour composer votre plateau idéal ou trouver le fromage parfait pour vos recettes. Conditionnement sous vide disponible pour une conservation optimale. Carte de fidélité : 10% de réduction dès 50€ d'achat.",
      "priceRange": "€3 - €80/kg selon fromage",
      "priceMin": 3,
      "priceMax": 80,
      "benefits": [
        "Plus de 150 références en boutique",
        "Sélection rigoureuse chez producteurs artisans",
        "Fromages fermiers au lait cru",
        "AOP/AOC certifiés",
        "Affinage maison pour certaines références",
        "Découpe minute devant vous",
        "Conseils experts personnalisés",
        "Dégustation gratuite avant achat",
        "Emballage sous vide sur demande",
        "Carte de fidélité -10% dès 50€"
      ],
      "categories": {
        "pates_molles": ["Camembert fermier", "Brie de Meaux AOP", "Époisses", "Mont d'Or", "Reblochon fermier"],
        "pates_pressees": ["Comté 18-36 mois", "Beaufort d'Alpage", "Abondance", "Tomme de Savoie", "Cantal"],
        "pates_persillees": ["Roquefort Papillon", "Bleu d'Auvergne", "Fourme d'Ambert", "Gorgonzola Dolce"],
        "chevres": ["Crottin de Chavignol AOP", "Sainte-Maure de Touraine", "Picodon", "Valençay", "Selles-sur-Cher"],
        "brebis": ["Ossau-Iraty AOP", "Brebis Basque", "Pecorino", "Manchego", "Roquefort"],
        "raclettes_fondues": ["Raclette de Savoie IGP", "Raclette fumée", "Raclette aux herbes", "Fromage à fondue suisse"],
        "specialites": ["Vacherin Mont d'Or AOP", "Burrata italienne", "Mozzarella di Bufala", "Stracciatella"]
      },
      "process": [
        "1. Accueil chaleureux par nos experts fromagers",
        "2. Découverte de vos goûts et besoins (plateau, recette, dégustation)",
        "3. Présentation de notre sélection avec histoires des fromages",
        "4. Dégustation gratuite des fromages qui vous intéressent",
        "5. Conseils d'accords (vins, pains, confitures, fruits secs)",
        "6. Découpe minute à la demande",
        "7. Emballage soigné (papier spécial fromage ou sous vide)",
        "8. Conseils de conservation et de dégustation",
        "9. Enregistrement carte de fidélité"
      ],
      "guarantees": [
        "Fraîcheur garantie - fromages reçus 2-3x/semaine",
        "Traçabilité complète de chaque fromage",
        "Satisfaction garantie ou échange",
        "Respect de la chaîne du froid",
        "Conseils experts gratuits"
      ],
      "featured": true,
      "icon": "cheese",
      "image": "https://images.unsplash.com/photo-1452195100486-9cc805987862",
      "estimatedDuration": "15-30 min pour conseil et sélection personnalisée"
    },
    {
      "name": "Soirée Raclette Conviviale",
      "slug": "soiree-raclette-conviviale",
      "shortDescription": "Soirée raclette authentique dans notre espace chaleureux : fromage à volonté, charcuterie, ambiance montagne.",
      "fullDescription": "Vivez une authentique soirée raclette dans l'ambiance chaleureuse de notre fromagerie ! Formule tout compris avec raclette traditionnelle à volonté (3-4 variétés de raclette artisanale : nature, fumée, aux herbes, poivrée), charcuterie fine (jambon cru, saucisson sec, viande des Grisons, coppa), pommes de terre grenaille bio cuites à la perfection, accompagnements traditionnels (cornichons, oignons au vinaigre, pickles maison), salade verte fraîche assaisonnée. Ambiance 'comme à la montagne' avec décoration cosy, musique d'ambiance, éclairage tamisé. Appareils à raclette professionnels mis à disposition. Vin blanc de Savoie et bières artisanales en supplément (carte des boissons). Soirées organisées les vendredis et samedis soirs sur réservation (groupes de 8-40 personnes). Privatisation possible pour événements d'entreprise ou anniversaires. Animation par nos experts fromagers qui partagent anecdotes et secrets de la raclette parfaite. Durée : 2h30-3h00 de convivialité garantie.",
      "priceRange": "€38 - €48/personne",
      "priceMin": 38,
      "priceMax": 48,
      "pricePerPerson": "€42/adulte - €22/enfant (-12 ans)",
      "benefits": [
        "Raclette artisanale à volonté (4 variétés)",
        "Charcuterie fine sélectionnée",
        "Pommes de terre bio grenaille",
        "Accompagnements traditionnels inclus",
        "Ambiance montagnarde authentique",
        "Appareils à raclette professionnels fournis",
        "Animation par expert fromager",
        "Durée 2h30-3h de convivialité",
        "Privatisation groupe possible",
        "Formule enfant disponible"
      ],
      "whatsIncluded": {
        "fromage": "Raclette à volonté - 4 variétés artisanales",
        "charcuterie": "Jambon cru, saucisson, coppa, viande des Grisons",
        "accompagnements": "Pommes de terre bio, cornichons, oignons, salade",
        "materiel": "Appareils à raclette professionnels",
        "ambiance": "Décoration montagne, musique, éclairage cosy",
        "animation": "Expert fromager, anecdotes et conseils",
        "duration": "2h30-3h00"
      },
      "notIncluded": {
        "boissons": "Vins, bières, softs (carte disponible sur place)",
        "desserts": "Desserts en supplément (carte disponible)"
      },
      "schedule": {
        "frequency": "Vendredis et samedis soirs",
        "time": "19h00 ou 20h30 (deux services)",
        "booking": "Réservation obligatoire 48h minimum",
        "groupSize": "8-40 personnes",
        "privatization": "Possible sur demande (min 20 pers)"
      },
      "process": [
        "1. Réservation en ligne ou par téléphone",
        "2. Confirmation avec acompte 30%",
        "3. Arrivée 15 min avant début soirée",
        "4. Accueil avec présentation des fromages",
        "5. Installation à table (ambiance montagne)",
        "6. Service raclette à volonté (2h30-3h)",
        "7. Anecdotes et conseils de notre expert",
        "8. Possibilité commande dessert/boissons",
        "9. Fin de soirée et achat fromages si souhaité"
      ],
      "guarantees": [
        "Fromage raclette artisanal garanti",
        "Quantité à volonté garantie",
        "Ambiance chaleureuse garantie",
        "Annulation gratuite 72h avant",
        "Report possible une fois"
      ],
      "featured": true,
      "icon": "utensils",
      "image": "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1",
      "videoUrl": "https://youtube.com/watch?v=example-raclette",
      "estimatedDuration": "2h30 - 3h00"
    }
  ],
  "testimonials": [
    {
      "name": "Sophie Leblanc",
      "location": "Luxembourg-Ville",
      "rating": 5,
      "text": "Soirée raclette incroyable chez Formaticus ! L'ambiance est chaleureuse comme en montagne, la raclette artisanale délicieuse à volonté. L'expert fromager nous a raconté des anecdotes passionnantes. On a adoré et on reviendra avec plaisir !",
      "service": "Soirée Raclette",
      "date": "2024-09"
    },
    {
      "name": "Marc Hoffmann",
      "location": "Esch-sur-Alzette",
      "rating": 5,
      "text": "J'achète mes fromages uniquement chez Formaticus. La sélection est exceptionnelle, les conseils toujours pertinents. L'équipe connaît parfaitement ses produits et sait nous guider. Une vraie référence au Luxembourg !",
      "service": "Fromages Artisanaux",
      "date": "2024-10"
    },
    {
      "name": "Claire Schmitz",
      "location": "Strassen",
      "rating": 5,
      "text": "Atelier dégustation au top ! En 2h, on a appris énormément sur les fromages, les accords, les techniques. Le formateur était passionné et très pédagogue. Dégustation de 10 fromages excellents avec vins assortis. Je recommande vivement !",
      "service": "Atelier Dégustation",
      "date": "2024-09"
    },
    {
      "name": "Jean-Paul Weber",
      "location": "Bertrange",
      "rating": 5,
      "text": "Plateau fromages commandé pour l'anniversaire de ma femme : une merveille ! Sélection parfaite de 8 fromages avec accompagnements, présentation magnifique, livraison ponctuelle. Tous nos invités étaient ravis. Merci Formaticus !",
      "service": "Plateau Sur-Mesure",
      "date": "2024-08"
    },
    {
      "name": "Anne Muller",
      "location": "Luxembourg-Gare",
      "rating": 5,
      "text": "Soirée fondue savoyarde excellente ! Fondue délicieuse à volonté, pain frais, charcuterie montagnarde. L'ambiance alpine était parfaite, les jeux traditionnels ont mis une super ambiance. Une soirée mémorable entre amis !",
      "service": "Soirée Fondue",
      "date": "2024-10"
    },
    {
      "name": "Thomas Reuter",
      "location": "Luxembourg-Limpertsberg",
      "rating": 5,
      "text": "Service traiteur impeccable pour notre événement d'entreprise. Buffet fromager sublime avec 20 fromages, animation dégustation passionnante. Nos clients étaient enchantés. Organisation parfaite du début à la fin. Bravo !",
      "service": "Service Traiteur",
      "date": "2024-07"
    },
    {
      "name": "Martine Kieffer",
      "location": "Hesperange",
      "rating": 5,
      "text": "J'ai offert un coffret cadeau Gourmet à mon mari amateur de fromages. Il a été ravi ! Belle sélection de 7 fromages artisanaux avec accompagnements gourmands, emballage élégant, livret pédagogique très bien fait. Cadeau parfait !",
      "service": "Coffret Cadeau",
      "date": "2024-09"
    },
    {
      "name": "Laurent Schneider",
      "location": "Dudelange",
      "rating": 5,
      "text": "Soirée tartiflette généreuse et délicieuse ! Reblochon fermier authentique, tartiflette à volonté gratinée parfaitement, charcuterie savoyarde excellente. Ambiance chalet montagnard chaleureuse. On s'est régalés, merci !",
      "service": "Soirée Tartiflette",
      "date": "2024-10"
    }
  ],
  "projects": [
    {
      "title": "Bar à Fromage Mariage Château",
      "description": "Service traiteur prestige pour mariage de 120 invités au Château de Bourglinster. Buffet fromager exceptionnel de 25 fromages artisanaux (pâtes molles, pressées, persillées, chèvres, brebis), présentation artistique en pyramide, animation dégustation par 2 experts fromagers pendant cocktail et soirée, accompagnements gourmands (5 confitures artisanales, 3 miels de terroir, fruits frais et secs premium, 4 pains artisanaux), accords vins-fromages personnalisés, décoration florale assortie, service complet avec personnel. Succès total avec tous les invités ravis !",
      "serviceType": "Service Traiteur Mariage",
      "location": "Château de Bourglinster",
      "imageBefore": "https://images.unsplash.com/photo-1464349095431-e9a21285b2a3",
      "imageAfter": "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
      "metric": {
        "label": "120 invités ravis",
        "value": "120",
        "description": "convives enchantés"
      }
    },
    {
      "title": "Team Building Fromager Entreprise",
      "description": "Événement team building pour équipe de 35 personnes d'une entreprise tech luxembourgeoise. Atelier complet : découverte de 12 fromages avec dégustation guidée, quiz fromage interactif par équipes, défi création plateau collaboratif (chaque équipe compose son plateau et le présente), dégustation à l'aveugle compétition, formation accords mets-fromages. Animation de 3h30 dans nos locaux avec expert fromager passionné. Buffet fromager de clôture. Retours excellents sur cohésion équipe et originalité événement.",
      "serviceType": "Team Building Entreprise",
      "location": "Formaticus Luxembourg",
      "imageBefore": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      "imageAfter": "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      "metric": {
        "label": "35 collaborateurs",
        "value": "35",
        "description": "team building réussi"
      }
    }
  ],
  "stats": {
    "projectsCompleted": 450,
    "yearsExperience": null,
    "satisfactionRate": 99,
    "responseTime": "24h",
    "cheeseSelection": 150,
    "eventsPerMonth": 12,
    "workshopsPerMonth": 8
  },
  "team": {
    "description": "Notre équipe de passionnés du fromage",
    "members": [
      {
        "name": "À définir",
        "role": "Fondateur & Maître Fromager",
        "experience": "15+ ans",
        "certifications": ["Maître Fromager", "Expert Affinage"]
      },
      {
        "name": "À définir",
        "role": "Chef Fromager & Acheteur",
        "experience": "10 ans",
        "certifications": ["Fromager Diplômé", "Sélection Producteurs"]
      },
      {
        "name": "À définir",
        "role": "Expert Dégustation & Animation",
        "experience": "8 ans",
        "certifications": ["Sommelier Fromager", "Formateur Agréé"]
      }
    ]
  },
  "faq": [
    {
      "question": "Combien coûte une soirée raclette ou fondue chez Formaticus ?",
      "answer": "Nos soirées raclette sont à 42€/adulte et 22€/enfant (-12 ans), incluant raclette artisanale à volonté (4 variétés), charcuterie fine, pommes de terre bio, accompagnements et ambiance montagne pendant 2h30-3h. Les soirées fondue sont à 44€/adulte et 24€/enfant, avec fondue savoyarde maison à volonté, pain artisanal, charcuterie et accompagnements. Boissons en supplément (carte sur place). Réservation obligatoire 48h minimum."
    },
    {
      "question": "Combien de fromages avez-vous en boutique ?",
      "answer": "Nous proposons une sélection de plus de 150 fromages artisanaux différents en boutique : fromages fermiers au lait cru, AOP/AOC français et européens, fromages affinés en cave, spécialités rares et saisonnières. Notre gamme couvre toutes les grandes familles (pâtes molles, pressées, persillées, chèvres, brebis) et provient de France, Suisse, Italie, Belgique et Luxembourg. La sélection évolue selon les saisons et arrivages."
    }
  ],
  "certifications": [
    "Certification Hygiène Alimentaire",
    "Agrément Sanitaire Luxembourg",
    "Formation Maître Fromager",
    "Certification Manipulation Produits Laitiers",
    "Assurance RC Pro Alimentaire"
  ],
  "warranties": {
    "freshness": "Fraîcheur garantie - livraisons 2-3x/semaine",
    "traceability": "Traçabilité complète chaque fromage",
    "satisfaction": "Satisfaction 100% ou échange/remboursement",
    "advice": "Conseils experts gratuits",
    "events": "Annulation gratuite 72h avant événement"
  },
  "financing": {
    "available": false,
    "options": [
      "Paiement comptant",
      "Carte bancaire",
      "Espèces",
      "Chèques"
    ],
    "giftCards": "Cartes cadeaux 25€-200€ disponibles",
    "loyalty": "Carte fidélité : -10% dès 50€ d'achat"
  },
  "seo": {
    "keywords": [
      "fromagerie Luxembourg",
      "fromages artisanaux Luxembourg",
      "soirée raclette Luxembourg",
      "soirée fondue Luxembourg",
      "atelier dégustation fromage Luxembourg",
      "plateau fromages Luxembourg"
    ],
    "metaTitle": "Formaticus | Fromagerie Artisanale & Expériences Fromagères Luxembourg",
    "metaDescription": "Formaticus : fromagerie artisanale d'exception à Luxembourg. +150 fromages artisanaux, soirées conviviales (Raclette, Fondue, Tartiflette), ateliers dégustation et cours. Vente, livraison, traiteur. Réservez en ligne !",
    "structuredData": {
      "@context": "https://schema.org",
      "@type": "Store",
      "name": "Formaticus",
      "image": "https://www.formaticus.lu/images/logo.jpg",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Am Duerf",
        "addressLocality": "Dudelange",
        "postalCode": "3436",
        "addressCountry": "LU"
      },
      "telephone": "+352-27-51-78-85",
      "openingHours": "Tu-Fr 10:00-19:00, Sa 10:00-19:00, Su 10:00-14:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "124"
      },
      "servesCuisine": "Fromages artisanaux, Cuisine fromagère, Événements conviviaux"
    }
  },
  "additionalServices": {
    "freeServices": [
      "Conseils experts fromagers personnalisés",
      "Dégustation gratuite avant achat",
      "Découpe minute devant vous",
      "Conseils conservation et dégustation"
    ],
    "paidOptions": [
      "Emballage sous vide (+2€/fromage)",
      "Livraison Luxembourg-Ville et agglo (8-15€)",
      "Carte de fidélité -10% dès 50€",
      "Cartes cadeaux 25-200€"
    ]
  },
  "suppliers": {
    "france": [
      "Fromageries artisanales Normandie, Savoie, Auvergne",
      "Producteurs fermiers AOP/AOC",
      "Affineurs caves Jura, Alpes"
    ],
    "europe": [
      "Fromagers suisses traditionnels",
      "Producteurs italiens (Piémont, Toscane)",
      "Fromageries belges artisanales",
      "Fermes luxembourgeoises locales"
    ],
    "accompaniments": [
      "Confitures artisanales françaises",
      "Miels de terroir Luxembourg et France",
      "Pains artisanaux boulangeries locales",
      "Fruits secs premium sélectionnés"
    ]
  },
  "sustainability": {
    "commitments": [
      "Priorité producteurs locaux et circuits courts",
      "Sélection fromages fermiers au lait cru",
      "Fromages bio certifiés disponibles",
      "Emballages papier recyclable (pas de plastique)"
    ],
    "labels": ["Agriculture Biologique (certains fromages)", "AOP/AOC", "Fermier", "Lait Cru"]
  }
}
