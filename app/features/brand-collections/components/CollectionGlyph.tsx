interface CollectionGlyphProps {
  kind: string;
  color: string;
  size?: number;
}

export function CollectionGlyph({kind, color, size = 88}: CollectionGlyphProps) {
  const sw = 1.5;
  const stroke = color;
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke,
    strokeWidth: sw,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (kind) {
    case 'kit':
      return (
        <svg {...props}>
          <rect x="8" y="16" width="32" height="24" rx="2" />
          <path d="M8 22 H 40" />
          <path d="M18 16 V 12 Q 18 8, 24 8 Q 30 8, 30 12 V 16" />
          <path d="M24 22 V 40" />
        </svg>
      );
    case 'tablet':
      return (
        <svg {...props}>
          <rect x="14" y="10" width="20" height="32" rx="2" />
          <path d="M14 16 H 34" strokeWidth="2" />
          <circle cx="20" cy="24" r="1.4" fill={stroke} />
          <circle cx="28" cy="24" r="1.4" fill={stroke} />
          <circle cx="20" cy="30" r="1.4" fill={stroke} />
          <circle cx="28" cy="30" r="1.4" fill={stroke} />
          <circle cx="20" cy="36" r="1.4" fill={stroke} />
          <circle cx="28" cy="36" r="1.4" fill={stroke} />
        </svg>
      );
    case 'kudineer':
      return (
        <svg {...props}>
          <path d="M14 18 V 38 Q 14 42, 18 42 H 30 Q 34 42, 34 38 V 18" />
          <path d="M12 18 H 36" />
          <path d="M20 12 V 18" />
          <path d="M28 12 V 18" />
          <path d="M20 8 Q 22 10, 20 12" />
          <path d="M28 8 Q 30 10, 28 12" />
          <path d="M24 22 Q 21 26, 24 30 Q 27 26, 24 22" fill={stroke} opacity="0.2" />
        </svg>
      );
    case 'chooranam':
      return (
        <svg {...props}>
          <path d="M12 16 L 12 38 Q 12 42, 16 42 H 32 Q 36 42, 36 38 V 16" />
          <path d="M12 16 H 36 L 34 10 H 14 Z" />
          <circle cx="20" cy="26" r="1.4" fill={stroke} />
          <circle cx="26" cy="30" r="1.4" fill={stroke} />
          <circle cx="23" cy="34" r="1.4" fill={stroke} />
          <circle cx="29" cy="24" r="1.4" fill={stroke} />
        </svg>
      );
    case 'thailam':
      return (
        <svg {...props}>
          <path d="M20 8 H 28 V 14 H 20 Z" />
          <path d="M18 14 H 30 L 32 20 Q 32 24, 28 26 V 42 H 20 V 26 Q 16 24, 16 20 Z" />
          <circle cx="24" cy="34" r="2" fill={stroke} />
        </svg>
      );
    case 'juice':
      return (
        <svg {...props}>
          <rect x="20" y="6" width="8" height="6" />
          <path d="M16 12 H 32 L 30 18 Q 30 22, 26 24 V 42 H 22 V 24 Q 18 22, 18 18 Z" />
          <path d="M22 28 Q 24 32, 26 28" fill={stroke} opacity="0.2" />
          <path d="M22 35 Q 24 38, 26 35" fill={stroke} opacity="0.2" />
        </svg>
      );
    case 'cosmetic':
      return (
        <svg {...props}>
          <path d="M22 6 H 26 V 14 H 22 Z" />
          <path d="M18 14 H 30 L 32 20 V 42 H 16 V 20 Z" />
          <path d="M19 26 H 29" />
          <path d="M19 30 H 25" />
          <circle cx="24" cy="36" r="2" />
        </svg>
      );
    case 'soap':
      return (
        <svg {...props}>
          <ellipse cx="24" cy="20" rx="14" ry="6" />
          <path d="M10 20 V 36 Q 10 42, 24 42 Q 38 42, 38 36 V 20" />
          <path d="M14 24 Q 24 28, 34 24" />
          <ellipse cx="20" cy="16" rx="2" ry="1" fill={stroke} opacity="0.3" />
        </svg>
      );
    case 'bottle':
      return (
        <svg {...props}>
          <rect x="20" y="4" width="8" height="6" />
          <path d="M18 10 H 30 L 32 18 Q 32 22, 28 24 V 42 H 20 V 24 Q 16 22, 16 18 Z" />
          <path d="M19 28 H 29" />
          <path d="M19 32 H 29" />
        </svg>
      );
    default:
      return null;
  }
}
