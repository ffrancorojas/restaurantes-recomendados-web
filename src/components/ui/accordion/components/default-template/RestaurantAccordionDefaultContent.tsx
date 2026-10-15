import { CardActions } from '../../../../features/restaurant-card/components/card-actions';
import { RestaurantDetails } from '../../../../features/restaurant-card/components/restaurant-details';
import { RestaurantOpinion } from '../../../../features/restaurant-card/components/restaurant-opinion';
import type { RestaurantAccordionDefaultContentProps } from './restaurantAccordionDefaultContent.types';

export function RestaurantAccordionDefaultContent({ restaurant, onRemove, onShare }: RestaurantAccordionDefaultContentProps) {
  return (
    <>
      <RestaurantDetails
        recommendedBy={restaurant.recommendedBy}
        dishes={restaurant.dishes}
        notes={restaurant.notes}
      />
      <RestaurantOpinion opinion={restaurant.opinion} />
      <div className="flex justify-content-flex-end margin-top-small">
        <CardActions
          onEdit={() => undefined}
          onRemove={onRemove}
          onShare={onShare}
          showEdit={false}
        />
      </div>
    </>
  );
}
