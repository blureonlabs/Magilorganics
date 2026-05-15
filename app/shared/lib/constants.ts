/**
 * Magil Organics — store-wide constants
 */

export const FREE_SHIPPING_THRESHOLD = 999;
export const STORE_NAME = 'Magil Organics';
export const STORE_NAME_TAMIL = '\u0BAE\u0B95\u0BBF\u0BB2\u0BCD \u0B86\u0BB0\u0BCD\u0B95\u0BBE\u0BA9\u0BBF\u0B95\u0BCD\u0BB8\u0BCD';
export const STORE_TAGLINE =
  'Honest village foods, hand-prepared by farming families across Tamil Nadu.';
export const STORE_TAGLINE_TAMIL =
  '\u0B95\u0BBF\u0BB0\u0BBE\u0BAE \u0B89\u0BA3\u0BB5\u0BC1\u0B95\u0BB3\u0BCD \u2014 \u0BAA\u0BBE\u0BB0\u0BAE\u0BCD\u0BAA\u0BB0\u0BBF\u0BAF \u0BAE\u0BC1\u0BB1\u0BC8\u0BAF\u0BBF\u0BB2\u0BCD';
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
  {label: 'Chooranams', to: '/collections/chooranams'},
  {label: 'Shop by Category', to: '/collections'},
  {label: 'Shop by Concern', to: '/concerns'},
  {label: 'Village Life', to: '/blogs/village-life'},
] as const;

export const FOOTER_CATEGORIES = [
  {label: 'Kudineers', to: '/collections/kudineers'},
  {label: 'Thailams', to: '/collections/thailams'},
  {label: 'Chooranams', to: '/collections/chooranams'},
  {label: 'Tablets', to: '/collections/tablets'},
  {label: 'Herbal Juices', to: '/collections/herbal-juices'},
  {label: 'Hair Care', to: '/collections/hair-care'},
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
