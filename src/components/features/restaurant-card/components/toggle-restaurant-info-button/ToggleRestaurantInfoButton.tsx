import { Button } from '@components/ui/buttons';
import type { ToggleRestaurantInfoButtonProps } from './toggleRestaurantInfoButton.types';

export function ToggleRestaurantInfoButton({
  expanded,
  onToggle,
}: ToggleRestaurantInfoButtonProps) {
  return (
    <Button.Icon
      iconName={expanded ? 'chevronUp' : 'chevronDown'}
      iconSize={18}
      name={expanded ? 'Ocultar información' : 'Mostrar información'}
      aria-expanded={expanded}
      onClick={(event) => {
        event.stopPropagation();
        onToggle();
      }}
      className="compact-control padding-none text-muted font-size-base"
    />
  );
}
