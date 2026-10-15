import type { Restaurant, RestaurantPage, RestaurantType } from '@contracts';
import { httpDownload, httpRequest } from './http.service';
import type {
  AuthRequestParams,
  CreateRestaurantParams,
  ListRestaurantsParams,
  RestaurantRequestParams,
  UpdateRestaurantParams,
} from './services.types';

export const restaurantService = {
  list: ({
    token,
    query = '',
    locality = '',
    price,
    types = [],
    visitedOnly = false,
    limit = 50,
    offset = 0,
  }: ListRestaurantsParams) => {
    const params = new URLSearchParams({ limit: String(limit), offset: String(offset) });
    if (query) params.set('query', query);
    if (locality) params.set('locality', locality);
    if (price) params.set('price', price);
    types.forEach((type) => params.append('types', type));
    if (visitedOnly) params.set('visitedOnly', 'true');

    return httpRequest<RestaurantPage>({ path: `/restaurants?${params}`, token });
  },
  listTypes: ({ token }: AuthRequestParams) =>
    httpRequest<RestaurantType[]>({ path: '/restaurants/types', token }),
  listRecommenders: ({ token }: AuthRequestParams) =>
    httpRequest<string[]>({ path: '/restaurants/recommenders', token }),
  exportAll: ({ token }: AuthRequestParams) => httpDownload({ path: '/restaurants/export', token }),
  getById: ({ token, id }: RestaurantRequestParams) =>
    httpRequest<Restaurant>({ path: `/restaurants/${id}`, token }),
  create: ({ token, data }: CreateRestaurantParams) =>
    httpRequest<Restaurant>({
      path: '/restaurants',
      options: { method: 'POST', body: JSON.stringify(data) },
      token,
    }),
  update: ({ token, id, data }: UpdateRestaurantParams) =>
    httpRequest<Restaurant>({
      path: `/restaurants/${id}`,
      options: { method: 'PATCH', body: JSON.stringify(data) },
      token,
    }),
  remove: ({ token, id }: RestaurantRequestParams) =>
    httpRequest<void>({ path: `/restaurants/${id}`, options: { method: 'DELETE' }, token }),
};
