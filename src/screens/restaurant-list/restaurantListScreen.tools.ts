import type { FilterRestaurantsParams } from '@screens/restaurant-list/restaurantListScreen.types';

export function filterRestaurants({ restaurants, query, onlyVisited }: FilterRestaurantsParams) {
  const normalizedQuery = query.toLowerCase();

  return restaurants.filter(({ locality, name, dishes, notes, recommendedBy, visited }) => {
    const text = `${name} ${locality} ${dishes} ${notes} ${recommendedBy}`.toLowerCase();
    return text.includes(normalizedQuery) && (!onlyVisited || visited);
  });
}
