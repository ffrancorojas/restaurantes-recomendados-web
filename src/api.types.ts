import type { RestaurantFormData } from '@contracts';
export type RequestParams = { path: string; options?: RequestInit; token?: string };
export type ExchangeGoogleTokenParams = { idToken: string };
export type AuthRequestParams = { token: string };
export type CreateRestaurantParams = { token: string; data: RestaurantFormData };
export type UpdateRestaurantParams = {
  token: string;
  id: string;
  data: Partial<RestaurantFormData>;
};
export type RestaurantRequestParams = { token: string; id: string };
