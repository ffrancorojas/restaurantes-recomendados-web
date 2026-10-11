import type { AuthSession, Restaurant, RestaurantFormData, RestaurantPage, User } from '@contracts';
import type {
  AuthRequestParams,
  CreateRestaurantParams,
  ExchangeGoogleTokenParams,
  RequestParams,
  RestaurantRequestParams,
  UpdateRestaurantParams,
} from '@api.types';

const baseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1').replace(/\/$/, '');

async function request<T>({ path, options = {}, token }: RequestParams): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });
  if (response.status === 204) return undefined as T;
  const data = await response.json().catch(() => ({}));
  if (!response.ok)
    throw new Error(
      Array.isArray(data.message)
        ? data.message.join('\n')
        : data.message || 'No se pudo completar la solicitud.',
    );
  return data as T;
}

export const api = {
  exchangeGoogleToken: ({ idToken }: ExchangeGoogleTokenParams) =>
    request<AuthSession>({
      path: '/auth/google',
      options: { method: 'POST', body: JSON.stringify({ idToken }) },
    }),
  me: ({ token }: AuthRequestParams) => request<User>({ path: '/auth/me', token }),
  logout: ({ token }: AuthRequestParams) =>
    request<void>({ path: '/auth/logout', options: { method: 'POST' }, token }),
  restaurants: ({ token }: AuthRequestParams) =>
    request<RestaurantPage>({ path: '/restaurants?limit=100', token }),
  create: ({ token, data }: CreateRestaurantParams) =>
    request<Restaurant>({
      path: '/restaurants',
      options: { method: 'POST', body: JSON.stringify(data) },
      token,
    }),
  update: ({ token, id, data }: UpdateRestaurantParams) =>
    request<Restaurant>({
      path: `/restaurants/${id}`,
      options: { method: 'PATCH', body: JSON.stringify(data) },
      token,
    }),
  remove: ({ token, id }: RestaurantRequestParams) =>
    request<void>({ path: `/restaurants/${id}`, options: { method: 'DELETE' }, token }),
};
