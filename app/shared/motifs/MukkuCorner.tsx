/**
 * Mukku Pookal corner ornament from pattern library C-01.
 * Used as a subtle corner accent on collection pages.
 */
export function MukkuCorner({size = 80}: {size?: number}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      style={{opacity: 0.08}}
    >
      <g
        stroke="var(--magil-red-deep)"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 80 Q 20 20 80 20" />
        <path d="M30 70 Q 30 30 70 30" />
        {/* bud */}
        <path
          d="M30 80 Q 40 60 60 60 Q 60 80 50 90 Z"
          fill="var(--magil-gold)"
        />
        <path
          d="M80 30 Q 100 40 100 60 Q 80 60 70 50 Z"
          fill="var(--magil-gold)"
        />
        {/* dot */}
        <circle cx="40" cy="40" r="3" fill="var(--magil-red-deep)" />
      </g>
    </svg>
  );
}
