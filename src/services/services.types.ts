import type { PriceRange, RestaurantFormData, RestaurantType } from '@contracts';

export type ExchangeGoogleTokenParams = { idToken: string };
export type AuthRequestParams = { token: string };
export type ListRestaurantsParams = AuthRequestParams & {
  query?: string;
  locality?: string;
  price?: Exclude<PriceRange, ''>;
  types?: RestaurantType[];
  visitedOnly?: boolean;
  limit?: number;
  offset?: number;
};
export type CreateRestaurantParams = { token: string; data: RestaurantFormData };
export type UpdateRestaurantParams = {
  token: string;
  id: string;
  data: Partial<RestaurantFormData>;
};
export type RestaurantRequestParams = { token: string; id: string };
