# Guide de Remplacement des Images Unsplash

## 📋 Vue d'ensemble

Ce guide explique comment remplacer les **25 images Unsplash** (135 occurrences) par des images générées avec AI (Nano Banana ou autre).

**Fichiers clés:**
- `unsplash-images-to-replace.json` - Liste complète avec prompts AI
- `replace-unsplash-images.js` - Script de remplacement automatique
- `/public/images-ai/` - Dossier destination pour les images générées

---

## 🎯 Processus Complet

### Étape 1: Préparer l'environnement

```bash
# Créer le dossier pour les images AI
mkdir public/images-ai
```

### Étape 2: Générer les images avec Nano Banana

1. **Ouvrir** `unsplash-images-to-replace.json`
2. **Pour chaque image** (25 au total):
   - Copier le `prompt_ai`
   - Coller dans Nano Banana (ou autre AI image generator)
   - Vérifier les `dimensions` recommandées
   - Générer l'image
   - **Sauvegarder avec exactement le nom indiqué** dans `nouveau_nom`

**Exemple pour l'image #1:**
```json
{
  "id": 1,
  "nouveau_nom": "fromages-variete-principale.jpg",
  "dimensions": "1920x1080 (hero), 800x600 (cards)",
  "prompt_ai": "Professional food photography of an artisanal cheese selection..."
}
```

→ Générer l'image et sauvegarder comme: `fromages-variete-principale.jpg`

### Étape 3: Organiser les images par priorité

**PRIORITÉ HAUTE** (images les plus utilisées, générer en premier):

1. `fromages-variete-principale.jpg` (25 occurrences) - Image principale
2. `raclette-fondue.jpg` (20 occurrences) - Événements
3. `plateau-fromages-elegant.jpg` (19 occurrences) - Plateaux
4. `fromages-artisanaux-texture.jpg` (19 occurrences) - Authenticité

**PRIORITÉ MOYENNE:**

5. `degustation-vin-fromage.jpg` (8 occurrences)
6. `fromages-affines-cave.jpg` (7 occurrences)
7-9. Autres images avec 3+ occurrences

**PRIORITÉ BASSE:**

10-25. Images avec 1 occurrence (événements spécifiques, projets)

### Étape 4: Placer les images générées

```bash
# Toutes les images doivent être dans ce dossier
public/images-ai/
  ├── fromages-variete-principale.jpg
  ├── raclette-fondue.jpg
  ├── plateau-fromages-elegant.jpg
  ├── fromages-artisanaux-texture.jpg
  ├── degustation-vin-fromage.jpg
  ├── fromages-affines-cave.jpg
  ├── fabrication-artisanale.jpg
  ├── raclette-roue.jpg
  ├── texture-fromage-macro.jpg
  ├── raclette-evenement.jpg
  ├── fondue-evenement.jpg
  ├── tartiflette-evenement.jpg
  ├── confirmation-success.jpg
  ├── producteur-fromager-1.jpg
  ├── boutique-interieur-1.jpg
  ├── boutique-interieur-2.jpg
  ├── boutique-interieur-3.jpg
  ├── cheese-wine-galerie-1.jpg
  ├── cheese-wine-galerie-2.jpg
  ├── cheese-wine-galerie-3.jpg
  ├── cheese-wine-galerie-4.jpg
  ├── projet-mariage-before.jpg
  ├── projet-mariage-after.jpg
  ├── projet-teambuilding-before.jpg
  └── projet-teambuilding-after.jpg
```

### Étape 5: Exécuter le script de remplacement

```bash
# Remplacer toutes les URLs Unsplash automatiquement
node replace-unsplash-images.js
```

Le script va:
- ✅ Parcourir tous les fichiers du projet
- ✅ Remplacer les URLs Unsplash par `/images-ai/nom-fichier.jpg`
- ✅ Afficher un rapport des modifications
- ✅ Vérifier que toutes les images existent

**Sortie attendue:**
```
🎨 Remplacement des images Unsplash par images AI générées
============================================================
📋 Total images à remplacer: 25

🔄 Traitement des fichiers...

✅ app/page.tsx: 47 remplacement(s)
✅ app/evenements/[slug]/page.tsx: 25 remplacement(s)
✅ app/evenements/page.tsx: 5 remplacement(s)
...

============================================================
✨ Remplacement terminé !
📊 Statistiques:
   - Fichiers modifiés: 14/14
   - Total remplacements: 135

🔍 Vérification des images générées...
✅ fromages-variete-principale.jpg (234.56 KB)
✅ raclette-fondue.jpg (189.23 KB)
...
```

### Étape 6: Tester le build

```bash
# Vérifier que tout compile
npm run build

# Lancer le site en local
npm run dev

# Ouvrir http://localhost:3000
```

### Étape 7: Vérification visuelle

**Pages à vérifier:**
- ✅ Homepage (`/`) - Hero carousel, sections, galerie
- ✅ Fromages (`/fromages`) - Hero
- ✅ Événements (`/evenements`) - Cards, pages détaillées
- ✅ Contact (`/contact`) - Hero, galerie boutique
- ✅ Producteurs (`/producteurs`) - Photos producteurs
- ✅ Réserver (`/reserver`) - Event types, hero
- ✅ Plateaux (`/plateau-sur-mesure`) - Formules
- ✅ Box (`/box-fromage-vin`) - Offres
- ✅ À propos (`/a-propos`) - Hero

