/**
 * Herb & Natural Illustrations from Kolam & Motifs library
 * Used as decorative accents across the site
 */

interface HerbProps {
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const defaults: HerbProps = {size: 60, opacity: 0.12};

export function Tulsi({size = 60, opacity = 0.12, className, style}: HerbProps) {
  return (
    <svg viewBox="0 0 120 140" width={size} height={size * 1.17} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-leaf)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M60 130 L 60 20"/>
        <g fill="var(--magil-leaf)">
          <path d="M60 115 Q 50 113 44 105 L 60 110 Z"/>
          <path d="M60 115 Q 70 113 76 105 L 60 110 Z"/>
          <path d="M60 100 Q 48 98 40 88 L 60 95 Z"/>
          <path d="M60 100 Q 72 98 80 88 L 60 95 Z"/>
          <path d="M60 85 Q 46 83 36 70 L 60 80 Z"/>
          <path d="M60 85 Q 74 83 84 70 L 60 80 Z"/>
          <path d="M60 70 Q 48 67 40 55 L 60 65 Z"/>
          <path d="M60 70 Q 72 67 80 55 L 60 65 Z"/>
          <path d="M60 55 Q 50 52 44 42 L 60 50 Z"/>
          <path d="M60 55 Q 70 52 76 42 L 60 50 Z"/>
          <path d="M60 40 Q 54 36 52 30 L 60 36 Z"/>
          <path d="M60 40 Q 66 36 68 30 L 60 36 Z"/>
        </g>
      </g>
    </svg>
  );
}

export function Manjal({size = 60, opacity = 0.12, className, style}: HerbProps) {
  return (
    <svg viewBox="0 0 140 100" width={size} height={size * 0.71} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-gold)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <ellipse cx="50" cy="50" rx="22" ry="14" fill="var(--magil-gold)" fillOpacity="0.3"/>
        <ellipse cx="70" cy="45" rx="20" ry="12" fill="var(--magil-gold)" fillOpacity="0.3"/>
        <ellipse cx="90" cy="50" rx="18" ry="13" fill="var(--magil-gold)" fillOpacity="0.3"/>
        <path d="M30 50 Q 25 50 20 55"/>
        <path d="M110 50 Q 115 48 120 42"/>
        <circle cx="35" cy="50" r="2" fill="var(--magil-gold)"/>
        <circle cx="112" cy="48" r="2" fill="var(--magil-gold)"/>
      </g>
    </svg>
  );
}

export function Nelli({size = 50, opacity = 0.12, className, style}: HerbProps) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-leaf)" strokeWidth="1.4" fill="none" strokeLinecap="round">
        <circle cx="50" cy="45" r="18" fill="var(--magil-leaf)" fillOpacity="0.2"/>
        <path d="M50 63 L 50 90"/>
        <path d="M50 70 Q 40 65 35 60"/>
        <path d="M50 70 Q 60 65 65 60"/>
        <circle cx="50" cy="45" r="3" fill="var(--magil-leaf)"/>
      </g>
    </svg>
  );
}

export function MannPaanai({size = 70, opacity = 0.12, className, style}: HerbProps) {
  return (
    <svg viewBox="0 0 120 140" width={size} height={size * 1.17} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-clay)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M40 40 Q 40 30, 50 25 L 70 25 Q 80 30, 80 40"/>
        <path d="M35 40 L 35 90 Q 35 120, 60 125 Q 85 120, 85 90 L 85 40"/>
        <line x1="35" y1="40" x2="85" y2="40"/>
        <path d="M45 60 Q 60 65 75 60" strokeWidth="1" opacity="0.5"/>
        <path d="M45 80 Q 60 85 75 80" strokeWidth="1" opacity="0.5"/>
      </g>
    </svg>
  );
}

export function Ammikkal({size = 70, opacity = 0.12, className, style}: HerbProps) {
  return (
    <svg viewBox="0 0 140 100" width={size} height={size * 0.71} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-ink-soft)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <ellipse cx="70" cy="65" rx="55" ry="20" fill="var(--magil-cream-deep)" stroke="var(--magil-ink-soft)"/>
        <path d="M30 55 Q 70 30, 110 55" strokeWidth="2"/>
        <ellipse cx="70" cy="45" rx="12" ry="6" fill="var(--magil-ink-soft)" fillOpacity="0.2"/>
      </g>
    </svg>
  );
}

export function Mangai({size = 50, opacity = 0.12, className, style}: HerbProps) {
  return (
    <svg viewBox="0 0 80 100" width={size} height={size * 1.25} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-leaf)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M40 90 Q 15 70, 20 40 Q 25 15, 40 10 Q 55 15, 60 40 Q 65 70, 40 90 Z" fill="var(--magil-gold)" fillOpacity="0.2"/>
        <path d="M40 10 L 40 90" strokeWidth="1" opacity="0.4"/>
        <path d="M40 10 Q 35 5, 30 8" strokeWidth="1.2"/>
      </g>
    </svg>
  );
}

export function VaazhaiIlai({size = 80, opacity = 0.1, className, style}: HerbProps) {
  return (
    <svg viewBox="0 0 160 200" width={size} height={size * 1.25} className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-leaf)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M80 190 L 80 20"/>
        <path d="M80 30 Q 40 50, 30 80 Q 25 100, 35 130 Q 45 150, 80 170" fill="var(--magil-leaf)" fillOpacity="0.15"/>
        <path d="M80 30 Q 120 50, 130 80 Q 135 100, 125 130 Q 115 150, 80 170" fill="var(--magil-leaf)" fillOpacity="0.15"/>
      </g>
    </svg>
  );
}
