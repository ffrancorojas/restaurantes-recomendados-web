import { TextField } from '@components/ui/controls/standalone/text-field';
import './searchFilter.styles.scss';
import type { SearchFilterProps } from './searchFilter.types';
export function SearchFilter({ value, onChange }: SearchFilterProps) {
  return (
    <div className="width-full">
      <TextField
        className="width-full search-filter-input"
        value={value}
        onChange={onChange}
        placeholder="Buscar en mis recomendaciones"
      />
    </div>
  );
}
