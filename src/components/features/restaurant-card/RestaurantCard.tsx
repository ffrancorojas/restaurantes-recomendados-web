import { RestaurantLocation, RestaurantTags, RestaurantVisitStatus } from './components';
import { RestaurantAccordion } from '@components/ui/accordion';
import { useRestaurantLinks } from '@hooks/restaurant-links';
import './restaurantCard.styles.scss';
import type { RestaurantCardProps } from './restaurantCard.types';
import { getPriceLabel } from './restaurantCard.tools';

export function RestaurantCard({
  restaurant,
  onEdit,
  onRemove,
  onShare,
  onVisit,
}: RestaurantCardProps) {
  const { openMaps, openGoogle } = useRestaurantLinks();

  return (
    <RestaurantAccordion
      restaurant={restaurant}
      className="restaurant-card"
      collapsedContent={(expanded) => (
        <div className="flex align-items-flex-start gap-small restaurant-card-metadata-row">
          <div className="flex-column gap-compact min-width-zero restaurant-card-metadata">
            <div className="flex align-items-center gap-small min-width-zero restaurant-card-location-price">
              <RestaurantLocation locality={restaurant.locality} collapsed={!expanded} />
              {restaurant.price && (
                <span className="text-color font-semibold font-size-xs text-nowrap restaurant-card-price">
                  {getPriceLabel({ price: restaurant.price })}
                </span>
              )}
            </div>
            <RestaurantTags types={restaurant.type} />
          </div>
          <RestaurantVisitStatus restaurant={restaurant} onVisit={onVisit} />
        </div>
      )}
      onEdit={onEdit}
      onRemove={() => onRemove(restaurant)}
      onShare={onShare}
      onOpenMaps={() => openMaps({ restaurant })}
      onSearchGoogle={() => openGoogle({ restaurant })}
    />
  );
}
