export const PHONES = [
  { label: "+237 656 26 46 10", href: "tel:+237656264610" },
  { label: "653 25 27 05", href: "tel:+237653252705" },
];
export const EMAIL = "infos@etscerim.com";
export const WHATSAPP_NUMBER = "237656264610"; // format international, sans + ni espaces
export const WHATSAPP_HELLO = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Bonjour CERIM, j'ai besoin d'un devis.")}`;

export const nav = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "services", label: "Services" },
  { id: "secteurs", label: "Secteurs" },
  { id: "temoignages", label: "Témoignages" },
  { id: "faq", label: "FAQ" },
];

export const commitments = [
  { icon: "bi-lightning-charge-fill", title: "Rapidité", text: "Diagnostic rapide et intervention sur site en cas d'urgence pour limiter vos arrêts de production." },
  { icon: "bi-shield-check", title: "Fiabilité", text: "Un travail soigné sur tous types de machines tournantes et de transformateurs." },
  { icon: "bi-tools", title: "Durabilité", text: "Des rebobinages et des réparations pensés pour durer, avec un suivi préventif et curatif." },
];

export const services = [
  { icon: "bi-gear-wide-connected", title: "Rebobinage de moteurs", text: "Moteurs électriques basse et moyenne tension" },
  { icon: "bi-plug-fill", title: "Réparation de transformateurs", text: "Diagnostic, puis remise en état" },
  { icon: "bi-speedometer2", title: "Diagnostic et bilan électrique", text: "État réel de vos machines et installations" },
  { icon: "bi-wrench-adjustable", title: "Maintenance préventive et curative", text: "Anticiper les pannes et réparer vite" },
  { icon: "bi-cpu", title: "Rééquipement et modernisation", text: "Remise à niveau de vos machines existantes" },
  { icon: "bi-truck", title: "Dépannage urgent sur site", text: "Intervention directement dans vos locaux" },
];

export const sectors = [
  { icon: "bi-buildings-fill", label: "Industries manufacturières" },
  { icon: "bi-bricks", label: "BTP et génie civil" },
  { icon: "bi-fuel-pump-fill", label: "Industries pétrolières et gazières" },
  { icon: "bi-droplet-half", label: "Production d'eau et d'électricité" },
  { icon: "bi-hospital-fill", label: "Grands établissements et hôpitaux" },
];

// Textes d'exemple : à remplacer par de vrais témoignages avant publication
export const testimonials = [
  { quote: "Notre moteur principal est reparti en moins de 48 h. Intervention rapide et travail propre.", author: "Pauline" },
  { quote: "Une équipe sérieuse qui a su remettre en service notre transformateur sans longue interruption.", author: "Ludger Ngaps" },
  { quote: "Le diagnostic nous a permis d'éviter une panne coûteuse. Nous faisons appel à CERIM régulièrement.", author: "Jean Dupont" },
];

export const faqs = [
  { q: "Quels types de moteurs rebobinez-vous ?", a: "Nous rebobinons les moteurs électriques basse et moyenne tension, ainsi que d'autres machines tournantes." },
  { q: "Intervenez-vous directement sur site ?", a: "Oui, nous proposons un service de dépannage urgent sur site pour les entreprises et établissements de Douala." },
  { q: "Pouvez-vous réparer un transformateur ?", a: "Oui. Nous réalisons un diagnostic puis la réparation de transformateurs." },
  { q: "Comment obtenir un devis ?", a: "Utilisez le formulaire ci-contre : votre demande nous arrive directement sur WhatsApp. Vous pouvez aussi nous appeler ou nous écrire par e-mail (coordonnées plus bas)." },
];

export const needs = [
  "Rebobinage de moteur électrique",
  "Réparation de transformateur",
  "Diagnostic et bilan électrique",
  "Maintenance préventive / curative",
  "Rééquipement / modernisation",
  "Dépannage urgent sur site",
  "Autre",
];
