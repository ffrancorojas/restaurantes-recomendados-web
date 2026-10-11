import { RESTAURANT_RATING_OPTIONS } from '@assets/constants';
import { styles } from './ratingSelector.styles';
import type { RatingSelectorProps } from './ratingSelector.types';
export function RatingSelector({ value, onChange }: RatingSelectorProps) {
  return (
    <div style={styles.container}>
      {RESTAURANT_RATING_OPTIONS.map((rating) => (
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
