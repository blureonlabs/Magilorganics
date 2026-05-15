interface MayilFeatherProps {
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MayilFeather({size = 80, opacity = 0.1, className, style}: MayilFeatherProps) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size * 1.25} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-red-deep)" strokeWidth="2" fill="none" strokeLinecap="round">
        <line x1="80" y1="50" x2="80" y2="190"/>
        <g stroke="var(--magil-leaf)" strokeWidth="1.4">
          <line x1="80" y1="80" x2="60" y2="100"/>
          <line x1="80" y1="80" x2="100" y2="100"/>
          <line x1="80" y1="100" x2="55" y2="120"/>
          <line x1="80" y1="100" x2="105" y2="120"/>
          <line x1="80" y1="120" x2="55" y2="140"/>
          <line x1="80" y1="120" x2="105" y2="140"/>
          <line x1="80" y1="140" x2="60" y2="160"/>
          <line x1="80" y1="140" x2="100" y2="160"/>
          <line x1="80" y1="160" x2="68" y2="175"/>
          <line x1="80" y1="160" x2="92" y2="175"/>
        </g>
        {/* Eye */}
        <ellipse cx="80" cy="40" rx="18" ry="24" fill="var(--magil-gold)" fillOpacity="0.3" stroke="var(--magil-red-deep)" strokeWidth="1.8"/>
        <ellipse cx="80" cy="38" rx="10" ry="14" fill="var(--magil-red-deep)" fillOpacity="0.15"/>
        <circle cx="80" cy="36" r="5" fill="var(--magil-red-deep)" fillOpacity="0.3"/>
      </g>
    </svg>
  );
}
