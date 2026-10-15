import { useId, useState } from 'react';
import classNames from 'classnames';
import type { Restaurant } from '@contracts';
import { RestaurantAccordionActionButtons } from './components/action-buttons';
import { RestaurantAccordionDefaultContent } from './components/default-template';
import './restaurantAccordion.styles.scss';
import type { RestaurantAccordionProps } from './accordion.types';

export function RestaurantAccordion({
  restaurant,
  collapsedContent,
  children,
  onEdit,
  onRemove,
  onShare,
  onOpenMaps,
  onSearchGoogle,
  className,
}: RestaurantAccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <article
      className={classNames(
        'card',
        'background-surface',
        'radius-card',
        'border-default',
        'flex-column',
        'gap-large',
        'min-width-zero',
        className,
      )}
    >
      <div className="flex align-items-center gap-small restaurant-accordion-header">
        <button
          type="button"
          className="flex-column gap-compact min-width-zero restaurant-accordion-summary"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={toggleExpanded}
        >
          <span className="font-black font-size-lg restaurant-accordion-title">{restaurant.name}</span>
          <span className="width-full restaurant-accordion-collapsed-content">{collapsedContent}</span>
        </button>
        <RestaurantAccordionActionButtons
          expanded={expanded}
          contentId={contentId}
          onEdit={onEdit}
          onOpenMaps={onOpenMaps}
          onSearchGoogle={onSearchGoogle}
          onToggle={toggleExpanded}
        />
      </div>
      <div id={contentId} className="restaurant-accordion-content" hidden={!expanded}>
        {children ?? (
          <RestaurantAccordionDefaultContent
            restaurant={restaurant}
            onRemove={onRemove}
            onShare={onShare}
          />
        )}
      </div>
    </article>
  );
}
