import { styles } from './spinner.styles';
import type { SpinnerProps } from './spinner.types';

export function Spinner({ label = 'Cargando…', size = 34 }: SpinnerProps) {
  return (
    <div role="status" style={styles.container}>
      <span aria-hidden="true" style={{ ...styles.spinner, width: size, height: size }} />
      <span>{label}</span>
    </div>
  );
}
