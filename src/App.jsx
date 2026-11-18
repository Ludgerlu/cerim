import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Why from "./components/Why";
import Services from "./components/Services";
import Sectors from "./components/Sectors";
import Testimonials from "./components/Testimonials";
import FaqQuote from "./components/FaqQuote";
import Urgency from "./components/Urgency";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Why />
        <Services />
        <Sectors />
        <Testimonials />
        <FaqQuote />
        <Urgency />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
