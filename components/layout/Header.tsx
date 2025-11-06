'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { SITE_DATA } from '@/lib/constants'
import { Menu, X, Phone, Clock } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      {/* Top bar - Contact info */}
      <div className="bg-primary-900 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_DATA.business.contact.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{SITE_DATA.business.hours.weekdays}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>{SITE_DATA.business.contact.address.street}, {SITE_DATA.business.contact.address.city}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
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
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/fromages"
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
            >
              Nos Fromages
            </Link>
            <Link
              href="/evenements"
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
            >
              Événements
            </Link>
            <Link
              href="/traiteur"
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
            >
              Traiteur
            </Link>
            <Link
              href="/a-propos"
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link href="/reserver">
              <Button variant="primary" size="md">
                Réserver
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-primary-900"
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

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-primary-200">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors py-2"
            >
              Accueil
            </Link>
            <Link
              href="/fromages"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors py-2"
            >
              Nos Fromages
            </Link>
            <Link
              href="/evenements"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors py-2"
            >
              Événements
            </Link>
            <Link
              href="/traiteur"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors py-2"
            >
              Traiteur
            </Link>
            <Link
              href="/a-propos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors py-2"
            >
              À Propos
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-primary-900 hover:text-accent-600 font-medium transition-colors py-2"
            >
              Contact
            </Link>
            <Link href="/reserver" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="lg" className="w-full">
                Réserver une Soirée
              </Button>
            </Link>
            <div className="pt-4 border-t border-primary-200 text-sm text-primary-700">
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="flex items-center gap-2 hover:text-accent-600 transition-colors mb-2"
              >
                <Phone className="w-4 h-4" />
                <span>{SITE_DATA.business.contact.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{SITE_DATA.business.hours.weekdays}</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
