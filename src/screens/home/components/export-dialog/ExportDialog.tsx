import { Button } from '@components/ui/buttons';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import type { ExportDialogProps } from './exportDialog.types';
import './exportDialog.styles.scss';

export function ExportDialog({ exporting, notice, onClose }: ExportDialogProps) {
  if (!notice) return null;

  const title =
    notice.severity === 'info'
      ? 'Exportando restaurantes'
      : notice.severity === 'error'
        ? 'No se pudo exportar'
        : 'Exportación completada';

  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="home-screen-export-dialog-title"
      aria-describedby="home-screen-export-dialog-description"
      slotProps={{
        paper: {
          className:
            'background-color-surface radius-card border-default width-full home-export-dialog-paper',
        },
      }}
    >
      <DialogTitle id="home-screen-export-dialog-title" className="font-extrabold">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="home-screen-export-dialog-description" className="text-muted">
          {notice.message}
        </DialogContentText>
      </DialogContent>
      {!exporting && (
        <DialogActions className="gap-small home-export-dialog-actions">
          <Button.Text leftText="Cerrar" variant="secondary" onClick={onClose} />
        </DialogActions>
      )}
    </Dialog>
  );
}
