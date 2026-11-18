import service from "../assets/service.jpeg";
import { services } from "../data/content";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap split">
        <div>
          <h2>Nos services de rebobinage</h2>
          <p className="lead">
            Une expertise complète sur vos machines tournantes et transformateurs, de la réparation à
            la maintenance.
          </p>
          <ul className="service-list">
            {services.map((s) => (
              <li key={s.title}>
                <span className="row-icon"><i className={`bi ${s.icon}`}></i></span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#devis" className="btn btn-dark">Demander un devis</a>
        </div>
        <figure className="photo">
          <img src={service} alt="Rebobinage de moteur électrique" loading="lazy" width="525" height="416" />
        </figure>
      </div>
    </section>
  );
}
