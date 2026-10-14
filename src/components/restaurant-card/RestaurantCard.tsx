import {
  CardActions,
  RestaurantDetails,
  RestaurantLocation,
  RestaurantOpinion,
  RestaurantTags,
  RestaurantVisitStatus,
  ToggleRestaurantInfoButton,
} from './components';
import { RestaurantLinkActions } from '@components/restaurant-link-actions';
import { styles } from './restaurantCard.styles';
import type { RestaurantCardProps } from './restaurantCard.types';
import { useState } from 'react';
import { getPriceLabel } from './restaurantCard.tools';

export function RestaurantCard({ restaurant, onEdit, onRemove, onShare, onVisit }: RestaurantCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      style={styles.card}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) return;
        setExpanded((current) => !current);
      }}
    >
      <div style={styles.top}>
        <h2 style={styles.title}>{restaurant.name}</h2>
        <CardActions
          onEdit={onEdit}
          onRemove={onRemove}
          onShare={onShare}
          showRemove={false}
          showShare={false}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <RestaurantLinkActions name={restaurant.name} locality={restaurant.locality} compact />
          <ToggleRestaurantInfoButton
            expanded={expanded}
            onToggle={() => setExpanded((current) => !current)}
          />
        </div>
      </div>
      <div style={styles.summaryRow}>
        <div style={styles.metadata}>
          <RestaurantLocation locality={restaurant.locality} collapsed={!expanded} />
          <RestaurantTags types={restaurant.type} />
          {restaurant.price && (
            <span style={{ ...styles.price, ...(expanded ? {} : styles.collapsedText) }}>
              {getPriceLabel({ price: restaurant.price })}
            </span>
          )}
        </div>
        <RestaurantVisitStatus restaurant={restaurant} onVisit={onVisit} />
      </div>
      {expanded && (
        <>
          <RestaurantDetails
            recommendedBy={restaurant.recommendedBy}
            dishes={restaurant.dishes}
            notes={restaurant.notes}
          />
          <RestaurantOpinion opinion={restaurant.opinion} />
          <div style={styles.expandedActions}>
            <CardActions
              onEdit={onEdit}
              onRemove={onRemove}
              onShare={onShare}
              showEdit={false}
            />
          </div>
        </>
      )}
    </article>
  );
}
