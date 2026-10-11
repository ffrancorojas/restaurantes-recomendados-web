import type { RestaurantLinkTarget } from './restaurantLinks.types';

export function getRestaurantSearchQuery({ name, locality }: RestaurantLinkTarget) {
  return [name, locality].filter(Boolean).join(', ');
}

export function createMapsUrl(params: RestaurantLinkTarget) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(getRestaurantSearchQuery(params))}`;
}

export function createGoogleUrl(params: RestaurantLinkTarget) {
  return `https://www.google.com/search?q=${encodeURIComponent(getRestaurantSearchQuery(params))}`;
}
