/**
 * BrandBadge — Village Pharma identifier pill
 * Only renders for vendor "Village Pharma"; house brand (Magil Organics) gets no badge.
 */

interface BrandBadgeProps {
  vendor: string;
  size?: 'sm' | 'lg';
}

export function BrandBadge({vendor, size = 'sm'}: BrandBadgeProps) {
  if (vendor !== 'Village Pharma') return null;

  const sizeStyles =
    size === 'lg'
      ? {padding: '6px 14px', fontSize: 11}
      : {padding: '3px 8px', fontSize: 9};

  return (
    <span
      className="brand-badge"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        background: 'var(--magil-leaf)',
        color: 'var(--magil-cream)',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase' as const,
        borderRadius: 4,
        whiteSpace: 'nowrap' as const,
        ...sizeStyles,
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: '50%',
          background: 'var(--magil-gold-light)',
          flexShrink: 0,
        }}
      />
      Village Pharma
    </span>
  );
}
