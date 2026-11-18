// Spires de cuivre concentriques : rappelle l'enroulement d'un bobinage et l'anneau du logo.
export default function CoilMark() {
  const rings = Array.from({ length: 15 }, (_, i) => i);
  return (
    <svg className="coil" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
      <g transform="rotate(-24 300 300)">
        {rings.map((i) => {
          const rx = 285 - i * 15;
          return (
            <ellipse
              key={i}
              cx="300"
              cy="300"
              rx={rx}
              ry={rx * 0.6}
              pathLength="1"
              style={{ "--i": i }}
            />
          );
        })}
      </g>
    </svg>
  );
}
