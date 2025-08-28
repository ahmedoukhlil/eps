# Guide de Déploiement - EPS Website

## 🚀 Déploiement en Production

### 1. Build de Production

```bash
npm run build
```

Cette commande génère un dossier `dist/` avec tous les fichiers optimisés pour la production.

### 2. Options de Déploiement

#### A. Netlify (Recommandé)
1. Connectez votre repository GitHub à Netlify
2. Configurez les paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Déployez automatiquement à chaque push

#### B. Vercel
1. Connectez votre repository à Vercel
2. Vercel détecte automatiquement Vite/React
3. Déploiement automatique activé

#### C. Serveur Web Classique
1. Uploadez le contenu du dossier `dist/` sur votre serveur
2. Configurez votre serveur web (Apache/Nginx) pour servir les fichiers statiques
3. Configurez les redirections pour le SPA

### 3. Configuration Serveur Web

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache Control
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

#### Nginx
```nginx
server {
    listen 80;
    server_name eps.mr www.eps.mr;
    root /var/www/eps-website/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache Control
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 4. Variables d'Environnement

Créez un fichier `.env.production` pour la production :

```env
VITE_APP_TITLE=EPS - El Baraka Prestation de Service
VITE_APP_URL=https://eps.mr
VITE_CONTACT_EMAIL=contact@eps.mr
VITE_CONTACT_PHONE=+22212345678
```

### 5. Optimisations de Performance

#### Compression Gzip
Activez la compression Gzip sur votre serveur pour réduire la taille des fichiers.

#### CDN
Utilisez un CDN pour servir les assets statiques (images, CSS, JS) plus rapidement.

#### Cache
Configurez un cache approprié pour les assets statiques.

### 6. SSL/HTTPS

Assurez-vous que votre site utilise HTTPS en production :
- Obtenez un certificat SSL (Let's Encrypt gratuit)
- Configurez la redirection HTTP vers HTTPS
- Mettez à jour les URLs dans le code si nécessaire

### 7. Monitoring

Configurez des outils de monitoring :
- **Google Analytics** pour le suivi des visiteurs
- **Google Search Console** pour le SEO
- **Uptime Robot** pour la surveillance de disponibilité

### 8. Sauvegarde

Mettez en place un système de sauvegarde automatique :
- Sauvegarde quotidienne des fichiers
- Sauvegarde de la base de données (si applicable)
- Test de restauration régulier

## 🔧 Maintenance

### Mises à jour
1. Testez les mises à jour en local
2. Déployez sur un environnement de staging
3. Validez le fonctionnement
4. Déployez en production

### Monitoring Post-Déploiement
- Vérifiez les performances (PageSpeed Insights)
- Surveillez les erreurs (Console navigateur)
- Testez la responsivité sur différents appareils
- Vérifiez l'accessibilité

## 📞 Support

Pour toute question concernant le déploiement, contactez l'équipe de développement EPS.
