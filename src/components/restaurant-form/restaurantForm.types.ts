import type { RestaurantFormData } from '@contracts';
export type RestaurantFormInitialData = RestaurantFormData & {
  id?: string;
  createdAt?: string;
  source?: 'shared';
};
export type RestaurantFormProps = {
  error?: string;
  initial: RestaurantFormInitialData;
  onSave: (params: SaveRestaurantFormParams) => Promise<void>;
};
export type SaveRestaurantFormParams = { data: RestaurantFormData; id?: string };
export type SetRestaurantFieldParams<K extends keyof RestaurantFormData> = {
  key: K;
  value: RestaurantFormData[K];
};
export type UseRestaurantFormParams = {
  initial: RestaurantFormInitialData;
  onSave: (params: SaveRestaurantFormParams) => Promise<void>;
};
