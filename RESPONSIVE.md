# Responsive Design - Site EPS

## 📱 Breakpoints Responsive

Le site EPS utilise une approche **Mobile First** avec les breakpoints suivants :

### 🎯 Breakpoints Principaux

| Taille d'écran | Breakpoint | Description |
|----------------|------------|-------------|
| **Extra Small** | `max-width: 575.98px` | Téléphones portables |
| **Small** | `576px - 767.98px` | Téléphones en mode paysage |
| **Medium** | `768px - 991.98px` | Tablettes |
| **Large** | `992px - 1199.98px` | Ordinateurs portables |
| **Extra Large** | `1200px+` | Écrans de bureau |
| **Ultra Wide** | `1400px+` | Écrans très larges |

## 🎨 Adaptations par Section

### 📱 Navigation (Navbar)

**Mobile (< 768px) :**
- Menu hamburger visible
- Navigation desktop cachée
- Logo plus petit (32px)
- Menu mobile avec animations
- Bouton CTA dans le menu mobile

**Desktop (≥ 768px) :**
- Menu horizontal visible
- Logo normal (40px)
- Bouton CTA dans la navbar
- Menu mobile caché

### 🏠 Section Hero

**Mobile :**
- Titre : 2rem
- Sous-titre : 1rem
- Boutons en colonne
- Largeur maximale des boutons : 280px

**Tablette :**
- Titre : 2.5rem
- Sous-titre : 1.125rem
- Boutons en colonne

**Desktop :**
- Titre : 3rem
- Sous-titre : 1.25rem
- Boutons en ligne

**Ultra Wide :**
- Titre : 4rem
- Sous-titre : 1.5rem

### 🛠️ Section Services

**Mobile :**
- Grille : 1 colonne
- Titre : 2rem
- Espacement réduit

**Tablette :**
- Grille : 1 colonne
- Espacement normal

**Desktop :**
- Grille : 2 colonnes
- Titre : 2.5rem

### 📊 Section Références

**Mobile :**
- Grille de logos : 2-3 colonnes
- Statistiques : 2 colonnes
- Témoignages : 1 colonne

**Tablette :**
- Grille de logos : 4-5 colonnes
- Statistiques : 4 colonnes
- Témoignages : 2 colonnes

**Desktop :**
- Grille de logos : 6 colonnes
- Statistiques : 4 colonnes
- Témoignages : 2 colonnes

### 📞 Footer

**Mobile :**
- Grille : 1 colonne
- Espacement réduit
- Bouton "Back to top" plus petit

**Tablette :**
- Grille : 2 colonnes

**Desktop :**
- Grille : 4 colonnes

## 🔧 Fonctionnalités Responsive

### 📐 Container Adaptatif

```css
.container-custom {
  max-width: 1280px; /* Desktop */
  margin: 0 auto;
  padding: 0 1rem; /* Mobile */
}

@media (min-width: 1200px) {
  .container-custom {
    max-width: 1280px;
  }
}

@media (min-width: 1400px) {
  .container-custom {
    max-width: 1400px;
  }
}
```

### 🎭 Animations Responsive

- **Mobile** : Animations simplifiées pour les performances
- **Desktop** : Animations complètes avec Framer Motion
- **Tablette** : Animations intermédiaires

### 🖼️ Images Responsive

- **Logo** : Taille adaptative (32px → 40px)
- **Hero Background** : `background-size: cover`
- **Images de contenu** : Responsive avec `max-width: 100%`

## 📱 Orientations Spéciales

### 🌄 Mode Paysage (Landscape)

```css
@media (orientation: landscape) and (max-height: 500px) {
  .hero {
    min-height: 100vh;
    padding: 2rem 0;
  }
  
  .hero h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
}
```

### 🖨️ Écrans Haute Résolution

```css
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero {
    background-attachment: fixed;
  }
}
```

### 🖨️ Styles d'Impression

```css
@media print {
  .navbar,
  .back-to-top,
  .mobile-menu {
    display: none !important;
  }
}
```

## 🚀 Performance Mobile

### ⚡ Optimisations

- **Images** : Formats WebP/HEIC pour les performances
- **Fonts** : Google Fonts avec `display=swap`
- **CSS** : Media queries optimisées
- **JavaScript** : Animations conditionnelles

### 📊 Métriques Responsive

- **First Contentful Paint** : < 1.5s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1
- **First Input Delay** : < 100ms

## 🧪 Tests Responsive

### 📱 Points de Test Recommandés

1. **320px** - iPhone SE
2. **375px** - iPhone 12/13
3. **414px** - iPhone 12/13 Pro Max
4. **768px** - iPad
5. **1024px** - iPad Pro
6. **1280px** - Desktop standard
7. **1920px** - Full HD
8. **2560px** - 4K

### 🔍 Outils de Test

- **Chrome DevTools** : Device toolbar
- **Firefox** : Responsive Design Mode
- **Safari** : Develop > Enter Responsive Design Mode
- **Online** : Responsively App, BrowserStack

## 📝 Notes de Développement

### 🎯 Bonnes Pratiques

1. **Mobile First** : Développer d'abord pour mobile
2. **Flexible Grids** : Utiliser CSS Grid et Flexbox
3. **Images Responsive** : `srcset` et `sizes`
4. **Touch Targets** : Minimum 44px pour mobile
5. **Performance** : Optimiser pour les connexions lentes

### 🔧 Maintenance

- Tester régulièrement sur différents appareils
- Surveiller les métriques de performance
- Mettre à jour les breakpoints si nécessaire
- Optimiser les images pour chaque taille d'écran
