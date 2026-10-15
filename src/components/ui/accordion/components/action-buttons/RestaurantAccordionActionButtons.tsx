import { Button } from '@components/ui/buttons';
import type { RestaurantAccordionActionButtonsProps } from './restaurantAccordionActionButtons.types';

export function RestaurantAccordionActionButtons({
  expanded,
  contentId,
  onEdit,
  onOpenMaps,
  onSearchGoogle,
  onToggle,
}: RestaurantAccordionActionButtonsProps) {
  return (
    <div className="flex align-items-center gap-small restaurant-accordion-actions">
      <Button.Icon
        iconName="edit"
        iconSize={18}
        name="Editar"
        onClick={(event) => {
          event.stopPropagation();
          onEdit();
        }}
        className="compact-control padding-none restaurant-accordion-action"
      />
      <Button.Icon
        iconName="location"
        iconSize={20}
        name="Abrir en Google Maps"
        onClick={(event) => {
          event.stopPropagation();
          onOpenMaps();
        }}
        className="compact-control padding-none background-soft-green text-map radius-md restaurant-accordion-action restaurant-accordion-action-maps"
      />
      <Button.Icon
        iconName="google"
        iconSize={16}
        name="Buscar en Google"
        onClick={(event) => {
          event.stopPropagation();
          onSearchGoogle();
        }}
        className="compact-control padding-none background-soft-sand radius-md restaurant-accordion-action restaurant-accordion-action-google"
      />
      <Button.Icon
        iconName={expanded ? 'chevronUp' : 'chevronDown'}
        iconSize={18}
        name={expanded ? 'Ocultar información' : 'Mostrar información'}
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={(event) => {
          event.stopPropagation();
          onToggle();
        }}
        className="compact-control padding-none text-muted font-size-base restaurant-accordion-toggle"
      />
    </div>
  );
}
