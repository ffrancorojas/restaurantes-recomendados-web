import type { PriceRange, RestaurantType } from '@contracts';

export type PriceFilterValue = PriceRange | 'all';
export const RESTAURANT_PAGE_SIZES = [10, 25, 50, 100] as const;
export type RestaurantPageSize = (typeof RESTAURANT_PAGE_SIZES)[number];

export type RestaurantListState = {
  search: string;
  locality: string;
  price: PriceFilterValue;
  types: RestaurantType[];
  onlyVisited: boolean;
};

export type GetAllRestaurantsParams = {
  filters: RestaurantListState;
  requestedPage: number;
  requestedPageSize: RestaurantPageSize;
};
