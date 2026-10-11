import { TextField } from '@components/text-field';
import { styles } from './searchFilter.styles';
import type { SearchFilterProps } from './searchFilter.types';
export function SearchFilter({ value, onChange }: SearchFilterProps) {
  return (
    <div style={styles.container}>
      <TextField
        data-responsive-search
        value={value}
        onChange={onChange}
        placeholder="Buscar por nombre, ciudad o plato…"
      />
    </div>
  );
}
