import { styles } from './iconButton.styles';
import type { IconButtonProps } from './iconButton.types';

export function IconButton({
  icon,
  name,
  leftText,
  rightText,
  style,
  ...buttonProps
}: IconButtonProps) {
  return (
    <button
      {...buttonProps}
      aria-label={buttonProps['aria-label'] ?? name}
      title={buttonProps.title ?? name}
      style={{ ...styles.button, ...style }}
    >
      {leftText && <span>{leftText}</span>}
      {icon}
      {rightText && <span>{rightText}</span>}
    </button>
  );
}
