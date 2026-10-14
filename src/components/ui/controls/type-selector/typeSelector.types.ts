import type { RestaurantType } from '@contracts';

export type TypeSelectorChangeParams = { value: RestaurantType[] };
export type TypeSelectorProps = {
  value: RestaurantType[];
  onChange: (params: TypeSelectorChangeParams) => void;
};
