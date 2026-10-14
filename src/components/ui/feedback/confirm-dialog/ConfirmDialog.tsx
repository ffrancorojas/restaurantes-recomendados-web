import { Button } from '@components/ui/buttons';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import type { ConfirmDialogProps } from './confirmDialog.types';
import './confirmDialog.styles.scss';

export function ConfirmDialog({
  title,
  message,
  confirmText = 'Continuar',
  cancelText = 'Seguir editando',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  return (
    <Dialog
      open
      onClose={onCancel}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
      slotProps={{ paper: { className: 'background-color-surface radius-card border-default width-full confirm-dialog-paper' } }}
    >
      <DialogTitle id="confirm-dialog-title" className="font-extrabold">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-dialog-description" className="text-muted">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="gap-small confirm-dialog-actions">
        <Button.Text leftText={cancelText} variant="secondary" onClick={onCancel} />
        <Button.Text leftText={confirmText} onClick={onConfirm} />
      </DialogActions>
    </Dialog>
  );
}
