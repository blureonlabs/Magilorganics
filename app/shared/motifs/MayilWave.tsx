interface MayilWaveProps {
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function MayilWave({opacity = 0.12, className, style}: MayilWaveProps) {
  return (
    <svg viewBox="0 0 800 100" width="100%" height="24" preserveAspectRatio="xMidYMid meet" className={className} style={style} aria-hidden="true" opacity={opacity}>
      <g stroke="var(--magil-red-deep)" strokeWidth="2" fill="var(--magil-gold)" strokeLinejoin="round" strokeLinecap="round" fillOpacity="0.3">
        <path d="M30 80 L 30 60 L 50 60 L 50 40 L 70 40 L 70 60 L 90 60 L 90 80 Z"/>
        <path d="M130 80 L 130 60 L 150 60 L 150 40 L 170 40 L 170 60 L 190 60 L 190 80 Z"/>
        <path d="M230 80 L 230 60 L 250 60 L 250 40 L 270 40 L 270 60 L 290 60 L 290 80 Z"/>
        <path d="M330 80 L 330 60 L 350 60 L 350 40 L 370 40 L 370 60 L 390 60 L 390 80 Z"/>
        <path d="M430 80 L 430 60 L 450 60 L 450 40 L 470 40 L 470 60 L 490 60 L 490 80 Z"/>
        <path d="M530 80 L 530 60 L 550 60 L 550 40 L 570 40 L 570 60 L 590 60 L 590 80 Z"/>
        <path d="M630 80 L 630 60 L 650 60 L 650 40 L 670 40 L 670 60 L 690 60 L 690 80 Z"/>
        <path d="M730 80 L 730 60 L 750 60 L 750 40 L 770 40 L 770 60 L 790 60 L 790 80 Z"/>
      </g>
      <line x1="0" y1="82" x2="800" y2="82" stroke="var(--magil-red-deep)" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}
