'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'
import {
  Calendar,
  Star,
  GraduationCap,
  Award,
  Users,
  Phone
} from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { CountdownTimer } from '@/components/CountdownTimer'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import { FadeInSection } from '@/components/ui/FadeInSection'

// Données des slides pour le carousel hero
const heroSlides = [
  {
    image: '/Séance Photo Nicolas 20220423/hero-box-fromage-vin.jpg',
    tagline: 'COFFRETS CADEAUX',
    title: ['Coffrets Fromage & Vin', 'Luxembourg'],
    description: 'Des sélections authentiques composées par nos maîtres fromagers. Le cadeau parfait pour tous les amateurs de fromage.',
    cta: 'DÉCOUVRIR LES COFFRETS',
    href: '/box-fromage-vin'
  },
  {
    image: '/soiree amis.png',
    tagline: 'ÉVÉNEMENTS CONVIVIAUX',
    title: ['Soirées Raclette', 'à Luxembourg'],
    description: 'Vivez une expérience fromagère inoubliable avec vos proches. Raclette, fondue et tartiflette dans une ambiance authentique.',
    cta: 'VOIR NOS ÉVÉNEMENTS',
    href: '/evenements'
  },
  {
    image: '/Séance Photo Nicolas 20220423/hero-fromages-cave.jpg',
    tagline: 'LA CAVE FORMATICUS',
    title: ['150+ Fromages Artisanaux', 'à Luxembourg'],
    description: 'Un voyage gustatif à travers les terroirs. Fromages français, suisses et luxembourgeois soigneusement sélectionnés.',
    cta: 'EXPLORER LA CAVE',
    href: '/fromages'
  },
  {
    image: '/Séance Photo Nicolas 20220423/hero-evenements-traiteur.jpg',
    tagline: 'PLATEAUX SUR MESURE',
    title: ['Service Traiteur', 'Luxembourg'],
    description: 'Mariages, anniversaires, réceptions d\'entreprise... Créez avec nous le plateau fromager parfait pour votre événement.',
    cta: 'COMMANDER UN PLATEAU',
    href: '/traiteur'
  }
]

