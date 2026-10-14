import { styles } from './restaurantTags.styles';
import type { RestaurantTagsProps } from './restaurantTags.types';
export function RestaurantTags({ types }: RestaurantTagsProps) {
  return (
    <div style={styles.tags}>
      {types.map((type) => (
        <span style={styles.tag} key={type}>
          {type}
        </span>
      ))}
    </div>
  );
}
