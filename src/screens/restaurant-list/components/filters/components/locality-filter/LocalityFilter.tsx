import { TextField } from '@components/ui/controls/text-field';
import type { FiltersValueChangeParams } from '../../filters.types';

type LocalityFilterProps = { value: string; onChange: (params: FiltersValueChangeParams) => void };

export function LocalityFilter({ value, onChange }: LocalityFilterProps) {
  return (
    <TextField
      aria-label="Filtrar por localidad"
      value={value}
      onChange={onChange}
      placeholder="Localidad: ej. Madrid"
    />
  );
}
