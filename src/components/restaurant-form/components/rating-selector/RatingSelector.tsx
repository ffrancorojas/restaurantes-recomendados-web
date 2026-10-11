import type { RestaurantRating } from '@contracts';
import { styles } from './ratingSelector.styles';
import type { RatingSelectorProps } from './ratingSelector.types';
const ratings: { value: Exclude<RestaurantRating, ''>; emoji: string; label: string }[] = [
  { value: 'loved', emoji: '😍', label: 'Me encantó' },
  { value: 'liked', emoji: '😊', label: 'Me gustó' },
  { value: 'neutral', emoji: '😐', label: 'Normal' },
  { value: 'disliked', emoji: '🙁', label: 'No me gustó' },
  { value: 'disappointed', emoji: '😞', label: 'Me decepcionó' },
];
export function RatingSelector({ value, onChange }: RatingSelectorProps) {
  return (
    <div style={styles.container}>
      {ratings.map((rating) => (
        <button
          type="button"
          style={{ ...styles.button, ...(value === rating.value ? styles.selected : {}) }}
          key={rating.value}
          onClick={() => onChange({ value: rating.value })}
        >
          {rating.emoji} {rating.label}
        </button>
      ))}
    </div>
  );
}
