import {
  CardActions,
  RestaurantDetails,
  RestaurantLocation,
  RestaurantOpinion,
  RestaurantTags,
  RestaurantVisitStatus,
  ToggleRestaurantInfoButton,
} from './components';
import { RestaurantLinkActions } from '@components/features/restaurant-link-actions';
import './restaurantCard.styles.scss';
import type { RestaurantCardProps } from './restaurantCard.types';
import { useState } from 'react';
import { getPriceLabel } from './restaurantCard.tools';

export function RestaurantCard({
  restaurant,
  onEdit,
  onRemove,
  onShare,
  onVisit,
}: RestaurantCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="card background-surface radius-card border-default flex-column min-width-zero"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        setExpanded((current) => !current);
      }}
    >
      <div className="flex align-items-flex-end justify-content-space-between gap-small">
        <h2 className="margin-none min-width-zero font-black font-size-lg restaurant-card-title">{restaurant.name}</h2>
        <CardActions
          onEdit={onEdit}
          onRemove={() => onRemove(restaurant)}
          onShare={onShare}
          showRemove={false}
          showShare={false}
        />
        <div className="flex gap-small">
          <RestaurantLinkActions name={restaurant.name} locality={restaurant.locality} compact />
          <ToggleRestaurantInfoButton
            expanded={expanded}
            onToggle={() => setExpanded((current) => !current)}
          />
        </div>
      </div>
      <div className="flex align-items-flex-start gap-small margin-top-small">
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
      {expanded && (
        <>
          <RestaurantDetails
            recommendedBy={restaurant.recommendedBy}
            dishes={restaurant.dishes}
            notes={restaurant.notes}
          />
          <RestaurantOpinion opinion={restaurant.opinion} />
            <div className="flex justify-content-flex-end margin-top-small">
            <CardActions
              onEdit={onEdit}
              onRemove={() => onRemove(restaurant)}
              onShare={onShare}
              showEdit={false}
            />
          </div>
        </>
      )}
    </article>
  );
}
