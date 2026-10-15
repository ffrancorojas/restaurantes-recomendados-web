import type { PriceRange, Restaurant, RestaurantType } from '@contracts';

export type PriceFilterValue = PriceRange | 'all';

export type RestaurantListState = {
  search: string;
  locality: string;
  price: PriceFilterValue;
  types: RestaurantType[];
  onlyVisited: boolean;
};

export type FilterRestaurantsParams = {
  restaurants: Restaurant[];
  search: string;
  locality: string;
  price: PriceFilterValue;
  types: Restaurant['type'];
  onlyVisited: boolean;
};
