'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SITE_DATA } from '@/lib/constants'
import { Menu, X, Phone, Clock, MapPin, Mail } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar - Contact info */}
      <div className="bg-black/10 backdrop-blur-lg border-b border-accent-600/20">
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
      <div className="bg-black/10 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
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
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/fromages"
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                Nos Fromages
              </Link>
              <Link
                href="/producteurs"
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                Nos Producteurs
              </Link>
              <Link
                href="/offres"
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                Offres
              </Link>
              <Link
                href="/evenements"
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                Événements
              </Link>
              <Link
                href="/traiteur"
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                Traiteur
              </Link>
              <Link
                href="/a-propos"
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                À Propos
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-accent-600 font-light text-sm transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/reserver"
                className="px-6 py-2.5 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/10 backdrop-blur-lg border-t border-accent-600/20">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              Accueil
            </Link>
            <Link
              href="/fromages"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              Nos Fromages
            </Link>
            <Link
              href="/producteurs"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              Nos Producteurs
            </Link>
            <Link
              href="/offres"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              Offres
            </Link>
            <Link
              href="/evenements"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              Événements
            </Link>
            <Link
              href="/traiteur"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              Traiteur
            </Link>
            <Link
              href="/a-propos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-accent-600 font-light transition-colors py-2"
            >
              Contact
            </Link>
            <Link
              href="/reserver"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-6 py-3 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 text-center"
            >
              Réserver
            </Link>
            <div className="pt-4 border-t border-accent-600/20 text-sm text-primary-200 space-y-2">
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="flex items-center gap-2 hover:text-accent-600 transition-colors font-light"
              >
                <Phone className="w-4 h-4 text-accent-600" />
                <span>{SITE_DATA.business.contact.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 font-light">
                <Clock className="w-4 h-4 text-accent-600" />
                <span>{SITE_DATA.business.hours.weekdays}</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
