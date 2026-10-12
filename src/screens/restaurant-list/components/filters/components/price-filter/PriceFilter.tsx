import { PRICE_RANGES, type PriceRange } from '@contracts';
import { SelectField } from '@components/select-field';
import type { FiltersValueChangeParams } from '../../filters.types';

type PriceFilterProps = { value: PriceRange; onChange: (params: FiltersValueChangeParams) => void };

export function PriceFilter({ value, onChange }: PriceFilterProps) {
  return (
    <SelectField
      label="Precio"
      value={value}
      options={[{ value: '', label: 'Todos los precios' }, ...PRICE_RANGES]}
      onChange={onChange}
    />
  );
}
