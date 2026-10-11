import { styles } from './button.styles';
import type { ButtonProps } from './button.types';

export function Button({ variant = 'primary', style, children, ...buttonProps }: ButtonProps) {
  return (
    <button {...buttonProps} style={{ ...styles.base, ...styles[variant], ...style }}>
      {children}
    </button>
  );
}
