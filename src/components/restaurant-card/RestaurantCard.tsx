import {
  CardActions,
  EditRestaurantButton,
  RestaurantDetails,
  RestaurantLocation,
  RestaurantOpinion,
  RestaurantTags,
} from './components';
import { RestaurantLinkActions } from '@components/restaurant-link-actions';
import { styles } from './restaurantCard.styles';
import type { RestaurantCardProps } from './restaurantCard.types';
import { useState } from 'react';

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
          <RestaurantLinkActions name={restaurant.name} locality={restaurant.locality} />
          <CardActions onEdit={onEdit} onRemove={onRemove} onShare={onShare} />
        </div>
      </div>
      <RestaurantLocation locality={restaurant.locality} />
      <RestaurantTags types={restaurant.type} visited={restaurant.visited} />
      {expanded && (
        <>
          <RestaurantDetails dishes={restaurant.dishes} price={restaurant.price} />
          <RestaurantOpinion opinion={restaurant.opinion} />
          <EditRestaurantButton visited={restaurant.visited} onClick={onEdit} />
        </>
      )}
    </article>
  );
}
