export const VP_COLLECTION_HANDLES = [
  'kits',
  'tablets',
  'kudineers',
  'chooranam-powders',
  'thailams',
  'herbal-juices',
  'cosmetics-hair-care',
  'herbal-soaps',
];

export const MAGIL_COLLECTION_HANDLES = ['cold-pressed-oils'];

export interface CollectionMeta {
  handle: string;
  name: string;
  blurb: string;
  color: string;
  bg: string;
  glyph: string;
}

export const VP_COLLECTION_META: CollectionMeta[] = [
  {
    handle: 'kits',
    name: 'Kits',
    blurb: 'Curated bundles \u2014 Dr Slim, Piles Care, Lungs Care, Hair Kit. Best value for daily concerns.',
    color: '#8B0E20',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #E8A777 100%)',
    glyph: 'kit',
  },
  {
    handle: 'tablets',
    name: 'Tablets',
    blurb: 'Ashwagandha, Triphala, Immunity, Skin Care, Piles, Night Booster \u2014 60-count bottles.',
    color: '#E8A317',
    bg: 'linear-gradient(135deg, #FBF6EC 0%, #FBE6A7 100%)',
    glyph: 'tablet',
  },
  {
    handle: 'kudineers',
    name: 'Kudineers',
    blurb: 'Kabasura, Vathasura, Pithasura \u2014 three classical Siddha decoctions, brewed the village way.',
    color: '#5C0815',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #C8957C 100%)',
    glyph: 'kudineer',
  },
  {
    handle: 'chooranam-powders',
    name: 'Chooranams \u00b7 Powders',
    blurb: 'Triphala, Guru Marunthu, Dr Brain, Dr Skin, Detox, Piles, Lungs Care, Night Booster.',
    color: '#B8732A',
    bg: 'linear-gradient(135deg, #FBE6A7 0%, #D9C193 100%)',
    glyph: 'chooranam',
  },
  {
    handle: 'thailams',
    name: 'Thailams \u00b7 Herbal Oils',
    blurb: 'Ulunthu, Karpoorathi, Pinda, Kayathirumeni, Karunjeeraga \u2014 traditional warming oils for body & joints.',
    color: '#5A3A2A',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #D9B57C 100%)',
    glyph: 'thailam',
  },
  {
    handle: 'herbal-juices',
    name: 'Herbal Juices',
    blurb: 'Amla, Aloe, Wheat Grass, Triphala, Bottle Gourd, Banana Stem, Fig, Power Plus \u2014 cold-pressed wellness.',
    color: '#2A5F3E',
    bg: 'linear-gradient(135deg, #DFE9D5 0%, #A8C795 100%)',
    glyph: 'juice',
  },
  {
    handle: 'cosmetics-hair-care',
    name: 'Cosmetics & Personal Care',
    blurb: 'Onion Hair Oil, Hibiscus, Amla, Herbal Hair Wash, Seeram, Face Wash Powder, VCO.',
    color: '#A14828',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #E8C57C 100%)',
    glyph: 'cosmetic',
  },
  {
    handle: 'herbal-soaps',
    name: 'Herbal Soaps',
    blurb: 'Mul thani Metti, Kuppaimeni, Aavarmpoo, Vaalai Ellai, Kadalai Maavu \u2014 village-recipe soaps.',
    color: '#A14828',
    bg: 'linear-gradient(135deg, #FBE6A7 0%, #E8A317 100%)',
    glyph: 'soap',
  },
];

export const MAGIL_COLLECTION_META: CollectionMeta[] = [
  {
    handle: 'cold-pressed-oils',
    name: 'Cold-Pressed Oils',
    blurb: 'Groundnut, Gingelly, Coconut, Castor, Deepam. Single-filtered, wood-pressed. 500ml \u00b7 1L \u00b7 5L.',
    color: '#8B0E20',
    bg: 'linear-gradient(135deg, #FBE6A7 0%, #E8A317 100%)',
    glyph: 'bottle',
  },
];
