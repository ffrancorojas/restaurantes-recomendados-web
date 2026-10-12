import { Button } from '@components/buttons';
import { styles } from './toggleRestaurantInfoButton.styles';
import type { ToggleRestaurantInfoButtonProps } from './toggleRestaurantInfoButton.types';

export function ToggleRestaurantInfoButton({
  expanded,
  onToggle,
}: ToggleRestaurantInfoButtonProps) {
  return (
    <Button.Icon
      iconName={expanded ? 'chevronUp' : 'chevronDown'}
      name={expanded ? 'Ocultar información' : 'Mostrar información'}
      aria-expanded={expanded}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      style={styles.button}
    />
  );
}
