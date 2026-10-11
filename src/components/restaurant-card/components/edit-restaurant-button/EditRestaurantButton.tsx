import { Button } from '@components/buttons';
import { styles } from './editRestaurantButton.styles';
import type { EditRestaurantButtonProps } from './editRestaurantButton.types';
export function EditRestaurantButton({ visited, onClick }: EditRestaurantButtonProps) {
  return (
    <Button.Text
      rightText={`${visited ? 'Editar visita' : 'Registrar visita'} →`}
      style={styles.button}
      onClick={onClick}
    />
  );
}
