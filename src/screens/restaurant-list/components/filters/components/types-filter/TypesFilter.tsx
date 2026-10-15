import { MultiSelectField } from '@components/ui/controls/standalone';
import type { RestaurantType } from '@contracts';
import type { FiltersTypesChangeParams } from '../../filters.types';

type TypesFilterProps = {
  value: RestaurantType[];
  options: readonly RestaurantType[];
  onChange: (params: FiltersTypesChangeParams) => void;
};

export function TypesFilter({ value, options, onChange }: TypesFilterProps) {
  return (
    <div className="flex-column gap-small">
      <MultiSelectField
        label="Tipos de comida"
        value={value}
        options={options.map((type) => ({ value: type, label: type }))}
        emptyLabel="Todos los tipos de comida"
        clearLabel="Limpiar selección · Mostrar todos"
        onChange={onChange}
      />
    </div>
  );
}
