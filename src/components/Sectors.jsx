import about from "../assets/about.jpeg";
import { sectors } from "../data/content";

export default function Sectors() {
  return (
    <section className="section section-paper" id="secteurs">
      <div className="wrap split split-reverse">
        <figure className="photo">
          <img src={about} alt="Bobinage de cuivre sur un stator" loading="lazy" width="525" height="413" />
        </figure>
        <div>
          <h2>Secteurs d'intervention</h2>
          <p className="lead">
            Nous accompagnons les entreprises et établissements dont l'activité dépend de machines
            fiables.
          </p>
          <ul className="sector-list">
            {sectors.map((s) => (
              <li key={s.label}>
                <i className={`bi ${s.icon}`}></i>
                {s.label}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-dark">Contact</a>
        </div>
      </div>
    </section>
  );
}
