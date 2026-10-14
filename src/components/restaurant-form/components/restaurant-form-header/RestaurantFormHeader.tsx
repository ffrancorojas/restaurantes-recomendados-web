import { Button } from '@components/ui/buttons';
import { styles } from './restaurantFormHeader.styles';
import type { RestaurantFormHeaderProps } from './restaurantFormHeader.types';

export function RestaurantFormHeader({ isEditing, onBack }: RestaurantFormHeaderProps) {
  return (
    <header style={styles.title}>
      <Button.Text
        leftText="Volver"
        iconName="back"
        variant="ghost"
        type="button"
        data-responsive-back
        style={styles.backButton}
        onClick={onBack}
      />
      <h2 className="text-title" style={styles.heading}>
        {isEditing ? 'Editar restaurante' : 'Añadir restaurante'}
      </h2>
    </header>
  );
}
