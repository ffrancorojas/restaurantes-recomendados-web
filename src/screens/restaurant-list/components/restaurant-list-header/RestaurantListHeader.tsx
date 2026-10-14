import { Button } from '@components/buttons';
import { FilterButton } from '@screens/restaurant-list/components/filter-button';
import { styles } from './restaurantListHeader.styles';
import type { RestaurantListHeaderProps } from './restaurantListHeader.types';

export function RestaurantListHeader({
  onBack,
  onCreate,
  showFilters,
  filtersOpen,
  onToggleFilters,
}: RestaurantListHeaderProps) {
  return (
    <section data-responsive-hero style={styles.hero}>
      <div style={styles.headingRow}>
        <Button.Text rightText="Volver" iconName="back" variant="ghost" onClick={onBack} />
        <h1 className="text-title" style={styles.heading}>
          Mi listado
        </h1>
      </div>
      <div data-responsive-actions style={styles.actions}>
        {showFilters && <FilterButton open={filtersOpen} onClick={onToggleFilters} />}
        <Button.Text
          rightText="Nueva entrada"
          iconName="add"
          data-responsive-new
          style={styles.createButton}
          onClick={onCreate}
        />
      </div>
    </section>
  );
}
