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
  tamil: string;
  blurb: string;
  color: string;
  bg: string;
  glyph: string;
}

export const VP_COLLECTION_META: CollectionMeta[] = [
  {
    handle: 'kits',
    name: 'Kits',
    tamil: '\u0BA4\u0BCA\u0B95\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1',
    blurb: 'Curated bundles \u2014 Dr Slim, Piles Care, Lungs Care, Hair Kit. Best value for daily concerns.',
    color: '#8B0E20',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #E8A777 100%)',
    glyph: 'kit',
  },
  {
    handle: 'tablets',
    name: 'Tablets',
    tamil: '\u0BAE\u0BBE\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC8',
    blurb: 'Ashwagandha, Triphala, Immunity, Skin Care, Piles, Night Booster \u2014 60-count bottles.',
    color: '#E8A317',
    bg: 'linear-gradient(135deg, #FBF6EC 0%, #FBE6A7 100%)',
    glyph: 'tablet',
  },
  {
    handle: 'kudineers',
    name: 'Kudineers',
    tamil: '\u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD',
    blurb: 'Kabasura, Vathasura, Pithasura \u2014 three classical Siddha decoctions, brewed the village way.',
    color: '#5C0815',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #C8957C 100%)',
    glyph: 'kudineer',
  },
  {
    handle: 'chooranam-powders',
    name: 'Chooranams \u00b7 Powders',
    tamil: '\u0B9A\u0BC2\u0BB0\u0BA3\u0BAE\u0BCD',
    blurb: 'Triphala, Guru Marunthu, Dr Brain, Dr Skin, Detox, Piles, Lungs Care, Night Booster.',
    color: '#B8732A',
    bg: 'linear-gradient(135deg, #FBE6A7 0%, #D9C193 100%)',
    glyph: 'chooranam',
  },
  {
    handle: 'thailams',
    name: 'Thailams \u00b7 Herbal Oils',
    tamil: '\u0BA4\u0BC8\u0BB2\u0BAE\u0BCD',
    blurb: 'Ulunthu, Karpoorathi, Pinda, Kayathirumeni, Karunjeeraga \u2014 traditional warming oils for body & joints.',
    color: '#5A3A2A',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #D9B57C 100%)',
    glyph: 'thailam',
  },
  {
    handle: 'herbal-juices',
    name: 'Herbal Juices',
    tamil: '\u0B9A\u0BBE\u0BB1\u0BC1\u0B95\u0BB3\u0BCD',
    blurb: 'Amla, Aloe, Wheat Grass, Triphala, Bottle Gourd, Banana Stem, Fig, Power Plus \u2014 cold-pressed wellness.',
    color: '#2A5F3E',
    bg: 'linear-gradient(135deg, #DFE9D5 0%, #A8C795 100%)',
    glyph: 'juice',
  },
  {
    handle: 'cosmetics-hair-care',
    name: 'Cosmetics & Personal Care',
    tamil: '\u0B85\u0BB4\u0B95\u0BC1\u0B9A\u0BBE\u0BA4\u0BA9\u0BAE\u0BCD',
    blurb: 'Onion Hair Oil, Hibiscus, Amla, Herbal Hair Wash, Seeram, Face Wash Powder, VCO.',
    color: '#A14828',
    bg: 'linear-gradient(135deg, #F5EBD7 0%, #E8C57C 100%)',
    glyph: 'cosmetic',
  },
  {
    handle: 'herbal-soaps',
    name: 'Herbal Soaps',
    tamil: '\u0B9A\u0BCB\u0BAA\u0BCD\u0BAA\u0BC1\u0B95\u0BB3\u0BCD',
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
    tamil: '\u0B9A\u0BC6\u0B95\u0BCD\u0B95\u0BC1 \u0B8E\u0BA3\u0BCD\u0BA3\u0BC6\u0BAF\u0BCD',
    blurb: 'Groundnut, Gingelly, Coconut, Castor, Deepam. Single-filtered, wood-pressed. 500ml \u00b7 1L \u00b7 5L.',
    color: '#8B0E20',
    bg: 'linear-gradient(135deg, #FBE6A7 0%, #E8A317 100%)',
    glyph: 'bottle',
  },
];
