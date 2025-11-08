import { Metadata } from 'next'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente (CGV) | Formaticus Luxembourg',
  description: 'Conditions générales de vente de Formaticus. Modalités de commande, paiement, livraison et garanties.',
}

export default function CGVPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Ornament className="text-accent-600 mx-auto mb-6" />
          <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
            Cadre Juridique
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight">
            Conditions Générales<br />de Vente
          </h1>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-12">
                {/* Préambule */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">Préambule</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles entre {SITE_DATA.business.name}, SARL au capital de 12 500 €, immatriculée au RCS de Luxembourg sous le numéro B 123 456, dont le siège social est situé {SITE_DATA.business.contact.address.street}, {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city} (ci-après « le Vendeur »), et toute personne physique ou morale souhaitant effectuer un achat (ci-après « le Client ») via le site www.formaticus.lu.
                    </p>
                    <p>
                      Les présentes CGV sont applicables à toutes les ventes de produits et prestations de services proposés par {SITE_DATA.business.name}, tant en boutique physique que sur le site internet www.formaticus.lu.
                    </p>
                    <p>
                      Le fait de passer commande implique l'adhésion entière et sans réserve du Client aux présentes CGV.
                    </p>
                  </div>
                </div>

                {/* 1. Champ d'application */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">1. Champ d'Application</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les présentes CGV s'appliquent à toutes les ventes de produits et services réalisées par {SITE_DATA.business.name} :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Vente de fromages, charcuteries et produits d'épicerie fine</li>
                      <li>Coffrets et box fromage-vin</li>
                      <li>Plateaux de fromages sur mesure</li>
                      <li>Réservations pour soirées fromage et événements</li>
                      <li>Prestations traiteur</li>
                    </ul>
                    <p>
                      Les CGV accessibles à tout moment sur le site www.formaticus.lu prévalent sur toute autre version ou tout autre document contradictoire.
                    </p>
                  </div>
                </div>

                {/* 2. Prix */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">2. Prix</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les prix de nos produits et services sont indiqués en euros (€) toutes taxes comprises (TTC), TVA luxembourgeoise incluse au taux en vigueur.
                    </p>
                    <p>
                      <strong className="text-white">Prix des fromages :</strong> Les fromages vendus à la coupe sont facturés au poids réel. Les prix affichés sont indicatifs et exprimés au kilogramme. Le prix final est calculé au moment de la pesée.
                    </p>
                    <p>
                      <strong className="text-white">Offres promotionnelles :</strong> Nos offres promotionnelles sont valables dans la limite des stocks disponibles et pendant la période indiquée.
                    </p>
                    <p>
                      <strong className="text-white">Frais de livraison :</strong> Les frais de livraison, lorsqu'ils s'appliquent, sont indiqués avant la validation de la commande. Livraison gratuite pour toute commande supérieure à 80€.
                    </p>
                    <p>
                      Le Vendeur se réserve le droit de modifier ses prix à tout moment. Les produits sont facturés au prix en vigueur au moment de la validation de la commande par le Client.
                    </p>
                  </div>
                </div>

                {/* 3. Commandes */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">3. Modalités de Commande</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">3.1. Commande en boutique</h3>
                      <p>
                        Les commandes peuvent être passées directement en boutique pendant nos horaires d'ouverture : {SITE_DATA.business.hours.weekdays}.
                      </p>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">3.2. Commande par téléphone</h3>
                      <p>
                        Vous pouvez passer commande par téléphone au {SITE_DATA.business.contact.phoneDisplay}. Un acompte de 30% peut être demandé pour les commandes importantes.
                      </p>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">3.3. Commande via le formulaire de contact</h3>
                      <p>
                        Les demandes de devis et commandes personnalisées peuvent être soumises via notre formulaire de contact sur le site. Nous vous répondrons sous 2 heures ouvrables.
                      </p>
                    </div>

                    <p>
                      <strong className="text-white">Confirmation de commande :</strong> Toute commande fait l'objet d'une confirmation par email ou téléphone reprenant les détails de la commande, le prix total et les modalités de retrait ou de livraison.
                    </p>
                    <p>
                      <strong className="text-white">Délai de préparation :</strong> Les commandes nécessitent un délai de préparation de minimum 24h pour les plateaux sur mesure et 48h pour les commandes traiteur importantes.
                    </p>
                  </div>
                </div>

                {/* 4. Paiement */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">4. Modalités de Paiement</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les modes de paiement acceptés sont :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Espèces (en boutique uniquement)</li>
                      <li>Carte bancaire (Visa, Mastercard, American Express)</li>
                      <li>Virement bancaire (pour les commandes importantes)</li>
                    </ul>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">Paiement en boutique</h3>
                      <p>
                        Le paiement est effectué au moment du retrait de la commande ou de l'achat direct.
                      </p>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">Acompte</h3>
                      <p>
                        Pour les commandes traiteur et événements supérieures à 200€, un acompte de 30% peut être demandé à la réservation. Le solde est à régler le jour de la prestation.
                      </p>
                    </div>

                    <p>
                      <strong className="text-white">Sécurité des paiements :</strong> Tous les paiements par carte bancaire sont sécurisés. Nous ne conservons aucune donnée bancaire.
                    </p>
                  </div>
                </div>

                {/* 5. Livraison et retrait */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">5. Livraison et Retrait</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">5.1. Retrait en boutique</h3>
                      <p>
                        Les commandes peuvent être retirées en boutique aux horaires d'ouverture, à la date convenue lors de la commande.
                      </p>
                      <p className="mt-2">
                        <strong className="text-white">Adresse de retrait :</strong><br />
                        {SITE_DATA.business.contact.address.street}<br />
                        {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}
                      </p>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">5.2. Livraison</h3>
                      <p>
                        Nous proposons un service de livraison sur Luxembourg-Ville et environs (rayon de 15 km).
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                        <li><strong className="text-white">Frais de livraison :</strong> 8€ (gratuit à partir de 80€)</li>
                        <li><strong className="text-white">Délai :</strong> 24-48h selon disponibilité</li>
                        <li><strong className="text-white">Respect de la chaîne du froid :</strong> Livraison en véhicule réfrigéré</li>
                      </ul>
                    </div>

                    <p>
                      <strong className="text-white">Conservation des produits :</strong> Les produits fromagers doivent être conservés selon les indications fournies. Nous déclinons toute responsabilité en cas de non-respect des conditions de conservation.
                    </p>
                  </div>
                </div>

                {/* 6. Droit de rétractation */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">6. Droit de Rétractation</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      <strong className="text-white">Important :</strong> Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>De fourniture de biens susceptibles de se détériorer ou de se périmer rapidement</li>
                      <li>De fourniture de biens confectionnés selon les spécifications du consommateur (plateaux sur mesure)</li>
                      <li>De prestations de services d'hébergement ou de restauration fournis à une date déterminée (soirées fromage, événements)</li>
                    </ul>
                    <p>
                      Par conséquent, <strong className="text-white">aucun droit de rétractation ne s'applique</strong> aux produits fromagers et aux prestations proposées par {SITE_DATA.business.name}.
                    </p>
                    <p>
                      Toutefois, en cas de produit défectueux ou non conforme, veuillez consulter l'article 7 « Garanties et Réclamations ».
                    </p>
                  </div>
                </div>

                {/* 7. Garanties */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">7. Garanties et Réclamations</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">7.1. Garantie de conformité</h3>
                      <p>
                        Tous nos produits bénéficient de la garantie légale de conformité. Si un produit s'avère défectueux ou non conforme à la commande, le Client doit nous en informer dans les 24 heures suivant la réception.
                      </p>
                      <p className="mt-2">
                        Nous procéderons, selon le cas, au remplacement du produit ou au remboursement intégral.
                      </p>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">7.2. Qualité des produits</h3>
                      <p>
                        Nous garantissons la qualité et la fraîcheur de nos fromages. Tous nos produits sont sélectionnés avec soin auprès de producteurs artisanaux certifiés.
                      </p>
                    </div>

                    <p>
                      <strong className="text-white">Procédure de réclamation :</strong>
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Contactez-nous immédiatement par téléphone : {SITE_DATA.business.contact.phoneDisplay}</li>
                      <li>Ou par email : {SITE_DATA.business.contact.email}</li>
                      <li>Conservez le produit et son emballage jusqu'à résolution du problème</li>
                      <li>Fournissez une photo du produit concerné si possible</li>
                    </ul>
                  </div>
                </div>

                {/* 8. Responsabilité */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">8. Responsabilité</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      {SITE_DATA.business.name} ne saurait être tenu responsable :
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>De l'impossibilité d'accéder temporairement au site pour des opérations de maintenance ou pour toute autre raison</li>
                      <li>De dommages résultant d'une mauvaise utilisation ou conservation des produits</li>
                      <li>De retards de livraison dus à des cas de force majeure</li>
                      <li>D'allergies ou intolérances alimentaires non signalées par le Client lors de la commande</li>
                    </ul>
                    <p>
                      <strong className="text-white">Allergènes :</strong> Tous nos produits peuvent contenir des allergènes (lait, fruits à coque, gluten, etc.). Il est de la responsabilité du Client de nous informer de toute allergie lors de la commande.
                    </p>
                  </div>
                </div>

                {/* 9. Annulation */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">9. Annulation de Commande</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">Par le Client</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-white">Annulation à plus de 48h :</strong> Remboursement intégral de l'acompte versé</li>
                        <li><strong className="text-white">Annulation entre 48h et 24h :</strong> Retenue de 50% de l'acompte</li>
                        <li><strong className="text-white">Annulation à moins de 24h :</strong> Aucun remboursement (produits déjà préparés)</li>
                      </ul>
                    </div>

                    <div className="bg-primary-900/30 border border-accent-600/20 p-6 rounded">
                      <h3 className="text-xl font-serif text-white mb-4">Par le Vendeur</h3>
                      <p>
                        En cas d'indisponibilité d'un produit ou de force majeure, {SITE_DATA.business.name} se réserve le droit d'annuler la commande. Le Client sera immédiatement informé et intégralement remboursé.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 10. Propriété intellectuelle */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">10. Propriété Intellectuelle</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      L'ensemble du contenu du site www.formaticus.lu (textes, images, logos, vidéos, charte graphique) est la propriété exclusive de {SITE_DATA.business.name} et est protégé par les lois sur la propriété intellectuelle.
                    </p>
                    <p>
                      Toute reproduction, représentation, modification ou exploitation de tout ou partie du site sans autorisation préalable est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
                    </p>
                  </div>
                </div>

                {/* 11. Protection des données */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">11. Protection des Données Personnelles</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les informations recueillies lors de la passation d'une commande sont nécessaires au traitement de celle-ci et à la gestion de la relation client.
                    </p>
                    <p>
                      Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant.
                    </p>
                    <p>
                      Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-accent-600 hover:underline">Politique de Confidentialité</a>.
                    </p>
                  </div>
                </div>

                {/* 12. Médiateur de la consommation */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">12. Médiateur de la Consommation</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Conformément à la réglementation en vigueur, le Client a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige.
                    </p>
                    <p>
                      <strong className="text-white">Médiateur compétent :</strong><br />
                      Centre Européen de la Consommation<br />
                      Bahnhofsplatz 3<br />
                      77694 Kehl - Allemagne<br />
                      Email : info@cec-zev.eu
                    </p>
                  </div>
                </div>

                {/* 13. Droit applicable */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">13. Droit Applicable et Juridiction</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      Les présentes CGV sont régies par le droit luxembourgeois.
                    </p>
                    <p>
                      En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, le litige sera porté devant les juridictions luxembourgeoises compétentes.
                    </p>
                  </div>
                </div>

                {/* 14. Modification des CGV */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">14. Modification des CGV</h2>
                  <div className="text-primary-200 font-light space-y-4">
                    <p>
                      {SITE_DATA.business.name} se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur au moment de la passation de la commande.
                    </p>
                  </div>
                </div>

                {/* 15. Contact */}
                <div className="border-l-2 border-accent-600 pl-8">
                  <h2 className="text-3xl font-serif font-light text-white mb-6">15. Contact</h2>
                  <div className="text-primary-200 font-light space-y-2">
                    <p>
                      Pour toute question concernant nos CGV :
                    </p>
                    <p>
                      <strong className="text-white">{SITE_DATA.business.name}</strong><br />
                      {SITE_DATA.business.contact.address.street}<br />
                      {SITE_DATA.business.contact.address.postalCode} {SITE_DATA.business.contact.address.city}<br />
                      <strong className="text-white">Téléphone :</strong> {SITE_DATA.business.contact.phoneDisplay}<br />
                      <strong className="text-white">Email :</strong> {SITE_DATA.business.contact.email}
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
