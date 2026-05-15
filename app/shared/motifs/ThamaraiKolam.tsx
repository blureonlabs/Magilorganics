/**
 * Thamarai (Lotus) Kolam — 8-fold rotational lotus kolam from the pattern library hero.
 * Used as a decorative background element in the Hero section.
 */
export function ThamaraiKolam({size = 400}: {size?: number}) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      aria-hidden="true"
      style={{opacity: 0.13}}
    >
      <defs>
        <radialGradient id="thamarai-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="var(--magil-gold)" stopOpacity="0.35" />
          <stop offset="0.7" stopColor="var(--magil-gold)" stopOpacity="0.12" />
          <stop offset="1" stopColor="var(--magil-gold)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="190" fill="url(#thamarai-grad)" />
      <g
        transform="translate(200 200)"
        fill="none"
        stroke="var(--magil-red-deep)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 8 outer petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={angle ? `rotate(${angle})` : undefined}>
            <path d="M0 -150 C 30 -120, 30 -90, 0 -60 C -30 -90, -30 -120, 0 -150 Z" />
            <path
              d="M0 -130 C 16 -110, 16 -90, 0 -70 C -16 -90, -16 -110, 0 -130 Z"
              stroke="var(--magil-gold)"
            />
          </g>
        ))}
        {/* middle ring */}
        <circle r="55" strokeDasharray="2 6" />
        {/* 8 circles around center */}
        <g stroke="var(--magil-red)">
          <circle cx="0" cy="-42" r="14" />
          <circle cx="42" cy="0" r="14" />
          <circle cx="0" cy="42" r="14" />
          <circle cx="-42" cy="0" r="14" />
          <circle cx="30" cy="-30" r="14" />
          <circle cx="30" cy="30" r="14" />
          <circle cx="-30" cy="30" r="14" />
          <circle cx="-30" cy="-30" r="14" />
        </g>
        {/* center lotus */}
        <g fill="var(--magil-gold)" stroke="var(--magil-red-deep)" strokeWidth="1.6">
          <path d="M0 -22 C 7 -10, 7 10, 0 22 C -7 10, -7 -10, 0 -22 Z" />
          <path
            transform="rotate(45)"
            d="M0 -22 C 7 -10, 7 10, 0 22 C -7 10, -7 -10, 0 -22 Z"
          />
          <path
            transform="rotate(90)"
            d="M0 -22 C 7 -10, 7 10, 0 22 C -7 10, -7 -10, 0 -22 Z"
          />
          <path
            transform="rotate(135)"
            d="M0 -22 C 7 -10, 7 10, 0 22 C -7 10, -7 -10, 0 -22 Z"
          />
          <circle r="6" fill="var(--magil-red-deep)" stroke="none" />
        </g>
        {/* outer pulli dots */}
        <g fill="var(--magil-red-deep)" stroke="none">
          <circle cx="0" cy="-170" r="2.4" />
          <circle cx="120" cy="-120" r="2.4" />
          <circle cx="170" cy="0" r="2.4" />
          <circle cx="120" cy="120" r="2.4" />
          <circle cx="0" cy="170" r="2.4" />
          <circle cx="-120" cy="120" r="2.4" />
          <circle cx="-170" cy="0" r="2.4" />
          <circle cx="-120" cy="-120" r="2.4" />
        </g>
      </g>
    </svg>
  );
}
