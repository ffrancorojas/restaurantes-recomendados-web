import { SearchFilter } from './components/search-filter';
import { LocalityFilter } from './components/locality-filter';
import { PriceFilter } from './components/price-filter';
import { TypesFilter } from './components/types-filter';
import { VisitedFilter } from './components/visited-filter';
import { Button } from '@components/ui/buttons';
import './filters.styles.scss';
import type { FiltersProps } from './filters.types';

export function Filters({
  search,
  locality,
  price,
  types,
  availableTypes,
  onlyVisited,
  onSearchChange,
  onLocalityChange,
  onPriceChange,
  onTypesChange,
  onVisitedChange,
  onApply,
  onClear,
}: FiltersProps) {
  return (
    <form
      className="flex-column gap-medium filters-container"
      onSubmit={(event) => {
        event.preventDefault();
        onApply();
      }}
    >
      <SearchFilter value={search} onChange={onSearchChange} />
      <div className="flex gap-medium filters-row">
        <LocalityFilter value={locality} onChange={onLocalityChange} />
        <PriceFilter value={price} onChange={onPriceChange} />
      </div>
      <TypesFilter value={types} options={availableTypes} onChange={onTypesChange} />
      <VisitedFilter value={onlyVisited} onChange={onVisitedChange} />
      <div className="flex gap-small filters-actions">
        <Button.Text rightText="Borrar filtros" type="button" variant="ghost" onClick={onClear} />
        <Button.Text rightText="Aplicar" type="submit" className="filters-apply-button" />
      </div>
    </form>
  );
}
