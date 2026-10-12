import type { RestaurantFormData } from '@contracts';

export type RestaurantShareData = Pick<
  RestaurantFormData,
  'name' | 'locality' | 'dishes' | 'price' | 'type' | 'notes' | 'recommendedBy'
>;
export type ShareRestaurantParams = { data: RestaurantShareData };
