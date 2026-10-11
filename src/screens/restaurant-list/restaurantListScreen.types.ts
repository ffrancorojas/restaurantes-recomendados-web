import type { Restaurant, RestaurantFormData } from '@contracts';
export type FilterRestaurantsParams = {
  restaurants: Restaurant[];
  query: string;
  onlyVisited: boolean;
};
export type UseRestaurantListScreenParams = { restaurants: Restaurant[] };
export type RestaurantSelectionParams = { restaurant: Restaurant };
export type RestaurantIdParams = { id: string };
export type SaveRestaurantParams = { data: RestaurantFormData };
export type RestaurantListScreenProps = {
  restaurants: Restaurant[];
  loading: boolean;
  error: string;
  editing: Restaurant | null;
  onCreate: () => void;
  onEdit: (params: RestaurantSelectionParams) => void;
  onCancelEdit: () => void;
  onSave: (params: SaveRestaurantParams) => Promise<void>;
  onRemove: (params: RestaurantIdParams) => Promise<void>;
};
