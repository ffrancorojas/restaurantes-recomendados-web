import type { RestaurantListState } from '@screens/restaurant-list/restaurantListScreen.types';

export const INITIAL_RESTAURANT_LIST_STATE: RestaurantListState = {
  search: '',
  locality: '',
  price: '',
  types: [],
  onlyVisited: false,
};
