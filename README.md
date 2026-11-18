# Ets CERIM

## Objectif du projet

Présenter les services d’Ets CERIM, faciliter la prise de contact des entreprises et particuliers, et permettre aux visiteurs de demander rapidement un devis via WhatsApp pour les interventions en maintenance industrielle à Douala.

## Description

Ets CERIM est une application web responsive destinée à mettre en avant un spécialiste du rebobinage industriel et de la réparation d’équipements électriques. Le site présente les services proposés, les secteurs concernés, les engagements de l’entreprise, les témoignages, les questions fréquentes et les coordonnées de contact.

Le formulaire de devis recueille les informations essentielles du client puis ouvre automatiquement WhatsApp avec un message prérempli. Le projet a également été configuré pour un déploiement dans un sous-dossier, notamment sur un hébergement cPanel.

## Fonctionnalités

- Présentation des services et expertises
- Sections À propos, engagements, secteurs d’activité et FAQ
- Formulaire de demande de devis envoyé via WhatsApp
- Boutons d’appel téléphonique et lien WhatsApp direct
- Navigation responsive avec suivi de section
- Informations locales et données structurées pour le référencement
- Interface adaptée aux appareils mobiles

## Technologies

- React 18
- Vite 5
- JavaScript ES modules
- Bootstrap Icons
- CSS personnalisé

## Prérequis

- Node.js
- npm

## Installation

```bash
npm install
```

## Lancement en développement

```bash
npm run dev
```

## Création de la version de production

```bash
npm run build
```

Les fichiers générés sont placés dans le dossier `dist`.

## Prévisualisation de la production

```bash
npm run preview
```

## Structure principale

```text
src/
  App.jsx              Point d’entrée de l’interface
  components/          Composants React de la page
  data/content.js      Textes, services, FAQ et coordonnées
  assets/              Images utilisées par le site
  styles.css           Styles globaux
public/                Ressources publiques
index.html             Structure HTML et métadonnées SEO
vite.config.js         Configuration Vite
```

## Informations de contact

- Adresse : Akwa, derrière la direction générale MTN, Douala, Cameroun
- Téléphone : +237 656 26 46 10 / 653 25 27 05
- E-mail : infos@etscerim.com

## Notes

Les témoignages actuellement présents sont des exemples et doivent être remplacés par de vrais avis avant une mise en production officielle. La balise canonique et les images Open Graph peuvent également être vérifiées lors du déploiement final.
