import { useEffect, useMemo, useState } from 'react';
import { api } from '@api';
import { useAuthenticatedSession } from '@app/router/router.context';
import { getErrorMessage } from '@app/app.tools';
import type { Restaurant } from '@contracts';
import { filterRestaurants } from '@screens/restaurant-list/restaurantListScreen.tools';
export function useRestaurantListScreen() {
  const session = useAuthenticatedSession();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [onlyVisited, setOnlyVisited] = useState(false);
  useEffect(() => {
    setLoading(true);
    api
      .restaurants({ token: session.accessToken })
      .then((page) => setRestaurants(page.items))
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudieron cargar tus restaurantes.' })),
      )
      .finally(() => setLoading(false));
  }, [session]);
  const filtered = useMemo(
    () => filterRestaurants({ restaurants, query, onlyVisited }),
    [restaurants, query, onlyVisited],
  );
  const removeRestaurant = async (id: string) => {
    if (!window.confirm('¿Quieres eliminar esta entrada?')) return;
    await api.remove({ token: session.accessToken, id });
    setRestaurants((current) => current.filter((item) => item.id !== id));
  };
  return {
    restaurants,
    loading,
    error,
    query,
    onlyVisited,
    filtered,
    setQuery,
    setOnlyVisited,
    removeRestaurant,
  };
}
