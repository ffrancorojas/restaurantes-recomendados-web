import { styles } from './editRestaurantButton.styles';
import type { EditRestaurantButtonProps } from './editRestaurantButton.types';
export function EditRestaurantButton({ visited, onClick }: EditRestaurantButtonProps) {
  return (
    <button style={styles.button} onClick={onClick}>
      {visited ? 'Editar visita' : 'Registrar visita'} →
    </button>
  );
}
