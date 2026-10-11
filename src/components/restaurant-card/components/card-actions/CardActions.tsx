import { Button } from '@components/buttons';
import { styles } from './cardActions.styles';
import type { CardActionsProps } from './cardActions.types';
export function CardActions({ onEdit, onRemove }: CardActionsProps) {
  return (
    <div style={styles.container}>
      <Button.Icon iconName="edit" name="Editar" onClick={onEdit} />
      <Button.Icon iconName="delete" name="Eliminar" onClick={onRemove} />
    </div>
  );
}
