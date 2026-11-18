import logo from "../assets/logo-cerim.png";
import { EMAIL, PHONES, nav } from "../data/content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a href="#accueil" aria-label="Ets CERIM, accueil">
            <img src={logo} alt="Ets CERIM" />
          </a>
          <p>Votre partenaire de confiance en rebobinage industriel à Douala : rapidité, fiabilité et durabilité.</p>
        </div>
        <div>
          <h3>Liens rapides</h3>
          <ul>
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
            ))}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            {PHONES.map((p) => (
              <li key={p.href}><i className="bi bi-telephone-fill"></i><a href={p.href}>{p.label}</a></li>
            ))}
            <li><i className="bi bi-envelope-fill"></i><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><i className="bi bi-geo-alt-fill"></i>Akwa, Douala</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} Ets CERIM - Rebobinage Industriel. Tous droits réservés.</p>
        {/* Liens à renseigner avec les vrais profils */}
        <div className="social">
          <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
          <a href="#" aria-label="X"><i className="bi bi-twitter-x"></i></a>
        </div>
      </div>
    </footer>
  );
}
