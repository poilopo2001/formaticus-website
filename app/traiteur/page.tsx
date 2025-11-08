import { Metadata } from 'next'
import Image from 'next/image'
import { SITE_DATA } from '@/lib/constants'
import { Users, Briefcase, Home, CheckCircle, Calendar, Award } from 'lucide-react'
import Link from 'next/link'
import { Ornament } from '@/components/ui/Ornament'

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
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940"
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
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
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

          <div className="grid md:grid-cols-3 gap-12">
            {/* Événements d'Entreprise */}
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

            {/* Événements Privés */}
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

            {/* Animations Spéciales */}
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
          </div>
        </div>
      </section>

      {/* Nos Formules */}
      {traiteurService && (
        <section className="py-32 bg-black">
          <div className="container mx-auto px-4">
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

            <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              {/* Image */}
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

              {/* Contenu */}
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
            </div>
          </div>
        </section>
      )}

      {/* Notre Processus */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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

            <div className="space-y-6">
              {traiteurService?.process.map((step, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 bg-black/40 border border-accent-600/30 p-8"
                >
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-accent-600 flex items-center justify-center text-accent-600 font-serif font-light text-2xl">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-primary-200 font-light leading-relaxed">{step.replace(/^\d+\.\s*/, '')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garanties */}
      {traiteurService?.guarantees && (
        <section className="py-32 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-20">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                  Excellence
                </p>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                  Nos<br />Garanties
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {traiteurService.guarantees.map((guarantee, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-black/40 border border-accent-600/30 p-8"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1" />
                    <p className="text-primary-200 font-light">{guarantee}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
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
        </div>
      </section>
    </main>
  )
}
