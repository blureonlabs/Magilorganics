/**
 * Vairam (Diamond) Kolam — small diamond kolam from pattern library K-01.
 * Used as the empty cart illustration.
 */
export function VairamKolam({size = 120}: {size?: number}) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <g
        stroke="var(--magil-red-deep)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M100 30 L 30 100 L 100 170 L 170 100 Z" />
        <path d="M100 60 L 60 100 L 100 140 L 140 100 Z" />
      </g>
      <g fill="var(--magil-red-deep)">
        <circle cx="100" cy="30" r="3" />
        <circle cx="30" cy="100" r="3" />
        <circle cx="100" cy="170" r="3" />
        <circle cx="170" cy="100" r="3" />
        <circle cx="100" cy="60" r="3" />
        <circle cx="60" cy="100" r="3" />
        <circle cx="100" cy="140" r="3" />
        <circle cx="140" cy="100" r="3" />
        <circle cx="100" cy="100" r="4" fill="var(--magil-gold)" />
      </g>
    </svg>
  );
}
