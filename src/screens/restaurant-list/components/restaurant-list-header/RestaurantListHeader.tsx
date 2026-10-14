import { Button } from '@components/ui/buttons';
import { FilterButton } from '@screens/restaurant-list/components/filter-button';
import './restaurantListHeader.styles.scss';
import type { RestaurantListHeaderProps } from './restaurantListHeader.types';

export function RestaurantListHeader({
  onBack,
  onCreate,
  showFilters,
  filtersOpen,
  onToggleFilters,
}: RestaurantListHeaderProps) {
  return (
    <section className="flex-column gap-small width-full restaurant-list-header-hero">
      <div className="flex align-items-center gap-extra-large">
        <Button.Text
          rightText="Volver"
          iconName="back"
          variant="ghost"
          className="margin-left-compact padding-left-none"
          onClick={onBack}
        />
        <h1 className="margin-none text-title font-size-lg">Mi listado</h1>
      </div>
      <div className="flex align-items-stretch gap-small width-full min-width-zero restaurant-list-header-actions">
        <Button.Text
          rightText="Nueva entrada"
          iconName="add"
          className="min-width-zero font-extrabold font-size-base restaurant-list-header-createButton"
          onClick={onCreate}
        />
        {showFilters && <FilterButton open={filtersOpen} onClick={onToggleFilters} />}
      </div>
    </section>
  );
}
