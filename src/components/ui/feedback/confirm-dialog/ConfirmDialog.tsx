import { Button } from '@components/ui/buttons';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import type { ConfirmDialogProps } from './confirmDialog.types';

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
      slotProps={{
        paper: {
          sx: {
            width: '100%',
            maxWidth: '26.25rem',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            backgroundColor: 'var(--color-surface)',
            backgroundImage: 'none',
            boxShadow: 'var(--shadow-modal)',
          },
        },
      }}
    >
      <DialogTitle id="confirm-dialog-title" sx={{ fontWeight: 800 }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="confirm-dialog-description" sx={{ color: 'var(--color-muted)' }}>
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ gap: '0.5rem', padding: '0.5rem 1.5rem 1.5rem' }}>
        <Button.Text leftText={cancelText} variant="secondary" onClick={onCancel} />
        <Button.Text leftText={confirmText} onClick={onConfirm} />
      </DialogActions>
    </Dialog>
  );
}
