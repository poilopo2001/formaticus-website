import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { coffrets } from '@/lib/coffrets-data'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'
import { CheckCircle, Package, Wine, Gift, ShoppingCart, ArrowLeft } from 'lucide-react'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return coffrets.map((coffret) => ({
    slug: coffret.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const coffret = coffrets.find((c) => c.slug === params.slug)

  if (!coffret) {
    return {
      title: 'Coffret non trouvé | Formaticus Luxembourg',
    }
  }

  return {
    title: `${coffret.nom} - ${coffret.prix}€ | Formaticus Luxembourg`,
    description: coffret.description,
  }
}

export default function CoffretPage({ params }: PageProps) {
  const coffret = coffrets.find((c) => c.slug === params.slug)

  if (!coffret) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Navigation retour */}
      <div className="bg-primary-900 border-b border-accent-600/20">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <Link
            href="/box-fromage-vin"
            className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-500 transition-colors text-sm tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux coffrets
          </Link>
        </div>
      </div>

      {/* Hero Section avec image du coffret */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="group">
                {/* Star ornament */}
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-10 h-10 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                {/* Badge */}
                <div className="relative z-20 mb-6 flex justify-center">
                  <span className="inline-block bg-accent-600 text-black px-6 py-2 text-xs tracking-[0.2em] uppercase font-medium">
                    {coffret.badge}
                  </span>
                </div>

                <div className="relative h-[600px] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src={coffret.image}
                    alt={coffret.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glow border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                  </div>
                </div>

                {/* Ornament */}
                <div className="mt-8 flex justify-center">
                  <svg className="w-20 h-3 text-accent-600" viewBox="0 0 80 12" fill="none">
                    <path d="M0 6h36M40 0v12M44 6h36" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="40" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Contenu */}
              <div className="space-y-8">
                <div>
                  <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-4">
                    Coffret Premium
                  </p>
                  <h1 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
                    {coffret.nom}
                  </h1>
                  <p className="text-xl text-primary-200 font-light leading-relaxed mb-8">
                    {coffret.description}
                  </p>

                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-6xl font-serif text-accent-600">{coffret.prix}€</span>
                    <span className="text-sm text-primary-300 font-light">le coffret complet</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-accent-600 font-light mb-10">
                    <Gift className="w-5 h-5" />
                    <span>{coffret.ideal}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 px-10 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 text-center inline-flex items-center justify-center gap-3"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Commander ce Coffret
                  </Link>
                  <Link
                    href="/reserver"
                    className="px-10 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 text-center"
                  >
                    Réserver pour un événement
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu du Coffret */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                Contenu du Coffret
              </h2>
              <p className="text-lg text-primary-200 font-light">
                Découvrez la sélection soigneusement composée pour ce coffret
              </p>
            </div>

            <div className="bg-primary-900/50 border border-accent-600/30 p-10">
              <ul className="space-y-4">
                {coffret.contenu.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-primary-100 font-light text-lg group">
                    <Package className="w-6 h-6 text-accent-600 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caractéristiques */}
      {coffret.caracteristiques && (
        <section className="py-20 bg-primary-900">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                  Caractéristiques
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {coffret.caracteristiques.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-black/40 border border-accent-600/20 p-6 transition-all duration-300 hover:border-accent-600/50 hover:bg-black/60">
                    <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-200 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Accords recommandés */}
      {coffret.accords && (
        <section className="py-20 bg-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Ornament className="text-accent-600 mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                  Accords Recommandés
                </h2>
                <p className="text-lg text-primary-200 font-light">
                  Sublimez votre dégustation avec ces accompagnements
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {coffret.accords.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-primary-900/50 border border-accent-600/20 p-6 transition-all duration-300 hover:border-accent-600/50">
                    <Wine className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-200 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Prêt à Commander ?
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour commander ce coffret ou pour composer un coffret personnalisé selon vos préférences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 inline-flex items-center justify-center gap-3"
              >
                <ShoppingCart className="w-4 h-4" />
                Commander Maintenant
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

      {/* Autres Coffrets */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Découvrez Nos Autres Coffrets
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coffrets
              .filter((c) => c.slug !== coffret.slug)
              .map((autreCoffret) => (
                <Link
                  key={autreCoffret.id}
                  href={`/box-fromage-vin/${autreCoffret.slug}`}
                  className="group"
                >
                  <div className="relative h-64 overflow-hidden mb-4 transition-all duration-500 group-hover:shadow-[0_10px_40px_-10px_rgba(228,197,144,0.3)]">
                    <Image
                      src={autreCoffret.image}
                      alt={autreCoffret.nom}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-serif text-2xl mb-2">{autreCoffret.nom}</p>
                      <p className="text-accent-600 font-light text-xl">{autreCoffret.prix}€</p>
                    </div>
                  </div>
                  <p className="text-primary-300 font-light text-sm text-center group-hover:text-accent-600 transition-colors">
                    Découvrir →
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
