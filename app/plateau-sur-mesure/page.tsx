import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'
import { CheckCircle, Phone, Mail, ChefHat, Sparkles, Users, Gift, Calendar, Euro } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plateau Fromage Sur Mesure - Composition Personnalisée | Formaticus',
  description: 'Créez votre plateau de fromages sur mesure. Notre fromager compose pour vous la sélection parfaite selon vos goûts, budget et occasion. Conseil expert personnalisé.',
}

// Exemples de budgets
const budgets = [
  {
    id: 1,
    nom: 'Découverte',
    prix: '35-50€',
    personnes: '2-4 personnes',
    fromages: '4-5 fromages',
    description: 'Parfait pour une découverte ou un apéritif en petit comité',
    badge: 'Populaire',
    badgeColor: 'accent-600',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2940'
  },
  {
    id: 2,
    nom: 'Prestige',
    prix: '65-90€',
    personnes: '6-8 personnes',
    fromages: '6-8 fromages',
    description: 'Idéal pour un dîner entre amis ou une occasion spéciale',
    badge: 'Recommandé',
    badgeColor: 'green-600',
    image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=2940'
  },
  {
    id: 3,
    nom: 'Exception',
    prix: '120-180€',
    personnes: '10-15 personnes',
    fromages: '10-12 fromages',
    description: 'Pour les grandes occasions et les événements d\'entreprise',
    badge: 'Premium',
    badgeColor: 'accent-600',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940'
  }
]

// Processus en 4 étapes
const processus = [
  {
    id: 1,
    numero: '01',
    titre: 'Partagez vos Envies',
    description: 'Contactez-nous par téléphone ou email. Expliquez-nous vos goûts, le nombre de personnes, l\'occasion et votre budget.',
    icon: Phone
  },
  {
    id: 2,
    numero: '02',
    titre: 'Conseil Expert',
    description: 'Notre fromager analyse vos préférences et vous propose une sélection personnalisée avec accords vins recommandés.',
    icon: ChefHat
  },
  {
    id: 3,
    numero: '03',
    titre: 'Validation & Commande',
    description: 'Vous validez la composition et le prix. Nous préparons votre plateau avec soin le jour même ou selon votre planning.',
    icon: CheckCircle
  },
  {
    id: 4,
    numero: '04',
    titre: 'Dégustation Parfaite',
    description: 'Récupérez votre plateau en boutique ou bénéficiez de la livraison. Profitez d\'une dégustation mémorable.',
    icon: Sparkles
  }
]

// Occasions spéciales
const occasions = [
  {
    id: 1,
    nom: 'Événements d\'Entreprise',
    description: 'Cocktails, séminaires, inaugurations',
    icon: Users
  },
  {
    id: 2,
    nom: 'Cadeaux Gourmands',
    description: 'Anniversaires, remerciements, fêtes',
    icon: Gift
  },
  {
    id: 3,
    nom: 'Réceptions Privées',
    description: 'Dîners, mariages, anniversaires',
    icon: Calendar
  }
]

// Témoignages
const témoignages = [
  {
    id: 1,
    nom: 'Sophie M.',
    occasion: 'Anniversaire de mariage',
    texte: 'Plateau exceptionnel pour notre 10e anniversaire. La sélection était parfaite, avec un équilibre entre fromages doux et caractère. Les invités ont adoré !',
    note: 5
  },
  {
    id: 2,
    nom: 'Laurent D.',
    occasion: 'Séminaire entreprise',
    texte: 'Commande de 3 plateaux pour notre séminaire. Service impeccable, conseil avisé et produits d\'une qualité irréprochable. Je recommande vivement.',
    note: 5
  },
  {
    id: 3,
    nom: 'Marie P.',
    occasion: 'Cadeau gourmand',
    texte: 'Coffret personnalisé offert à mes parents. Ils étaient ravis de la découverte ! La présentation était magnifique et les fromages délicieux.',
    note: 5
  }
]

