# 🧵 Mali Mode — Site de vente de tissus africains

**Mali Mode** est une plateforme e-commerce moderne et culturelle dédiée à la vente de boubous, chemises et textiles traditionnels africains. L’application est construite avec **Next.js**, **Tailwind CSS**, **ShadCN**, et utilise des animations GSAP/Framer Motion pour offrir une expérience immersive.

---

## 🚀 Fonctionnalités principales

- ✅ Site 100% statique pour un déploiement rapide
- 🎥 Hero section animée (vidéo / tissu animé)
- 🛍️ Boutique avec filtres dynamiques (catégories, couleurs, tailles, prix)
- 💬 Témoignages & intégration Instagram
- 🎨 Animations GSAP / Framer Motion
- 📱 Responsive & mobile-first
- 📦 Données statiques simulées via fichiers JSON

---

## 🧰 Stack technique

| Technologie     | Usage                                  |
|----------------|-----------------------------------------|
| [Next.js](https://nextjs.org/)     | Framework React pour pages statiques |
| [Tailwind CSS](https://tailwindcss.com/) | Styling rapide & responsive        |
| [ShadCN UI](https://ui.shadcn.dev/)     | Composants UI modernes & accessibles |
| [Framer Motion](https://www.framer.com/motion/) | Animations élégantes              |
| [GSAP](https://gsap.com/)         | Effets de scroll & animations avancées |
| Swiper.js         | Sliders dynamiques                    |
| Figma (design)    | Maquettes et design de marque         |

---

## 📁 Structure du projet

tisse-afrique/
├── components/ # Composants réutilisables
├── data/ # Données JSON statiques (produits, catégories)
├── pages/
│ ├── index.tsx # Page d’accueil
│ ├── boutique.tsx # Page boutique
│ └── ... # Autres pages (FAQ, À propos, etc.)
├── public/ # Assets (images, vidéos)
├── styles/ # Fichiers CSS globaux
├── utils/ # Fonctions utilitaires
├── tailwind.config.ts
├── README.md
└── package.json


---

## 📦 Installation

```bash
# 1. Cloner le repo
git clone https://github.com/sounkalo20/tisse-afrique.git
cd mali-mode

# 2. Installer les dépendances
npm install

# 3. Démarrer en dev
npm run dev

# Accès à l'app : http://localhost:3000
