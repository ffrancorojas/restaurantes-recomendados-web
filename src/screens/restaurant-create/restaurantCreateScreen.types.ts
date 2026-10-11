import type { RestaurantFormData } from '@contracts';

export type SaveRestaurantCreateParams = { data: RestaurantFormData };
export type RestaurantCreateScreenProps = {
  onCancel: () => void;
  onSave: (params: SaveRestaurantCreateParams) => Promise<void>;
};
