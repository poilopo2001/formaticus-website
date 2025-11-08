import { Metadata } from 'next'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mentions Légales | Formaticus Luxembourg',
  description: 'Mentions légales de Formaticus - Fromagerie artisanale à Luxembourg. Informations légales et juridiques du site.',
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Ornament className="text-accent-600 mx-auto mb-6" />
          <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
            Informations Légales
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight">
            Mentions Légales
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-12">
                {/* 1. Éditeur du site */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">1. Éditeur du Site</h2>
                  <div className="text-primary-200 font-light space-y-2">
                    <p>
                      <strong className="text-white">Raison sociale :</strong> {SITE_DATA.business.name}
                    </p>
                    <p>
                      <strong className="text-white">Forme juridique :</strong> SARL (Société à Responsabilité Limitée)
                    </p>
                    <p>
                      <strong className="text-white">Capital social :</strong> 12 500 €
                    </p>
                    <p>
                      <strong className="text-white">Siège social :</strong><br />
                      {SITE_DATA.business.contact.address.street}<br />
                      {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}<br />
                      {SITE_DATA.business.contact.address.country}
                    </p>
                    <p>
                      <strong className="text-white">Numéro RCS :</strong> Luxembourg B 123 456
                    </p>
                    <p>
                      <strong className="text-white">Numéro de TVA :</strong> LU 12345678
                    </p>
                    <p>
                      <strong className="text-white">Téléphone :</strong> {SITE_DATA.business.contact.phoneDisplay}
                    </p>
                    <p>
                      <strong className="text-white">Email :</strong> {SITE_DATA.business.contact.email}
                    </p>
                  </div>
                </div>

                {/* 2. Directeur de publication */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">2. Directeur de Publication</h2>
                  <div className="text-primary-200 font-light">
                    <p>
                      <strong className="text-white">Nom :</strong> M. Jean-Luc BERNARD
                    </p>
                    <p>
                      <strong className="text-white">Qualité :</strong> Gérant
                    </p>
                  </div>
                </div>

                {/* 3. Hébergement */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">3. Hébergement du Site</h2>
                  <div className="text-primary-200 font-light space-y-2">
                    <p>
                      <strong className="text-white">Hébergeur :</strong> Vercel Inc.
                    </p>
                    <p>
                      <strong className="text-white">Adresse :</strong><br />
                      340 S Lemon Ave #4133<br />
                      Walnut, CA 91789<br />
                      États-Unis
                    </p>
                    <p>
                      <strong className="text-white">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:underline">vercel.com</a>
                    </p>
                  </div>
                </div>

                {/* 4. Propriété intellectuelle */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">4. Propriété Intellectuelle</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      L'ensemble du contenu de ce site (textes, images, logos, vidéos, mise en page, charte graphique) est la propriété exclusive de {SITE_DATA.business.name} ou de ses partenaires, et est protégé par les lois luxembourgeoises et internationales relatives à la propriété intellectuelle.
                    </p>
                    <p>
                      Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de {SITE_DATA.business.name}.
                    </p>
                    <p>
                      Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                    </p>
                  </div>
                </div>

                {/* 5. Protection des données */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">5. Protection des Données Personnelles</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi luxembourgeoise du 1er août 2018 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                    </p>
                    <p>
                      Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter notre délégué à la protection des données :
                    </p>
                    <p>
                      <strong className="text-white">Email :</strong> dpo@formaticus.lu<br />
                      <strong className="text-white">Courrier :</strong> {SITE_DATA.business.contact.address.street}, {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}
                    </p>
                    <p>
                      Pour plus d'informations sur notre politique de confidentialité, consultez notre <a href="/politique-confidentialite" className="text-accent-600 hover:underline">Politique de Confidentialité</a>.
                    </p>
                  </div>
                </div>

                {/* 6. Cookies */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">6. Cookies</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Un cookie est un petit fichier texte stocké sur votre ordinateur lors de la visite d'un site.
                    </p>
                    <p>
                      Vous pouvez vous opposer à l'enregistrement de cookies en configurant votre navigateur. Cependant, certaines fonctionnalités du site peuvent être limitées.
                    </p>
                  </div>
                </div>

                {/* 7. Limitation de responsabilité */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">7. Limitation de Responsabilité</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      {SITE_DATA.business.name} s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                    </p>
                    <p>
                      En conséquence, {SITE_DATA.business.name} décline toute responsabilité :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                      <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition</li>
                      <li>Pour tous dommages directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder</li>
                    </ul>
                  </div>
                </div>

                {/* 8. Liens hypertextes */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">8. Liens Hypertextes</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Le site peut contenir des liens hypertextes vers d'autres sites. {SITE_DATA.business.name} n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur disponibilité.
                    </p>
                    <p>
                      La mise en place d'un lien hypertexte vers le site www.formaticus.lu nécessite une autorisation préalable écrite de {SITE_DATA.business.name}.
                    </p>
                  </div>
                </div>

                {/* 9. Droit applicable */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">9. Droit Applicable et Juridiction Compétente</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les présentes mentions légales sont régies par le droit luxembourgeois.
                    </p>
                    <p>
                      En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux luxembourgeois compétents.
                    </p>
                  </div>
                </div>

                {/* 10. Contact */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">10. Contact</h2>
                  <div className="text-primary-200 font-light space-y-2">
                    <p>
                      Pour toute question concernant les mentions légales, vous pouvez nous contacter :
                    </p>
                    <p>
                      <strong className="text-white">Par téléphone :</strong> {SITE_DATA.business.contact.phoneDisplay}
                    </p>
                    <p>
                      <strong className="text-white">Par email :</strong> {SITE_DATA.business.contact.email}
                    </p>
                    <p>
                      <strong className="text-white">Par courrier :</strong><br />
                      {SITE_DATA.business.contact.address.street}<br />
                      {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}<br />
                      {SITE_DATA.business.contact.address.country}
                    </p>
                  </div>
                </div>

                {/* Date de mise à jour */}
                <div className="pt-8 border-t border-accent-600/20 text-center">
                  <p className="text-primary-300 font-light text-sm">
                    Dernière mise à jour : 8 novembre 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
