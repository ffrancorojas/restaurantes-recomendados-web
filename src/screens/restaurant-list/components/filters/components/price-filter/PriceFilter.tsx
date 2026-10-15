import { PRICE_RANGES } from '@contracts';
import { SelectField } from '@components/ui/controls/standalone/select-field';
import type { PriceFilterValue } from '@screens/restaurant-list/restaurantListScreen.types';
import type { FiltersValueChangeParams } from '../../filters.types';

type PriceFilterProps = {
  value: PriceFilterValue;
  onChange: (params: FiltersValueChangeParams) => void;
};

export function PriceFilter({ value, onChange }: PriceFilterProps) {
  return (
    <SelectField
      label="Precio"
      className="min-width-zero"
      value={value}
      emptyValueLabel="Precio"
      options={[{ value: '', label: 'Precio' }, { value: 'all', label: 'Todos' }, ...PRICE_RANGES]}
      onChange={onChange}
    />
  );
}
