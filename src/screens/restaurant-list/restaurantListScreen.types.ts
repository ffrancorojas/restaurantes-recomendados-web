import type { Restaurant } from '@contracts';
export type FilterRestaurantsParams = {
  restaurants: Restaurant[];
  query: string;
  locality: string;
  price: Restaurant['price'];
  types: Restaurant['type'];
  onlyVisited: boolean;
};
