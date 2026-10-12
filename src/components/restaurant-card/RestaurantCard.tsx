import {
  CardActions,
  EditRestaurantButton,
  RestaurantDetails,
  RestaurantLocation,
  RestaurantOpinion,
  RestaurantTags,
  ToggleRestaurantInfoButton,
} from './components';
import { RestaurantLinkActions } from '@components/restaurant-link-actions';
import { styles } from './restaurantCard.styles';
import type { RestaurantCardProps } from './restaurantCard.types';
import { useState } from 'react';
import { getPriceLabel } from './restaurantCard.tools';

export function RestaurantCard({ restaurant, onEdit, onRemove, onShare }: RestaurantCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      style={styles.card}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        setExpanded((current) => !current);
      }}
    >
      <div style={styles.top}>
        <h2 style={styles.title}>{restaurant.name}</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <RestaurantLinkActions name={restaurant.name} locality={restaurant.locality} compact />
          <CardActions onEdit={onEdit} onRemove={onRemove} onShare={onShare} />
          <ToggleRestaurantInfoButton
            expanded={expanded}
            onToggle={() => setExpanded((current) => !current)}
          />
        </div>
      </div>
      <div style={styles.summaryRow}>
        <div style={styles.metadata}>
          <RestaurantLocation locality={restaurant.locality} />
          <RestaurantTags types={restaurant.type} />
          {restaurant.price && (
            <span style={styles.price}>{getPriceLabel({ price: restaurant.price })}</span>
          )}
        </div>
        <EditRestaurantButton visited={restaurant.visited} onClick={onEdit} />
      </div>
      {expanded && (
        <>
          <RestaurantDetails
            recommendedBy={restaurant.recommendedBy}
            dishes={restaurant.dishes}
            notes={restaurant.notes}
          />
          <RestaurantOpinion opinion={restaurant.opinion} />
        </>
      )}
    </article>
  );
}
