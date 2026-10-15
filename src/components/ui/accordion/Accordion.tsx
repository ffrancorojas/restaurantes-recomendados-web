import { useId, useState } from 'react';
import classNames from 'classnames';
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { RestaurantAccordionActionButtons, RestaurantAccordionDefaultContent } from './components';
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
    <MuiAccordion
      className={classNames(
        'card',
        'background-surface',
        'radius-card',
        'border-default',
        'flex-column',
        'min-width-zero',
        'restaurant-accordion',
        className,
      )}
      expanded={expanded}
      onChange={(_, nextExpanded) => setExpanded(nextExpanded)}
      disableGutters
      elevation={0}
      square
    >
      <AccordionSummary
        id={`${contentId}-summary`}
        aria-controls={contentId}
        component="div"
        className="restaurant-accordion-summary"
      >
        <div className="width-full min-width-zero restaurant-accordion-summary-content">
          <div className="flex align-items-flex-end justify-content-space-between gap-small restaurant-accordion-header">
            <span className="margin-none min-width-zero font-black font-size-lg restaurant-accordion-title">
              {restaurant.name}
            </span>
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
        </div>
      </AccordionSummary>
      <AccordionDetails id={contentId} className="restaurant-accordion-content">
        {children ?? (
          <RestaurantAccordionDefaultContent
            restaurant={restaurant}
            onRemove={onRemove}
            onShare={onShare}
          />
        )}
      </AccordionDetails>
    </MuiAccordion>
  );
}
