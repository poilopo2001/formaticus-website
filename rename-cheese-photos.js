const fs = require('fs');
const path = require('path');

const photosDir = './public/Séance Photo Nicolas 20220423';
const mappingFile = path.join(photosDir, 'renaming-map.json');

// Lire le fichier de mapping
const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));

// Créer un compteur pour les fromages identiques
const cheeseCounters = {};

// Fonction pour nettoyer le nom de fichier
function cleanFileName(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Enlever les accents
    .replace(/'/g, '') // Enlever les apostrophes
    .replace(/[^a-z0-9\s-]/g, '') // Garder seulement lettres, chiffres, espaces et tirets
    .replace(/\s+/g, '-') // Remplacer espaces par tirets
    .replace(/-+/g, '-'); // Éviter les tirets multiples
}

// Renommer les fichiers
Object.entries(mapping).forEach(([oldName, cheeseName]) => {
  const oldPath = path.join(photosDir, oldName);

  // Vérifier si le fichier existe
  if (!fs.existsSync(oldPath)) {
    console.log(`❌ Fichier non trouvé: ${oldName}`);
    return;
  }

  // Ne pas renommer les plateaux de fromages
  if (cheeseName.includes('Plateau fromages')) {
    console.log(`⏭️  Plateau ignoré: ${oldName}`);
    return;
  }

  // Incrémenter le compteur pour ce fromage
  if (!cheeseCounters[cheeseName]) {
    cheeseCounters[cheeseName] = 1;
  } else {
    cheeseCounters[cheeseName]++;
  }

  // Créer le nouveau nom avec suffixe si nécessaire
  const cleanName = cleanFileName(cheeseName);
  const counter = cheeseCounters[cheeseName];
  const suffix = counter > 1 ? `-${String(counter).padStart(2, '0')}` : '';
  const extension = path.extname(oldName);
  const newName = `${cleanName}${suffix}${extension.toLowerCase()}`;
  const newPath = path.join(photosDir, newName);

  // Renommer le fichier
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ ${oldName} → ${newName}`);
  } catch (error) {
    console.error(`❌ Erreur lors du renommage de ${oldName}:`, error.message);
  }
});

console.log('\n✨ Renommage terminé !');
console.log(`📊 Total: ${Object.keys(mapping).length} fichiers traités`);
console.log(`🧀 Fromages uniques: ${Object.keys(cheeseCounters).length}`);
