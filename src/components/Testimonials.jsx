import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="section" id="temoignages">
      <div className="wrap">
        <h2>Ils nous font confiance</h2>
        <div className="quotes">
          {testimonials.map((t) => (
            <figure className="quote" key={t.author}>
              <blockquote>« {t.quote} »</blockquote>
              <figcaption>{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
