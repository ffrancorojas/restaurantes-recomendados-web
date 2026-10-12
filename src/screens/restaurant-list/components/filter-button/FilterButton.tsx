import { Button } from '@components/buttons';
import { styles } from './filterButton.styles';
import type { FilterButtonProps } from './filterButton.types';

export function FilterButton({ open, onClick }: FilterButtonProps) {
  return (
    <Button.Text
      leftText={open ? 'Ocultar filtros' : 'Mostrar filtros'}
      iconName="filter"
      variant="secondary"
      type="button"
      aria-expanded={open}
      onClick={onClick}
      style={styles.button}
    />
  );
}
