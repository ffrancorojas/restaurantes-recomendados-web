import { Button } from '@components/ui/buttons';
import './filterButton.styles.scss';
import type { FilterButtonProps } from './filterButton.types';

export function FilterButton({ open, onClick }: FilterButtonProps) {
  return (
    <Button.Icon
      iconName="filter"
      name={open ? 'Ocultar filtros' : 'Mostrar filtros'}
      type="button"
      aria-expanded={open}
      aria-label={open ? 'Ocultar filtros' : 'Mostrar filtros'}
      title={open ? 'Ocultar filtros' : 'Mostrar filtros'}
      onClick={onClick}
      className="background-soft-sand text-muted radius-md padding-none filter-button-button"
    />
  );
}
