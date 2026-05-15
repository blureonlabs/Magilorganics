import type {CSSProperties} from 'react';

type SkeletonVariant = 'text' | 'image' | 'card';

interface SkeletonProps {
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  className?: string;
  /** Number of text lines to render (only for variant="text") */
  lines?: number;
}

const baseStyle: CSSProperties = {
  background:
    'linear-gradient(90deg, var(--magil-cream-warm) 25%, var(--magil-cream-deep) 50%, var(--magil-cream-warm) 75%)',
  borderRadius: 8,
};

const variantStyles: Record<SkeletonVariant, CSSProperties> = {
  text: {
    ...baseStyle,
    height: 16,
    borderRadius: 4,
  },
  image: {
    ...baseStyle,
    aspectRatio: '1 / 1',
    borderRadius: 18,
  },
  card: {
    ...baseStyle,
    borderRadius: 18,
    minHeight: 200,
  },
};

export function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  lines = 1,
}: SkeletonProps) {
  const style: CSSProperties = {
    ...variantStyles[variant],
    ...(width != null ? {width} : {}),
    ...(height != null ? {height} : {}),
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={className} role="status" aria-label="Loading">
        {Array.from({length: lines}, (_, i) => (
          <div
            key={i}
            className="skeleton-pulse"
            style={{
              ...style,
              width: i === lines - 1 ? '75%' : '100%',
              marginBottom: i < lines - 1 ? 8 : 0,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`skeleton-pulse ${className}`}
      style={style}
      role="status"
      aria-label="Loading"
    />
  );
}
