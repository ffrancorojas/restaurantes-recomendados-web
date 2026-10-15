import type {
  FilterRestaurantsParams,
  RestaurantListState,
} from '@screens/restaurant-list/restaurantListScreen.types';
import type { Restaurant } from '@contracts';

export const INITIAL_RESTAURANT_LIST_STATE: RestaurantListState = {
  search: '',
  locality: '',
  price: '',
  types: [],
  onlyVisited: false,
};

export function getFilteredRestaurants({
  restaurants,
  state,
}: {
  restaurants: Restaurant[];
  state: RestaurantListState;
}) {
  return filterRestaurants({ restaurants, ...state });
}

export function filterRestaurants({
  restaurants,
  search,
  locality,
  price,
  types,
  onlyVisited,
}: FilterRestaurantsParams) {
  const normalizedSearch = search.toLowerCase();
  const normalizedLocality = locality.toLowerCase();

  return restaurants.filter((restaurant) => {
    const matchesFilters = [
      restaurant.name.toLowerCase().includes(normalizedSearch),
      restaurant.locality.toLowerCase().includes(normalizedLocality),
      !price || price === 'all' || restaurant.price === price,
      !types.length || restaurant.type.some((type) => types.includes(type)),
      !onlyVisited || restaurant.visited,
    ];

    return matchesFilters.every(Boolean);
  });
}
