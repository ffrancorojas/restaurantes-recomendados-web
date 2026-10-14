import { Button } from '@components/buttons';
import { styles } from './restaurantListHeader.styles';
import type { RestaurantListHeaderProps } from './restaurantListHeader.types';

export function RestaurantListHeader({ onBack, onCreate }: RestaurantListHeaderProps) {
  return (
    <section data-responsive-hero style={styles.hero}>
      <div style={styles.headingRow}>
        <Button.Text rightText="Volver" iconName="back" variant="ghost" onClick={onBack} />
        <h1 className="text-title" style={styles.heading}>
          Mi listado
        </h1>
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
