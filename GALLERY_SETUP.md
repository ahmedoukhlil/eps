# Configuration de la Galerie EPS

## 📁 Structure des Images

La galerie utilise les images stockées dans le dossier `public/gallery/` avec la structure suivante :

```
public/gallery/
├── cleaning-1.jpg     # Nettoyage de bureaux
├── cleaning-2.jpg     # Nettoyage industriel
├── cleaning-3.jpg     # Nettoyage résidentiel
├── cleaning-4.jpg     # Désinfection
├── communication-1.jpg # Stratégie de communication
├── communication-2.jpg # Gestion réseaux sociaux
├── communication-3.jpg # Événementiel
├── communication-4.jpg # Création de contenu
├── airport-1.jpg      # Manutention des bagages
├── airport-2.jpg      # Assistance au sol
├── airport-3.jpg      # Gestion des cargaisons
└── airport-4.jpg      # Services de rampe
```

## 🖼️ Spécifications des Images

### 📏 Dimensions Recommandées
- **Images de prévisualisation** : 300x200px
- **Images de galerie** : 800x600px
- **Images modales** : 1200x900px

### 📋 Formats Supportés
- **JPG/JPEG** : Pour les photos
- **PNG** : Pour les images avec transparence
- **WebP** : Format moderne optimisé

### ⚡ Optimisation
- **Taille maximale** : 500KB par image
- **Compression** : Utiliser des outils comme TinyPNG
- **Alt text** : Décrire chaque image pour l'accessibilité

## 🎯 Services et Images

### 🧹 Service de Nettoyage
1. **cleaning-1.jpg** - Nettoyage de Bureaux
   - Description : Services de nettoyage professionnel pour entreprises et bureaux
   - Contenu suggéré : Bureaux propres, équipements de nettoyage

2. **cleaning-2.jpg** - Nettoyage Industriel
   - Description : Nettoyage spécialisé pour entrepôts et sites industriels
   - Contenu suggéré : Entrepôts, équipements industriels

3. **cleaning-3.jpg** - Nettoyage Résidentiel
   - Description : Services de nettoyage pour particuliers et résidences
   - Contenu suggéré : Maisons, appartements propres

4. **cleaning-4.jpg** - Désinfection & Sanitisation
   - Description : Services de désinfection professionnelle
   - Contenu suggéré : Équipements de désinfection, zones sanitaires

### 📢 Service de Communication
1. **communication-1.jpg** - Stratégie de Communication
   - Description : Planification et mise en œuvre de stratégies de communication
   - Contenu suggéré : Réunions, planification, brainstorming

2. **communication-2.jpg** - Gestion des Réseaux Sociaux
   - Description : Animation et gestion de vos comptes sociaux
   - Contenu suggéré : Écrans d'ordinateur, réseaux sociaux

3. **communication-3.jpg** - Événementiel
   - Description : Organisation et gestion d'événements professionnels
   - Contenu suggéré : Événements, conférences, salons

4. **communication-4.jpg** - Création de Contenu Digital
   - Description : Production de contenu visuel et textuel
   - Contenu suggéré : Création graphique, vidéos, photos

### ✈️ Service de Manutention Aéroportuaire
1. **airport-1.jpg** - Manutention des Bagages
   - Description : Gestion professionnelle des bagages passagers
   - Contenu suggéré : Tapis roulants, bagages, aéroport

2. **airport-2.jpg** - Assistance au Sol
   - Description : Services d'assistance au sol pour les avions
   - Contenu suggéré : Avions, équipements au sol, personnel

3. **airport-3.jpg** - Gestion des Cargaisons
   - Description : Manutention et gestion des cargaisons aériennes
   - Contenu suggéré : Cargaisons, entrepôts aéroportuaires

4. **airport-4.jpg** - Services de Rampe
   - Description : Coordination et gestion des opérations de rampe
   - Contenu suggéré : Rampe d'embarquement, équipements

## 🔧 Ajout d'Images

### 1. Préparer les Images
```bash
# Redimensionner les images
# Utiliser un outil comme ImageMagick ou un éditeur en ligne
# Format recommandé : 800x600px pour la galerie
```

### 2. Placer les Images
```bash
# Copier les images dans le dossier gallery
cp vos-images/* public/gallery/
```

### 3. Vérifier les Noms
- Assurez-vous que les noms correspondent exactement à ceux listés ci-dessus
- Utilisez des tirets (-) au lieu d'espaces
- Extension en minuscules (.jpg, .png)

## 🎨 Personnalisation

### Modifier les Images
Pour changer les images, remplacez simplement les fichiers dans `public/gallery/` en gardant les mêmes noms.

### Ajouter de Nouvelles Images
1. Ajoutez les nouvelles images dans `public/gallery/`
2. Modifiez le composant `Gallery.tsx` pour inclure les nouvelles images
3. Mettez à jour les descriptions et titres

### Changer les Couleurs
Les couleurs des services sont définies dans le composant `Gallery.tsx` :
- Nettoyage : `#003366` (Bleu EPS)
- Communication : `#FF0000` (Rouge accent)
- Manutention Aéroportuaire : `#1e40af` (Bleu aéroportuaire)

## 📱 Responsive

La galerie est entièrement responsive :
- **Mobile** : 1 colonne, images plus petites
- **Tablette** : 2 colonnes
- **Desktop** : 3 colonnes

## ♿ Accessibilité

Chaque image doit avoir :
- **Alt text** descriptif
- **Titre** explicite
- **Description** détaillée
- **Contraste** suffisant

## 🚀 Performance

Pour optimiser les performances :
- Compressez les images
- Utilisez des formats modernes (WebP)
- Implémentez le lazy loading
- Utilisez des images de différentes tailles (srcset)

## 📝 Notes

- Les images placeholder actuelles utilisent des couleurs de fond
- Remplacez-les par de vraies photos de vos réalisations
- Assurez-vous d'avoir les droits d'utilisation des images
- Optimisez pour le web (compression, dimensions)
