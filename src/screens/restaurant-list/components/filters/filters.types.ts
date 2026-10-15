import type { RestaurantType } from '@contracts';
import type { PriceFilterValue } from '@screens/restaurant-list/restaurantListScreen.types';
export type FiltersSearchChangeParams = { value: string };
export type FiltersVisitedChangeParams = { checked: boolean };
export type FiltersValueChangeParams = { value: string };
export type FiltersTypesChangeParams = { value: RestaurantType[] };
export type FiltersProps = {
  search: string;
  locality: string;
  price: PriceFilterValue;
  types: RestaurantType[];
  availableTypes: readonly RestaurantType[];
  onlyVisited: boolean;
  onSearchChange: (params: FiltersSearchChangeParams) => void;
  onLocalityChange: (params: FiltersValueChangeParams) => void;
  onPriceChange: (params: FiltersValueChangeParams) => void;
  onTypesChange: (params: FiltersTypesChangeParams) => void;
  onVisitedChange: (params: FiltersVisitedChangeParams) => void;
};
