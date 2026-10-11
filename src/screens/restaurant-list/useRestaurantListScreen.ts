import { useMemo, useState } from 'react';
import type { UseRestaurantListScreenParams } from '@screens/restaurant-list/restaurantListScreen.types';
import { filterRestaurants } from '@screens/restaurant-list/restaurantListScreen.tools';
export function useRestaurantListScreen({ restaurants }: UseRestaurantListScreenParams) {
  const [query, setQuery] = useState('');
  const [onlyVisited, setOnlyVisited] = useState(false);
  const filtered = useMemo(
    () => filterRestaurants({ restaurants, query, onlyVisited }),
    [restaurants, query, onlyVisited],
  );
  return { query, onlyVisited, filtered, setQuery, setOnlyVisited };
}
