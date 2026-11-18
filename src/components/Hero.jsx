import service from "../assets/service.jpeg";
import CoilMark from "./CoilMark";
import { PHONES } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1>Spécialiste du rebobinage industriel</h1>
          <p className="hero-lead">
            Rebobinage de moteurs, réparation de transformateurs et dépannage urgent sur site pour
            assurer la continuité de vos activités.
          </p>
          <div className="hero-actions">
            <a href="#devis" className="btn btn-copper">
              <i className="bi bi-whatsapp"></i> Demander un devis
            </a>
            <a href={PHONES[0].href} className="btn btn-ghost">
              <i className="bi bi-telephone-fill"></i> {PHONES[0].label}
            </a>
          </div>
        </div>

        <figure className="hero-visual">
          <CoilMark />
          <img src={service} alt="Machine de bobinage industriel avec bobines de cuivre" width="525" height="416" />
          <figcaption className="hero-badge">
            <span className="badge-icon"><i className="bi bi-lightning-charge-fill"></i></span>
            <span>
              <strong>Dépannage urgent</strong>
              <small>Intervention sur site</small>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
