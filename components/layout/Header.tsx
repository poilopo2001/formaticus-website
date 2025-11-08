'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SITE_DATA } from '@/lib/constants'
import { Menu, X, Phone, Clock, MapPin, Mail } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar - Contact info - Masqué sur mobile pour éviter le scroll horizontal */}
      <div className="hidden md:block glass-light border-b border-accent-600/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2.5 text-xs">
            {/* Adresse - Gauche */}
            <div className="flex items-center gap-2 text-primary-200">
              <MapPin className="w-3.5 h-3.5 text-accent-600" />
              <span className="font-light">
                {SITE_DATA.business.contact.address.street}, {SITE_DATA.business.contact.address.city}, {SITE_DATA.business.contact.address.country}
              </span>
            </div>

            {/* Horaires - Centre */}
            <div className="hidden lg:flex items-center gap-2 text-primary-200">
              <Clock className="w-3.5 h-3.5 text-accent-600" />
              <span className="font-light">{SITE_DATA.business.hours.weekdays}</span>
            </div>

            {/* Téléphone & Email - Droite */}
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="flex items-center gap-2 text-primary-200 hover:text-accent-600 transition-colors font-light"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{SITE_DATA.business.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE_DATA.business.contact.email}`}
                className="hidden md:flex items-center gap-2 text-primary-200 hover:text-accent-600 transition-colors font-light"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SITE_DATA.business.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="glass-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 hover-scale overflow-hidden rounded-full">
                <Image
                  src="/FORMATICUS-1.jpg"
                  alt={SITE_DATA.business.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                Accueil
              </Link>
              <Link
                href="/fromages"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                Nos Fromages
              </Link>
              <Link
                href="/producteurs"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                Nos Producteurs
              </Link>
              <Link
                href="/box-fromage-vin"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                Box Fromage & Vin
              </Link>
              <Link
                href="/evenements"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                Événements
              </Link>
              <Link
                href="/traiteur"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                Traiteur
              </Link>
              <Link
                href="/a-propos"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                À Propos
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-accent-600 font-light text-sm transition-all duration-300"
              >
                Contact
              </Link>
              <Link
                href="/reserver"
                className="px-6 py-2.5 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 hover-glow"
              >
                Réserver
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Fullscreen optimisé conversion */}
      <div
        className={`fixed inset-0 lg:hidden bg-black/95 backdrop-blur-md transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: 0 }}
      >
        <div className="h-full flex flex-col">
          {/* Header du menu mobile avec logo et bouton fermer */}
          <div className="glass-light border-b border-accent-600/20 px-4 py-4 flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
              <div className="relative w-14 h-14 overflow-hidden rounded-full">
                <Image
                  src="/FORMATICUS-1.jpg"
                  alt={SITE_DATA.business.name}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white hover:text-accent-600 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Contenu scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-6 py-8">
              {/* CTA Principal - Réserver */}
              <Link
                href="/reserver"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-8 py-5 bg-accent-600 border-2 border-accent-600 text-black text-center text-sm tracking-[0.2em] uppercase font-medium hover:bg-transparent hover:text-accent-600 transition-all duration-500 mb-8"
              >
                <span className="text-lg">🧀</span> Réserver une Table
              </Link>

              {/* Navigation principale */}
              <nav className="space-y-1 mb-8">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  Accueil
                </Link>
                <Link
                  href="/fromages"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  Nos Fromages
                </Link>
                <Link
                  href="/producteurs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  Nos Producteurs
                </Link>
                <Link
                  href="/box-fromage-vin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  Box Fromage & Vin
                </Link>
                <Link
                  href="/evenements"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  Événements
                </Link>
                <Link
                  href="/traiteur"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  Service Traiteur
                </Link>
                <Link
                  href="/a-propos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  À Propos
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 px-4 text-white hover:text-accent-600 hover:bg-accent-600/10 font-light text-lg transition-all duration-300 border-b border-accent-600/10"
                >
                  Contact
                </Link>
              </nav>

              {/* Contact rapide */}
              <div className="bg-primary-900/50 border border-accent-600/30 p-6 space-y-4">
                <p className="text-accent-600 text-xs tracking-[0.2em] uppercase mb-4">
                  Contact Direct
                </p>
                <a
                  href={`tel:${SITE_DATA.business.contact.phone}`}
                  className="flex items-center gap-3 text-white hover:text-accent-600 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent-600/10 border border-accent-600/30 flex items-center justify-center group-hover:bg-accent-600 group-hover:border-accent-600 transition-all">
                    <Phone className="w-5 h-5 text-accent-600 group-hover:text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300 font-light">Appelez-nous</p>
                    <p className="text-lg font-serif">{SITE_DATA.business.contact.phoneDisplay}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-primary-200">
                  <div className="w-12 h-12 rounded-full bg-accent-600/10 border border-accent-600/30 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300 font-light">Horaires</p>
                    <p className="text-base font-light">{SITE_DATA.business.hours.weekdays}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
