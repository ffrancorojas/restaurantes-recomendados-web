import { IconButton } from '@components/icon-button';
import { styles } from './cardActions.styles';
import type { CardActionsProps } from './cardActions.types';
export function CardActions({ onEdit, onRemove }: CardActionsProps) {
  return (
    <div style={styles.container}>
      <IconButton icon="edit" label="Editar" onClick={onEdit} />
      <IconButton icon="delete" label="Eliminar" onClick={onRemove} />
    </div>
  );
}
