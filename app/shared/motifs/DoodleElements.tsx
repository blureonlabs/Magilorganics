/**
 * Hand-drawn "doodle" style SVG accents.
 * Village-made, artisan feel — NOT childish.
 * Use sparingly: 2-3 per page max.
 */

interface DoodleProps {
  width?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wobbly hand-drawn underline — for section headings.
 */
export function DoodleUnderline({
  width = 200,
  color = 'var(--magil-gold)',
  strokeWidth = 2,
  className,
  style,
}: DoodleProps) {
  return (
    <svg
      width={width}
      height="14"
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      style={{display: 'block', ...style}}
      aria-hidden="true"
    >
      <path
        d="M2 9 Q 18 4, 36 8 Q 54 12, 72 7 Q 90 2, 110 8 Q 130 13, 150 7 Q 170 2, 190 8 L 198 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Wavy section divider with small leaf/dot accents.
 */
export function DoodleDivider({
  color = 'var(--magil-gold)',
  strokeWidth = 1.5,
  className,
  style,
}: DoodleProps) {
  return (
    <svg
      width="100%"
      height="24"
      viewBox="0 0 400 24"
      preserveAspectRatio="none"
      fill="none"
      className={className}
      style={{display: 'block', ...style}}
      aria-hidden="true"
    >
      {/* Main wavy line */}
      <path
        d="M0 12 Q 25 6, 50 12 Q 75 18, 100 12 Q 125 6, 150 12 Q 175 18, 200 12 Q 225 6, 250 12 Q 275 18, 300 12 Q 325 6, 350 12 Q 375 18, 400 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Small leaf accent — left */}
      <path
        d="M95 12 Q 100 6, 105 12 Q 100 18, 95 12Z"
        fill={color}
        opacity="0.5"
      />
      {/* Dot accent — center */}
      <circle cx="200" cy="12" r="2.5" fill={color} opacity="0.6" />
      {/* Small leaf accent — right */}
      <path
        d="M295 12 Q 300 6, 305 12 Q 300 18, 295 12Z"
        fill={color}
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * Imperfect hand-drawn circle — for trust badges, stamps.
 */
export function DoodleCircle({
  width = 56,
  color = 'var(--magil-ink)',
  strokeWidth = 1.2,
  className,
  style,
  children,
}: DoodleProps & {children?: React.ReactNode}) {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: typeof width === 'number' ? width : undefined,
        height: typeof width === 'number' ? width : undefined,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 60 60"
        fill="none"
        style={{position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none'}}
        aria-hidden="true"
      >
        <path
          d="M30 4 Q 50 3, 55 18 Q 58 30, 54 42 Q 48 56, 30 56 Q 12 57, 6 42 Q 2 30, 5 18 Q 10 3, 30 4Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </div>
  );
}

/**
 * Hand-drawn arrow — for CTAs and links.
 */
export function DoodleArrow({
  width = 24,
  color = 'currentColor',
  strokeWidth = 1.8,
  className,
  style,
}: DoodleProps) {
  return (
    <svg
      width={width}
      height={typeof width === 'number' ? width * 0.75 : width}
      viewBox="0 0 32 24"
      fill="none"
      className={className}
      style={{display: 'inline-block', verticalAlign: 'middle', ...style}}
      aria-hidden="true"
    >
      <path
        d="M2 13 Q 10 11, 18 12 Q 22 12, 26 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M22 6 Q 25 10, 28 12 Q 25 14, 22 18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Sketch border — irregular border path for featured cards.
 */
export function DoodleBorder({
  color = 'var(--magil-gold)',
  strokeWidth = 1.2,
  className,
  style,
  children,
}: DoodleProps & {children?: React.ReactNode}) {
  return (
    <div
      className={className}
      style={{position: 'relative', ...style}}
    >
      <svg
        viewBox="0 0 200 120"
        preserveAspectRatio="none"
        fill="none"
        style={{
          position: 'absolute',
          inset: -2,
          width: 'calc(100% + 4px)',
          height: 'calc(100% + 4px)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      >
        <path
          d="M6 4 Q 2 2, 6 2 L 100 3 Q 140 2, 194 3 Q 198 4, 197 10 L 198 60 Q 197 90, 197 116 Q 196 118, 190 118 L 100 117 Q 60 118, 6 117 Q 3 116, 3 110 L 4 60 Q 3 30, 6 4Z"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </div>
  );
}

/**
 * Small hand-drawn leaf — for bullet points and decorative accents.
 */
export function DoodleLeaf({
  width = 18,
  color = 'var(--magil-leaf)',
  strokeWidth = 1.2,
  className,
  style,
}: DoodleProps) {
  return (
    <svg
      width={width}
      height={typeof width === 'number' ? width * 1.2 : width}
      viewBox="0 0 18 22"
      fill="none"
      className={className}
      style={{display: 'inline-block', verticalAlign: 'middle', ...style}}
      aria-hidden="true"
    >
      {/* Leaf body */}
      <path
        d="M9 2 Q 16 6, 15 14 Q 14 20, 9 20 Q 4 20, 3 14 Q 2 6, 9 2Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.12"
      />
      {/* Center vein */}
      <path
        d="M9 4 Q 9 10, 9 18"
        stroke={color}
        strokeWidth={strokeWidth * 0.8}
        strokeLinecap="round"
      />
      {/* Side veins */}
      <path
        d="M9 8 Q 12 7, 13 9"
        stroke={color}
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
      />
      <path
        d="M9 12 Q 6 11, 5 13"
        stroke={color}
        strokeWidth={strokeWidth * 0.6}
        strokeLinecap="round"
      />
    </svg>
  );
}
