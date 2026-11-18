import logo from "../assets/logo-cerim.png";
import { PHONES } from "../data/content";

export default function About() {
  return (
    <section className="section" id="apropos">
      <div className="wrap about-grid">
        <div className="about-copy">
          <h2>À propos de CERIM</h2>
          <p className="lead">
            Établissement CERIM est votre partenaire de confiance en rebobinage industriel à Douala.
            Forts de notre expertise technique, nous intervenons sur tous types de machines tournantes
            et transformateurs pour assurer la continuité de vos activités industrielles.
          </p>
          <p>Notre engagement tient en trois mots : rapidité, fiabilité, durabilité.</p>
          <div className="btn-row">
            <a href="#services" className="btn btn-dark">Nos services</a>
            <a href={PHONES[0].href} className="btn btn-outline">
              <i className="bi bi-telephone-fill"></i> Nous appeler
            </a>
          </div>
        </div>

        <aside className="about-card" aria-label="Repères">
          <img src={logo} alt="Logo Ets CERIM" />
          <ul>
            <li><i className="bi bi-geo-alt-fill"></i> Akwa, Douala</li>
            <li><i className="bi bi-gear-wide-connected"></i> Machines tournantes et transformateurs</li>
            <li><i className="bi bi-truck"></i> Dépannage urgent sur site</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
