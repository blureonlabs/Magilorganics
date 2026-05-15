import {TruckIcon, GiftIcon, LeafIcon, StarIcon} from '~/shared/icons';

const promos = [
  {icon: <TruckIcon />, text: 'Free shipping on orders above Rs.999'},
  {icon: <GiftIcon />, text: 'Festival offer: Rs.500 OFF above Rs.3000 - Code: MAGIL500'},
  {icon: <LeafIcon />, text: 'New: Pro-Protein Multigrain Atta - 22g protein per serving'},
  {icon: <StarIcon />, text: '100% organic, village-made Siddha products from Tamil Nadu'},
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
