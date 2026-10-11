import type { Restaurant } from '@contracts';
export type FilterRestaurantsParams = {
  restaurants: Restaurant[];
  query: string;
  onlyVisited: boolean;
};
export type UseRestaurantListScreenParams = { restaurants: Restaurant[] };
