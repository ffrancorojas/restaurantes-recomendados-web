import { ICONS } from './iconButton.tools';
import { styles } from './iconButton.styles';
import type { IconButtonProps } from './iconButton.types';

export function IconButton({
  icon,
  label,
  onClick,
  type = 'button',
  disabled = false,
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      title={label}
      disabled={disabled}
      style={styles.button}
      onClick={onClick}
    >
      {ICONS[icon]}
    </button>
  );
}
