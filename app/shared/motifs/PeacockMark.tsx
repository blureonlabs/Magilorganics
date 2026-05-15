interface PeacockMarkProps {
  size?: number;
  color?: string;
  className?: string;
}

export function PeacockMark({
  size = 28,
  color = 'var(--magil-gold)',
  className,
}: PeacockMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 4 C 12 8, 10 16, 14 22 C 8 22, 6 28, 10 32 C 14 28, 18 26, 20 24 C 22 26, 26 28, 30 32 C 34 28, 32 22, 26 22 C 30 16, 28 8, 20 4 Z"
        fill={color}
        opacity="0.9"
      />
      <circle cx="20" cy="14" r="2.5" fill="var(--magil-red-deep)" />
      <circle cx="20" cy="14" r="1" fill="var(--magil-gold-light)" />
    </svg>
  );
}
