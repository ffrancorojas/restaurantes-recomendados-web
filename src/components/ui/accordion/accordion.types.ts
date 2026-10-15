import type { ReactNode } from 'react';
import type { Restaurant } from '@contracts';

export type RestaurantAccordionProps = {
  restaurant: Restaurant;
  collapsedContent: ReactNode | ((expanded: boolean) => ReactNode);
  children?: ReactNode;
  onEdit: () => void;
  onRemove: () => void;
  onShare: () => void;
  onOpenMaps: () => void;
  onSearchGoogle: () => void;
  className?: string;
};
