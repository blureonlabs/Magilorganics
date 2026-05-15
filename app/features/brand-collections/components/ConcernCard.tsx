import {
  DropletIcon,
  WheatIcon,
  ShieldIcon,
  LotusIcon,
  BoneIcon,
  WindIcon,
  ScaleIcon,
  BrainIcon,
} from '~/shared/icons';
import type {ComponentType} from 'react';

export interface ConcernData {
  id: string;
  name: string;
  color: string;
  headline: string;
  body: string;
  stat: string;
  statLabel: string;
}

const ICON_MAP: Record<string, ComponentType<any>> = {
  immunity: ShieldIcon,
  diabetes: DropletIcon,
  'hair-skin': LotusIcon,
  gut: WheatIcon,
  lungs: WindIcon,
  joints: BoneIcon,
  weight: ScaleIcon,
  mind: BrainIcon,
};

export function getConcernIcon(id: string): ComponentType<any> {
  return ICON_MAP[id] || ShieldIcon;
}

interface ConcernCardProps {
  concern: ConcernData;
  active: boolean;
  onClick: () => void;
}

export function ConcernCard({concern, active, onClick}: ConcernCardProps) {
  const Icon = getConcernIcon(concern.id);

  return (
    <button
      onClick={onClick}
      className={`concern-nav-card touch-target ${active ? 'concern-nav-card--active' : ''}`}
    >
      <Icon size={16} style={{color: concern.color, flexShrink: 0}} />
      <span className="concern-nav-card__name">{concern.name}</span>

      <style dangerouslySetInnerHTML={{__html: concernCardStyles}} />
    </button>
  );
}

const concernCardStyles = /* css */ `
  .concern-nav-card {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 8px;
    border-radius: 8px;
    background: transparent;
    color: var(--magil-ink);
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    width: 100%;
    text-align: left;
    transition: background 0.15s ease;
  }
  .concern-nav-card:hover {
    background: var(--magil-cream-warm);
  }
  .concern-nav-card--active {
    background: var(--magil-cream-warm);
  }
  .concern-nav-card__name {
    flex-shrink: 0;
  }

  /* Mobile: pill style for horizontal scroll */
  @media (max-width: 767px) {
    .concern-nav-card {
      flex-shrink: 0;
      width: auto;
      white-space: nowrap;
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid var(--magil-line);
      background: #fff;
      scroll-snap-align: start;
      min-height: 44px;
    }
    .concern-nav-card--active {
      background: var(--magil-red-deep);
      color: var(--magil-cream);
      border-color: var(--magil-red-deep);
    }
  }
`;
