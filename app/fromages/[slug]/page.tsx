'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Milk, Award, ChevronLeft, ShoppingCart } from 'lucide-react'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

// Types enrichis
interface Terroir {
  titre: string
  geographie: string
  climat: string
  elevage: string
  savoir_faire: string
}

interface ProfilGustatif {
  titre: string
  visuel: string
  texture: string
  aromes_primaires: string
  aromes_secondaires: string
  evolution: string
  temperature_service: string
}

interface Conservation {
  titre: string
  temperature_conservation: string
  avant_service: string
  coupe: string
  presentation: string
  duree: string
}

interface FromageEnrichi {
  id: number
  slug: string
  nom: string
  image: string
  prixKg: number
  type: string
  lait: string
  origine: string
  region: string
  aop: boolean
  intensite: number
  description: string
  terroir: Terroir
  profil_gustatif: ProfilGustatif
  conservation: Conservation
  degustation: string
  accords: string
  histoire: string
}

export default function FromageDetailPage({ params }: { params: { slug: string } }) {
  const [fromage, setFromage] = useState<FromageEnrichi | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Charger les données du fromage depuis le JSON enrichi
    async function loadFromage() {
      try {
        const response = await fetch(`/data/${params.slug}-enrichi.json`)
        if (!response.ok) {
          setFromage(null)
          setLoading(false)
          return
        }
        const data = await response.json()
        setFromage(data)
      } catch (error) {
        console.error('Erreur chargement fromage:', error)
        setFromage(null)
      } finally {
        setLoading(false)
      }
    }

    loadFromage()
  }, [params.slug])

  if (loading) {
    return (
      <main className="min-h-screen bg-primary-900 flex items-center justify-center">
        <div className="text-accent-600 text-xl">Chargement...</div>
      </main>
    )
  }

  if (!fromage) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-primary-900">
      {/* Bouton Retour */}
      <div className="bg-primary-950 border-b border-accent-600/20">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/fromages"
            className="inline-flex items-center gap-2 text-accent-600 hover:text-accent-700 transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">Retour au catalogue</span>
          </Link>
        </div>
      </div>

      {/* Hero Section - Image + Info principale */}
      <section className="py-16 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
              <Image
                src={fromage.image}
                alt={fromage.nom}
                fill
                className="object-cover"
                priority
              />
              {/* Badge AOP */}
              {fromage.aop && (
                <div className="absolute top-6 right-6 bg-accent-600 text-primary-900 px-4 py-2 text-sm tracking-wider uppercase font-light">
                  AOP
                </div>
              )}
              {/* Cadre doré décoratif */}
              <div className="absolute inset-6 border border-accent-600/30" />
            </div>

            {/* Informations principales */}
            <div>
              {/* Catégorie */}
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-4">
                {fromage.region}
              </p>

              {/* Nom */}
              <h1 className="text-5xl md:text-6xl font-serif font-light text-white mb-6 leading-tight">
                {fromage.nom}
              </h1>

              {/* Description courte */}
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                {fromage.description}
              </p>

              {/* Caractéristiques en grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Origine */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="tracking-wider uppercase text-xs">Origine</span>
                  </div>
                  <p className="text-white font-light">{fromage.region}</p>
                </div>

                {/* Type de lait */}
                <div>
                  <div className="flex items-center gap-2 text-accent-600 text-sm mb-2">
                    <Milk className="w-4 h-4" />
                    <span className="tracking-wider uppercase text-xs">Lait</span>
                  </div>
                  <p className="text-white font-light capitalize">Lait de {fromage.lait}</p>
                </div>
              </div>

              {/* Intensité */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-gray-500 text-xs tracking-wider uppercase">Intensité</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`w-8 h-2 transition-colors ${
                        level <= fromage.intensite ? 'bg-accent-600' : 'bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-light">{fromage.intensite}/5</span>
              </div>

              {/* Prix */}
              <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-accent-600/20">
                <span className="text-4xl font-light text-accent-600">{fromage.prixKg.toFixed(2)}€</span>
                <span className="text-gray-500 text-lg">/kg</span>
              </div>

              {/* CTA Commander */}
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-accent-600 text-primary-900 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-accent-700"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="relative z-10">Commander ce fromage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Terroir */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                {fromage.terroir.titre}
              </h2>
              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Géographie */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Géographie
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.geographie}
                </p>
              </div>

              {/* Climat */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Climat
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.climat}
                </p>
              </div>

              {/* Élevage */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Élevage
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.elevage}
                </p>
              </div>

              {/* Savoir-faire */}
              <div>
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Savoir-faire
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.terroir.savoir_faire}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dégustation */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent-600" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase">
                Notes de Dégustation
              </p>
              <div className="w-12 h-px bg-accent-600" />
            </div>

            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
              {fromage.degustation}
            </p>

            {/* Accords */}
            <div className="mt-12 bg-primary-950 p-8 border border-accent-600/20">
              <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                Accords Recommandés
              </h3>
              <p className="text-primary-200 font-light leading-relaxed text-lg">
                {fromage.accords}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Profil Gustatif Détaillé */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                {fromage.profil_gustatif.titre}
              </h2>
              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="space-y-12">
              {/* Analyse Visuelle */}
              <div className="bg-black p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Analyse Visuelle
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.profil_gustatif.visuel}
                </p>
              </div>

              {/* Texture en Bouche */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-black p-8 border border-accent-600/20">
                  <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                    Texture en Bouche
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed text-lg">
                    {fromage.profil_gustatif.texture}
                  </p>
                </div>

                <div className="bg-black p-8 border border-accent-600/20">
                  <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                    Température de Service
                  </h3>
                  <p className="text-primary-200 font-light leading-relaxed text-lg">
                    {fromage.profil_gustatif.temperature_service}
                  </p>
                </div>
              </div>

              {/* Palette Aromatique */}
              <div className="bg-black p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-6 font-medium">
                  Palette Aromatique
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white text-sm mb-3 tracking-wider">Arômes Primaires</h4>
                    <p className="text-primary-200 font-light leading-relaxed">
                      {fromage.profil_gustatif.aromes_primaires}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm mb-3 tracking-wider">Arômes Secondaires</h4>
                    <p className="text-primary-200 font-light leading-relaxed">
                      {fromage.profil_gustatif.aromes_secondaires}
                    </p>
                  </div>
                </div>
              </div>

              {/* Évolution en Bouche */}
              <div className="bg-black p-8 border border-accent-600/20">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Évolution en Bouche
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.profil_gustatif.evolution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Conservation et Service */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-6">
                {fromage.conservation.titre}
              </h2>
              <div className="flex justify-center">
                <svg className="w-16 h-3 text-accent-600" viewBox="0 0 64 12" fill="none">
                  <path d="M0 6h28M32 0v12M36 6h28" stroke="currentColor" strokeWidth="0.5"/>
                  <circle cx="32" cy="6" r="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Température de conservation */}
              <div className="bg-primary-950 p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Conservation
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.temperature_conservation}
                </p>
              </div>

              {/* Avant service */}
              <div className="bg-primary-950 p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Avant Dégustation
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.avant_service}
                </p>
              </div>

              {/* Coupe */}
              <div className="bg-primary-950 p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Coupe
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.coupe}
                </p>
              </div>

              {/* Présentation */}
              <div className="bg-primary-950 p-8 border border-accent-600/20 hover:border-accent-600/40 transition-colors duration-300">
                <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                  Présentation
                </h3>
                <p className="text-primary-200 font-light leading-relaxed text-lg">
                  {fromage.conservation.presentation}
                </p>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="mt-8 bg-primary-950 p-8 border border-accent-600/30 text-center">
              <h3 className="text-accent-600 tracking-[0.2em] uppercase text-xs mb-4 font-medium">
                Durée de Conservation
              </h3>
              <p className="text-primary-200 font-light leading-relaxed text-lg">
                {fromage.conservation.duree}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="py-20 bg-primary-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-accent-600" />
              <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase">
                Histoire & Tradition
              </p>
              <div className="w-12 h-px bg-accent-600" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-8">
              L'Histoire du {fromage.nom}
            </h2>

            <p className="text-lg text-gray-300 font-light leading-relaxed">
              {fromage.histoire}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">
              Prêt à déguster ce fromage d'exception ?
            </h2>
            <p className="text-lg text-gray-400 font-light mb-10 leading-relaxed">
              Commandez dès maintenant ou rejoignez-nous lors d'une soirée dégustation pour découvrir ce fromage et bien d'autres.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#contact"
                className="group relative px-10 py-4 bg-accent-600 text-primary-900 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-accent-700"
              >
                <span className="relative z-10">Commander</span>
              </Link>

              <Link
                href="/evenements"
                className="group relative px-10 py-4 border-2 border-accent-600 text-accent-600 font-light tracking-wider uppercase overflow-hidden transition-all duration-300 hover:text-primary-900"
              >
                <span className="relative z-10">Nos Soirées</span>
                <div className="absolute inset-0 bg-accent-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
