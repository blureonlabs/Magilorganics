interface PeacockBackdropProps {
  className?: string;
}

const FULL_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const HALF_ANGLES = [0, 60, 120, 180, 240, 300];

export function PeacockBackdrop({className}: PeacockBackdropProps) {
  return (
    <div className={className} aria-hidden="true" style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {/* Top-right peacock wheel — contained within bounds */}
      <svg
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '40%',
          maxWidth: 420,
          height: 'auto',
          aspectRatio: '1',
          opacity: 0.08,
          zIndex: 1,
        }}
        viewBox="0 0 200 200"
      >
        {FULL_ANGLES.map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <ellipse cx="100" cy="40" rx="14" ry="48" fill="var(--magil-red-deep)" />
            <ellipse cx="100" cy="25" rx="8" ry="14" fill="var(--magil-gold)" />
            <circle cx="100" cy="25" r="4" fill="var(--magil-red-dark)" />
          </g>
        ))}
        <circle cx="100" cy="100" r="18" fill="var(--magil-gold)" />
        <circle cx="100" cy="100" r="10" fill="var(--magil-red-deep)" />
      </svg>

      {/* Bottom-left leaf pattern — smaller, contained */}
      <svg
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '2%',
          width: '20%',
          maxWidth: 240,
          height: 'auto',
          aspectRatio: '1',
          opacity: 0.05,
          zIndex: 1,
        }}
        viewBox="0 0 200 200"
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