export default function PlateauSurMesurePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=2940"
            alt="Plateau Fromage Sur Mesure - Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Création Personnalisée
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Plateau Fromage<br />Sur Mesure
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Notre fromager compose pour vous la sélection parfaite selon vos goûts, votre budget et votre occasion
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Conseil</span> personnalisé
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Sélection</span> sur mesure
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Livraison</span> possible
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-4 h-4" />
                Nous Appeler
              </a>
              <Link
                href="/contact"
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 inline-flex items-center justify-center gap-3"
              >
                <Mail className="w-4 h-4" />
                Nous Écrire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Processus en 4 étapes */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Simple & Rapide
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Comment ça Marche
            </h2>
            <p className="text-lg text-primary-200 font-light max-w-2xl mx-auto">
              Un processus simple en 4 étapes pour créer votre plateau parfait
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {processus.map((etape) => (
              <div key={etape.id} className="group">
                {/* Numéro */}
                <div className="text-center mb-6">
                  <div className="inline-block text-7xl font-serif font-light text-accent-600/20 group-hover:text-accent-600/40 transition-colors duration-500">
                    {etape.numero}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full border-2 border-accent-600/30 group-hover:border-accent-600 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(228,197,144,0.4)]">
                    <etape.icon className="w-8 h-8 text-accent-600" />
                  </div>
                </div>

                {/* Contenu */}
                <div className="text-center">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    {etape.titre}
                  </h3>
                  <p className="text-primary-200 font-light text-sm leading-relaxed">
                    {etape.description}
                  </p>
                </div>

                {/* Connector line (sauf dernier) */}
                {etape.id < processus.length && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-accent-600/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budgets & Formules */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Tous les Budgets
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Nos Formules<br />Indicatives
            </h2>
            <p className="text-lg text-primary-200 font-light max-w-2xl mx-auto">
              Des formules adaptées à chaque occasion et budget. Chaque plateau est unique et personnalisable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {budgets.map((budget) => (
              <div key={budget.id} className="group relative">
                {/* Badge */}
                {budget.badge && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className={`inline-block bg-${budget.badgeColor} text-${budget.badgeColor === 'accent-600' ? 'black' : 'white'} px-4 py-1 text-xs tracking-[0.2em] uppercase font-medium`}>
                      {budget.badge}
                    </span>
                  </div>
                )}

                <div className="bg-primary-900/50 border border-accent-600/30 overflow-hidden h-full transition-all duration-500 hover:border-accent-600 hover:shadow-[0_10px_40px_-10px_rgba(228,197,144,0.4)] hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={budget.image}
                      alt={`Plateau ${budget.nom} - Formaticus`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent" />
                  </div>

                  <div className="p-8">
                    {/* Nom formule */}
                    <div className="text-center mb-8 pb-6 border-b border-accent-600/20">
                      <h3 className="text-3xl font-serif font-light text-white mb-2">
                        {budget.nom}
                      </h3>
                      <div className="text-4xl font-serif text-accent-600 mb-2">
                        {budget.prix}
                      </div>
                    </div>

                    {/* Détails */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-primary-200">
                        <Users className="w-5 h-5 text-accent-600 flex-shrink-0" />
                        <span className="font-light">{budget.personnes}</span>
                      </div>
                      <div className="flex items-center gap-3 text-primary-200">
                        <ChefHat className="w-5 h-5 text-accent-600 flex-shrink-0" />
                        <span className="font-light">{budget.fromages}</span>
                      </div>
                    </div>

                    <p className="text-primary-300 font-light text-sm text-center mb-8 leading-relaxed">
                      {budget.description}
                    </p>

                    <Link
                      href="/contact"
                      className="block w-full px-6 py-3 border border-accent-600/50 text-accent-600 text-xs tracking-[0.2em] uppercase hover:border-accent-600 hover:bg-accent-600 hover:text-black transition-all duration-500 text-center"
                    >
                      Commander
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note personnalisation */}
          <div className="text-center mt-16">
            <p className="text-primary-300 font-light">
              <span className="text-accent-600">Budget personnalisé ?</span> Contactez-nous pour une composition sur mesure sans limite
            </p>
          </div>
        </div>
      </section>

      {/* Occasions Spéciales */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Pour Chaque Occasion
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Événements &<br />Célébrations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {occasions.map((occasion) => (
              <div key={occasion.id} className="group">
                <div className="bg-black/40 border border-accent-600/30 p-8 text-center transition-all duration-500 hover:border-accent-600 hover:shadow-[0_10px_40px_-10px_rgba(228,197,144,0.4)]">
                  <div className="flex justify-center mb-6">
                    <occasion.icon className="w-12 h-12 text-accent-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-light text-white mb-4">
                    {occasion.nom}
                  </h3>
                  <p className="text-primary-200 font-light text-sm">
                    {occasion.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Ils Nous Font Confiance
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Avis Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {témoignages.map((temoignage) => (
              <div key={temoignage.id} className="group">
                <div className="bg-primary-900/50 border border-accent-600/30 p-8 transition-all duration-500 hover:border-accent-600 hover:shadow-[0_10px_40px_-10px_rgba(228,197,144,0.4)]">
                  {/* Étoiles */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(temoignage.note)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-primary-200 font-light italic mb-6 leading-relaxed">
                    "{temoignage.texte}"
                  </p>

                  <div className="text-center">
                    <p className="text-white font-light mb-1">{temoignage.nom}</p>
                    <p className="text-accent-600 text-sm font-light">{temoignage.occasion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Prêt à Commander ?
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Créons Ensemble<br />Votre Plateau Parfait
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed">
              Notre équipe est à votre écoute pour composer le plateau de fromages qui ravira vos papilles et celles de vos convives.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-4 h-4" />
                {SITE_DATA.business.contact.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 inline-flex items-center justify-center gap-3"
              >
                <Mail className="w-4 h-4" />
                Formulaire de Contact
              </Link>
            </div>

            <div className="text-sm text-primary-300 font-light">
              <p>Réponse sous 2h · Disponible {SITE_DATA.business.hours.weekdays}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
