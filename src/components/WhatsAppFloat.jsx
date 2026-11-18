import { WHATSAPP_HELLO } from "../data/content";

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={WHATSAPP_HELLO} target="_blank" rel="noopener noreferrer" aria-label="Écrire sur WhatsApp">
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
