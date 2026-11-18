import { useState } from "react";
import { faqs } from "../data/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq">
      <h2>Questions fréquentes</h2>
      <div className="accordion">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div className={`acc-item${isOpen ? " is-open" : ""}`} key={f.q}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <i className="bi bi-plus-lg" aria-hidden="true"></i>
                </button>
              </h3>
              <div className="acc-panel" id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`}>
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
