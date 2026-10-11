import { IconButton } from '@components/buttons';
import { styles } from './cardActions.styles';
import type { CardActionsProps } from './cardActions.types';
export function CardActions({ onEdit, onRemove }: CardActionsProps) {
  return (
    <div style={styles.container}>
      <IconButton icon={<span aria-hidden="true">✎</span>} name="Editar" onClick={onEdit} />
      <IconButton icon={<span aria-hidden="true">⌫</span>} name="Eliminar" onClick={onRemove} />
    </div>
  );
}
