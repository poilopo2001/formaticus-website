# Formaticus - Site Web Fromagerie Artisanale Luxembourg

Site web Next.js 14 complet pour Formaticus, fromagerie artisanale et destination d'expériences fromagères à Luxembourg.

## Caractéristiques Principales

- **Sélection de fromages** : Catalogue de 150+ fromages artisanaux avec filtres
- **Événements conviviaux** : Soirées raclette, fondue, tartiflette
- **Ateliers & cours** : Dégustations guidées, fabrication fromage
- **Système de réservation** : Formulaire multi-étapes avec validation
- **Service traiteur** : Pour mariages, événements entreprise, anniversaires
- **E-commerce** : Plateaux sur-mesure, coffrets cadeaux
- **SEO optimisé** : Métadonnées, JSON-LD, sitemap
- **Design responsive** : Mobile-first, tablette, desktop
- **Design gourmand** : Palette chaleureuse amber/gold, typographie Merriweather

## Technologies

- **Framework** : Next.js 14.2+ (App Router)
- **Language** : TypeScript 5.7+ (strict mode)
- **Styling** : Tailwind CSS 3.4+ (design system custom)
- **Animations** : Framer Motion 12+
- **Forms** : React Hook Form 7.5+ + Zod 3.24+
- **Icons** : Lucide React 0.46+
- **Date handling** : date-fns 4.1+

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## Build & Déploiement

```bash
# Build de production
npm run build

# Démarrer le serveur de production
npm start

# Vérifier le lint
npm run lint
```

## Structure du Projet

```
formaticus-website/
├── app/                      # Pages Next.js 14 App Router
│   ├── layout.tsx           # Root layout avec SEO
│   ├── page.tsx             # Homepage avec 9 sections
│   ├── globals.css          # Styles globaux + design system
│   ├── fromages/            # Catalogue fromages
│   ├── evenements/          # Événements & ateliers
│   ├── reserver/            # Système réservation
│   ├── plateau-sur-mesure/  # Plateaux personnalisés
│   ├── traiteur/            # Service traiteur
│   ├── a-propos/            # Histoire & équipe
│   └── contact/             # Contact & carte
├── components/
│   ├── ui/                  # Composants réutilisables
│   ├── layout/              # Header, Footer, Navigation
│   ├── sections/            # Sections homepage
│   └── forms/               # Formulaires réservation
├── lib/
│   ├── constants.ts         # Données JSON importées
│   ├── types.ts             # Interfaces TypeScript
│   ├── metadata.ts          # Métadonnées SEO
│   ├── schema.ts            # JSON-LD schemas
│   └── utils.ts             # Fonctions utilitaires
└── public/                  # Assets statiques

```

## Déploiement sur Vercel (Recommandé)

1. Connecter le repo GitHub à Vercel
2. Vercel détecte automatiquement Next.js
3. Déploiement automatique sur chaque push

```bash
# Alternative : CLI Vercel
npm i -g vercel
vercel
```

## Optimisations SEO Implémentées

- Métadonnées complètes sur toutes les pages
- JSON-LD schemas (LocalBusiness, Product, Event, FAQPage)
- OpenGraph tags pour réseaux sociaux
- Sitemap.xml généré automatiquement
- robots.txt configuré
- URLs canoniques
- Images optimisées avec Next Image
- Performance Lighthouse > 90

## Palette de Couleurs (Warm Cheese Theme)

- **Primary** : #d97706 (Amber 600) - Fromage affiné, chaleur
- **Secondary** : #92400e (Brown 800) - Bois, caves d'affinage
- **Accent** : #fbbf24 (Yellow 400) - Croûte dorée, soleil
- **Neutral** : #78350f (Brown 900) - Terre, authenticité

## Fonctionnalités Clés

### Homepage (9 Sections)
1. Hero avec CTAs "Réserver" & "Découvrir"
2. Introduction mission fromagerie
3. Stats bar (150+ fromages, 12 soirées/mois, 99% satisfaction)
4. Sélection fromages artisanaux (6 familles)
5. Événements highlight (4 soirées/ateliers) - **SECTION CRITIQUE**
6. Galerie photos événements passés
7. Témoignages clients (focus expérience)
8. FAQ (8+ questions réservation/fromages)
9. CTA final réservation avec garanties

### Système de Réservation Multi-Étapes
- Étape 1 : Choix événement (raclette, fondue, atelier)
- Étape 2 : Date & nombre de personnes
- Étape 3 : Horaire & options (boissons, plateau à emporter)
- Étape 4 : Coordonnées & confirmation
- Validation Zod + React Hook Form
- RGPD compliant avec checkbox obligatoire

### Catalogue Fromages
- Filtres par famille (pâte molle, pressée, persillée, chèvre, brebis)
- Filtres par origine (France, Suisse, Italie, Belgique, Luxembourg)
- Filtres par type de lait (vache, chèvre, brebis)
- Dégustation gratuite mentionnée
- Prix/kg affiché

### Pages Événements
- Liste complète avec calendrier
- Pages détails individuelles avec formulaire réservation
- Inclus/non-inclus clairement indiqué
- Processus de réservation détaillé
- Garanties (annulation 72h, report possible)

## Contact & Support

Pour toute question sur le code ou la configuration :
- Email : contact@formaticus.lu
- Téléphone : +352 XX XX XX XX

## Licence

© 2024 Formaticus Luxembourg. Tous droits réservés.
