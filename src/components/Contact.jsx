import { EMAIL, PHONES } from "../data/content";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div>
          <h2>Contactez notre équipe technique</h2>
          <ul className="contact-list">
            <li>
              <i className="bi bi-telephone-fill"></i>
              <div>
                <strong>Téléphone</strong>
                <span>
                  <a href={PHONES[0].href}>{PHONES[0].label}</a> / <a href={PHONES[1].href}>{PHONES[1].label}</a>
                </span>
              </div>
            </li>
            <li>
              <i className="bi bi-envelope-fill"></i>
              <div>
                <strong>E-mail</strong>
                <span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></span>
              </div>
            </li>
            <li>
              <i className="bi bi-geo-alt-fill"></i>
              <div>
                <strong>Adresse</strong>
                <span>
                  Akwa, Douala. Situé derrière la direction générale MTN, facile d'accès pour vos
                  urgences techniques.
                </span>
              </div>
            </li>
          </ul>
        </div>
        <iframe
          className="map"
          title="Localisation Ets CERIM - Akwa, Douala"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=MTN+Cameroun+Direction+G%C3%A9n%C3%A9rale+Douala&z=16&output=embed"
        ></iframe>
      </div>
    </section>
  );
}
