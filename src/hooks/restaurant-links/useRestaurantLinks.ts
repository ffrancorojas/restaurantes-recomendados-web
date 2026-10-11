import { createGoogleUrl, createMapsUrl } from './restaurantLinks.tools';
import type { UseRestaurantLinksResult } from './restaurantLinks.types';

export function useRestaurantLinks(): UseRestaurantLinksResult {
  const open = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return {
    openMaps: ({ restaurant }) => open(createMapsUrl(restaurant)),
    openGoogle: ({ restaurant }) => open(createGoogleUrl(restaurant)),
  };
}
