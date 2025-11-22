import json
import csv
import os
import re

CSV_FILE = 'Liste de produits Formaticus pour Webshop - Feuille 1.csv'
DATA_DIR = 'public/data'

def create_slug(nom):
    """Créer un slug à partir du nom"""
    slug = nom.lower()
    slug = slug.replace(' ', '-')
    slug = slug.replace('é', 'e').replace('è', 'e').replace('ê', 'e')
    slug = slug.replace('à', 'a').replace('â', 'a')
    slug = slug.replace('ô', 'o').replace('ö', 'o')
    slug = slug.replace('ù', 'u').replace('û', 'u')
    slug = slug.replace('ï', 'i').replace('î', 'i')
    slug = slug.replace('ç', 'c')
    slug = slug.replace('\'', '-').replace('"', '')
    slug = re.sub(r'[^a-z0-9\-]', '', slug)
    slug = re.sub(r'-+', '-', slug)
    return slug.strip('-')

# Lire le CSV et créer un mapping nom -> unité
csv_products = {}

with open(CSV_FILE, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter=',')
    next(f)  # Skip first line
    reader = csv.DictReader(f, delimiter=',')

    for row in reader:
        code = row.get('CODE', '').strip()
        nom = row.get('NOM DU PRODUIT', '').strip()
        unite_nom = row.get('NOM DE L\'UNITE', '').strip()

        if not nom:
            continue

        # Déterminer l'unité
        if 'kilo' in unite_nom.lower():
            unite = 'kg'
        elif 'pièce' in unite_nom.lower() or 'piece' in unite_nom.lower():
            unite = 'piece'
        else:
            unite = 'unknown'

        csv_products[nom] = {
            'code': code,
            'unite': unite,
            'unite_nom': unite_nom,
            'slug': create_slug(nom)
        }

print(f"Produits trouvés dans le CSV: {len(csv_products)}")

# Lire tous les JSON et vérifier l'unité
problemes = []
json_files = []

for filename in os.listdir(DATA_DIR):
    if not filename.endswith('-enrichi.json'):
        continue

    json_path = os.path.join(DATA_DIR, filename)

    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    json_files.append({
        'filename': filename,
        'nom': data.get('nom', ''),
        'slug': data.get('slug', ''),
        'unite': data.get('unite', 'N/A'),
        'prix': data.get('prixKg', 0)
    })

print(f"Fichiers JSON trouvés: {len(json_files)}\n")

# Analyser les problèmes potentiels
print("=" * 80)
print("ANALYSE DES UNITÉS")
print("=" * 80)

for json_file in json_files:
    json_nom = json_file['nom']
    json_slug = json_file['slug']
    json_unite = json_file['unite']

    # Chercher dans le CSV par nom exact
    csv_match = None
    for csv_nom, csv_data in csv_products.items():
        if csv_nom.lower() == json_nom.lower():
            csv_match = csv_data
            break

    # Si pas trouvé, chercher par slug
    if not csv_match:
        for csv_nom, csv_data in csv_products.items():
            if csv_data['slug'] == json_slug:
                csv_match = csv_data
                break

    # Si pas trouvé, chercher par similarité de nom
    if not csv_match:
        for csv_nom, csv_data in csv_products.items():
            # Chercher des mots clés communs
            json_words = set(json_nom.lower().split())
            csv_words = set(csv_nom.lower().split())
            common_words = json_words & csv_words

            # Si au moins 2 mots en commun ou si un mot unique correspond
            if len(common_words) >= 2 or (len(json_words) == 1 and json_words == csv_words):
                csv_match = csv_data
                break

    if csv_match:
        csv_unite = csv_match['unite']

        # Vérifier si l'unité correspond
        if csv_unite != json_unite:
            problemes.append({
                'filename': json_file['filename'],
                'nom': json_nom,
                'slug': json_slug,
                'json_unite': json_unite,
                'csv_unite': csv_unite,
                'csv_code': csv_match['code'],
                'csv_nom': list(csv_products.keys())[list(csv_products.values()).index(csv_match)]
            })
            print(f"\n[!] PROBLEME DETECTE:")
            print(f"   Fichier: {json_file['filename']}")
            print(f"   Nom JSON: {json_nom}")
            print(f"   Slug: {json_slug}")
            print(f"   Unite JSON: {json_unite}")
            print(f"   Unite CSV: {csv_unite} (Code: {csv_match['code']})")
    else:
        problemes.append({
            'filename': json_file['filename'],
            'nom': json_nom,
            'slug': json_slug,
            'json_unite': json_unite,
            'csv_unite': 'NOT_FOUND',
            'csv_code': 'N/A'
        })
        print(f"\n[X] PAS DE MATCH CSV:")
        print(f"   Fichier: {json_file['filename']}")
        print(f"   Nom JSON: {json_nom}")
        print(f"   Slug: {json_slug}")
        print(f"   Unite JSON: {json_unite} (par defaut)")

print(f"\n" + "=" * 80)
print(f"RESUME: {len(problemes)} problemes detectes")
print("=" * 80)

# Sauvegarder les problèmes dans un fichier
with open('problemes_unites.json', 'w', encoding='utf-8') as f:
    json.dump(problemes, f, ensure_ascii=False, indent=2)

print(f"\nDétails sauvegardés dans: problemes_unites.json")