### Étape 8: Publier

```bash
# Si tout est OK
git add -A
git commit -m "feat: Remplacement images Unsplash par images AI générées

- 25 images professionnelles générées avec Nano Banana
- 135 occurrences remplacées automatiquement
- Amélioration cohérence visuelle et branding"

git push
```

---

## 🎨 Conseils pour la Génération d'Images

### Style Général à Maintenir

**Palette de couleurs:**
- Ambre (#d97706)
- Crème/Beige
- Bois naturel
- Noir profond

**Caractéristiques:**
- Photographie professionnelle lifestyle
- Lumière naturelle chaude
- Ambiance artisanale et premium
- Focus sur l'authenticité

### Paramètres Nano Banana Recommandés

```
Style: Realistic Photography
Lighting: Natural warm light
Mood: Warm, inviting, premium
Quality: High detail, professional
Aspect Ratio: Selon dimensions spécifiées
```

### Exemples de Bons Prompts

**❌ Trop vague:**
> "Cheese photo"

**✅ Précis et détaillé:**
> "Professional food photography of an artisanal cheese selection display on a rustic wooden board. Multiple varieties of French and Swiss cheeses beautifully arranged: aged Comté, creamy Brie, blue-veined Roquefort, and golden Gruyère. Soft natural window light from the left, warm color palette with amber and cream tones. Shallow depth of field focusing on the foreground cheeses..."

---

## 📊 Suivi de Progression

Utiliser ce tableau pour tracker les images générées:

| # | Nom fichier | Dimensions | Généré | Testé |
|---|-------------|------------|--------|-------|
| 1 | fromages-variete-principale.jpg | 1920x1080 | ⬜ | ⬜ |
| 2 | raclette-fondue.jpg | 1920x1080 | ⬜ | ⬜ |
| 3 | plateau-fromages-elegant.jpg | 1920x1080 | ⬜ | ⬜ |
| 4 | fromages-artisanaux-texture.jpg | 1920x1080 | ⬜ | ⬜ |
| 5 | degustation-vin-fromage.jpg | 1920x1080 | ⬜ | ⬜ |
| ... | ... | ... | ... | ... |

---

## 🔧 Dépannage

### Problème: "Image manquante après remplacement"

```bash
# Vérifier que le nom du fichier est exact
ls public/images-ai/

# Le script est sensible à la casse!
# fromages-variete-principale.jpg ≠ Fromages-Variete-Principale.jpg
```

### Problème: "Build échoue après remplacement"

```bash
# Vérifier la console pour voir quelle image pose problème
npm run build

# Vérifier que l'image existe
ls public/images-ai/[nom-image].jpg

# Vérifier les permissions
chmod 644 public/images-ai/*.jpg
```

### Problème: "Images floues ou de mauvaise qualité"

1. Vérifier les dimensions minimales recommandées
2. Générer en résolution supérieure puis redimensionner
3. Utiliser qualité JPEG 90% minimum

### Problème: "Images trop lourdes"

```bash
# Optimiser avec ImageMagick ou similaire
magick convert image.jpg -quality 85 -resize 1920x1080 image-optimized.jpg

# Ou utiliser un service en ligne comme TinyPNG
```

---

## 📈 Optimisations Futures

### Après remplacement initial:

1. **Conversion WebP:**
   ```bash
   # Next.js convertit automatiquement en WebP
   # Mais on peut aussi fournir WebP manuellement pour meilleure compression
   ```

2. **Responsive images:**
   - Générer plusieurs tailles pour chaque image
   - Utiliser Next.js Image srcSet

3. **Lazy loading:**
   - Déjà implémenté avec Next.js Image
   - Vérifier avec DevTools Network

4. **CDN:**
   - Considérer Cloudflare Images ou Vercel Image Optimization
   - Déjà optimisé si déployé sur Vercel

---

## 📞 Support

**Questions?**
- Vérifier `unsplash-images-to-replace.json` pour détails de chaque image
- Consulter les prompts AI fournis
- Tester par petits lots (5-10 images à la fois)

**Temps estimé:**
- Génération 25 images: 30-60 min (avec Nano Banana)
- Placement et remplacement: 10 min
- Tests: 15-20 min
- **Total: 1h à 1h30**

---

## ✅ Checklist Finale

Avant de publier:

- [ ] Toutes les 25 images générées
- [ ] Images placées dans `/public/images-ai/`
- [ ] Script `replace-unsplash-images.js` exécuté
- [ ] Build réussi (`npm run build`)
- [ ] Test visuel de toutes les pages principales
- [ ] Vérification mobile (responsive)
- [ ] Images optimisées (< 300KB par image)
- [ ] Cohérence visuelle validée
- [ ] Commit et push

**Une fois complété, le site aura une identité visuelle 100% unique et cohérente! 🎉**
