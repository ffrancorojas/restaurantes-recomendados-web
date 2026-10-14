import './restaurantTags.styles.scss';
import type { RestaurantTagsProps } from './restaurantTags.types';
export function RestaurantTags({ types }: RestaurantTagsProps) {
  return (
    <>
      {types.map((type) => (
        <span className="background-soft-green text-map font-extrabold font-size-xs restaurant-tags-tag" key={type}>
          {type}
        </span>
      ))}
    </>
  );
}
