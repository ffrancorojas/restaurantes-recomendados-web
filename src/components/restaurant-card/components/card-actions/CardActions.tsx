import { Button } from '@components/buttons';
import { styles } from './cardActions.styles';
import type { CardActionsProps } from './cardActions.types';
export function CardActions({
  onEdit,
  onRemove,
  onShare,
  showEdit = true,
  showRemove = true,
  showShare = true,
}: CardActionsProps) {
  return (
    <div style={styles.container}>
      {showEdit && (
        <Button.Icon
          iconName="edit"
          name="Editar"
          onClick={onEdit}
          style={!showShare && !showRemove ? styles.compactEdit : undefined}
        />
      )}
      {showShare && <Button.Icon iconName="share" name="Compartir" onClick={onShare} />}
      {showRemove && <Button.Icon iconName="delete" name="Eliminar" onClick={onRemove} />}
    </div>
  );
}
