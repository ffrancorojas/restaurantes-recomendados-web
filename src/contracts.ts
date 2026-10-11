export { RESTAURANT_TYPES } from '@assets/constants/restaurantTypes';
export type { RestaurantType } from '@assets/constants/restaurantTypes';
import type { RestaurantType } from '@assets/constants/restaurantTypes';
export const PRICE_RANGES = [
  { value: 'under20', label: 'Menos de 20 €' },
  { value: '20to40', label: '20–40 €' },
  { value: '40to60', label: '40–60 €' },
  { value: '60to80', label: '60–80 €' },
  { value: '80to100', label: '80–100 €' },
  { value: 'over100', label: 'Más de 100 €' },
] as const;
export type PriceRange = '' | 'under20' | '20to40' | '40to60' | '60to80' | '80to100' | 'over100';
export type RestaurantRating = '' | 'loved' | 'liked' | 'neutral' | 'disliked' | 'disappointed';
export type RestaurantFormData = {
  name: string;
  locality: string;
  dishes: string;
  price: PriceRange;
  type: RestaurantType[];
  notes: string;
  recommendedBy: string;
  visited: boolean;
  opinion: string;
  rating: RestaurantRating;
};
export type Restaurant = RestaurantFormData & { id: string; createdAt: string };
export type User = {
  id: string;
  email: string;
  name: string;
  nick: string | null;
  createdAt: string;
};
export type AuthSession = { accessToken: string; expiresAt: string; user: User };
export type RestaurantPage = { items: Restaurant[]; limit: number; offset: number };
