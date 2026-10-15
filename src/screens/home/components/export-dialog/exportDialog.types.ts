export type ExportNotice = {
  message: string;
  severity: 'success' | 'error' | 'info';
};

export type ExportDialogProps = {
  exporting: boolean;
  notice: ExportNotice | null;
  onClose: () => void;
};
