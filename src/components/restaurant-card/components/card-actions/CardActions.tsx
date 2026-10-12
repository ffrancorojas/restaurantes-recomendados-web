import { Button } from '@components/buttons';
import { styles } from './cardActions.styles';
import type { CardActionsProps } from './cardActions.types';
export function CardActions({ onEdit, onRemove, onShare }: CardActionsProps) {
  return (
    <div style={styles.container}>
      <Button.Icon iconName="edit" name="Editar" onClick={onEdit} />
      <Button.Icon iconName="share" name="Compartir" onClick={onShare} />
      <Button.Icon iconName="delete" name="Eliminar" onClick={onRemove} />
    </div>
  );
}
