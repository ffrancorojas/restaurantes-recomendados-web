import { Button } from '@components/ui/buttons';
import { MultiSelectField } from '@components/ui/controls/standalone';
import type { RestaurantType } from '@contracts';
import type { FiltersTypesChangeParams } from '../../filters.types';
import './typesFilter.styles.scss';

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
      {value.length > 0 && (
        <div className="flex flex-wrap gap-small" role="group" aria-label="Tipos de comida seleccionados">
          {value.map((type) => (
            <Button.Text
              key={type}
              leftText={type}
              iconName="close"
              variant="secondary"
              aria-label={`Quitar filtro ${type}`}
              title={`Quitar filtro ${type}`}
              className="font-size-xs types-filter-selected-toggle"
              onClick={() => onChange({ value: value.filter((selectedType) => selectedType !== type) })}
            />
          ))}
        </div>
      )}
    </div>
  );
}
