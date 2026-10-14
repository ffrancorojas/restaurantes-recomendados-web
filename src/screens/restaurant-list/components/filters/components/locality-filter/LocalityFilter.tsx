import { TextField } from '@components/ui/controls/standalone/text-field';
import type { FiltersValueChangeParams } from '../../filters.types';

type LocalityFilterProps = { value: string; onChange: (params: FiltersValueChangeParams) => void };

export function LocalityFilter({ value, onChange }: LocalityFilterProps) {
  return (
    <TextField
      aria-label="Filtrar por localidad"
      className="min-width-zero"
      value={value}
      onChange={onChange}
      placeholder="Localidad: ej. Madrid"
    />
  );
}
