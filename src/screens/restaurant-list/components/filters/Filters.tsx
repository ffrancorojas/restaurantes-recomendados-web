import { SearchFilter } from './components/search-filter';
import { LocalityFilter } from './components/locality-filter';
import { PriceFilter } from './components/price-filter';
import { TypesFilter } from './components/types-filter';
import { VisitedFilter } from './components/visited-filter';
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
}: FiltersProps) {
  return (
    <div className="flex-column gap-medium filters-container">
      <SearchFilter value={search} onChange={onSearchChange} />
      <div className="flex gap-medium filters-row">
        <LocalityFilter value={locality} onChange={onLocalityChange} />
        <PriceFilter value={price} onChange={onPriceChange} />
      </div>
      <TypesFilter value={types} options={availableTypes} onChange={onTypesChange} />
      <VisitedFilter value={onlyVisited} onChange={onVisitedChange} />
    </div>
  );
}
