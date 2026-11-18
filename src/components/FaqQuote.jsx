import Faq from "./Faq";
import QuoteForm from "./QuoteForm";

export default function FaqQuote() {
  return (
    <section className="section section-paper" id="faq">
      <div className="wrap faq-grid">
        <Faq />
        <QuoteForm />
      </div>
    </section>
  );
}
