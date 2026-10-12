import { Button } from '@components/buttons';
import { styles } from './restaurantListHeader.styles';
import type { RestaurantListHeaderProps } from './restaurantListHeader.types';

export function RestaurantListHeader({ restaurantCount, onCreate }: RestaurantListHeaderProps) {
  return (
    <section data-responsive-hero style={styles.hero}>
      <div>
        <p className="text-eyebrow" style={styles.eyebrow}>
          TU MAPA GASTRONÓMICO
        </p>
        <h1 className="text-title" style={styles.heading}>
          Mis restaurantes
        </h1>
        <p className="text-muted" style={styles.muted}>
          {restaurantCount} lugares guardados para tu próxima salida.
        </p>
      </div>
      <Button.Text
        rightText="Nueva entrada"
        iconName="add"
        data-responsive-new
        onClick={onCreate}
      />
    </section>
  );
}
