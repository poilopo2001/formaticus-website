import { SITE_DATA } from './constants'

/**
 * Generate LocalBusiness Schema for homepage
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Store', 'LocalBusiness', 'Restaurant'],
    name: SITE_DATA.business.name,
    description: SITE_DATA.business.description,
    image: 'https://www.formaticus.lu/images/logo.jpg',
    '@id': 'https://www.formaticus.lu',
    url: 'https://www.formaticus.lu',
    telephone: SITE_DATA.business.contact.phone,
    email: SITE_DATA.business.contact.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_DATA.business.contact.address.street,
      addressLocality: SITE_DATA.business.contact.address.city,
      postalCode: SITE_DATA.business.contact.address.postalCode,
      addressCountry: 'LU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_DATA.business.contact.coordinates.lat,
      longitude: SITE_DATA.business.contact.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: SITE_DATA.testimonials.length.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    servesCuisine: 'Fromages artisanaux, Cuisine fromagère, Événements conviviaux',
    paymentAccepted: SITE_DATA.financing.options.join(', '),
    currenciesAccepted: 'EUR',
    hasMenu: 'https://www.formaticus.lu/fromages',
    sameAs: [
      SITE_DATA.business.social.facebook,
      SITE_DATA.business.social.instagram,
      SITE_DATA.business.social.linkedin,
      SITE_DATA.business.social.youtube,
    ].filter(Boolean),
  }
}

/**
 * Generate Product Schema for cheese
 */
export function generateCheeseProductSchema(
  name: string,
  description: string,
  image: string,
  price: number,
  origin: string,
  family: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image,
    brand: {
      '@type': 'Brand',
      name: 'Formaticus',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.formaticus.lu/fromages/${name.toLowerCase().replace(/\s+/g, '-')}`,
      priceCurrency: 'EUR',
      price: price.toString(),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Formaticus',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Famille',
        value: family,
      },
      {
        '@type': 'PropertyValue',
        name: 'Origine',
        value: origin,
      },
    ],
  }
}

/**
 * Generate Event Schema for cheese events
 */
export function generateEventSchema(
  name: string,
  description: string,
  startDate: string,
  price: number,
  location: string = 'Formaticus Luxembourg'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: name,
    description: description,
    startDate: startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE_DATA.business.contact.address.street,
        addressLocality: SITE_DATA.business.contact.address.city,
        postalCode: SITE_DATA.business.contact.address.postalCode,
        addressCountry: 'LU',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Formaticus',
      url: 'https://www.formaticus.lu',
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.formaticus.lu/reserver',
      price: price.toString(),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
    },
  }
}

/**
 * Generate FAQPage Schema
 */
export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SITE_DATA.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate Review Schema
 */
export function generateReviewSchema(testimonial: {
  name: string
  rating: number
  text: string
  date: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: SITE_DATA.business.name,
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: testimonial.text,
    datePublished: testimonial.date,
  }
}

/**
 * Generate Organization Schema
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_DATA.business.name,
    url: 'https://www.formaticus.lu',
    logo: 'https://www.formaticus.lu/images/logo.jpg',
    description: SITE_DATA.business.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_DATA.business.contact.address.street,
      addressLocality: SITE_DATA.business.contact.address.city,
      postalCode: SITE_DATA.business.contact.address.postalCode,
      addressCountry: 'LU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_DATA.business.contact.phone,
      contactType: 'customer service',
      email: SITE_DATA.business.contact.email,
      availableLanguage: SITE_DATA.business.languages,
    },
    sameAs: [
      SITE_DATA.business.social.facebook,
      SITE_DATA.business.social.instagram,
      SITE_DATA.business.social.linkedin,
      SITE_DATA.business.social.youtube,
    ].filter(Boolean),
  }
}

/**
 * Generate Course/Workshop Schema
 */
export function generateCourseSchema(
  name: string,
  description: string,
  price: number,
  duration: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: name,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Formaticus',
      sameAs: 'https://www.formaticus.lu',
    },
    offers: {
      '@type': 'Offer',
      category: 'Workshop',
      price: price.toString(),
      priceCurrency: 'EUR',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'onsite',
      duration: duration,
      instructor: {
        '@type': 'Person',
        name: 'Expert Fromager Formaticus',
        jobTitle: 'Maître Fromager',
      },
    },
  }
}

/**
 * Generate FoodEstablishment Schema
 */
export function generateFoodEstablishmentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: SITE_DATA.business.name,
    servesCuisine: 'Fromages artisanaux, Raclette, Fondue, Tartiflette',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_DATA.business.contact.address.street,
      addressLocality: SITE_DATA.business.contact.address.city,
      postalCode: SITE_DATA.business.contact.address.postalCode,
      addressCountry: 'LU',
    },
    telephone: SITE_DATA.business.contact.phone,
    menu: 'https://www.formaticus.lu/evenements',
    acceptsReservations: 'True',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: SITE_DATA.testimonials.length.toString(),
    },
  }
}
