import type { RestaurantFormData } from '@contracts';

export type SaveRestaurantCreateParams = { data: RestaurantFormData; id?: string };
export type RestaurantCreateScreenProps = {
  error?: string;
  onCancel: () => void;
  onSave: (params: SaveRestaurantCreateParams) => Promise<void>;
};
