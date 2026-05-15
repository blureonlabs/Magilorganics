interface PeacockBackdropProps {
  className?: string;
}

const FULL_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const HALF_ANGLES = [0, 60, 120, 180, 240, 300];

export function PeacockBackdrop({className}: PeacockBackdropProps) {
  return (
    <div className={className} aria-hidden="true">
      {/* Top-right large peacock wheel */}
      <svg
        style={{
          position: 'absolute',
          top: -80,
          right: -60,
          width: 480,
          height: 480,
          opacity: 0.07,
          zIndex: 1,
          pointerEvents: 'none',
        }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {FULL_ANGLES.map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <ellipse cx="100" cy="40" rx="14" ry="50" fill="var(--magil-red-deep)" />
            <ellipse cx="100" cy="22" rx="8" ry="14" fill="var(--magil-gold)" />
            <circle cx="100" cy="22" r="4" fill="var(--magil-red-dark)" />
          </g>
        ))}
        <circle cx="100" cy="100" r="20" fill="var(--magil-gold)" />
      </svg>

      {/* Bottom-left leaf pattern */}
      <svg
        style={{
          position: 'absolute',
          bottom: -120,
          left: -80,
          width: 360,
          height: 360,
          opacity: 0.05,
          zIndex: 1,
          pointerEvents: 'none',
        }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {HALF_ANGLES.map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <path
              d="M 100 100 Q 80 60, 100 20 Q 120 60, 100 100"
              fill="var(--magil-leaf)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
