import { Metadata } from 'next'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Formaticus Luxembourg',
  description: 'Politique de confidentialité et protection des données personnelles de Formaticus. Conformité RGPD.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Ornament className="text-accent-600 mx-auto mb-6" />
          <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
            Protection des Données
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight">
            Politique de<br />Confidentialité
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-12">
                {/* Introduction */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">Introduction</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      {SITE_DATA.business.name} accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la législation luxembourgeoise.
                    </p>
                    <p>
                      En utilisant notre site web www.formaticus.lu, vous acceptez les pratiques décrites dans cette politique.
                    </p>
                  </div>
                </div>

                {/* 1. Responsable du traitement */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">1. Responsable du Traitement</h2>
                  <div className="text-primary-200 font-light space-y-2">
                    <p>
                      Le responsable du traitement de vos données personnelles est :
                    </p>
                    <p>
                      <strong className="text-white">Raison sociale :</strong> {SITE_DATA.business.name}<br />
                      <strong className="text-white">Adresse :</strong> {SITE_DATA.business.contact.address.street}, {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}<br />
                      <strong className="text-white">Email :</strong> {SITE_DATA.business.contact.email}<br />
                      <strong className="text-white">Téléphone :</strong> {SITE_DATA.business.contact.phoneDisplay}
                    </p>
                  </div>
                </div>

                {/* 2. Données collectées */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">2. Données Personnelles Collectées</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Nous collectons les données personnelles suivantes :
                    </p>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">2.1. Données d'identification</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Nom et prénom</li>
                        <li>Adresse email</li>
                        <li>Numéro de téléphone</li>
                        <li>Adresse postale</li>
                      </ul>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">2.2. Données de réservation</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Date et heure de réservation</li>
                        <li>Nombre de personnes</li>
                        <li>Préférences alimentaires</li>
                        <li>Type d'événement réservé</li>
                      </ul>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">2.3. Données de commande</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Historique des achats</li>
                        <li>Montants des transactions</li>
                        <li>Préférences produits</li>
                      </ul>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">2.4. Données de connexion</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Adresse IP</li>
                        <li>Type de navigateur</li>
                        <li>Pages visitées</li>
                        <li>Date et heure de connexion</li>
                        <li>Données de cookies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. Finalités du traitement */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">3. Finalités du Traitement</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li><strong className="text-white">Gestion des réservations :</strong> Traitement et confirmation de vos réservations d'événements et de soirées fromage</li>
                      <li><strong className="text-white">Gestion des commandes :</strong> Traitement de vos commandes de fromages, coffrets et plateaux personnalisés</li>
                      <li><strong className="text-white">Service client :</strong> Réponse à vos demandes et questions via notre formulaire de contact</li>
                      <li><strong className="text-white">Communication marketing :</strong> Envoi de notre newsletter, offres spéciales et actualités (avec votre consentement préalable)</li>
                      <li><strong className="text-white">Amélioration de nos services :</strong> Analyse de l'utilisation du site pour améliorer l'expérience utilisateur</li>
                      <li><strong className="text-white">Obligations légales :</strong> Respect de nos obligations comptables, fiscales et juridiques</li>
                    </ul>
                  </div>
                </div>

                {/* 4. Base légale */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">4. Base Légale du Traitement</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les bases légales du traitement de vos données sont :
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li><strong className="text-white">Exécution du contrat :</strong> Pour le traitement de vos réservations et commandes</li>
                      <li><strong className="text-white">Consentement :</strong> Pour l'envoi de communications marketing (newsletter)</li>
                      <li><strong className="text-white">Intérêt légitime :</strong> Pour l'amélioration de nos services et la sécurité du site</li>
                      <li><strong className="text-white">Obligation légale :</strong> Pour le respect des obligations comptables et fiscales</li>
                    </ul>
                  </div>
                </div>

                {/* 5. Destinataires des données */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">5. Destinataires des Données</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Vos données personnelles sont accessibles :
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li>Au personnel autorisé de {SITE_DATA.business.name}</li>
                      <li>À nos prestataires techniques (hébergement, emailing) soumis à des obligations de confidentialité</li>
                      <li>Aux autorités compétentes sur demande légale</li>
                    </ul>
                    <p>
                      <strong className="text-white">Nous ne vendons ni ne louons vos données personnelles à des tiers.</strong>
                    </p>
                  </div>
                </div>

                {/* 6. Durée de conservation */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">6. Durée de Conservation</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Vos données sont conservées pendant les durées suivantes :
                    </p>
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li><strong className="text-white">Données de compte client :</strong> 3 ans après la dernière activité</li>
                      <li><strong className="text-white">Données de commande :</strong> 10 ans pour les obligations comptables et fiscales</li>
                      <li><strong className="text-white">Données de réservation :</strong> 1 an après l'événement</li>
                      <li><strong className="text-white">Cookies :</strong> Maximum 13 mois</li>
                      <li><strong className="text-white">Newsletter :</strong> Jusqu'à votre désinscription</li>
                    </ul>
                    <p>
                      À l'issue de ces délais, vos données sont supprimées ou anonymisées.
                    </p>
                  </div>
                </div>

                {/* 7. Sécurité */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">7. Sécurité des Données</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Chiffrement SSL/TLS des communications</li>
                      <li>Hébergement sécurisé chez des prestataires certifiés</li>
                      <li>Accès restreint aux données par mot de passe</li>
                      <li>Sauvegardes régulières</li>
                      <li>Formation du personnel à la protection des données</li>
                    </ul>
                  </div>
                </div>

                {/* 8. Vos droits */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">8. Vos Droits</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Conformément au RGPD, vous disposez des droits suivants :
                    </p>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded space-y-3">
                      <p><strong className="text-white">Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées et accéder à ces données</p>
                      <p><strong className="text-white">Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</p>
                      <p><strong className="text-white">Droit à l'effacement :</strong> Demander la suppression de vos données dans certaines conditions</p>
                      <p><strong className="text-white">Droit à la limitation :</strong> Demander la limitation du traitement de vos données</p>
                      <p><strong className="text-white">Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</p>
                      <p><strong className="text-white">Droit d'opposition :</strong> Vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière</p>
                      <p><strong className="text-white">Droit de retirer votre consentement :</strong> Pour les traitements basés sur le consentement (newsletter)</p>
                    </div>

                    <p className="pt-4">
                      Pour exercer ces droits, contactez-nous :
                    </p>
                    <p>
                      <strong className="text-white">Email :</strong> dpo@formaticus.lu<br />
                      <strong className="text-white">Courrier :</strong> {SITE_DATA.business.contact.address.street}, {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}<br />
                      <strong className="text-white">Téléphone :</strong> {SITE_DATA.business.contact.phoneDisplay}
                    </p>
                    <p>
                      Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
                    </p>
                    <p>
                      Vous disposez également du droit d'introduire une réclamation auprès de la Commission Nationale pour la Protection des Données (CNPD) du Luxembourg.
                    </p>
                  </div>
                </div>

                {/* 9. Cookies */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">9. Cookies et Technologies Similaires</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Notre site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte stocké sur votre appareil.
                    </p>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">Types de cookies utilisés :</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Cookies essentiels :</strong> Nécessaires au fonctionnement du site (panier, session)</li>
                        <li><strong className="text-white">Cookies analytiques :</strong> Analyse de l'audience et des performances du site</li>
                        <li><strong className="text-white">Cookies de préférences :</strong> Mémorisation de vos choix (langue, etc.)</li>
                      </ul>
                    </div>

                    <p>
                      Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut limiter les fonctionnalités du site.
                    </p>
                  </div>
                </div>

                {/* 10. Modifications */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">10. Modifications de la Politique</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
                    </p>
                    <p>
                      Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
                    </p>
                  </div>
                </div>

                {/* 11. Contact */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">11. Contact</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, contactez notre Délégué à la Protection des Données :
                    </p>
                    <p>
                      <strong className="text-white">Email :</strong> dpo@formaticus.lu<br />
                      <strong className="text-white">Téléphone :</strong> {SITE_DATA.business.contact.phoneDisplay}<br />
                      <strong className="text-white">Courrier :</strong> {SITE_DATA.business.contact.address.street}, {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}
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
