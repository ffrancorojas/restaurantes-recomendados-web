import { Button } from '@components/ui/buttons';
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
    <div className="flex gap-small">
      {showEdit && (
        <Button.Icon
          iconName="edit"
          name="Editar"
          onClick={onEdit}
          className={!showShare && !showRemove ? 'compact-control padding-none card-actions-compactEdit' : undefined}
        />
      )}
      {showShare && <Button.Icon iconName="share" name="Compartir" onClick={onShare} />}
      {showRemove && <Button.Icon iconName="delete" name="Eliminar" onClick={onRemove} />}
    </div>
  );
}
