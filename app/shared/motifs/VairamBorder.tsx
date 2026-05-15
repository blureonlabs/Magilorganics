interface VairamBorderProps {
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function VairamBorder({opacity = 0.12, className, style}: VairamBorderProps) {
  return (
    <svg viewBox="0 0 600 30" width="100%" height="16" preserveAspectRatio="xMidYMid meet" className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-red-deep)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 15 L 30 5 L 60 15 L 90 5 L 120 15 L 150 5 L 180 15 L 210 5 L 240 15 L 270 5 L 300 15 L 330 5 L 360 15 L 390 5 L 420 15 L 450 5 L 480 15 L 510 5 L 540 15 L 570 5 L 600 15"/>
        <path d="M0 15 L 30 25 L 60 15 L 90 25 L 120 15 L 150 25 L 180 15 L 210 25 L 240 15 L 270 25 L 300 15 L 330 25 L 360 15 L 390 25 L 420 15 L 450 25 L 480 15 L 510 25 L 540 15 L 570 25 L 600 15"/>
      </g>
      <g fill="var(--magil-gold)" opacity="0.5">
        <circle cx="60" cy="15" r="2"/><circle cx="120" cy="15" r="2"/><circle cx="180" cy="15" r="2"/>
        <circle cx="240" cy="15" r="2"/><circle cx="300" cy="15" r="2"/><circle cx="360" cy="15" r="2"/>
        <circle cx="420" cy="15" r="2"/><circle cx="480" cy="15" r="2"/><circle cx="540" cy="15" r="2"/>
      </g>
    </svg>
  );
}
