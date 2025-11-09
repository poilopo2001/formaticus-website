const fs = require('fs');
const path = require('path');

/**
 * Script de remplacement automatique des images Unsplash par des images AI générées
 *
 * UTILISATION:
 * 1. Générer toutes les images avec Nano Banana en utilisant unsplash-images-to-replace.json
 * 2. Placer les images générées dans /public/images-ai/
 * 3. Exécuter: node replace-unsplash-images.js
 * 4. Vérifier: npm run build
 */

// Charger le fichier de mapping
const mappingFile = './unsplash-images-to-replace.json';
const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));

console.log('🎨 Remplacement des images Unsplash par images AI générées');
console.log('=' .repeat(60));
console.log(`📋 Total images à remplacer: ${mapping.images.length}`);
console.log('');

// Mapping des IDs Unsplash vers nouveaux chemins
const imageReplacements = {};
mapping.images.forEach(img => {
  imageReplacements[img.unsplash_id] = `/images-ai/${img.nouveau_nom}`;
});

// Fichiers à traiter
const filesToProcess = [
  'app/page.tsx',
  'app/evenements/[slug]/page.tsx',
  'app/evenements/page.tsx',
  'app/contact/page.tsx',
  'app/traiteur/page.tsx',
  'app/box-fromage-vin/page.tsx',
  'app/plateau-sur-mesure/page.tsx',
  'app/producteurs/page.tsx',
  'app/reserver/page.tsx',
  'app/fromages/page.tsx',
  'app/a-propos/page.tsx',
  'lib/constants.ts',
  'lib/coffrets-data.ts',
  'lib/metadata.ts'
];

let totalReplacements = 0;
let filesModified = 0;

// Fonction pour remplacer les URLs dans un fichier
function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  Fichier non trouvé: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let fileReplacements = 0;
  let modified = false;

  // Remplacer chaque URL Unsplash
  Object.entries(imageReplacements).forEach(([unsplashId, newPath]) => {
    // Pattern pour matcher les URLs Unsplash avec différents paramètres
    const patterns = [
      // URLs avec paramètres de taille
      new RegExp(`https://images\\.unsplash\\.com/${unsplashId}\\?[^"']*`, 'g'),
      // URLs simples
      new RegExp(`https://images\\.unsplash\\.com/${unsplashId}`, 'g'),
    ];

    patterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, newPath);
        fileReplacements += matches.length;
        modified = true;
      }
    });
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filePath}: ${fileReplacements} remplacement(s)`);
    filesModified++;
    totalReplacements += fileReplacements;
  } else {
    console.log(`⚪ ${filePath}: Aucun remplacement nécessaire`);
  }
}

// Traiter tous les fichiers
console.log('🔄 Traitement des fichiers...\n');
filesToProcess.forEach(replaceInFile);

console.log('\n' + '='.repeat(60));
console.log('✨ Remplacement terminé !');
console.log(`📊 Statistiques:`);
console.log(`   - Fichiers modifiés: ${filesModified}/${filesToProcess.length}`);
console.log(`   - Total remplacements: ${totalReplacements}`);
console.log('');
console.log('📝 Prochaines étapes:');
console.log('   1. Vérifier que toutes les images sont dans /public/images-ai/');
console.log('   2. Exécuter: npm run build');
console.log('   3. Vérifier le site en local: npm run dev');
console.log('   4. Si OK, commit et push les changements');
console.log('');

// Vérifier si les images existent
console.log('🔍 Vérification des images générées...\n');
const imagesDir = './public/images-ai';
let missingImages = 0;

if (!fs.existsSync(imagesDir)) {
  console.log('⚠️  ATTENTION: Le dossier /public/images-ai/ n\'existe pas encore!');
  console.log('   Créez-le et placez-y les images générées.');
  missingImages = mapping.images.length;
} else {
  mapping.images.forEach(img => {
    const imagePath = path.join(imagesDir, img.nouveau_nom);
    if (!fs.existsSync(imagePath)) {
      console.log(`❌ Image manquante: ${img.nouveau_nom}`);
      console.log(`   Prompt: ${img.prompt_ai.substring(0, 60)}...`);
      missingImages++;
    } else {
      const stats = fs.statSync(imagePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`✅ ${img.nouveau_nom} (${sizeKB} KB)`);
    }
  });
}

console.log('\n' + '='.repeat(60));
if (missingImages > 0) {
  console.log(`⚠️  ${missingImages} image(s) manquante(s)`);
  console.log('   Générez-les avec Nano Banana avant de continuer.');
} else {
  console.log('✅ Toutes les images sont présentes!');
  console.log('   Vous pouvez maintenant lancer: npm run build');
}
