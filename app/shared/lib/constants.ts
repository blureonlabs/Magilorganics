/**
 * Magil Organics — store-wide constants
 */

export const FREE_SHIPPING_THRESHOLD = 999;
export const STORE_NAME = 'Magil Organics';
export const STORE_TAGLINE =
  'Real Siddha remedies from real farms. Trusted by 12,000+ families.';
export const STORE_PHONE = ['9442668521', '9003456677'];
export const STORE_PHONE_PRIMARY = '+91 94426 68521';
export const STORE_PHONE_SECONDARY = '+91 90034 56677';
export const STORE_EMAIL = 'support@magilfoods.com';
export const STORE_ADDRESS =
  'Padamudipalayam, Paramathi Velur, Namakkal (Dt) - 638182';
export const STORE_HOURS = 'Mon-Sat, 9am-7pm IST';
export const CURRENCY_CODE = 'INR';

export const NAV_LINKS = [
  {label: 'Kudineers', to: '/collections/kudineers'},
  {label: 'Thailams', to: '/collections/thailams'},
  {label: 'Chooranams', to: '/collections/chooranam-powders'},
  {label: 'Shop by Category', to: '/collections'},
  {label: 'Shop by Concern', to: '/concerns'},
  {label: 'Village Life', to: '/blogs/village-life'},
] as const;

export const FOOTER_CATEGORIES = [
  {label: 'Kudineers', to: '/collections/kudineers'},
  {label: 'Thailams', to: '/collections/thailams'},
  {label: 'Chooranams', to: '/collections/chooranam-powders'},
  {label: 'Tablets', to: '/collections/tablets'},
  {label: 'Herbal Juices', to: '/collections/herbal-juices'},
  {label: 'Cosmetics & Hair Care', to: '/collections/cosmetics-hair-care'},
  {label: 'Kits', to: '/collections/kits'},
] as const;

export const FOOTER_CONCERNS = [
  {label: 'Diabetes Care', to: '/collections/diabetes-care'},
  {label: 'Piles Care', to: '/collections/piles-care'},
  {label: 'Lungs Care', to: '/collections/lungs-care'},
  {label: 'Immunity', to: '/collections/immunity'},
  {label: 'Weight Loss', to: '/collections/weight-loss'},
  {label: 'Hair & Skin', to: '/collections/hair-skin'},
] as const;

export const FOOTER_COMPANY = [
  {label: 'Our Story', to: '/pages/about'},
  {label: 'Village Stories', to: '/blogs/village-life'},
  {label: 'Recipes', to: '/blogs/recipes'},
  {label: 'Wholesale', to: '/pages/wholesale'},
  {label: 'Careers', to: '/pages/careers'},
] as const;

export const FOOTER_POLICIES = [
  {label: 'Privacy', to: '/policies/privacy-policy'},
  {label: 'Terms', to: '/policies/terms-of-service'},
  {label: 'Refunds', to: '/policies/refund-policy'},
  {label: 'Shipping', to: '/policies/shipping-policy'},
] as const;
