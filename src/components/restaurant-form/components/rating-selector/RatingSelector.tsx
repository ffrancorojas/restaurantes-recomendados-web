import { RESTAURANT_RATING_OPTIONS } from '@assets/constants';
import { Icon, RATING_ICON_NAMES } from '@components/icons';
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
            <Icon name={RATING_ICON_NAMES[rating.value]} size={32} />
            <span>{rating.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
