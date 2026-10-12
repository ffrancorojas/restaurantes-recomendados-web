import { SearchFilter } from './components/search-filter';
import { LocalityFilter } from './components/locality-filter';
import { PriceFilter } from './components/price-filter';
import { TypesFilter } from './components/types-filter';
import { VisitedFilter } from './components/visited-filter';
import { styles } from './filters.styles';
import type { FiltersProps } from './filters.types';

export function Filters({
  query,
  locality,
  price,
  types,
  availableTypes,
  onlyVisited,
  onQueryChange,
  onLocalityChange,
  onPriceChange,
  onTypesChange,
  onVisitedChange,
}: FiltersProps) {
  return (
    <div data-responsive-toolbar style={styles.container}>
      <SearchFilter value={query} onChange={onQueryChange} />
      <div style={styles.row}>
        <LocalityFilter value={locality} onChange={onLocalityChange} />
        <PriceFilter value={price} onChange={onPriceChange} />
      </div>
      <TypesFilter value={types} options={availableTypes} onChange={onTypesChange} />
      <VisitedFilter value={onlyVisited} onChange={onVisitedChange} />
    </div>
  );
}
