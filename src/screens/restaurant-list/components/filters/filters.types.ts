import type { PriceRange, RestaurantType } from '@contracts';
export type FiltersSearchChangeParams = { value: string };
export type FiltersVisitedChangeParams = { checked: boolean };
export type FiltersValueChangeParams = { value: string };
export type FiltersTypesChangeParams = { value: RestaurantType[] };
export type FiltersProps = {
  search: string;
  locality: string;
  price: PriceRange;
  types: RestaurantType[];
  availableTypes: readonly RestaurantType[];
  onlyVisited: boolean;
  onSearchChange: (params: FiltersSearchChangeParams) => void;
  onLocalityChange: (params: FiltersValueChangeParams) => void;
  onPriceChange: (params: FiltersValueChangeParams) => void;
  onTypesChange: (params: FiltersTypesChangeParams) => void;
  onVisitedChange: (params: FiltersVisitedChangeParams) => void;
};
