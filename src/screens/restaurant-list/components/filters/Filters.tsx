import { SearchFilter } from './components/search-filter';
import { VisitedFilter } from './components/visited-filter';
import { styles } from './filters.styles';
import type { FiltersProps } from './filters.types';

export function Filters({ query, onlyVisited, onQueryChange, onVisitedChange }: FiltersProps) {
  return (
    <div data-responsive-toolbar style={styles.container}>
      <SearchFilter value={query} onChange={onQueryChange} />
      <VisitedFilter value={onlyVisited} onChange={onVisitedChange} />
    </div>
  );
}
