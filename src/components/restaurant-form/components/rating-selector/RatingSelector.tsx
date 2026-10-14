import { RESTAURANT_RATING_OPTIONS } from '@assets/constants';
import { RatingFace } from '@components/rating-face';
import { styles } from './ratingSelector.styles';
import type { RatingSelectorProps } from './ratingSelector.types';
export function RatingSelector({ value, onChange }: RatingSelectorProps) {
  return (
    <div>
      <p style={styles.label}>¿Qué te ha parecido?</p>
      <div style={styles.container} role="radiogroup" aria-label="¿Qué te ha parecido?">
        {RESTAURANT_RATING_OPTIONS.map((rating) => (
          <button
            type="button"
            role="radio"
            aria-checked={value === rating.value}
            aria-label={rating.label}
            style={{ ...styles.button, ...(value === rating.value ? styles.selected : {}) }}
            key={rating.value}
            onClick={() => onChange({ value: rating.value })}
          >
            <RatingFace rating={rating.value} />
            <span>{rating.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
