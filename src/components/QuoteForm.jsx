import { useRef, useState } from "react";
import { needs, WHATSAPP_NUMBER } from "../data/content";

// Le formulaire ouvre WhatsApp avec un message prêt à envoyer.
export default function QuoteForm() {
  const ref = useRef(null);
  const [validated, setValidated] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = ref.current;
    if (!form.checkValidity()) {
      setValidated(true);
      form.querySelector(":invalid")?.focus();
      return;
    }
    const v = (name) => form.elements[name].value.trim();
    const texte =
      "Bonjour CERIM,\n" +
      `Je suis ${v("nom")}.\n` +
      `Téléphone : ${v("tel")}\n` +
      `Besoin : ${form.elements.besoin.value}\n\n` +
      v("message");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texte)}`, "_blank", "noopener");
    form.reset();
    setValidated(false);
  };

  return (
    <div className="quote-card" id="devis">
      <h3>Une demande ? Écrivez-nous</h3>
      <p>Remplissez ce formulaire : votre message s'ouvre sur WhatsApp, prêt à être envoyé à notre équipe.</p>
      <form ref={ref} noValidate onSubmit={onSubmit} className={validated ? "is-validated" : undefined}>
        <div className="field">
          <label htmlFor="nom">Nom complet</label>
          <input id="nom" name="nom" type="text" autoComplete="name" required />
          <span className="field-error">Merci d'indiquer votre nom.</span>
        </div>
        <div className="field">
          <label htmlFor="tel">Téléphone</label>
          <input id="tel" name="tel" type="tel" autoComplete="tel" placeholder="+237 ..." required />
          <span className="field-error">Merci d'indiquer un numéro pour vous rappeler.</span>
        </div>
        <div className="field">
          <label htmlFor="besoin">Votre besoin</label>
          <select id="besoin" name="besoin" defaultValue="" required>
            <option value="" disabled>Choisir...</option>
            {needs.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
          <span className="field-error">Merci de choisir un type de besoin.</span>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} placeholder="Décrivez votre équipement ou votre problème..." required></textarea>
          <span className="field-error">Merci d'écrire un court message.</span>
        </div>
        <button type="submit" className="btn btn-whatsapp btn-block">
          <i className="bi bi-whatsapp"></i> Envoyer sur WhatsApp
        </button>
      </form>
    </div>
  );
}
