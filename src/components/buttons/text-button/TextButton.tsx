import { styles } from '../button.styles';
import type { TextButtonProps } from './textButton.types';

export function TextButton({ text, variant = 'primary', style, ...buttonProps }: TextButtonProps) {
  return (
    <button {...buttonProps} style={{ ...styles.base, ...styles[variant], ...style }}>
      {text}
    </button>
  );
}
