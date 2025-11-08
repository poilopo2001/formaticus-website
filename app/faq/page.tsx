'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Ornament } from '@/components/ui/Ornament'
import { SITE_DATA } from '@/lib/constants'
import { ChevronDown, Phone, Mail, Search } from 'lucide-react'

// Questions par catégorie
const faqs = [
  {
    category: 'Questions Générales',
    questions: [
      {
        question: 'Quels sont vos horaires d\'ouverture ?',
        answer: `Nous sommes ouverts du lundi au samedi de ${SITE_DATA.business.hours.weekdays}. Fermé le dimanche et jours fériés.`
      },
      {
        question: 'Où êtes-vous situés ?',
        answer: `Notre fromagerie est située au ${SITE_DATA.business.contact.address.street}, ${SITE_DATA.business.contact.address.postalCode} ${SITE_DATA.business.contact.address.city}. Parking gratuit disponible à proximité.`
      },
      {
        question: 'Proposez-vous la livraison ?',
        answer: 'Oui, nous livrons sur Luxembourg-Ville et dans un rayon de 15 km. Livraison gratuite pour toute commande supérieure à 80€. Frais de livraison : 8€ en dessous de ce montant.'
      },
      {
        question: 'Puis-je payer par carte bancaire ?',
        answer: 'Oui, nous acceptons les paiements par carte bancaire (Visa, Mastercard, American Express), espèces et virement bancaire pour les commandes importantes.'
      }
    ]
  },
  {
    category: 'Fromages & Produits',
    questions: [
      {
        question: 'D\'où proviennent vos fromages ?',
        answer: 'Nous travaillons exclusivement avec des producteurs artisanaux français, suisses et belges. Tous nos fromages sont AOP/AOC ou fermiers, garantissant une qualité et authenticité exceptionnelles.'
      },
      {
        question: 'Proposez-vous des fromages au lait cru ?',
        answer: 'Oui, nous proposons une large sélection de fromages au lait cru, thermisé et pasteurisé. Notre fromager peut vous conseiller selon vos préférences et votre profil (femmes enceintes, enfants, etc.).'
      },
      {
        question: 'Comment conserver les fromages après achat ?',
        answer: 'Conservez vos fromages entre 4°C et 8°C dans le bac à légumes de votre réfrigérateur, dans leur emballage d\'origine ou du papier alimentaire. Sortez-les 30 minutes avant dégustation pour révéler tous leurs arômes.'
      },
      {
        question: 'Puis-je goûter avant d\'acheter ?',
        answer: 'Absolument ! Nous encourageons la dégustation en boutique. Notre fromager se fera un plaisir de vous faire découvrir nos fromages et de vous conseiller selon vos goûts.'
      },
      {
        question: 'Vendez-vous uniquement du fromage ?',
        answer: 'Non, nous proposons également une sélection de charcuteries artisanales, vins, confitures, miels et produits d\'épicerie fine soigneusement sélectionnés pour accompagner nos fromages.'
      }
    ]
  },
  {
    category: 'Commandes & Réservations',
    questions: [
      {
        question: 'Comment commander un plateau de fromages ?',
        answer: 'Vous pouvez commander par téléphone, via notre formulaire de contact ou directement en boutique. Nous recommandons de commander 24-48h à l\'avance pour les plateaux sur mesure.'
      },
      {
        question: 'Quel est le délai de préparation pour un plateau sur mesure ?',
        answer: 'Minimum 24h pour les plateaux personnalisés et 48h pour les grandes commandes traiteur. Pour les événements importants, nous recommandons de réserver au moins une semaine à l\'avance.'
      },
      {
        question: 'Puis-je modifier ma commande après validation ?',
        answer: 'Oui, vous pouvez modifier votre commande jusqu\'à 24h avant la date de retrait/livraison. Contactez-nous rapidement au ' + SITE_DATA.business.contact.phoneDisplay + '.'
      },
      {
        question: 'Acceptez-vous les commandes pour grandes quantités ?',
        answer: 'Oui, nous gérons les commandes traiteur pour événements d\'entreprise, mariages et réceptions. Contactez-nous pour un devis personnalisé. Un acompte de 30% est demandé pour les commandes supérieures à 200€.'
      },
      {
        question: 'Proposez-vous des chèques cadeaux ?',
        answer: 'Oui, nous proposons des chèques cadeaux disponibles en boutique ou sur demande. Ils sont valables 1 an et utilisables pour tous nos produits et services.'
      }
    ]
  },
  {
    category: 'Événements & Soirées',
    questions: [
      {
        question: 'Comment réserver une soirée fromage ?',
        answer: 'Consultez notre page Événements pour voir les prochaines dates disponibles. Vous pouvez réserver en ligne via le formulaire de contact, par téléphone ou directement en boutique. Places limitées.'
      },
      {
        question: 'Combien de places pour les soirées fromage ?',
        answer: 'Nos soirées accueillent entre 20 et 35 personnes selon le type d\'événement, pour garantir une ambiance conviviale et des échanges de qualité avec notre fromager.'
      },
      {
        question: 'Que comprend une soirée raclette/fondue ?',
        answer: 'Nos soirées incluent : la dégustation complète (fromages, charcuteries, accompagnements), les boissons (vins sélectionnés, eau), l\'animation par notre fromager expert et la convivialité !'
      },
      {
        question: 'Puis-je privatiser pour un événement privé ?',
        answer: 'Oui, nous proposons la privatisation de notre espace pour groupes de 15 personnes minimum. Soirées raclette, fondue, cheese & wine personnalisables. Contactez-nous pour un devis.'
      },
      {
        question: 'Quelles sont les conditions d\'annulation ?',
        answer: 'Annulation gratuite à plus de 48h. Entre 48h et 24h : retenue de 50% de l\'acompte. Moins de 24h : aucun remboursement. Voir nos CGV pour plus de détails.'
      }
    ]
  },
  {
    category: 'Livraison & Retrait',
    questions: [
      {
        question: 'Livrez-vous partout au Luxembourg ?',
        answer: 'Nous livrons sur Luxembourg-Ville et dans un rayon de 15 km. Pour les zones plus éloignées, contactez-nous pour étudier les possibilités.'
      },
      {
        question: 'Comment sont livrés les fromages ?',
        answer: 'Tous nos produits sont livrés dans un véhicule réfrigéré pour garantir le respect de la chaîne du froid. Emballage isotherme pour préserver la qualité.'
      },
      {
        question: 'Puis-je choisir mon créneau de livraison ?',
        answer: 'Nous vous proposons une plage horaire lors de la confirmation de commande (matin ou après-midi). Nous vous contactons 30 minutes avant la livraison.'
      },
      {
        question: 'Que se passe-t-il si je suis absent à la livraison ?',
        answer: 'Nous tentons de vous joindre par téléphone. En cas d\'absence, les produits sont retournés en boutique (conservation garantie). Une nouvelle livraison peut être organisée moyennant frais.'
      }
    ]
  },
  {
    category: 'Prix & Paiement',
    questions: [
      {
        question: 'Les prix sont-ils TTC ?',
        answer: 'Oui, tous nos prix sont affichés TTC (Toutes Taxes Comprises), TVA luxembourgeoise incluse.'
      },
      {
        question: 'Les fromages à la coupe : comment ça marche ?',
        answer: 'Les prix des fromages à la coupe sont indiqués au kilogramme. Vous payez le poids réel après pesée. Notre fromager coupe selon vos souhaits.'
      },
      {
        question: 'Proposez-vous des tarifs pour professionnels ?',
        answer: 'Oui, nous proposons des tarifs préférentiels pour les restaurants, hôtels et commerces. Contactez-nous pour ouvrir un compte professionnel.'
      },
      {
        question: 'Acceptez-vous les tickets restaurant ?',
        answer: 'Non, nous n\'acceptons pas les tickets restaurant. Paiements acceptés : espèces, carte bancaire et virement bancaire.'
      },
      {
        question: 'Y a-t-il des frais supplémentaires ?',
        answer: 'Non, aucun frais caché. Les seuls frais supplémentaires éventuels sont les frais de livraison (8€, gratuit au-dessus de 80€).'
      }
    ]
  }
]

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  // Filtrer les questions selon la recherche
  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question)
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-black" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <Ornament className="text-accent-600 mx-auto mb-6" />
          <p className="text-accent-600 tracking-[0.4em] text-[11px] md:text-xs font-normal uppercase mb-6">
            Centre d'Aide
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-8">
            Questions<br />Fréquentes
          </h1>
          <p className="text-lg text-primary-200 font-light max-w-2xl mx-auto mb-12">
            Trouvez rapidement les réponses à vos questions
          </p>

          {/* Barre de recherche */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-14 bg-primary-900/50 border border-accent-600/30 text-white placeholder-primary-400 focus:border-accent-600 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-accent-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Contenu FAQ */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-primary-300 font-light text-lg">
                  Aucune question trouvée pour "{searchTerm}"
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredFaqs.map((category, idx) => (
                  <div key={idx}>
                    {/* Catégorie */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-px flex-1 bg-accent-600/20" />
                        <h2 className="text-2xl font-serif font-light text-accent-600">
                          {category.category}
                        </h2>
                        <div className="h-px flex-1 bg-accent-600/20" />
                      </div>
                    </div>

                    {/* Questions */}
                    <div className="space-y-4">
                      {category.questions.map((faq, qIdx) => {
                        const questionId = `${idx}-${qIdx}`
                        const isOpen = openQuestion === questionId

                        return (
                          <div
                            key={qIdx}
                            className="border border-accent-600/30 bg-primary-900/30 transition-all duration-300 hover:border-accent-600/50"
                          >
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left group"
                            >
                              <h3 className="text-lg font-light text-white group-hover:text-accent-600 transition-colors flex-1">
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`w-5 h-5 text-accent-600 flex-shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            {isOpen && (
                              <div className="px-8 pb-6 border-t border-accent-600/20 pt-6">
                                <p className="text-primary-200 font-light leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-32 bg-primary-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Ornament className="text-accent-600 mx-auto mb-6" />
            <p className="text-accent-600 tracking-[0.3em] text-xs font-light uppercase mb-6">
              Besoin d'Aide ?
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-8 leading-tight">
              Vous ne trouvez pas<br />votre réponse ?
            </h2>
            <p className="text-lg text-primary-200 font-light mb-12 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${SITE_DATA.business.contact.phone}`}
                className="px-12 py-4 bg-accent-600 border border-accent-600 text-black text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:text-accent-600 transition-all duration-500 inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-4 h-4" />
                Nous Appeler
              </a>
              <Link
                href="/contact"
                className="px-12 py-4 border border-accent-600 text-accent-600 text-xs tracking-[0.2em] uppercase hover:bg-accent-600 hover:text-black transition-all duration-500 inline-flex items-center justify-center gap-3"
              >
                <Mail className="w-4 h-4" />
                Nous Écrire
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-accent-600/20">
              <p className="text-primary-300 font-light text-sm">
                Horaires : {SITE_DATA.business.hours.weekdays} · Réponse sous 2h
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
