export type BrandType = 'village-pharma' | 'magil';

export function isBrandVillagePharma(vendor: string): boolean {
  return vendor === 'Village Pharma';
}

export function getBrandType(vendor: string): BrandType {
  return isBrandVillagePharma(vendor) ? 'village-pharma' : 'magil';
}
