import type {SVGProps} from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

const defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function icon(size: number, className: string | undefined, rest: SVGProps<SVGSVGElement>) {
  return {
    ...defaultProps,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    'aria-hidden': true as const,
    className,
    ...rest,
  };
}

// ---- Navigation / UI Icons ----

export function SearchIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function UserIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function BagIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export function HeartIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function ChevronIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function ArrowRightIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function PlusIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function MinusIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function TrashIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

export function CloseIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function PlayIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export function StarIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function MenuIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function GiftIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 8 12 8" />
      <path d="M16.5 8a2.5 2.5 0 0 0 0-5C15 3 12 8 12 8" />
    </svg>
  );
}

// ---- Brand / Emoji-replacement Icons ----

export function LeafIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 2c1 2 2 4.5 1 8-1.5 5.5-5 7-9 10z" />
      <path d="M10 10c3.3 2.7 5 6 5 10" />
    </svg>
  );
}

export function ShieldIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function TruckIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function LockIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function FarmerIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <path d="M12 3C9.5 3 7 4 7 4l5-2 5 2s-2.5-1-5-1z" />
    </svg>
  );
}

export function CoinIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

// ---- Concern Icons ----

export function DropletIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export function WheatIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M2 22L16 8" />
      <path d="M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" />
      <path d="M7.47 8.53L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" />
      <path d="M11.47 4.53L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z" />
      <path d="M20 2L8.12 13.88" />
    </svg>
  );
}

export function BoneIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M18.37 5.63a3.12 3.12 0 0 0-4.42 0l-8.32 8.32a3.12 3.12 0 1 0 4.42 4.42l8.32-8.32a3.12 3.12 0 0 0 0-4.42z" />
      <path d="M15.54 8.46a1.5 1.5 0 0 1 0 2.12" />
    </svg>
  );
}

export function WindIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M17.7 7.7A2.5 2.5 0 0 1 17 13H2" />
      <path d="M9.6 4.6A2 2 0 0 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 0 0 14 16H2" />
    </svg>
  );
}

export function ScaleIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <polyline points="8 21 16 21" />
      <path d="M4 10l8-4 8 4" />
      <path d="M4 10c0 3 1.5 5 4 5s4-2 4-5" />
      <path d="M12 10c0 3 1.5 5 4 5s4-2 4-5" />
    </svg>
  );
}

export function BrainIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M12 2a4.5 4.5 0 0 0-4.04 2.5A4.5 4.5 0 0 0 4 9a4.5 4.5 0 0 0 1.41 3.27A4.5 4.5 0 0 0 8 18h1" />
      <path d="M12 2a4.5 4.5 0 0 1 4.04 2.5A4.5 4.5 0 0 1 20 9a4.5 4.5 0 0 1-1.41 3.27A4.5 4.5 0 0 1 16 18h-1" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
}

export function LotusIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M12 20c-4-4-8-7-8-12a4 4 0 0 1 8 0" />
      <path d="M12 20c4-4 8-7 8-12a4 4 0 0 0-8 0" />
      <path d="M12 20c-2.5-3-4-5.5-4-9a4 4 0 0 1 4-4" />
      <path d="M12 20c2.5-3 4-5.5 4-9a4 4 0 0 0-4-4" />
    </svg>
  );
}

export function LampIcon({size = 24, className, ...rest}: IconProps) {
  return (
    <svg {...icon(size, className, rest)}>
      <path d="M12 2C8 2 5 5 5 9c0 2.8 1.6 5.2 4 6.3V18h6v-2.7c2.4-1.1 4-3.5 4-6.3 0-4-3-7-7-7z" />
      <line x1="9" y1="21" x2="15" y2="21" />
      <line x1="12" y1="18" x2="12" y2="14" />
    </svg>
  );
}
