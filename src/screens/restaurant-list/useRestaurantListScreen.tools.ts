import type { AuthSession } from '@contracts';
import type { ListRestaurantsParams } from '@services/services.types';
import type { RestaurantListState, RestaurantPageSize } from './restaurantListScreen.types';

type GetRestaurantListParams = {
  session: AuthSession;
  filters: RestaurantListState;
  requestedPageSize: RestaurantPageSize;
  requestedPage: number;
};

export function getRestaurantListParams({
  session,
  filters,
  requestedPageSize,
  requestedPage,
}: GetRestaurantListParams): ListRestaurantsParams {
  return {
    token: session.accessToken,
    query: filters.search,
    locality: filters.locality,
    price: filters.price && filters.price !== 'all' ? filters.price : undefined,
    types: filters.types,
    visitedOnly: filters.onlyVisited,
    limit: requestedPageSize,
    offset: (requestedPage - 1) * requestedPageSize,
  };
}
