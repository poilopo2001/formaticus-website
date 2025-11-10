import { Metadata } from 'next'
import Image from 'next/image'
import { SITE_DATA } from '@/lib/constants'
import { Users, Briefcase, Home, CheckCircle, Calendar, Award } from 'lucide-react'
import Link from 'next/link'
import { Ornament } from '@/components/ui/Ornament'
import { FadeInSection } from '@/components/ui/FadeInSection'

export const metadata: Metadata = {
  title: 'Service Traiteur & Événements Privés | Formaticus Luxembourg',
  description: 'Service traiteur fromage pour vos événements professionnels et privés. Plateaux artisanaux, soirées raclette, animations fromages. Devis gratuit sous 24h.',
  keywords: [
    'traiteur fromage Luxembourg',
    'événement entreprise Luxembourg',
    'animation fromage',
    'cocktail fromage',
    'team building fromage',
  ],
}

export default function TraiteurPage() {
  const traiteurService = SITE_DATA.services.find(s => s.slug === 'traiteur-evenements')

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Séance Photo Nicolas 20220423/hero-evenements-traiteur.jpg"
            alt="Service Traiteur Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Service Traiteur
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Événements<br />d'Exception
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              Sublimez vos événements professionnels et privés avec nos plateaux fromages artisanaux et animations gourmandes
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Devis gratuit</span> sous 24h
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Livraison</span> possible
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">10 à 200+</span> personnes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'événements */}
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeInSection delay={0.2}>
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Nos Services
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Tous Vos<br />Événements
              </h2>
              <p className="text-lg text-primary-200 font-light max-w-3xl mx-auto leading-relaxed">
                Événements professionnels, privés, team building... Nous nous adaptons à toutes vos demandes
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Événements d'Entreprise */}
            <FadeInSection delay={0.4} direction="up">
              <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="bg-black/40 border border-accent-600/30 p-8 mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Briefcase className="w-16 h-16 text-accent-600 mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-light text-white mb-6">Événements d'Entreprise</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Séminaires & conférences</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Cocktails professionnels</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Team building fromage</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Inaugurations</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Événements clients</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              </div>
            </FadeInSection>

            {/* Événements Privés */}
            <FadeInSection delay={0.5} direction="up">
              <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="bg-black/40 border border-accent-600/30 p-8 mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Home className="w-16 h-16 text-accent-600 mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-light text-white mb-6">Événements Privés</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Mariages & fiançailles</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Anniversaires</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Baptêmes & communions</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Réceptions familiales</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Soirées entre amis</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              </div>
            </FadeInSection>

            {/* Animations Spéciales */}
            <FadeInSection delay={0.6} direction="up">
              <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="bg-black/40 border border-accent-600/30 p-8 mb-8 transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                <Users className="w-16 h-16 text-accent-600 mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-light text-white mb-6">Animations Spéciales</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Soirée raclette sur site</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Atelier dégustation</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Bar à fromages animé</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Démonstration fromager</span>
                  </li>
                  <li className="flex items-start gap-3 text-primary-200 font-light">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span>Conseils accords mets-vins</span>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Nos Plateaux Signature */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeInSection delay={0.2}>
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Nos Créations
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Plateaux<br />Signature
              </h2>
              <p className="text-lg text-primary-200 font-light max-w-3xl mx-auto leading-relaxed">
                Découvrez nos compositions artisanales conçues pour sublimer vos événements. Chaque plateau est composé avec soin par nos maîtres fromagers, alliant tradition et créativité pour une expérience gustative inoubliable.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Plateau Découverte */}
            <FadeInSection delay={0.4} direction="up">
              <div className="group">
                <div className="relative h-80 mb-6 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src="/Séance Photo Nicolas 20220423/plateau-fromages-01.jpg"
                    alt="Plateau Découverte - Traiteur Formaticus"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif font-light text-white mb-2">Plateau Découverte</h3>
                    <p className="text-accent-600 text-sm tracking-wider">10-15 PERSONNES</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-primary-200 font-light leading-relaxed">
                    Une sélection harmonieuse de 5-6 fromages artisanaux : pâtes molles, pâtes pressées, chèvre frais. Parfait pour les cocktails et réceptions.
                  </p>
                  <div className="flex items-center gap-2 text-accent-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-light">Accompagnements inclus</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Plateau Prestige */}
            <FadeInSection delay={0.5} direction="up">
              <div className="group">
                <div className="relative h-80 mb-6 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src="/Séance Photo Nicolas 20220423/plateau-fromages-03.jpg"
                    alt="Plateau Prestige - Traiteur Formaticus"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif font-light text-white mb-2">Plateau Prestige</h3>
                    <p className="text-accent-600 text-sm tracking-wider">25-35 PERSONNES</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-primary-200 font-light leading-relaxed">
                    Notre composition premium avec 8-10 fromages d'exception : AOP, affinés, truffés. Idéal pour les événements d'entreprise et mariages.
                  </p>
                  <div className="flex items-center gap-2 text-accent-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-light">Présentation soignée</span>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* Plateau Buffet */}
            <FadeInSection delay={0.6} direction="up">
              <div className="group">
                <div className="relative h-80 mb-6 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src="/Séance Photo Nicolas 20220423/hero-box-fromage-vin.jpg"
                    alt="Plateau Buffet - Traiteur Formaticus"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-serif font-light text-white mb-2">Plateau Buffet</h3>
                    <p className="text-accent-600 text-sm tracking-wider">50+ PERSONNES</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-primary-200 font-light leading-relaxed">
                    Buffet complet sur mesure avec 12-15 fromages variés, charcuterie fine, pains artisanaux et condiments. Pour vos grands événements.
                  </p>
                  <div className="flex items-center gap-2 text-accent-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-light">Service et animation possible</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.8}>
            <div className="text-center mt-16">
              <p className="text-primary-300 font-light text-sm mb-6">
                Tous nos plateaux sont personnalisables selon vos préférences et contraintes alimentaires
              </p>
              <Link
                href="/contact"
                className="inline-block px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
              >
                Créer Mon Plateau
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Pourquoi Choisir Formaticus */}
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeInSection delay={0.2}>
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Notre Différence
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Pourquoi Choisir<br />Formaticus ?
              </h2>
              <p className="text-lg text-primary-200 font-light max-w-3xl mx-auto leading-relaxed">
                Plus qu'un simple traiteur fromage, nous sommes des passionnés qui mettent leur expertise au service de la réussite de vos événements
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0.3} direction="up">
              <div className="bg-black/40 border border-accent-600/30 p-8 text-center">
                <div className="w-16 h-16 border-2 border-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-accent-600 text-3xl font-serif">+</span>
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">150 Fromages</h3>
                <p className="text-primary-200 font-light text-sm leading-relaxed">
                  La plus grande sélection de fromages artisanaux AOP et fermiers du Luxembourg
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4} direction="up">
              <div className="bg-black/40 border border-accent-600/30 p-8 text-center">
                <div className="w-16 h-16 border-2 border-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">Expertise</h3>
                <p className="text-primary-200 font-light text-sm leading-relaxed">
                  Fromagers passionnés formés aux meilleures techniques de sélection et d'affinage
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5} direction="up">
              <div className="bg-black/40 border border-accent-600/30 p-8 text-center">
                <div className="w-16 h-16 border-2 border-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">Réactivité</h3>
                <p className="text-primary-200 font-light text-sm leading-relaxed">
                  Devis sous 24h, livraison ponctuelle et service client disponible 7j/7
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6} direction="up">
              <div className="bg-black/40 border border-accent-600/30 p-8 text-center">
                <div className="w-16 h-16 border-2 border-accent-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-2xl font-serif font-light text-white mb-4">Qualité</h3>
                <p className="text-primary-200 font-light text-sm leading-relaxed">
                  Sélection rigoureuse auprès de producteurs artisanaux et respect de la chaîne du froid
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Nos Formules */}
      {traiteurService && (
        <section className="py-40 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <FadeInSection delay={0.2}>
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Nos Formules
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Prestations<br />Sur Mesure
                </h2>
                <p className="text-lg text-primary-200 font-light max-w-3xl mx-auto leading-relaxed">
                  Des formules flexibles adaptées à tous vos besoins et budgets
                </p>
              </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              {/* Image */}
              <FadeInSection delay={0.4} direction="left">
                <div className="group">
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                <div className="relative h-96 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src={traiteurService.image}
                    alt="Formules traiteur"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                    <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
                </div>
              </FadeInSection>

              {/* Contenu */}
              <FadeInSection delay={0.5} direction="right">
                <div className="space-y-6">
                {traiteurService.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-6"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <p className="text-primary-200 font-light">{benefit}</p>
                  </div>
                ))}

                <div className="bg-black/60 border border-accent-600/30 p-8 mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-accent-600" />
                    <h3 className="text-2xl font-serif font-light text-white">Tarifs indicatifs</h3>
                  </div>
                  <p className="text-primary-200 font-light mb-2">
                    À partir de <span className="text-3xl font-serif text-accent-600">{traiteurService.priceMin}€</span> par personne
                  </p>
                  <p className="text-sm text-primary-300 font-light">
                    Devis personnalisé gratuit sous 24h selon vos besoins
                  </p>
                </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>
      )}

      {/* Notre Processus */}
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Notre Méthode
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Comment<br />Ça Marche ?
                </h2>
                <p className="text-lg text-primary-200 font-light leading-relaxed">
                  Un processus simple et personnalisé
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="space-y-6">
                <div className="flex gap-6 bg-black/40 border border-accent-600/30 p-8">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-accent-600 flex items-center justify-center text-accent-600 font-serif font-light text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-light text-white mb-2">Prise de Contact</h3>
                    <p className="text-primary-200 font-light leading-relaxed">
                      Contactez-nous par téléphone, email ou formulaire en ligne pour nous présenter votre projet. Précisez le type d'événement, la date, le nombre d'invités et vos préférences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-black/40 border border-accent-600/30 p-8">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-accent-600 flex items-center justify-center text-accent-600 font-serif font-light text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-light text-white mb-2">Devis Personnalisé</h3>
                    <p className="text-primary-200 font-light leading-relaxed">
                      Nos fromagers vous proposent une sélection adaptée à vos besoins et budget. Vous recevez un devis détaillé sous 24h avec la composition complète des plateaux et les services inclus.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-black/40 border border-accent-600/30 p-8">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-accent-600 flex items-center justify-center text-accent-600 font-serif font-light text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-light text-white mb-2">Ajustements & Validation</h3>
                    <p className="text-primary-200 font-light leading-relaxed">
                      Nous ajustons ensemble la sélection de fromages selon vos retours : changement de fromages, adaptation des quantités, ajout d'options. Une fois validé, nous confirmons votre commande.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-black/40 border border-accent-600/30 p-8">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-accent-600 flex items-center justify-center text-accent-600 font-serif font-light text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-light text-white mb-2">Préparation & Composition</h3>
                    <p className="text-primary-200 font-light leading-relaxed">
                      Nos maîtres fromagers sélectionnent et préparent vos fromages la veille ou le jour même pour une fraîcheur optimale. Chaque plateau est composé avec soin dans nos ateliers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-black/40 border border-accent-600/30 p-8">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-accent-600 flex items-center justify-center text-accent-600 font-serif font-light text-2xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-light text-white mb-2">Livraison & Installation</h3>
                    <p className="text-primary-200 font-light leading-relaxed">
                      Livraison ponctuelle le jour J avec respect de la chaîne du froid. Si vous avez choisi le service complet, notre équipe installe et dresse les plateaux sur place pour une présentation impeccable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 bg-black/40 border border-accent-600/30 p-8">
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-accent-600 flex items-center justify-center text-accent-600 font-serif font-light text-2xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-light text-white mb-2">Service & Animation (optionnel)</h3>
                    <p className="text-primary-200 font-light leading-relaxed">
                      Pour les grands événements, un de nos fromagers passionnés peut animer votre buffet : présentation des fromages, anecdotes, conseils de dégustation et accords mets-vins.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Excellence
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Nos<br />Garanties
                </h2>
                <p className="text-lg text-primary-200 font-light max-w-2xl mx-auto leading-relaxed">
                  Des engagements concrets pour la réussite de vos événements
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8">
                  <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                  <p className="text-primary-200 font-light">
                    Fraîcheur garantie - sélection et préparation le jour même ou la veille de votre événement
                  </p>
                </div>

                <div className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8">
                  <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                  <p className="text-primary-200 font-light">
                    Respect strict de la chaîne du froid durant le transport et la livraison
                  </p>
                </div>

                <div className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8">
                  <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                  <p className="text-primary-200 font-light">
                    Ponctualité garantie - livraison à l'heure convenue ou prévenue en cas d'imprévu
                  </p>
                </div>

                <div className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8">
                  <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                  <p className="text-primary-200 font-light">
                    Qualité artisanale - fromages sélectionnés auprès de nos meilleurs producteurs
                  </p>
                </div>

                <div className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8">
                  <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                  <p className="text-primary-200 font-light">
                    Flexibilité totale - ajustements possibles jusqu'à 48h avant l'événement
                  </p>
                </div>

                <div className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8">
                  <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                  <p className="text-primary-200 font-light">
                    Satisfaction garantie - engagement qualité ou remboursement intégral
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* FAQ Traiteur */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeInSection delay={0.2}>
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Questions Fréquentes
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Tout Savoir Sur<br />Notre Service Traiteur
                </h2>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Quel est le délai de commande pour un service traiteur ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    Nous recommandons de commander au minimum 48h à l'avance pour les petites prestations (10-20 personnes) et 1 semaine pour les grands événements (50+ personnes). Pour les demandes urgentes, contactez-nous directement, nous ferons notre maximum pour vous accommoder.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Livrez-vous partout au Luxembourg ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    Oui, nous livrons dans tout le Grand-Duché de Luxembourg. Les frais de livraison varient selon la distance et le volume de la commande. La livraison est offerte pour les commandes supérieures à 500€. Nous assurons également le respect strict de la chaîne du froid lors du transport.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Peut-on personnaliser les plateaux selon nos préférences ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    Absolument ! Chaque plateau est entièrement personnalisable. Vous pouvez choisir vos fromages préférés, exclure certains types (pâtes persillées, chèvres...), adapter selon les allergies ou régimes spéciaux, et définir le niveau d'intensité des saveurs. Nos fromagers vous conseilleront pour créer la composition parfaite.
                  </p>
                </div>

                {/* FAQ 4 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Fournissez-vous le matériel de service et la décoration ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    Oui, nous proposons plusieurs options : location de plateaux en bois, ardoise et présentoirs professionnels, mise en place et dressage sur site, décoration florale et étiquetage des fromages, ainsi qu'un service d'animation avec fromager sur place pour les grands événements. Tous ces services sont détaillés dans notre devis personnalisé.
                  </p>
                </div>

                {/* FAQ 5 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Quels accompagnements sont inclus avec les plateaux ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    Nos plateaux incluent systématiquement : pains artisanaux variés (baguette, noix, figues), fruits frais de saison (raisins, figues, abricots secs), fruits secs et oléagineux (noix, amandes, noisettes), confitures et chutneys artisanaux, ainsi que miel et confiture de lait. Vous pouvez également ajouter de la charcuterie fine en supplément.
                  </p>
                </div>

                {/* FAQ 6 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Proposez-vous des options végétariennes ou sans lactose ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    Tous nos fromages sont naturellement végétariens (certains contiennent de la présure animale, nous pouvons l'éviter sur demande). Pour les intolérances au lactose, nous proposons des fromages affinés longue durée (Comté 36 mois, Parmesan) qui contiennent très peu de lactose, ainsi que des alternatives végétales de qualité si nécessaire.
                  </p>
                </div>

                {/* FAQ 7 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Comment calculer les quantités nécessaires pour mon événement ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    En règle générale, comptez 80-100g de fromage par personne pour un cocktail avec d'autres buffets, 150-200g pour un plateau principal, et 250g+ pour une soirée dégustation. Nous ajustons ces quantités selon le type d'événement, l'heure (apéritif vs dîner), et la présence d'autres mets. Notre équipe vous guide pour éviter le gaspillage.
                  </p>
                </div>

                {/* FAQ 8 */}
                <div className="bg-black/40 border border-accent-600/30 p-8">
                  <h3 className="text-xl font-serif font-light text-white mb-4">
                    Puis-je commander uniquement les fromages sans le service ?
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed">
                    Bien sûr ! Nous proposons trois formules : "Fromages seuls" (fromages pré-découpés emballés sous vide), "Plateau prêt à servir" (fromages disposés sur plateau avec accompagnements), et "Service complet" (livraison, installation, service et animation). Choisissez la formule qui correspond à vos besoins et votre budget.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="text-center mt-16 p-8 bg-accent-600/10 border border-accent-600/30">
                <p className="text-primary-200 font-light mb-4">
                  Une autre question ? Notre équipe est à votre écoute
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
                  >
                    Nous Contacter
                  </Link>
                  <a
                    href={`tel:${SITE_DATA.business.contact.phone}`}
                    className="px-8 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
                  >
                    {SITE_DATA.business.contact.phone}
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <FadeInSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Contact
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Demandez Votre<br />Devis Gratuit
              </h2>
              <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé sous 24h
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
                >
                  Demander un Devis
                </Link>
                <a
                  href={`tel:${SITE_DATA.business.contact.phone}`}
                  className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
                >
                  Nous Appeler
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
