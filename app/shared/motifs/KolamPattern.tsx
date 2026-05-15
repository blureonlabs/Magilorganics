interface KolamPatternProps {
  opacity?: number;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

/**
 * Traditional Tamil kolam — circular dot pattern radiating from center.
 * Not a square grid — a round rangoli-style design with concentric rings
 * of dots connected by curved lines.
 */
export function KolamPattern({
  opacity = 0.08,
  className,
  size = 400,
  style,
}: KolamPatternProps) {
  const rings = [
    {r: 12, dots: 6, dotSize: 1.8},
    {r: 22, dots: 8, dotSize: 1.5},
    {r: 33, dots: 12, dotSize: 1.3},
    {r: 44, dots: 16, dotSize: 1.1},
    {r: 55, dots: 20, dotSize: 0.9},
    {r: 66, dots: 24, dotSize: 0.8},
    {r: 78, dots: 28, dotSize: 0.7},
    {r: 90, dots: 32, dotSize: 0.6},
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{pointerEvents: 'none', ...style}}
    >
      {/* Center dot */}
      <circle cx="100" cy="100" r="3" fill="var(--magil-gold)" opacity={opacity * 1.5} />

      {/* Concentric rings of dots */}
      {rings.map((ring, ri) =>
        Array.from({length: ring.dots}).map((_, di) => {
          const angle = (di / ring.dots) * Math.PI * 2;
          const x = 100 + ring.r * Math.cos(angle);
          const y = 100 + ring.r * Math.sin(angle);
          return (
            <circle
              key={`${ri}-${di}`}
              cx={x}
              cy={y}
              r={ring.dotSize}
              fill={ri % 2 === 0 ? 'var(--magil-gold)' : 'var(--magil-red-deep)'}
              opacity={opacity * (1 - ri * 0.08)}
            />
          );
        }),
      )}

      {/* Curved connections between dots — kolam looping style */}
      {rings.slice(0, 5).map((ring, ri) => {
        const nextRing = rings[ri + 1];
        if (!nextRing) return null;
        return Array.from({length: ring.dots}).map((_, di) => {
          const angle1 = (di / ring.dots) * Math.PI * 2;
          const angle2 = ((di + 0.5) / ring.dots) * Math.PI * 2;
          const x1 = 100 + ring.r * Math.cos(angle1);
          const y1 = 100 + ring.r * Math.sin(angle1);
          const x2 = 100 + nextRing.r * Math.cos(angle2);
          const y2 = 100 + nextRing.r * Math.sin(angle2);
          const cx1 = 100 + (ring.r + 5) * Math.cos((angle1 + angle2) / 2);
          const cy1 = 100 + (ring.r + 5) * Math.sin((angle1 + angle2) / 2);
          return (
            <path
              key={`curve-${ri}-${di}`}
              d={`M${x1},${y1} Q${cx1},${cy1} ${x2},${y2}`}
              stroke="var(--magil-gold)"
              strokeWidth="0.3"
              fill="none"
              opacity={opacity * 0.6}
            />
          );
        });
      })}

      {/* Decorative concentric circles — faint guide rings */}
      {[20, 35, 50, 70].map((r) => (
        <circle
          key={`ring-${r}`}
          cx="100"
          cy="100"
          r={r}
          stroke="var(--magil-gold)"
          strokeWidth="0.2"
          fill="none"
          opacity={opacity * 0.3}
          strokeDasharray="1 2"
        />
      ))}

      {/* Petal-like curves at cardinal points */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 100 + 45 * Math.cos(rad);
        const y = 100 + 45 * Math.sin(rad);
        return (
          <g key={`petal-${deg}`}>
            <ellipse
              cx={x}
              cy={y}
              rx="4"
              ry="12"
              fill="var(--magil-red-deep)"
              opacity={opacity * 0.4}
              transform={`rotate(${deg} ${x} ${y})`}
            />
          </g>
        );
      })}

      {/* Diagonal petal accents */}
      {[45, 135, 225, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x = 100 + 38 * Math.cos(rad);
        const y = 100 + 38 * Math.sin(rad);
        return (
          <ellipse
            key={`accent-${deg}`}
            cx={x}
            cy={y}
            rx="3"
            ry="8"
            fill="var(--magil-gold)"
            opacity={opacity * 0.3}
            transform={`rotate(${deg} ${x} ${y})`}
          />
        );
      })}
    </svg>
  );
}
