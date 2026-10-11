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

export function RestaurantCard({ restaurant, onEdit, onRemove }: RestaurantCardProps) {
  return (
    <article style={styles.card}>
      <div style={styles.top}>
        <span style={styles.pin}>⌖</span>
        <div style={{ display: 'flex', gap: 8 }}>
          <RestaurantLinkActions name={restaurant.name} locality={restaurant.locality} />
          <CardActions onEdit={onEdit} onRemove={onRemove} />
        </div>
      </div>
      <h2 style={styles.title}>{restaurant.name}</h2>
      <RestaurantLocation locality={restaurant.locality} />
      <RestaurantDetails dishes={restaurant.dishes} price={restaurant.price} />
      <RestaurantTags types={restaurant.type} visited={restaurant.visited} />
      <RestaurantOpinion opinion={restaurant.opinion} />
      <EditRestaurantButton visited={restaurant.visited} onClick={onEdit} />
    </article>
  );
}
