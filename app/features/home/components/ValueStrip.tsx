import {LeafIcon, LampIcon, ShieldIcon, StarIcon} from '~/shared/icons';

const ITEMS = [
  {label: 'Glyphosate-free, lab-tested', Icon: LeafIcon},
  {label: 'Hand-prepared by farming families', Icon: LampIcon},
  {label: '3,000-year-old Siddha wisdom', Icon: ShieldIcon},
  {label: 'No outsourcing \u2014 packed in our village', Icon: StarIcon},
  {label: 'Sun-dried, never industrial', Icon: LeafIcon},
  {label: 'Free-grazed, native breeds only', Icon: ShieldIcon},
];

export function ValueStrip() {
  return (
    <div className="value-strip">
      <div className="value-strip__track">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <span key={i} className="value-strip__item">
            <item.Icon size={14} />
            {item.label}
          </span>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: valueStripStyles}} />
    </div>
  );
}

const valueStripStyles = /* css */ `
  .value-strip {
    background: var(--magil-red-deep);
    color: var(--magil-cream);
    padding: 16px 0;
    overflow: hidden;
    border-top: 1px solid var(--magil-gold);
    border-bottom: 1px solid var(--magil-gold);
  }

  .value-strip__track {
    display: flex;
    gap: 60px;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 500;
    animation: magil-marquee 60s linear infinite;
  }

  .value-strip__item {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
`;
