import { PHONES } from "../data/content";

export default function Urgency() {
  return (
    <section className="urgency">
      <div className="wrap urgency-inner">
        <h2>Une panne ? Une urgence technique ?</h2>
        <a href={PHONES[0].href} className="btn btn-light btn-lg">
          <i className="bi bi-telephone-fill"></i> {PHONES[0].label}
        </a>
      </div>
    </section>
  );
}
