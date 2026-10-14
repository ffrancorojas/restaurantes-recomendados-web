import { TextField } from '@components/ui/controls/standalone/text-field';
import { styles } from './searchFilter.styles';
import type { SearchFilterProps } from './searchFilter.types';
export function SearchFilter({ value, onChange }: SearchFilterProps) {
  return (
    <div style={styles.container}>
      <TextField
        data-responsive-search
        value={value}
        onChange={onChange}
        placeholder="Buscar en mis recomendaciones"
      />
    </div>
  );
}
