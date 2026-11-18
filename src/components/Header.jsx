import { useState } from "react";
import logo from "../assets/logo-cerim.png";
import { nav, PHONES } from "../data/content";
import useScrollSpy from "../hooks/useScrollSpy";

const ids = nav.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span className="topbar-note">
            <i className="bi bi-geo-alt-fill"></i> Akwa, Douala, derrière la direction générale MTN
          </span>
          <a href={PHONES[0].href}>
            <i className="bi bi-telephone-fill"></i> Urgence : {PHONES[0].label}
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap header-inner">
          <a className="brand" href="#accueil" aria-label="Ets CERIM, accueil">
            <img src={logo} alt="Ets CERIM" />
          </a>

          <button
            className="menu-btn"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <nav id="main-nav" className={`main-nav${open ? " is-open" : ""}`} aria-label="Navigation principale">
            <ul>
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className={active === n.id ? "is-active" : undefined}
                    aria-current={active === n.id ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn-copper nav-cta" href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
