export { RESTAURANT_TYPES } from '@assets/constants/restaurantTypes';
export type * from './contracts.types';
export const PRICE_RANGES = [
  { value: 'under20', label: '< 20' },
  { value: '20to40', label: '20–40 €' },
  { value: '40to60', label: '40–60 €' },
  { value: '60to80', label: '60–80 €' },
  { value: '80to100', label: '80-100 €' },
  { value: 'over100', label: '>100€' },
] as const;
