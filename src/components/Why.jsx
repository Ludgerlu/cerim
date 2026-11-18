import { commitments } from "../data/content";

export default function Why() {
  return (
    <section className="why" id="pourquoi">
      <div className="wrap">
        <h2>Pourquoi choisir CERIM</h2>
        <div className="why-grid">
          {commitments.map((c) => (
            <div className="why-item" key={c.title}>
              <span className="why-icon"><i className={`bi ${c.icon}`}></i></span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
