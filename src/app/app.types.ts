import type { AuthSession, Restaurant, RestaurantFormData } from '@contracts';
export type AppState = {
  session: AuthSession | null;
  view: AppView;
  restaurants: Restaurant[];
  loading: boolean;
  error: string;
  editing: Restaurant | 'new' | null;
};
export type AppView = 'list' | 'create';
export type StartEditingParams = { restaurant: Restaurant };
export type SaveRestaurantParams = { data: RestaurantFormData };
export type RemoveRestaurantParams = { id: string };
export type GetErrorMessageParams = { cause: unknown; fallback: string };
export type AppActions = {
  login: () => Promise<void>;
  logout: () => Promise<void>;
  startCreating: () => void;
  startEditing: (params: StartEditingParams) => void;
  cancelEditing: () => void;
  saveRestaurant: (params: SaveRestaurantParams) => Promise<void>;
  removeRestaurant: (params: RemoveRestaurantParams) => Promise<void>;
};
