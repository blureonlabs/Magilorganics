interface KolamPatternProps {
  opacity?: number;
  className?: string;
  size?: number;
}

export function KolamPattern({
  opacity = 0.06,
  className,
  size = 200,
}: KolamPatternProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{pointerEvents: 'none'}}
    >
      <defs>
        <pattern
          id="kolam-dots"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          {/* Main dot */}
          <circle cx="10" cy="10" r="1.2" fill="var(--magil-gold)" opacity={opacity} />
          {/* Corner dots for diamond pattern */}
          <circle cx="0" cy="0" r="0.8" fill="var(--magil-red-deep)" opacity={opacity * 0.7} />
          <circle cx="20" cy="0" r="0.8" fill="var(--magil-red-deep)" opacity={opacity * 0.7} />
          <circle cx="0" cy="20" r="0.8" fill="var(--magil-red-deep)" opacity={opacity * 0.7} />
          <circle cx="20" cy="20" r="0.8" fill="var(--magil-red-deep)" opacity={opacity * 0.7} />
        </pattern>
        <pattern
          id="kolam-curves"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Connecting curves between dots - kolam style */}
          <path
            d="M10 10 Q 20 0, 30 10"
            stroke="var(--magil-gold)"
            strokeWidth="0.4"
            fill="none"
            opacity={opacity * 1.2}
          />
          <path
            d="M10 10 Q 0 20, 10 30"
            stroke="var(--magil-gold)"
            strokeWidth="0.4"
            fill="none"
            opacity={opacity * 1.2}
          />
          <path
            d="M30 10 Q 40 20, 30 30"
            stroke="var(--magil-gold)"
            strokeWidth="0.4"
            fill="none"
            opacity={opacity * 1.2}
          />
          <path
            d="M10 30 Q 20 40, 30 30"
            stroke="var(--magil-gold)"
            strokeWidth="0.4"
            fill="none"
            opacity={opacity * 1.2}
          />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#kolam-dots)" />
      <rect width="100" height="100" fill="url(#kolam-curves)" />
    </svg>
  );
}
