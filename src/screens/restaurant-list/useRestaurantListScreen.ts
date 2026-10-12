import { useEffect, useMemo, useState } from 'react';
import { restaurantService } from '@services';
import { useAuthenticatedSession } from '@app/router/router.context';
import { getErrorMessage } from '@app/app.tools';
import type { Restaurant } from '@contracts';
import { filterRestaurants } from '@screens/restaurant-list/restaurantListScreen.tools';
import { RESTAURANT_TYPES } from '@assets/constants';
import type { PriceRange, RestaurantType } from '@contracts';
export function useRestaurantListScreen() {
  const session = useAuthenticatedSession();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [locality, setLocality] = useState('');
  const [price, setPrice] = useState<PriceRange>('');
  const [types, setTypes] = useState<RestaurantType[]>([]);
  const [onlyVisited, setOnlyVisited] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  useEffect(() => {
    setLoading(true);
    restaurantService
      .list({ token: session.accessToken })
      .then((page) => setRestaurants(page.items))
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudieron cargar tus restaurantes.' })),
      )
      .finally(() => setLoading(false));
  }, [session]);
  const filtered = useMemo(
    () => filterRestaurants({ restaurants, query, locality, price, types, onlyVisited }),
    [restaurants, query, locality, price, types, onlyVisited],
  );
  const removeRestaurant = async (id: string) => {
    if (!window.confirm('¿Quieres eliminar esta entrada?')) return;
    await restaurantService.remove({ token: session.accessToken, id });
    setRestaurants((current) => current.filter((item) => item.id !== id));
  };
  return {
    restaurants,
    loading,
    error,
    query,
    locality,
    price,
    types,
    onlyVisited,
    filtersOpen,
    availableTypes: RESTAURANT_TYPES,
    filtered,
    setQuery,
    setLocality,
    setPrice,
    setTypes,
    setOnlyVisited,
    setFiltersOpen,
    removeRestaurant,
  };
}
