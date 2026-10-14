import { Button } from '@components/ui/buttons';
import type { RestaurantFormHeaderProps } from './restaurantFormHeader.types';

export function RestaurantFormHeader({ isEditing, onBack }: RestaurantFormHeaderProps) {
  return (
    <header className="flex align-items-center justify-content-flex-start gap-extra-large margin-bottom-section">
      <Button.Text
        rightText="Volver"
        iconName="back"
        variant="ghost"
        type="button"
        className="margin-left-compact padding-left-none"
        onClick={onBack}
      />
      <h2 className="margin-none text-title">
        {isEditing ? 'Editar restaurante' : 'Añadir restaurante'}
      </h2>
    </header>
  );
}
