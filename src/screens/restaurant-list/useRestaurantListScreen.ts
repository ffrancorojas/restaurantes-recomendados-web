import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { restaurantService } from '@services';
import { useAuthenticatedSession } from '@app/router/router.context';
import { getErrorMessage } from '@app/app.tools';
import type { Restaurant, RestaurantType } from '@contracts';
import { INITIAL_RESTAURANT_LIST_STATE } from '@screens/restaurant-list/restaurantListScreen.tools';
import {
  RESTAURANT_PAGE_SIZES,
  type GetAllRestaurantsParams,
  type RestaurantListState,
  type RestaurantPageSize,
} from '@screens/restaurant-list/restaurantListScreen.types';
import { RESTAURANT_TYPES } from '@assets/constants';
import { shareRestaurant } from '@tools';
import { getRestaurantListParams } from './useRestaurantListScreen.tools';

export function useRestaurantListScreen() {
  const navigate = useNavigate();
  const session = useAuthenticatedSession();
  const requestId = useRef(0);
  const searchDebounce = useRef<number | null>(null);
  const [listState, setListState] = useState<RestaurantListState>(INITIAL_RESTAURANT_LIST_STATE);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [availableTypes, setAvailableTypes] = useState<RestaurantType[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<RestaurantPageSize>(RESTAURANT_PAGE_SIZES[0]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [restaurantToRemove, setRestaurantToRemove] = useState<Restaurant | null>(null);

  const getAvailableTypes = useCallback(() => {
    return restaurantService
      .listTypes({ token: session.accessToken })
      .then((types) => setAvailableTypes(RESTAURANT_TYPES.filter((type) => types.includes(type))))
      .catch(() => setAvailableTypes([]));
  }, [session.accessToken]);

  const getAllRestaurants = useCallback(
    ({ filters, requestedPage, requestedPageSize }: GetAllRestaurantsParams) => {
      const currentRequestId = ++requestId.current;
      setLoading(true);
      setError('');

      return restaurantService
        .list(getRestaurantListParams({
          session,
          filters,
          requestedPageSize,
          requestedPage,
        }))
        .then((result) => {
          if (currentRequestId !== requestId.current) return;
          setRestaurants(result.items);
          setTotal(result.total);
          const actualPage = result.total ? Math.floor(result.offset / result.limit) + 1 : 1;
          setPage(actualPage);
        })
        .catch((cause) => {
          if (currentRequestId === requestId.current) {
            setError(getErrorMessage({ cause, fallback: 'No se pudieron cargar tus restaurantes.' }));
          }
        })
        .finally(() => {
          if (currentRequestId === requestId.current) setLoading(false);
        });
    },
    [session.accessToken],
  );

  useEffect(() => {
    getAvailableTypes();
    getAllRestaurants({
      filters: INITIAL_RESTAURANT_LIST_STATE,
      requestedPage: 1,
      requestedPageSize: RESTAURANT_PAGE_SIZES[0],
    });

    return () => {
      requestId.current += 1;
      if (searchDebounce.current !== null) window.clearTimeout(searchDebounce.current);
    };
  }, [getAllRestaurants, getAvailableTypes]);

  const hasActiveFilters = useMemo(
    () =>
      Boolean(
        listState.search.trim() ||
        listState.locality.trim() ||
        (listState.price && listState.price !== 'all') ||
        listState.types.length ||
        listState.onlyVisited,
      ),
    [listState],
  );

  const updateListState = <TProperty extends keyof RestaurantListState>(
    property: TProperty,
    value: RestaurantListState[TProperty],
  ) => {
    const filters = { ...listState, [property]: value };
    setListState((current) => ({ ...current, [property]: value }));
    setPage(1);

    if (searchDebounce.current !== null) window.clearTimeout(searchDebounce.current);
    if (property === 'search' && typeof value === 'string' && value.trim()) {
      requestId.current += 1;
      setLoading(true);
      setError('');
      searchDebounce.current = window.setTimeout(
        () =>
          getAllRestaurants({
            filters,
            requestedPage: 1,
            requestedPageSize: pageSize,
          }),
        250,
      );
      return;
    }

    getAllRestaurants({
      filters,
      requestedPage: 1,
      requestedPageSize: pageSize,
    });
  };

  const setSearch = (value: RestaurantListState['search']) => updateListState('search', value);
  const setLocality = (value: RestaurantListState['locality']) => updateListState('locality', value);
  const setPrice = (value: RestaurantListState['price']) => updateListState('price', value);
  const setTypes = (value: RestaurantListState['types']) => updateListState('types', value);
  const setOnlyVisited = (value: RestaurantListState['onlyVisited']) =>
    updateListState('onlyVisited', value);
  const changePage = (value: number) => {
    setPage(value);
    getAllRestaurants({ filters: listState, requestedPage: value, requestedPageSize: pageSize });
  };
  const changePageSize = (value: RestaurantPageSize) => {
    setPageSize(value);
    setPage(1);
    getAllRestaurants({ filters: listState, requestedPage: 1, requestedPageSize: value });
  };

  const confirmRemoveRestaurant = useCallback(() => {
    if (!restaurantToRemove) return;

    return restaurantService
      .remove({ token: session.accessToken, id: restaurantToRemove.id })
      .then(() => {
        setRestaurantToRemove(null);
        return getAllRestaurants({
          filters: listState,
          requestedPage: page,
          requestedPageSize: pageSize,
        });
      })
      .catch((cause) =>
        setError(getErrorMessage({ cause, fallback: 'No se pudo eliminar el restaurante.' })),
      );
  }, [getAllRestaurants, listState, page, pageSize, restaurantToRemove, session.accessToken]);

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
  const onBack = useCallback(() => navigate('/'), [navigate]);
  const onCreate = useCallback(() => navigate('/restaurants/new'), [navigate]);

  const requestRemoveRestaurant = (restaurant: Restaurant) => setRestaurantToRemove(restaurant);
  const cancelRemoveRestaurant = () => setRestaurantToRemove(null);

  return {
    restaurants,
    total,
    page,
    pageSize,
    loading,
    error,
    listState,
    hasActiveFilters,
    filtersOpen,
    availableTypes,
    setSearch,
    setLocality,
    setPrice,
    setTypes,
    setOnlyVisited,
    setPage: changePage,
    setPageSize: changePageSize,
    onEdit,
    onShare,
    onVisit,
    onBack,
    onCreate,
    setFiltersOpen,
    restaurantToRemove,
    requestRemoveRestaurant,
    cancelRemoveRestaurant,
    confirmRemoveRestaurant,
  };
}
