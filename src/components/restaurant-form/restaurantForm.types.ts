import type { Restaurant, RestaurantFormData } from '@contracts';
export type RestaurantFormProps = {
  error?: string;
  initial: Restaurant | 'new';
  variant?: 'modal' | 'page';
  onCancel: () => void;
  onSave: (params: SaveRestaurantFormParams) => Promise<void>;
};
export type SaveRestaurantFormParams = { data: RestaurantFormData; id?: string };
export type SetRestaurantFieldParams<K extends keyof RestaurantFormData> = {
  key: K;
  value: RestaurantFormData[K];
};
export type UseRestaurantFormParams = {
  initial: Restaurant | 'new';
  onSave: (params: SaveRestaurantFormParams) => Promise<void>;
};
