import { getPriceLabel } from '../../restaurantCard.tools';
import { styles } from './restaurantDetails.styles';
import type { RestaurantDetailsProps } from './restaurantDetails.types';
export function RestaurantDetails({ dishes, price }: RestaurantDetailsProps) {
  const priceLabel = getPriceLabel({ price });
  return (
    <p style={styles.details}>
      {dishes || 'Sin platos indicados'} {priceLabel && `· ${priceLabel}`}
    </p>
  );
}
