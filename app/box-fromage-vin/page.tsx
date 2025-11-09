import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'
import { coffrets } from '@/lib/coffrets-data'
import { Gift, Star, Award, CheckCircle, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Box Fromage & Vin - Coffrets Premium | Formaticus Luxembourg',
  description: 'Découvrez nos box fromage-vin et coffrets découverte. Sélections premium de fromages artisanaux AOP avec accords vins recommandés. Livraison Luxembourg.',
}

// Offre du mois actuelle
const offreDuMois = {
  mois: 'Décembre 2025',
  nom: 'Comté 36 Mois Extra Vieux',
  image: 'https://images.unsplash.com/photo-1618164435735-413d3b066c9a?q=80&w=2940',
  prixNormal: 38,
  prixPromo: 32,
  reduction: '-15%',
  description: 'Affinage exceptionnel de 36 mois. Notes intenses de caramel, noisette grillée et épices douces. Texture granuleuse parfaite. Une pièce d\'exception pour les amateurs de fromages de caractère.',
  caracteristiques: [
    'Affinage 36 mois minimum',
    'AOP Comté certifié',
    'Production hivernale exclusive',
    'Meule sélectionnée par nos affineurs',
    'Texture granuleuse caractéristique',
    'Notes de caramel et noisette grillée'
  ],
  disponibilite: 'Stock limité - 20 pièces',
  validite: 'Valable jusqu\'au 31 décembre 2025'
}

export default function BoxFromageVinPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Séance Photo Nicolas 20220423/hero-box-fromage-vin.jpg"
            alt="Offre du Mois & Coffrets - Formaticus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
              Sélections Exclusives
            </p>

            <div className="flex justify-center mb-8">
              <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
              Box Fromage & Vin
            </h1>

            <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
              Découvrez nos coffrets premium de fromages artisanaux avec accords vins recommandés
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Nouvelle offre</span> chaque mois
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Coffrets</span> personnalisables
              </div>
              <div className="px-6 py-3 border border-accent-600/30 text-white backdrop-blur-sm">
                <span className="text-accent-600 font-light">Livraison</span> offerte dès 80€
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offre du Mois */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                {offreDuMois.mois}
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Offre du Mois
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="group">
                {/* Star ornament */}
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                {/* Badge réduction */}
                <div className="relative z-20 mb-4 flex justify-center">
                  <span className="inline-block bg-red-600 text-white px-6 py-2 text-sm tracking-[0.2em] uppercase font-medium">
                    {offreDuMois.reduction}
                  </span>
                </div>

                <div className="relative h-[500px] overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)]">
                  <Image
                    src={offreDuMois.image}
                    alt={offreDuMois.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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

              {/* Contenu */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                    {offreDuMois.nom}
                  </h2>
                  <p className="text-lg text-primary-200 font-light leading-relaxed mb-6">
                    {offreDuMois.description}
                  </p>

                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-5xl font-serif text-accent-600">{offreDuMois.prixPromo}€</span>
                    <span className="text-2xl text-primary-400 line-through font-light">{offreDuMois.prixNormal}€</span>
                    <span className="text-sm text-primary-300 font-light">/kg</span>
                  </div>

                  <div className="bg-black/40 border border-accent-600/30 p-6 mb-6">
                    <p className="text-accent-600 text-sm tracking-[0.2em] uppercase mb-4">Caractéristiques</p>
                    <ul className="space-y-3">
                      {offreDuMois.caracteristiques.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-primary-200 font-light">
                          <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-2 text-sm text-primary-300 font-light">
                      <Award className="w-4 h-4 text-accent-600" />
                      <span>{offreDuMois.disponibilite}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-primary-300 font-light">
                      <Star className="w-4 h-4 text-accent-600" />
                      <span>{offreDuMois.validite}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 px-8 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 text-center"
                  >
                    Commander
                  </Link>
                  <Link
                    href="/fromages"
                    className="px-8 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 text-center"
                  >
                    Tous les fromages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffrets Découverte */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Collections Exclusives
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Nos Coffrets<br />Découverte
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Des coffrets soigneusement composés pour offrir ou se faire plaisir
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {coffrets.map((coffret) => (
              <div key={coffret.id} className="group">
                {/* Star ornament */}
                <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                  <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(228,197,144,0.6)]" viewBox="0 0 32 32" fill="none">
                    <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                    <circle cx="16" cy="16" r="2" fill="black"/>
                  </svg>
                </div>

                {/* Badge */}
                <div className="relative z-20 mb-4 flex justify-center">
                  <span className="inline-block bg-accent-600 text-black px-4 py-1 text-[10px] tracking-[0.2em] uppercase font-medium">
                    {coffret.badge}
                  </span>
                </div>

                <div className="relative h-80 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(228,197,144,0.3)] mb-8">
                  <Image
                    src={coffret.image}
                    alt={coffret.nom}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Price overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                    <div className="text-white/90 text-center">
                      <div className="text-5xl font-serif font-light text-accent-600 mb-2">
                        {coffret.prix}€
                      </div>
                      <div className="text-sm font-light">par coffret</div>
                    </div>
                  </div>
                  {/* Glow border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(228,197,144,0.2)]" />
                  </div>
                </div>

                {/* Ornament */}
                <div className="mb-8 flex justify-center">
                  <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                    <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                  </svg>
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif font-light text-white mb-4">
                    {coffret.nom}
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed mb-6">
                    {coffret.description}
                  </p>
                </div>

                <div className="bg-black/40 border border-accent-600/30 p-8 mb-8">
                  <p className="text-accent-600 text-xs tracking-[0.2em] uppercase mb-6 text-center">Contenu du coffret</p>
                  <ul className="space-y-3">
                    {coffret.contenu.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-primary-200 font-light text-sm">
                        <Package className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 text-sm text-accent-600 font-light">
                    <Gift className="w-4 h-4" />
                    <span>{coffret.ideal}</span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href={`/box-fromage-vin/${coffret.slug}`}
                    className="inline-block px-10 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
                  >
                    Découvrir ce Coffret
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Besoin d'un Conseil ?
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Coffret<br />Personnalisé
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed max-w-2xl mx-auto">
              Vous souhaitez un coffret sur mesure ? Contactez-nous et nous composerons le coffret parfait selon vos goûts et votre budget.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/plateau-sur-mesure"
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
              >
                Créer Mon Plateau
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
