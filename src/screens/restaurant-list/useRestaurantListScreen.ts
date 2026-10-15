import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { restaurantService } from '@services';
import { useAuthenticatedSession } from '@app/router/router.context';
import { getErrorMessage } from '@app/app.tools';
import type { Restaurant } from '@contracts';
import {
  getFilteredRestaurants,
  INITIAL_RESTAURANT_LIST_STATE,
} from '@screens/restaurant-list/restaurantListScreen.tools';
import type { RestaurantListState } from '@screens/restaurant-list/restaurantListScreen.types';
import { RESTAURANT_TYPES } from '@assets/constants';
import { shareRestaurant } from '@tools';

export function useRestaurantListScreen() {
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const [listState, setListState] = useState<RestaurantListState>(INITIAL_RESTAURANT_LIST_STATE);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [restaurantToRemoveId, setRestaurantToRemoveId] = useState<string | null>(null);
  const restaurantToRemove = restaurants.find(({ id }) => id === restaurantToRemoveId) ?? null;

  const updateListState = <TProperty extends keyof RestaurantListState>(
    property: TProperty,
    value: RestaurantListState[TProperty],
  ) => {
    setListState((current) => ({ ...current, [property]: value }));
  };

  const getAllRestaurant = useCallback(async () => {
    setLoading(true);
    restaurantService
      .list({ token: session.accessToken })
      .then((page) => setRestaurants(page.items))
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudieron cargar tus restaurantes.' })),
      )
      .finally(() => setLoading(false));
  }, [session.accessToken]);

  const confirmRemoveRestaurant = useCallback(() => {
    if (!restaurantToRemoveId) return;

    return restaurantService
      .remove({ token: session.accessToken, id: restaurantToRemoveId })
      .then(() => {
        setRestaurants((current) => current.filter((item) => item.id !== restaurantToRemoveId));
        setRestaurantToRemoveId(null);
      })
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudo eliminar el restaurante.' })),
      );
  }, [restaurantToRemoveId, session.accessToken]);

  useEffect(() => {
    getAllRestaurant();
  }, [getAllRestaurant]);

  const matchingRestaurants = useMemo(
    () => getFilteredRestaurants({
      restaurants,
      state: { ...listState, types: [] },
    }),
    [restaurants, listState],
  );
  const availableTypes = useMemo(
    () => RESTAURANT_TYPES.filter((type) =>
      matchingRestaurants.some((restaurant) => restaurant.type.includes(type)),
    ),
    [matchingRestaurants],
  );

  const selectedTypes = useMemo(
    () => listState.types.filter((type) => availableTypes.includes(type)),
    [listState.types, availableTypes],
  );

  const filtered = useMemo(
    () => getFilteredRestaurants({
      restaurants,
      state: { ...listState, types: selectedTypes },
    }),
    [restaurants, listState, selectedTypes],
  );

  const setSearch = (value: RestaurantListState['search']) => updateListState('search', value);
  const setLocality = (value: RestaurantListState['locality']) => updateListState('locality', value);
  const setPrice = (value: RestaurantListState['price']) => updateListState('price', value);
  const setTypes = (value: RestaurantListState['types']) => updateListState('types', value);
  const setOnlyVisited = (value: RestaurantListState['onlyVisited']) =>
    updateListState('onlyVisited', value);

  const onEdit = useCallback(
    (restaurant: Restaurant) => navigate(`/restaurants/${restaurant.id}/edit`),
    [navigate],
  );
  const onShare = useCallback(
    (restaurant: Restaurant) => shareRestaurant({ data: restaurant }),
    [],
  );
  const onVisit = useCallback(
    (restaurant: Restaurant) => navigate(`/restaurants/${restaurant.id}/visit`),
    [navigate],
  );

  const requestRemoveRestaurant = (id: string) => {
    setRestaurantToRemoveId(id);
  };
  const cancelRemoveRestaurant = () => setRestaurantToRemoveId(null);

  return {
    restaurants,
    loading,
    error,
    listState,
    filtersOpen,
    availableTypes,
    filtered,
    setSearch,
    setLocality,
    setPrice,
    setTypes,
    setOnlyVisited,
    onEdit,
    onShare,
    onVisit,
    setFiltersOpen,
    restaurantToRemove,
    requestRemoveRestaurant,
    cancelRemoveRestaurant,
    confirmRemoveRestaurant,
  };
}
