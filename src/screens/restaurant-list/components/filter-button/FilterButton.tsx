import { Button } from '@components/buttons';
import { styles } from './filterButton.styles';
import type { FilterButtonProps } from './filterButton.types';

export function FilterButton({ open, onClick }: FilterButtonProps) {
  return (
    <Button.Text
      iconName="filter"
      variant="secondary"
      type="button"
      aria-expanded={open}
      aria-label={open ? 'Ocultar filtros' : 'Mostrar filtros'}
      title={open ? 'Ocultar filtros' : 'Mostrar filtros'}
      onClick={onClick}
      style={styles.button}
    />
  );
}
