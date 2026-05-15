interface PeacockBackdropProps {
  className?: string;
}

const FULL_ANGLES = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
const HALF_ANGLES = [0, 60, 120, 180, 240, 300];

export function PeacockBackdrop({className}: PeacockBackdropProps) {
  return (
    <div className={className} aria-hidden="true">
      {/* Top-right large peacock wheel — more visible */}
      <svg
        style={{
          position: 'absolute',
          top: -60,
          right: -40,
          width: 560,
          height: 560,
          opacity: 0.07,
          zIndex: 1,
          pointerEvents: 'none',
        }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {FULL_ANGLES.map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <ellipse cx="100" cy="35" rx="16" ry="55" fill="var(--magil-red-deep)" />
            <ellipse cx="100" cy="20" rx="9" ry="16" fill="var(--magil-gold)" />
            <circle cx="100" cy="20" r="5" fill="var(--magil-red-dark)" />
          </g>
        ))}
        <circle cx="100" cy="100" r="22" fill="var(--magil-gold)" />
        <circle cx="100" cy="100" r="12" fill="var(--magil-red-deep)" />
      </svg>

      {/* Center-right secondary pattern */}
      <svg
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: 300,
          height: 300,
          opacity: 0.06,
          zIndex: 1,
          pointerEvents: 'none',
        }}
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {HALF_ANGLES.map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <ellipse cx="100" cy="50" rx="10" ry="40" fill="var(--magil-gold)" />
          </g>
        ))}
        <circle cx="100" cy="100" r="15" fill="var(--magil-clay)" opacity="0.5" />
      </svg>

      {/* Bottom-left leaf pattern */}
      <svg
        style={{
          position: 'absolute',
          bottom: -100,
          left: -60,
          width: 400,
          height: 400,
          opacity: 0.06,
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
