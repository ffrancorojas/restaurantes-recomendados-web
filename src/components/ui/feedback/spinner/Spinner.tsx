import './spinner.styles.scss';
import type { SpinnerProps } from './spinner.types';
import { Icon } from '@components/ui/icons';

export function Spinner({ label = 'Cargando…', size = 34 }: SpinnerProps) {
  return (
    <div role="status" className="flex-column align-items-center justify-content-center text-muted padding-empty-state spinner-container">
      <Icon name="spinner" size={size} className="text-primary" />
      <span>{label}</span>
    </div>
  );
}
