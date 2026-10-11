import type { AuthSession, Restaurant, RestaurantFormData, RestaurantPage, User } from './contracts';

const baseUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1').replace(/\/$/, '');

async function request<T>(path: string, options: RequestInit = {}, token?: string): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers },
  });
  if (response.status === 204) return undefined as T;
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(Array.isArray(data.message) ? data.message.join('\n') : data.message || 'No se pudo completar la solicitud.');
  return data as T;
}

export const api = {
  exchangeGoogleToken: (idToken: string) => request<AuthSession>('/auth/google', { method: 'POST', body: JSON.stringify({ idToken }) }),
  me: (token: string) => request<User>('/auth/me', {}, token),
  logout: (token: string) => request<void>('/auth/logout', { method: 'POST' }, token),
  restaurants: (token: string) => request<RestaurantPage>('/restaurants?limit=100', {}, token),
  create: (token: string, data: RestaurantFormData) => request<Restaurant>('/restaurants', { method: 'POST', body: JSON.stringify(data) }, token),
  update: (token: string, id: string, data: Partial<RestaurantFormData>) => request<Restaurant>(`/restaurants/${id}`, { method: 'PATCH', body: JSON.stringify(data) }, token),
  remove: (token: string, id: string) => request<void>(`/restaurants/${id}`, { method: 'DELETE' }, token),
};
