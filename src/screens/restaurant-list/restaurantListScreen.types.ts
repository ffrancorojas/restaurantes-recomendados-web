import type { PriceRange, Restaurant, RestaurantType } from '@contracts';

export type RestaurantListState = {
  search: string;
  locality: string;
  price: PriceRange;
  types: RestaurantType[];
  onlyVisited: boolean;
};

export type FilterRestaurantsParams = {
  restaurants: Restaurant[];
  search: string;
  locality: string;
  price: Restaurant['price'];
  types: Restaurant['type'];
  onlyVisited: boolean;
};
