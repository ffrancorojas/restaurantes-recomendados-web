import { styles } from './button.styles';
import type { ButtonProps } from './button.types';

export function Button({ text, variant = 'primary', style, ...buttonProps }: ButtonProps) {
  return (
    <button {...buttonProps} style={{ ...styles.base, ...styles[variant], ...style }}>
      {text}
    </button>
  );
}