export default function HomePage() {

  return (
    <main className="min-h-screen bg-primary-900">
      {/* 1. Hero Section - Carousel Style Delici */}
      <section className="relative h-screen">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
          className="h-full"
        >
          <CarouselContent className="h-screen -ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative h-screen flex items-center justify-center overflow-hidden">
                  {/* Background Image avec overlay */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={slide.image}
                      alt={`${slide.tagline} - Formaticus Luxembourg`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Overlay sombre exactement comme Delici */}
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  {/* Contenu centré */}
                  <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
                    <div className="max-w-4xl mx-auto">
                      {/* Tagline doré en majuscules avec espacement large */}
                      <div className="mb-8">
                        <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
                          {slide.tagline}
                        </p>
                        {/* Ornement décoratif sous le tagline */}
                        <div className="flex justify-center">
                          <svg className="w-12 h-3 text-accent-600" viewBox="0 0 48 12" fill="none">
                            <path d="M0 6h18M24 0l-6 6 6 6M24 0l6 6-6 6M30 6h18" stroke="currentColor" strokeWidth="0.5"/>
                            <circle cx="24" cy="6" r="1.5" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>

                      {/* Titre principal - très grand, serif, blanc */}
                      <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.15] mb-8">
                        {slide.title[0]}<br />
                        {slide.title[1]}
                      </h1>

                      {/* Description - blanc, taille moyenne */}
                      <p className="text-base md:text-lg text-white font-light mb-12 max-w-2xl mx-auto">
                        {slide.description}
                      </p>

                      {/* Bouton CTA - bordure dorée, fond transparent */}
                      <div className="inline-block">
                        <Link href={slide.href}>
                          <button className="px-12 py-4 bg-transparent border border-accent-600 text-accent-600 font-sans tracking-[0.25em] text-[11px] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                            {slide.cta}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation du carousel */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Bouton "Book A Table" fixe en bas à droite - style Delici */}
        <Link href="/reserver">
          <div className="fixed bottom-8 right-8 z-30 hidden lg:block">
            <div className="relative group">
              {/* Cadre décoratif doré */}
              <div className="absolute -inset-2 border border-accent-600/30 rotate-45 transition-transform duration-500 group-hover:rotate-90" />
              <div className="relative bg-accent-600 px-6 py-6 hover:bg-accent-500 transition-colors duration-500">
                <div className="text-black text-center">
                  <div className="mb-1">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.5L12 4l9 5.5M12 4v13M5 12v6h14v-6" />
                    </svg>
                  </div>
                  <div className="text-[10px] tracking-[0.15em] uppercase font-medium">
                    Réserver<br />Une Table
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* 2. We Offer Top Notch - 3 Column Grid comme Delici */}
      <section className="py-40 bg-black relative">
        {/* Option: Background image avec overlay - décommenter si souhaité */}
        {/*
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background-pattern.jpg"
            alt="Background pattern"
            fill
            className="object-cover opacity-5"
          />
        </div>
        */}

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <FadeInSection delay={0.2}>
            <div className="text-center mb-20">
              <Ornament className="text-accent-600 mx-auto mb-6" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Notre Univers Fromager
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6">
                Deux Piliers d'Excellence
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                Chez Formaticus, nous célébrons la culture fromagère à travers deux expériences uniques : notre sélection exceptionnelle de fromages artisanaux et nos soirées conviviales inoubliables.
              </p>
            </div>
          </FadeInSection>

          {/* 2 Column Grid avec ornements étoile */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Colonne 1 - Sélection Fromages */}
            <FadeInSection delay={0.4} direction="up">
              <div className="group text-center">
              {/* Ornement étoile top avec pulse au hover */}
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              {/* Image avec glow et lift effect */}
              <div className="relative h-96 mb-8 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.3)]">
                <Image
                  src="/Séance Photo Nicolas 20220423/plateau-fromages-01.jpg"
                  alt="Sélection fromages"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay avec texte au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                  <p className="text-white/90 text-sm font-light leading-relaxed text-center">
                    Plus de 150 fromages AOP et fermiers sélectionnés avec passion auprès des meilleurs artisans. De la Tomme de Savoie au Comté 36 mois, découvrez notre cave exceptionnelle.
                  </p>
                </div>
                {/* Glow border interne */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)]" />
                </div>
              </div>

              {/* Ornement géométrique bottom */}
              <div className="mb-8 flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>

              {/* Titre */}
              <h3 className="text-3xl font-serif font-light text-white mb-8">
                Sélection Fromages
              </h3>

              {/* CTA avec bordure solide */}
              <Link href="/fromages" className="inline-block px-10 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                Découvrir
              </Link>
              </div>
            </FadeInSection>

            {/* Colonne 2 - Soirées Conviviales */}
            <FadeInSection delay={0.6} direction="up">
              <div className="group text-center">
              <div className="mb-8 flex justify-center transition-all duration-500 group-hover:scale-110">
                <svg className="w-8 h-8 text-accent-600 transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" viewBox="0 0 32 32" fill="none">
                  <path d="M16 0l2 14 14 2-14 2-2 14-2-14L0 16l14-2z" fill="currentColor"/>
                  <circle cx="16" cy="16" r="2" fill="black"/>
                </svg>
              </div>

              <div className="relative h-96 mb-8 overflow-hidden shadow-2xl transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.3)]">
                <Image
                  src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1"
                  alt="Soirées raclette"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay avec texte au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                  <p className="text-white/90 text-sm font-light leading-relaxed text-center">
                    Chaque vendredi et samedi soir, vivez l'expérience d'une raclette, fondue ou tartiflette authentique dans une ambiance chaleureuse. Réservation recommandée.
                  </p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-accent-600/40 shadow-[inset_0_0_20px_rgba(212,175,55,0.2)]" />
                </div>
              </div>

              <div className="mb-8 flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>

              <h3 className="text-3xl font-serif font-light text-white mb-8">
                Soirées Conviviales
              </h3>

              <Link href="/evenements" className="inline-block px-10 py-3 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                Nos Événements
              </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 3. Special Dish - Split Layout comme Delici */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Image gauche */}
          <div className="relative h-[600px] lg:h-auto bg-black">
            <Image
              src="/Séance Photo Nicolas 20220423/soiree-raclette-conviviale.jpg"
              alt="Soirée Raclette Conviviale - Formaticus"
              fill
              className="object-contain lg:object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 pointer-events-none" />
          </div>

          {/* Contenu droite */}
          <div className="bg-primary-900 py-20 px-8 md:px-16 lg:px-24 flex items-center">
            <div className="max-w-xl">
              {/* Badge star icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 mb-8 border-2 border-accent-600 rounded-sm">
                <Star className="w-6 h-6 text-accent-600 fill-accent-600" />
              </div>

              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-4">
                Notre Soirée Phare
              </p>

              <Ornament className="text-accent-600 mb-8" />

              <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
                Soirée Raclette<br />Conviviale
              </h2>

              <p className="text-primary-200 text-lg mb-8 leading-relaxed font-light">
                Vivez une authentique soirée raclette dans notre espace chaleureux comme en montagne. Raclette artisanale à volonté (4 variétés), charcuterie fine, pommes de terre bio et accompagnements traditionnels. Une expérience conviviale de 2h30-3h animée par nos experts fromagers passionnés.
              </p>

              {/* Timer compte à rebours */}
              <div className="mb-8">
                <CountdownTimer targetDate="2025-11-27T19:00:00" />
              </div>

              <div className="flex items-baseline gap-4 mb-10">
                <span className="text-accent-600 text-4xl font-serif">42€</span>
                <span className="text-primary-300 text-xl font-light">par personne</span>
              </div>

              <Link href="/reserver" className="inline-block px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                Réserver Une Soirée
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3b. Autres Événements à Venir - 3 cartes avec Stats */}
      <section className="py-40 bg-primary-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Actualités Fromagères
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white">
              Autres Événements à Venir
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Event 1 */}
            <div className="group bg-primary-900 overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1"
                  alt="Soirée Raclette Conviviale"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-accent-600 text-black px-4 py-2 text-xs tracking-wider uppercase">
                  <div className="font-bold">15</div>
                  <div className="font-light">Fév</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-primary-400 mb-4 font-light">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Formaticus
                  </span>
                  <span>•</span>
                  <span>Événement</span>
                </div>
                <h4 className="text-2xl font-serif font-light text-white mb-4 group-hover:text-accent-600 transition-colors">
                  Grande Soirée Raclette : Saveurs Authentiques de Montagne
                </h4>
                <Link href="/evenements" className="text-accent-600 text-sm tracking-wider uppercase hover:underline font-light">
                  Réserver →
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group bg-primary-900 overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d"
                  alt="Atelier Dégustation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-accent-600 text-black px-4 py-2 text-xs tracking-wider uppercase">
                  <div className="font-bold">22</div>
                  <div className="font-light">Fév</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-primary-400 mb-4 font-light">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Formaticus
                  </span>
                  <span>•</span>
                  <span>Atelier</span>
                </div>
                <h4 className="text-2xl font-serif font-light text-white mb-4 group-hover:text-accent-600 transition-colors">
                  Masterclass : Découverte des Fromages AOP et Accords Vins
                </h4>
                <Link href="/evenements" className="text-accent-600 text-sm tracking-wider uppercase hover:underline font-light">
                  Réserver →
                </Link>
              </div>
            </div>

            {/* Event 3 */}
            <div className="group bg-primary-900 overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
                  alt="Soirée Fondue"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 bg-accent-600 text-black px-4 py-2 text-xs tracking-wider uppercase">
                  <div className="font-bold">28</div>
                  <div className="font-light">Fév</div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-primary-400 mb-4 font-light">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Formaticus
                  </span>
                  <span>•</span>
                  <span>Événement</span>
                </div>
                <h4 className="text-2xl font-serif font-light text-white mb-4 group-hover:text-accent-600 transition-colors">
                  Soirée Fondue Savoyarde : Tradition et Convivialité
                </h4>
                <Link href="/evenements" className="text-accent-600 text-sm tracking-wider uppercase hover:underline font-light">
                  Réserver →
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-20">
            {[
              { value: '150+', label: 'Fromages Artisanaux' },
              { value: '3500+', label: 'Clients Satisfaits' },
              { value: '12', label: 'Soirées par Mois' },
              { value: '98%', label: 'Taux de Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="group">
                <div className="text-6xl md:text-7xl font-serif font-light text-accent-600 mb-4">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-300 tracking-wider uppercase font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Delicious Menu - Grid avec plats */}
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Notre Cave à Fromages
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6">
              Sélection du Moment
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto font-light leading-relaxed">
              Découvrez une sélection de nos fromages artisanaux les plus appréciés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Fromage 1 */}
            <div className="flex gap-6 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/Séance Photo Nicolas 20220423/comte-vieux.jpg"
                  alt="Comté 24 mois"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-serif font-light text-white">Comté 24 mois AOP</h4>
                  <div className="flex-shrink-0 w-16 h-px bg-accent-600/30 mx-4 mt-3" />
                  <span className="text-accent-600 font-serif text-xl flex-shrink-0">38€/kg</span>
                </div>
                <p className="text-primary-300 text-sm font-light leading-relaxed">
                  Fruité intense, notes de caramel et noisette grillée, texture fondante exceptionnelle
                </p>
              </div>
            </div>

            {/* Fromage 2 */}
            <div className="flex gap-6 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/Séance Photo Nicolas 20220423/tomme-de-savoie.jpg"
                  alt="Reblochon Fermier"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-serif font-light text-white">Reblochon Fermier AOP</h4>
                  <div className="flex-shrink-0 w-16 h-px bg-accent-600/30 mx-4 mt-3" />
                  <span className="text-accent-600 font-serif text-xl flex-shrink-0">32€/kg</span>
                </div>
                <p className="text-primary-300 text-sm font-light leading-relaxed">
                  Crémeux et fondant, arômes de noisette, parfait pour raclette et tartiflette
                </p>
              </div>
            </div>

            {/* Fromage 3 */}
            <div className="flex gap-6 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/Séance Photo Nicolas 20220423/roquefort.jpg"
                  alt="Roquefort Papillon"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-serif font-light text-white">Roquefort Papillon AOP</h4>
                  <div className="flex-shrink-0 w-16 h-px bg-accent-600/30 mx-4 mt-3" />
                  <span className="text-accent-600 font-serif text-xl flex-shrink-0">42€/kg</span>
                </div>
                <p className="text-primary-300 text-sm font-light leading-relaxed">
                  Persillé noble, puissant et équilibré, affiné 3 mois en caves de Roquefort
                </p>
              </div>
            </div>

            {/* Fromage 4 */}
            <div className="flex gap-6 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/Séance Photo Nicolas 20220423/brie-de-nangis.jpg"
                  alt="Brie de Meaux"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-serif font-light text-white">Brie de Meaux AOP</h4>
                  <div className="flex-shrink-0 w-16 h-px bg-accent-600/30 mx-4 mt-3" />
                  <span className="text-accent-600 font-serif text-xl flex-shrink-0">28€/kg</span>
                </div>
                <p className="text-primary-300 text-sm font-light leading-relaxed">
                  Crème onctueuse, notes de champignon et noisette, roi des fromages français
                </p>
              </div>
            </div>

            {/* Fromage 5 */}
            <div className="flex gap-6 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/Séance Photo Nicolas 20220423/crottin-fermier.jpg"
                  alt="Crottin de Chavignol"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-serif font-light text-white">Crottin Chavignol AOP</h4>
                  <div className="flex-shrink-0 w-16 h-px bg-accent-600/30 mx-4 mt-3" />
                  <span className="text-accent-600 font-serif text-xl flex-shrink-0">35€/kg</span>
                </div>
                <p className="text-primary-300 text-sm font-light leading-relaxed">
                  Chèvre fermier au lait cru, saveur de noisette, texture dense et crémeuse
                </p>
              </div>
            </div>

            {/* Fromage 6 */}
            <div className="flex gap-6 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src="/Séance Photo Nicolas 20220423/beaufort-dete.jpg"
                  alt="Beaufort d'Alpage"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-serif font-light text-white">Beaufort d'Alpage AOP</h4>
                  <div className="flex-shrink-0 w-16 h-px bg-accent-600/30 mx-4 mt-3" />
                  <span className="text-accent-600 font-serif text-xl flex-shrink-0">44€/kg</span>
                </div>
                <p className="text-primary-300 text-sm font-light leading-relaxed">
                  Prince des Gruyères, fruité floral, texture fondante incomparable
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/fromages">
              <button className="px-14 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                Voir Toute La Sélection
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Best Specialties - 4 cartes de plats */}
      <section className="py-40 bg-primary-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Nos Formules Phares
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white">
              Expériences Gourmandes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Carte 1 */}
            <div className="group text-center">
              <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d"
                  alt="Soirée Raclette"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                    Convivialité
                  </p>
                  <h4 className="text-2xl font-serif font-light text-white mb-3">
                    Soirée Raclette
                  </h4>
                  <p className="text-sm text-primary-200 font-light mb-3 line-clamp-2">
                    Raclette artisanale à volonté, charcuterie fine, ambiance montagne
                  </p>
                  <div className="text-accent-600 font-serif text-xl">42€/pers</div>
                </div>
              </div>
              <Link href="/reserver" className="inline-block px-8 py-3 border border-accent-600/50 text-accent-600 text-xs tracking-[0.15em] uppercase hover:border-accent-600 hover:bg-accent-600/10 transition-all duration-500">
                Réserver
              </Link>
            </div>

            {/* Carte 2 */}
            <div className="group text-center">
              <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1"
                  alt="Soirée Fondue"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                    Savoyarde
                  </p>
                  <h4 className="text-2xl font-serif font-light text-white mb-3">
                    Soirée Fondue
                  </h4>
                  <p className="text-sm text-primary-200 font-light mb-3 line-clamp-2">
                    Fondue savoyarde authentique, pain artisanal, charcuterie montagne
                  </p>
                  <div className="text-accent-600 font-serif text-xl">44€/pers</div>
                </div>
              </div>
              <Link href="/reserver" className="inline-block px-8 py-3 border border-accent-600/50 text-accent-600 text-xs tracking-[0.15em] uppercase hover:border-accent-600 hover:bg-accent-600/10 transition-all duration-500">
                Réserver
              </Link>
            </div>

            {/* Carte 3 */}
            <div className="group text-center">
              <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
                  alt="Atelier Dégustation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                    Formule Découverte
                  </p>
                  <h4 className="text-2xl font-serif font-light text-white mb-3">
                    Atelier Dégustation
                  </h4>
                  <p className="text-sm text-primary-200 font-light mb-3 line-clamp-2">
                    Cours animé par nos experts, 8 fromages, accords vins, techniques pro
                  </p>
                  <div className="text-accent-600 font-serif text-xl">38€/pers</div>
                </div>
              </div>
              <Link href="/evenements" className="inline-block px-8 py-3 border border-accent-600/50 text-accent-600 text-xs tracking-[0.15em] uppercase hover:border-accent-600 hover:bg-accent-600/10 transition-all duration-500">
                Réserver
              </Link>
            </div>

            {/* Carte 4 */}
            <div className="group text-center">
              <div className="relative h-80 mb-6 overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1452195100486-9cc805987862"
                  alt="Plateau Sur-Mesure"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                    Service Traiteur
                  </p>
                  <h4 className="text-2xl font-serif font-light text-white mb-3">
                    Plateau Sur-Mesure
                  </h4>
                  <p className="text-sm text-primary-200 font-light mb-3 line-clamp-2">
                    Composition personnalisée, fromages affinés, charcuterie fine sélectionnée
                  </p>
                  <div className="text-accent-600 font-serif text-xl">Dès 65€</div>
                </div>
              </div>
              <Link href="/traiteur" className="inline-block px-8 py-3 border border-accent-600/50 text-accent-600 text-xs tracking-[0.15em] uppercase hover:border-accent-600 hover:bg-accent-600/10 transition-all duration-500">
                Commander
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/fromages">
              <button className="px-14 py-4 bg-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-accent-500 transition-all duration-500">
                Voir Toutes Nos Offres
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Reservation + Contact - Split Layout */}
      <section className="grid lg:grid-cols-2">
        {/* Section réservation */}
        <div className="bg-primary-900 py-20 px-8 md:px-16">
          <div className="max-w-xl mx-auto">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-4 text-center">
              Réservation
            </p>
            <Ornament className="text-accent-600 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-12 text-center">
              Réserver en Ligne
            </h2>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Votre Nom"
                  className="w-full bg-transparent border-b border-primary-700 text-white px-0 py-3 focus:border-accent-600 outline-none transition-colors placeholder:text-primary-500 font-light"
                />
                <input
                  type="email"
                  placeholder="Votre Email"
                  className="w-full bg-transparent border-b border-primary-700 text-white px-0 py-3 focus:border-accent-600 outline-none transition-colors placeholder:text-primary-500 font-light"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full bg-transparent border-b border-primary-700 text-white px-0 py-3 focus:border-accent-600 outline-none transition-colors placeholder:text-primary-500 font-light"
                />
                <input
                  type="text"
                  placeholder="Nombre de Personnes"
                  className="w-full bg-transparent border-b border-primary-700 text-white px-0 py-3 focus:border-accent-600 outline-none transition-colors placeholder:text-primary-500 font-light"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="date"
                  placeholder="Date"
                  className="w-full bg-transparent border-b border-primary-700 text-white px-0 py-3 focus:border-accent-600 outline-none transition-colors placeholder:text-primary-500 font-light"
                />
                <input
                  type="time"
                  placeholder="Heure"
                  className="w-full bg-transparent border-b border-primary-700 text-white px-0 py-3 focus:border-accent-600 outline-none transition-colors placeholder:text-primary-500 font-light"
                />
              </div>

              <textarea
                placeholder="Votre Message (Type de soirée souhaitée, demandes spéciales...)"
                rows={4}
                className="w-full bg-transparent border-b border-primary-700 text-white px-0 py-3 focus:border-accent-600 outline-none transition-colors placeholder:text-primary-500 font-light resize-none"
              />

              <button
                type="submit"
                className="w-full py-4 bg-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-accent-500 transition-all duration-500"
              >
                Confirmer la Réservation
              </button>
            </form>
          </div>
        </div>

        {/* Section contact */}
        <div className="bg-primary-800 py-20 px-8 md:px-16 flex items-center">
          <div className="max-w-xl mx-auto w-full">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-4 text-center">
              Contact
            </p>
            <Ornament className="text-accent-600 mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-12 text-center">
              Nous Contacter
            </h2>

            <div className="space-y-8">
              <div className="text-center">
                <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                  Réservations
                </p>
                <a
                  href={`tel:${SITE_DATA.business.contact.phone}`}
                  className="text-white text-2xl font-serif hover:text-accent-600 transition-colors"
                >
                  {SITE_DATA.business.contact.phoneDisplay}
                </a>
              </div>

              <div className="h-px bg-accent-600/20" />

              <div className="text-center">
                <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                  Adresse
                </p>
                <p className="text-white font-light leading-relaxed">
                  {SITE_DATA.business.contact.address.street}<br />
                  {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}
                </p>
              </div>

              <div className="h-px bg-accent-600/20" />

              <div className="text-center">
                <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                  Horaires Boutique
                </p>
                <p className="text-white font-light">
                  {SITE_DATA.business.hours.weekdays}<br />
                  {SITE_DATA.business.hours.saturday}
                </p>
              </div>

              <div className="h-px bg-accent-600/20" />

              <div className="text-center">
                <p className="text-accent-600 text-xs tracking-wider uppercase mb-2 font-light">
                  Soirées & Événements
                </p>
                <p className="text-white font-light">
                  Sur Réservation<br />
                  18h00 - 22h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Strength - 4 cartes */}
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Pourquoi Formaticus
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white">
              Nos Atouts
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Strength 1 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-sm border border-accent-600/30 flex items-center justify-center group-hover:border-accent-600 transition-all duration-500">
                  <GraduationCap className="w-10 h-10 text-accent-600" />
                </div>
              </div>
              <h4 className="text-2xl font-serif font-light text-white mb-4">
                Expertise Reconnue
              </h4>
              <p className="text-primary-300 font-light leading-relaxed">
                Fromagers diplômés formés auprès des meilleurs maîtres-affineurs européens
              </p>
            </div>

            {/* Strength 2 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-sm border border-accent-600/30 flex items-center justify-center group-hover:border-accent-600 transition-all duration-500">
                  <Award className="w-10 h-10 text-accent-600" />
                </div>
              </div>
              <h4 className="text-2xl font-serif font-light text-white mb-4">
                Sélection Premium
              </h4>
              <p className="text-primary-300 font-light leading-relaxed">
                Plus de 150 fromages artisanaux AOP/AOC, affinés dans nos caves
              </p>
            </div>

            {/* Strength 3 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-sm border border-accent-600/30 flex items-center justify-center group-hover:border-accent-600 transition-all duration-500">
                  <Users className="w-10 h-10 text-accent-600" />
                </div>
              </div>
              <h4 className="text-2xl font-serif font-light text-white mb-4">
                Expérience Unique
              </h4>
              <p className="text-primary-300 font-light leading-relaxed">
                Soirées conviviales et ateliers dégustation dans un cadre chaleureux
              </p>
            </div>

            {/* Strength 4 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-sm border border-accent-600/30 flex items-center justify-center group-hover:border-accent-600 transition-all duration-500">
                  <Calendar className="w-10 h-10 text-accent-600" />
                </div>
              </div>
              <h4 className="text-2xl font-serif font-light text-white mb-4">
                Service Traiteur
              </h4>
              <p className="text-primary-300 font-light leading-relaxed">
                Plateaux personnalisés et service sur-mesure pour tous vos événements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Gallery Parallax Scroll - 4 colonnes avec effet scroll opposé */}
      <section className="py-20 bg-primary-950">
        <ParallaxScroll
          images={[
            // Colonne 1 - scroll vers le bas
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
            "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de",
            "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
            // Colonne 2 - scroll vers le haut
            "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1",
            "https://images.unsplash.com/photo-1452195100486-9cc805987862",
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
            "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
            // Colonne 3 - scroll vers le bas
            "https://images.unsplash.com/photo-1559339352-11d035aa65de",
            "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
            "https://images.unsplash.com/photo-1530648672449-81f6c723e2f1",
            "https://images.unsplash.com/photo-1452195100486-9cc805987862",
            // Colonne 4 - scroll vers le haut
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
            "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de",
            "https://images.unsplash.com/photo-1577219491135-ce391730fb2c",
          ]}
        />
      </section>

      {/* 14. Customer Testimonials */}
      <section className="py-40 bg-primary-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Témoignages
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white">
              Ce Que Nos Clients Disent
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-primary-800 p-8 group hover:bg-primary-750 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-600 fill-accent-600" />
                ))}
              </div>
              <p className="text-primary-200 text-lg mb-8 font-light leading-relaxed italic">
                "Formaticus propose une sélection exceptionnelle de fromages artisanaux. La soirée raclette était absolument divine !"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-600/20 flex items-center justify-center">
                  <span className="text-accent-600 font-serif text-xl">M</span>
                </div>
                <div>
                  <div className="text-white font-serif">Marie Laurent</div>
                  <div className="text-primary-400 text-sm font-light">Critique Gastronomique</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-primary-800 p-8 group hover:bg-primary-750 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-600 fill-accent-600" />
                ))}
              </div>
              <p className="text-primary-200 text-lg mb-8 font-light leading-relaxed italic">
                "L'atelier fromage était incroyable. Nous avons tellement appris sur la production artisanale et la dégustation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-600/20 flex items-center justify-center">
                  <span className="text-accent-600 font-serif text-xl">J</span>
                </div>
                <div>
                  <div className="text-white font-serif">Jean Dubois</div>
                  <div className="text-primary-400 text-sm font-light">Chef Cuisinier</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-primary-800 p-8 group hover:bg-primary-750 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-600 fill-accent-600" />
                ))}
              </div>
              <p className="text-primary-200 text-lg mb-8 font-light leading-relaxed italic">
                "Un véritable joyau à Luxembourg ! La sélection de fromages AOP est incomparable. Vivement recommandé !"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-600/20 flex items-center justify-center">
                  <span className="text-accent-600 font-serif text-xl">S</span>
                </div>
                <div>
                  <div className="text-white font-serif">Sophie Martin</div>
                  <div className="text-primary-400 text-sm font-light">Cliente Fidèle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FAQ Section */}
      <section className="py-40 bg-primary-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
                Questions Fréquentes
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-light text-white">
                Foire Aux Questions
              </h2>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group bg-primary-900 overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h4 className="text-xl font-serif font-light text-white group-hover:text-accent-600 transition-colors">
                    Quels sont vos horaires d'ouverture ?
                  </h4>
                  <div className="text-accent-600 transform group-open:rotate-45 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <div className="h-px bg-accent-600/20 mb-6" />
                  <p className="text-primary-300 font-light leading-relaxed">
                    Notre boutique est ouverte du lundi au dimanche de 10h à 19h. Pour les soirées événementielles, nous recommandons de réserver au moins une semaine à l'avance.
                  </p>
                </div>
              </details>

              {/* FAQ 2 */}
              <details className="group bg-primary-900 overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h4 className="text-xl font-serif font-light text-white group-hover:text-accent-600 transition-colors">
                    Proposez-vous des événements privés et un service traiteur ?
                  </h4>
                  <div className="text-accent-600 transform group-open:rotate-45 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <div className="h-px bg-accent-600/20 mb-6" />
                  <p className="text-primary-300 font-light leading-relaxed">
                    Absolument ! Nous nous spécialisons dans les soirées raclette, les soirées fondue et les ateliers de dégustation pour groupes de 8 à 40 personnes. Contactez-nous pour discuter de votre événement sur mesure.
                  </p>
                </div>
              </details>

              {/* FAQ 3 */}
              <details className="group bg-primary-900 overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h4 className="text-xl font-serif font-light text-white group-hover:text-accent-600 transition-colors">
                    Dans quels types de fromages êtes-vous spécialisés ?
                  </h4>
                  <div className="text-accent-600 transform group-open:rotate-45 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <div className="h-px bg-accent-600/20 mb-6" />
                  <p className="text-primary-300 font-light leading-relaxed">
                    Nous proposons plus de 150 fromages artisanaux incluant des variétés françaises AOP/AOC, des spécialités suisses, des classiques italiens et des fromages fermiers luxembourgeois. Tous nos fromages sont soigneusement sélectionnés auprès de petits producteurs.
                  </p>
                </div>
              </details>

              {/* FAQ 4 */}
              <details className="group bg-primary-900 overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h4 className="text-xl font-serif font-light text-white group-hover:text-accent-600 transition-colors">
                    Accommodez-vous les restrictions alimentaires ?
                  </h4>
                  <div className="text-accent-600 transform group-open:rotate-45 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <div className="h-px bg-accent-600/20 mb-6" />
                  <p className="text-primary-300 font-light leading-relaxed">
                    Absolument. Nous proposons des alternatives sans lactose, des options végétariennes et pouvons accommoder la plupart des besoins alimentaires. Merci de nous informer lors de votre réservation afin que nous puissions nous préparer en conséquence.
                  </p>
                </div>
              </details>

              {/* FAQ 5 */}
              <details className="group bg-primary-900 overflow-hidden">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <h4 className="text-xl font-serif font-light text-white group-hover:text-accent-600 transition-colors">
                    Comment réserver un atelier de dégustation de fromages ?
                  </h4>
                  <div className="text-accent-600 transform group-open:rotate-45 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </summary>
                <div className="px-8 pb-8">
                  <div className="h-px bg-accent-600/20 mb-6" />
                  <p className="text-primary-300 font-light leading-relaxed">
                    Vous pouvez réserver en ligne via notre formulaire de réservation ou nous appeler directement au {SITE_DATA.business.contact.phoneDisplay}. Nous recommandons de réserver au moins 2 semaines à l'avance pour les ateliers de groupe.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* 16. Instagram Feed / Social Gallery */}
      <section className="py-40 bg-primary-900 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent-600 tracking-[0.2em] md:tracking-[0.3em] text-xs font-light uppercase mb-6">
              Suivez-Nous
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6 break-words px-2">
              @formaticus_luxembourg
            </h2>
            <p className="text-primary-200 text-base md:text-lg font-light px-4">
              Découvrez nos sélections de fromages et événements quotidiens
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {/* Instagram Image 1 */}
            <a href="#" className="relative aspect-square group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d"
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>

            {/* Instagram Image 2 */}
            <a href="#" className="relative aspect-square group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1"
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>

            {/* Instagram Image 3 */}
            <a href="#" className="relative aspect-square group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>

            {/* Instagram Image 4 */}
            <a href="#" className="relative aspect-square group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1452195100486-9cc805987862"
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>

            {/* Instagram Image 5 */}
            <a href="#" className="relative aspect-square group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3"
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>

            {/* Instagram Image 6 */}
            <a href="#" className="relative aspect-square group overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c"
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          </div>

          <div className="text-center mt-12 px-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 md:px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500"
            >
              Suivez-Nous sur Instagram
            </a>
          </div>
        </div>
      </section>

      {/* 17. Partners & Certifications */}
      <section className="py-40 bg-primary-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Qualité & Confiance
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-6">
              Nos Certifications & Partenaires
            </h2>
            <div className="w-16 h-px bg-accent-600 mx-auto mb-8" />
            <p className="text-primary-200 text-lg font-light max-w-2xl mx-auto">
              Nous travaillons exclusivement avec des producteurs certifiés et respectons les plus hauts standards de qualité
            </p>
          </div>

          {/* Certifications AOP/AOC */}
          <div className="max-w-5xl mx-auto mb-20">
            <h3 className="text-3xl font-serif font-light text-white text-center mb-12">
              Certifications Officielles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {/* AOP Certification */}
              <div className="bg-primary-900 p-8 flex flex-col items-center justify-center group hover:bg-primary-750 transition-colors">
                <div className="w-24 h-24 rounded-full bg-accent-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-accent-600 font-serif text-3xl font-bold">AOP</span>
                </div>
                <div className="text-white text-sm text-center font-light">Appellation d'Origine Protégée</div>
              </div>

              {/* AOC Certification */}
              <div className="bg-primary-900 p-8 flex flex-col items-center justify-center group hover:bg-primary-750 transition-colors">
                <div className="w-24 h-24 rounded-full bg-accent-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-accent-600 font-serif text-3xl font-bold">AOC</span>
                </div>
                <div className="text-white text-sm text-center font-light">Appellation d'Origine Contrôlée</div>
              </div>

              {/* IGP Certification */}
              <div className="bg-primary-900 p-8 flex flex-col items-center justify-center group hover:bg-primary-750 transition-colors">
                <div className="w-24 h-24 rounded-full bg-accent-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-accent-600 font-serif text-3xl font-bold">IGP</span>
                </div>
                <div className="text-white text-sm text-center font-light">Indication Géographique Protégée</div>
              </div>

              {/* Bio Certification */}
              <div className="bg-primary-900 p-8 flex flex-col items-center justify-center group hover:bg-primary-750 transition-colors">
                <div className="w-24 h-24 rounded-full bg-accent-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-accent-600 font-serif text-2xl font-bold">BIO</span>
                </div>
                <div className="text-white text-sm text-center font-light">Agriculture Biologique</div>
              </div>
            </div>
          </div>

          {/* Partner Producers */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-serif font-light text-white text-center mb-12">
              Nos Producteurs Partenaires
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Partner 1 */}
              <div className="bg-primary-900 p-8 group hover:bg-primary-750 transition-colors">
                <div className="aspect-square mb-6 bg-accent-600/5 flex items-center justify-center">
                  <span className="text-accent-600 font-serif text-5xl font-light">F</span>
                </div>
                <h4 className="text-xl font-serif font-light text-white mb-3">Fromagerie du Mont d'Or</h4>
                <p className="text-primary-300 text-sm font-light leading-relaxed mb-4">
                  Producteur traditionnel du Jura, spécialisé dans les fromages au lait cru depuis 1920
                </p>
                <div className="text-accent-600 text-xs tracking-wider uppercase">Jura, France</div>
              </div>

              {/* Partner 2 */}
              <div className="bg-primary-900 p-8 group hover:bg-primary-750 transition-colors">
                <div className="aspect-square mb-6 bg-accent-600/5 flex items-center justify-center">
                  <span className="text-accent-600 font-serif text-5xl font-light">C</span>
                </div>
                <h4 className="text-xl font-serif font-light text-white mb-3">Chèvrerie des Alpes</h4>
                <p className="text-primary-300 text-sm font-light leading-relaxed mb-4">
                  Élevage de chèvres d'altitude produisant des fromages alpins d'exception
                </p>
                <div className="text-accent-600 text-xs tracking-wider uppercase">Savoie, France</div>
              </div>

              {/* Partner 3 */}
              <div className="bg-primary-900 p-8 group hover:bg-primary-750 transition-colors">
                <div className="aspect-square mb-6 bg-accent-600/5 flex items-center justify-center">
                  <span className="text-accent-600 font-serif text-5xl font-light">L</span>
                </div>
                <h4 className="text-xl font-serif font-light text-white mb-3">Laiterie Artisanale</h4>
                <p className="text-primary-300 text-sm font-light leading-relaxed mb-4">
                  Laiterie familiale produisant des fromages biologiques selon des méthodes traditionnelles
                </p>
                <div className="text-accent-600 text-xs tracking-wider uppercase">Normandie, France</div>
              </div>
            </div>

            {/* CTA vers page producteurs */}
            <div className="text-center mt-12">
              <Link
                href="/producteurs"
                className="group relative inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-600 text-accent-600 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:text-primary-900"
              >
                <span className="relative z-10">Découvrir tous nos producteurs</span>
                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-accent-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Quality Commitments */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-primary-900 p-12">
              <h3 className="text-2xl font-serif font-light text-white text-center mb-8">
                Nos Engagements Qualité
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="text-accent-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-serif mb-1">Sélection 100% Lait Cru</div>
                    <div className="text-primary-300 text-sm font-light">Uniquement de fermes certifiées respectant le bien-être animal</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-accent-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-serif mb-1">Affinage Traditionnel</div>
                    <div className="text-primary-300 text-sm font-light">Affinés dans nos caves jusqu'à maturité optimale</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-accent-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-serif mb-1">Traçabilité Complète</div>
                    <div className="text-primary-300 text-sm font-light">Du producteur à votre assiette, chaque étape documentée</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-accent-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-serif mb-1">Contrôle Qualité Quotidien</div>
                    <div className="text-primary-300 text-sm font-light">Inspection rigoureuse de chaque produit reçu</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 18. Newsletter / Footer CTA */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-primary-900">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `repeating-linear-gradient(0deg, #E4C590, #E4C590 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #E4C590, #E4C590 1px, transparent 1px, transparent 40px)`,
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Ornament className="text-accent-600 mx-auto mb-8" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Newsletter
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
              Abonnez-vous à Notre Newsletter
            </h2>
            <p className="text-primary-200 text-lg mb-12 font-light">
              Et ne manquez jamais nos dernières actualités et offres exclusives
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 bg-transparent border border-primary-700 text-white placeholder:text-primary-500 focus:border-accent-600 outline-none transition-colors font-light"
              />
              <button
                type="submit"
                className="px-10 py-4 bg-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-accent-500 transition-all duration-500 whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 8. Final CTA - Fullscreen immersif */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de"
            alt="Cave à fromages Formaticus"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center px-4">
          <Ornament className="text-accent-600 mx-auto mb-8" />

          <h2 className="text-5xl md:text-7xl font-serif font-light text-white mb-8 leading-tight">
            Prêt à Découvrir<br />
            <span className="italic text-accent-600">L'Univers Formaticus ?</span>
          </h2>

          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto font-light">
            Réservez votre soirée conviviale ou atelier de dégustation
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/reserver">
              <button className="px-14 py-5 bg-accent-600 text-black font-sans tracking-[0.2em] text-xs uppercase hover:bg-accent-500 transition-all duration-500">
                Réserver Une Table
              </button>
            </Link>
            <a href={`tel:${SITE_DATA.business.contact.phone}`}>
              <button className="px-14 py-5 border border-accent-600 text-accent-600 font-sans tracking-[0.2em] text-xs uppercase hover:bg-accent-600 hover:text-black transition-all duration-500">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>Appelez-Nous</span>
                </div>
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
