import { styles } from './spinner.styles';
import type { SpinnerProps } from './spinner.types';
import { Icon } from '@components/icons';

export function Spinner({ label = 'Cargando…', size = 34 }: SpinnerProps) {
  return (
    <div role="status" style={styles.container}>
      <Icon name="spinner" size={size} style={styles.spinner} />
      <span>{label}</span>
    </div>
  );
}
