import type { Restaurant, RestaurantPage } from '@contracts';
import { httpRequest } from './http.service';
import type {
  AuthRequestParams,
  CreateRestaurantParams,
  RestaurantRequestParams,
  UpdateRestaurantParams,
} from './services.types';

export const restaurantService = {
  list: ({ token }: AuthRequestParams) =>
    httpRequest<RestaurantPage>({ path: '/restaurants?limit=100', token }),
  listRecommenders: ({ token }: AuthRequestParams) =>
    httpRequest<string[]>({ path: '/restaurants/recommenders', token }),
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
