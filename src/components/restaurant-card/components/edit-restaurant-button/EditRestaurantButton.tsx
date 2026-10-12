import { Button } from '@components/buttons';
import { styles } from './editRestaurantButton.styles';
import type { EditRestaurantButtonProps } from './editRestaurantButton.types';
export function EditRestaurantButton({ visited, onClick }: EditRestaurantButtonProps) {
  return (
    <Button.Text
      rightText={visited ? '✓ Visitado' : 'Registrar visita'}
      variant="secondary"
      style={styles.button}
      onClick={onClick}
    />
  );
}
