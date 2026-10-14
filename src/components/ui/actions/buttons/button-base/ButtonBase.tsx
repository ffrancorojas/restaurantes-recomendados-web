import { styles } from '../button.styles';
import type { ButtonBaseProps } from './buttonBase.types';

export function ButtonBase({
  icon,
  leftText,
  name,
  rightText,
  style,
  variant = 'ghost',
  ...buttonProps
}: ButtonBaseProps) {
  return (
    <button
      {...buttonProps}
      name={name}
      aria-label={buttonProps['aria-label'] ?? name}
      title={buttonProps.title ?? name}
      style={{ ...styles.base, ...styles[variant], ...style }}
    >
      {leftText && <span>{leftText}</span>}
      {icon}
      {rightText && <span>{rightText}</span>}
    </button>
  );
}
