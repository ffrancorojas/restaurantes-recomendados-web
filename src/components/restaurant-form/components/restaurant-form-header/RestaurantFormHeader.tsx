import { Button } from '@components/buttons';
import { styles } from './restaurantFormHeader.styles';
import type { RestaurantFormHeaderProps } from './restaurantFormHeader.types';

export function RestaurantFormHeader({ isEditing, onBack }: RestaurantFormHeaderProps) {
  return (
    <header style={styles.title}>
      <div>
        <p className="text-eyebrow" style={styles.eyebrow}>
          NUEVA HISTORIA
        </p>
        <h2 className="text-title" style={styles.heading}>
          {isEditing ? 'Editar restaurante' : 'Añadir restaurante'}
        </h2>
      </div>
      <Button.Text
        leftText="Volver"
        iconName="back"
        variant="ghost"
        type="button"
        onClick={onBack}
      />
    </header>
  );
}
