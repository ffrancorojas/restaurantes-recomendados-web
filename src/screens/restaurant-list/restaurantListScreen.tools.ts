import type { FilterRestaurantsParams } from '@screens/restaurant-list/restaurantListScreen.types';

export function filterRestaurants({
  restaurants,
  query,
  locality,
  price,
  types,
  onlyVisited,
}: FilterRestaurantsParams) {
  const normalizedQuery = query.toLowerCase();
  const normalizedLocality = locality.toLowerCase();

  return restaurants.filter((restaurant) => {
    const text =
      `${restaurant.name} ${restaurant.locality} ${restaurant.dishes} ${restaurant.notes} ${restaurant.recommendedBy}`.toLowerCase();
    return (
      text.includes(normalizedQuery) &&
      restaurant.locality.toLowerCase().includes(normalizedLocality) &&
      (!price || restaurant.price === price) &&
      (!types.length || restaurant.type.some((type) => types.includes(type))) &&
      (!onlyVisited || restaurant.visited)
    );
  });
}
