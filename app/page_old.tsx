import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'
import {
  Milk,
  Calendar,
  Star,
  GraduationCap,
  Award,
  CheckCircle,
  ChevronDown,
  Users,
  Clock,
  Quote,
  HelpCircle
} from 'lucide-react'

export default function HomePage() {
  const featuredServices = SITE_DATA.services.filter(s => s.featured).slice(0, 4)
  const cheeseService = SITE_DATA.services[0]
  const cheeseCategories = Object.entries(cheeseService.categories || {})

  return (
    <main className="min-h-screen">
      {/* 1. Hero Section - Elegant Black & Gold */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1452195100486-9cc805987862"
            alt="Fromager artisan Formaticus Luxembourg"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

          {/* Elegant overlay pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            {/* Ornament supérieur */}
            <div className="flex justify-center">
              <Ornament className="text-accent-600" />
            </div>

            {/* Label élégant */}
            <p className="text-accent-600 tracking-[0.3em] text-sm font-light uppercase">
              Expérience Fromagère Raffinée
            </p>

            {/* Titre principal avec typographie élégante */}
            <h1 className="text-6xl md:text-8xl font-elegant font-light text-white leading-tight tracking-wide">
              Flavors Inspired by<br />
              <span className="text-accent-600 italic">the Artisans</span>
            </h1>

            {/* Sous-titre élégant */}
            <p className="text-xl md:text-2xl text-primary-100 font-light max-w-2xl mx-auto leading-relaxed">
              Venez en famille et ressentez la joie d'une cuisine fromagère raffinée
            </p>

            {/* Ornament central */}
            <div className="flex justify-center py-4">
              <Ornament className="text-accent-600" />
            </div>

            {/* CTA élégant */}
            <div className="pt-6">
              <Link href="/reserver">
                <button className="group relative px-12 py-5 bg-transparent border-2 border-accent-600 text-accent-600 font-sans tracking-widest text-sm uppercase overflow-hidden transition-all duration-500 hover:text-primary-900">
                  <span className="relative z-10">Réserver une Table</span>
                  <div className="absolute inset-0 bg-accent-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </Link>
            </div>
          </div>

          {/* Scroll indicator élégant */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent-600 to-transparent" />
              <ChevronDown className="w-6 h-6 text-accent-600" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro Section - Elegant Dark Theme */}
      <section className="py-32 bg-primary-800 relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(30deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37), linear-gradient(150deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37)`,
          backgroundSize: '80px 140px'
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Texte élégant */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <Ornament className="text-accent-600 mb-6" />
                <p className="text-accent-600 tracking-[0.25em] text-sm font-light uppercase mb-4">
                  Artisanat Fromager
                </p>
                <h2 className="text-5xl md:text-6xl font-elegant font-light text-white leading-tight mb-6">
                  Nous Offrons des<br />
                  <span className="text-accent-600 italic">Saveurs Raffinées</span>
                </h2>
              </div>

              <p className="text-lg text-primary-200 leading-relaxed font-light">
                {SITE_DATA.business.description}
              </p>

              <Link href="/a-propos">
                <button className="group relative px-10 py-4 bg-transparent border border-accent-600 text-accent-600 font-sans tracking-wider text-xs uppercase overflow-hidden transition-all duration-500 hover:text-primary-900">
                  <span className="relative z-10">Notre Histoire</span>
                  <div className="absolute inset-0 bg-accent-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </Link>
            </div>

            {/* Images en grille élégante */}
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <div className="col-span-2 relative h-80 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d"
                  alt="Plateau de fromages artisanaux"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1"
                  alt="Soirée raclette conviviale"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-accent-600/30" />
              </div>
              <div className="relative h-48 overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1452195100486-9cc805987862"
                  alt="Expert fromager au travail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 border border-accent-600/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Bar */}
      <section className="py-16 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-white">
            <div className="space-y-2 hover:scale-105 transition-transform">
              <Milk className="w-12 h-12 mx-auto text-accent-300" />
              <div className="text-4xl font-bold">{SITE_DATA.stats.cheeseSelection}+</div>
              <div className="text-sm opacity-90">Fromages</div>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform">
              <Calendar className="w-12 h-12 mx-auto text-accent-300" />
              <div className="text-4xl font-bold">{SITE_DATA.stats.eventsPerMonth}</div>
              <div className="text-sm opacity-90">Soirées/mois</div>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform">
              <Star className="w-12 h-12 mx-auto text-accent-300" />
              <div className="text-4xl font-bold">{SITE_DATA.stats.satisfactionRate}%</div>
              <div className="text-sm opacity-90">Satisfaits</div>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform">
              <GraduationCap className="w-12 h-12 mx-auto text-accent-300" />
              <div className="text-4xl font-bold">{SITE_DATA.stats.workshopsPerMonth}</div>
              <div className="text-sm opacity-90">Ateliers/mois</div>
            </div>
            <div className="space-y-2 hover:scale-105 transition-transform">
              <Award className="w-12 h-12 mx-auto text-accent-300" />
              <div className="text-4xl font-bold">{SITE_DATA.stats.projectsCompleted}+</div>
              <div className="text-sm opacity-90">Événements</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Cheese Selection */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Notre Sélection Artisanale
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Plus de {SITE_DATA.stats.cheeseSelection} fromages fermiers, AOP, affinés en cave sélectionnés avec passion
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {cheeseCategories.slice(0, 6).map(([family, cheeses]) => (
              <div
                key={family}
                className="group bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Milk className="w-8 h-8 text-primary-600" />
                  <h3 className="text-xl font-bold text-primary-900">
                    {family.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {(cheeses as string[]).slice(0, 3).map((cheese, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-primary-700">
                      <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                      <span>{cheese}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/fromages">
              <Button size="lg" variant="secondary">
                Voir Tous Nos Fromages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Events Highlight - SECTION CRITIQUE */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Vivez l'Expérience Formaticus
            </h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Partagez des moments uniques autour du fromage : soirées conviviales et ateliers fromagers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredServices.slice(1, 5).map((event) => (
              <div
                key={event.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-600 text-primary-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Soirée
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-primary-900">
                    {event.name}
                  </h3>

                  <div className="flex items-center gap-4 text-primary-700">
                    <div className="flex items-center gap-1">
                      <Clock className="w-5 h-5" />
                      <span>{event.estimatedDuration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-5 h-5" />
                      <span>{event.schedule?.groupSize || '8-40 pers'}</span>
                    </div>
                  </div>

                  <div className="text-3xl font-bold text-accent-600">
                    {event.pricePerPerson}
                  </div>

                  <ul className="space-y-2">
                    {event.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-primary-700">
                        <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 pt-4">
                    <Link href="/reserver" className="flex-1">
                      <Button variant="primary" className="w-full">
                        Réserver Maintenant
                      </Button>
                    </Link>
                    <Link href={`/evenements/${event.slug}`}>
                      <Button variant="outline">
                        Détails
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/evenements">
              <Button size="lg" variant="secondary">
                Voir Tous les Événements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Events Gallery */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos Soirées en Images
            </h2>
            <p className="text-xl opacity-90">
              Revivez l'ambiance conviviale de nos événements
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SITE_DATA.projects.slice(0, 6).map((project, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.imageAfter}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90 line-clamp-2">{project.description}</p>
                  <div className="mt-2 text-accent-400 font-semibold">
                    {project.metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/reserver">
              <Button size="lg" variant="primary">
                Rejoignez la Prochaine Soirée
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Ils Ont Adoré l'Expérience
            </h2>
            <div className="flex items-center justify-center gap-2 text-accent-600 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-xl text-primary-700">
              {SITE_DATA.stats.satisfactionRate}% de satisfaction • {SITE_DATA.testimonials.length} avis clients
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SITE_DATA.testimonials.slice(0, 6).map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4 text-accent-600">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-primary-200 mb-3" />

                <p className="text-primary-800 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-primary-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-primary-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900">{testimonial.name}</div>
                    <div className="text-sm text-primary-600">{testimonial.location}</div>
                    <div className="text-xs text-accent-600 font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {SITE_DATA.faq.slice(0, 6).map((item, idx) => (
              <details
                key={idx}
                className="group bg-primary-50 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-primary-900 hover:bg-primary-100 transition-colors">
                  <span>{item.question}</span>
                  <ChevronDown className="w-5 h-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-primary-700 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contactez-Nous
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
            alt="Cave à fromages Formaticus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/85 to-primary-900/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à Vivre l'Expérience Formaticus ?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-90">
            Réservez votre soirée conviviale ou atelier de dégustation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link href="/reserver">
              <Button size="xl" variant="primary" className="min-w-[280px]">
                Réserver une Soirée
              </Button>
            </Link>
            <a href={`tel:${SITE_DATA.business.contact.phone}`}>
              <Button size="xl" variant="outline" className="min-w-[280px] border-white text-white hover:bg-white hover:text-primary-900">
                Nous Appeler
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-8 h-8 text-accent-400" />
              <span className="text-sm">Réservation Facile en Ligne</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-8 h-8 text-accent-400" />
              <span className="text-sm">Annulation Gratuite 72h Avant</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-8 h-8 text-accent-400" />
              <span className="text-sm">Satisfaction 100% Garantie</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
