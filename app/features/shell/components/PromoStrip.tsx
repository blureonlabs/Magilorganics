import {TruckIcon, GiftIcon, LeafIcon, StarIcon} from '~/shared/icons';

const promos = [
  {icon: <TruckIcon />, text: 'Free delivery on orders above \u20B9999'},
  {icon: <GiftIcon />, text: 'Flat \u20B9500 OFF above \u20B93,000 \u2014 Use code MAGIL500'},
  {icon: <LeafIcon />, text: 'Every herb traced to a named farm in Tamil Nadu'},
  {icon: <StarIcon />, text: 'Glyphosate-free. Lab-tested. Siddha-verified.'},
];

export function PromoStrip() {
  // Triple the items for seamless looping
  const items = [...promos, ...promos, ...promos];

  return (
    <div className="magil-promo-strip" role="marquee" aria-label="Promotional offers">
      <div className="magil-promo-strip__track">
        {items.map((promo, i) => (
          <span key={i} className="magil-promo-strip__item">
            <span className="magil-promo-strip__icon">{promo.icon}</span>
            {promo.text}
          </span>
        ))}
      </div>
    </div>
  );
}
