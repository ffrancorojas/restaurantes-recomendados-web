import { useId, useState } from 'react';
import classNames from 'classnames';
import type { Restaurant } from '@contracts';
import { RestaurantAccordionActionButtons } from './components/action-buttons';
import { RestaurantAccordionDefaultContent } from './components/default-template';
import './accordion.styles.scss';
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
        'min-width-zero',
        className,
      )}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        toggleExpanded();
      }}
    >
      <div className="flex align-items-flex-end justify-content-space-between gap-small restaurant-accordion-header">
        <button
          type="button"
          className="margin-none min-width-zero font-black font-size-lg restaurant-accordion-summary"
          aria-expanded={expanded}
          aria-controls={contentId}
          onClick={toggleExpanded}
        >
          <span className="restaurant-accordion-title">{restaurant.name}</span>
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
      <div className="margin-top-small restaurant-accordion-collapsed-content">
        {typeof collapsedContent === 'function' ? collapsedContent(expanded) : collapsedContent}
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
