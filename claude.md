West Bridge Consultants – Guide Design Complet

Ce document .nd contient toutes les spécifications nécessaires pour un·e web designer afin de produire un site professionnel, moderne et cohérent pour West Bridge Consultants.

⸻

🎨 Palette Moderne & Professionnelle

:root {
  --color-primary: #112d4e;    /* Navy Profond – Confiance, sérieux */
  --color-secondary: #a47864;  /* Mocha Mousse – Chaleur, proximité */
  --color-accent: #cc5500;     /* Terracotta – Appels à l’action */
  --color-bg-light: #f7e8d3;   /* Crème Douce – Confort visuel */
  --color-text: #333333;       /* Textes sombres – Lisibilité optimale */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  --font-size-h1: 3rem;        /* 48px */
  --font-size-h2: 2rem;        /* 32px */
  --font-size-h3: 1.5rem;      /* 24px */
  --font-size-base: 1rem;      /* 16px */
  --spacing-unit: 1rem;        /* Base spacing */
}

Grille & Breakpoints
	•	12-colonne pour desktop (≥1024px), 8-colonne pour tablette (≥768px), 4-colonne pour mobile (<768px)
	•	Breakpoints CSS SCSS:
	•	@media (max-width: 1023px) — tablette
	•	@media (max-width: 767px) — mobile

⸻

🏠 Page d’Accueil (Home)

Objectif : Impact immédiat, rassurance, incitation à explorer.

1. Hero (100vh)
	•	Background : linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 100%)
	•	Titre principal (H1) : font-family: var(--font-heading); font-size: var(--font-size-h1); color: #ffffff; line-height: 1.1; margin-bottom: 0.5rem;
	•	Sous-titre (H2) : font-family: var(--font-heading); font-size: var(--font-size-h2); color: var(--color-bg-light);
	•	CTA : button.btn--primary { background: var(--color-accent); color: #fff; padding: 0.75rem 2rem; border-radius: 0.5rem; } hover: transform: scale(1.05); box-shadow: 0 4px 12px rgba(0,0,0,0.1);

2. Valeur Ajoutée
	•	Layout : 3–4 cartes en grid avec gap: 2 * var(--spacing-unit)
	•	Cartes : fond var(--color-bg-light), padding: var(--spacing-unit), border-radius: 0.5rem, légère ombre 0 2px 8px rgba(0,0,0,0.05)
	•	Icônes SVG monochrome var(--color-primary) + titre font-weight: 600

3. Étude de Cas Brève
	•	Structure : image à gauche (ratio 16:9), résumé à droite
	•	Textes : H3 (var(–font-size-h3)), paragraphe base
	•	Bouton secondaire btn--secondary { border: 2px solid var(--color-primary); color: var(--color-primary); }

4. Témoignages
	•	Carousel/Slider via Swiper.js ou Flickity
	•	Citation en italique, nom et poste en dessous (font-weight: 600)

5. À propos rapide
	•	3 lignes maximum, font-size: var(--font-size-base)
	•	Lien En savoir plus → en var(--color-accent)

6. Footer
	•	Fond var(--color-primary), textes var(--color-bg-light)
	•	Liens hover color: var(--color-accent)

⸻

📚 Page Services

Objectif : Présenter offres, bénéfices, conduire au CTA.

1. Titre Intro
	•	H1 color: var(--color-primary), sous-titre H2 color: var(--color-secondary)

2. Grid des Services
	•	Cartes en 2–3 colonnes, gap: 1.5rem
	•	Icônes outline var(--color-primary), titres font-weight: 700, descriptions 2–3 lignes
	•	Hover: transform: translateY(-4px); box-shadow: 0 6px 16px rgba(0,0,0,0.08);

3. CTA Mid-Page
	•	Bannière pleine largeur background: var(--color-accent); text-align: center; padding: 1.5rem; color: #fff; bouton blanc

4. Pourquoi Nous Choisir
	•	Liste à puces avec icônes check ou images
	•	Texte concis 5–7 mots par item

⸻

📷 Page Projets (Portfolio)

Objectif : Démontrer expertise via cas concrets.

1. Hero Visuel
	•	Full-width, overlay noir semi-transparent (rgba(0,0,0,0.4)) + titre blanc center

2. Grid Projets
	•	Desktop: 3 colonnes, tablette: 2, mobile: 1
	•	Carte : image ratio 16:9, titre overlay bottom
	•	Click → lightbox ou navigation vers project-detail

3. Page Projet Détail
	•	Hero full-width
	•	Sections :
	•	Défi (titre H3 + paragraphe)
	•	Solution (liste ou paragraphe)
	•	Résultats (chiffrés, icônes)

4. Mini Galerie
	•	Slider ou grille 2–3 images auxiliaires

⸻

👥 Page À Propos (About)

Objectif : Humaniser, présenter équipe et vision.

1. Hero + Mission
	•	Centré, max-width: 800px, margin: 0 auto, paragraphe 4–6 lignes

2. Valeurs & Process
	•	3–4 icônes + descriptions 5–7 mots

3. Équipe
	•	Grid photos rondes border-radius: 50%; nom, rôle, bio courte

4. Social Proof
	•	Logos clients/partenaires en mono (gris foncé) – hover var(--color-accent)

5. CTA Final
	•	Lien bouton vers contact ou projets

⸻

📞 Page Contact

Objectif : Simplifier la prise de contact.

1. Intro
	•	H2 Prêt à travailler ensemble ? + paragraphe court

2. Formulaire
	•	Champs : Nom, Email, Entreprise, Message
	•	Style : border-bottom: 2px solid var(--color-primary); focus border-color: var(--color-accent)

3. Infos Directes
	•	Adresse, Téléphone, Email, intégration carte Google Maps iframe

4. Réseaux Sociaux
	•	Icônes SVG outline var(--color-primary); hover var(--color-accent)

⸻

🛠 Micro-interactions & UI
	•	Transitions : all 0.3s ease-in-out
	•	Hover Cartes/Boutons : scale, shadow
	•	Fade-up via Intersection Observer (delay 100–300ms)
	•	Validation Form : messages inline en rouge doux, texte clair
	•	Loading : skeleton screens ou spinners personnalisés

⸻

📱 Mobile-First & Accessibilité
	•	CTA/Boutons ≥ 44px × 44px
	•	WCAG AA Contrast ≥ 4.5:1
	•	Focus visible : outline: 3px solid var(--color-accent)
	•	Navigation : menu hamburger animé

⸻

🎯 Checklist Designer
	•	Intégration palette & variables CSS
	•	Prototypes valides mobile/tablette/desktop
	•	Mockups section par section avec interactions
	•	Moodboard aligné à la palette
	•	Typographie responsive et hiérarchie définie
	•	Assets graphiques (icônes SVG, photos, logos) optimisés

⸻

Prêt·e à démarrer les maquettes ?
Ce guide .nd fournit les fondations pour un site à la fois premium, moderne et résolument tourné vers l’action.