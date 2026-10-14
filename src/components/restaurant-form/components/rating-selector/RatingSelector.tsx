import classNames from 'classnames';
import { RESTAURANT_RATING_OPTIONS } from '@assets/constants';
import { Icon, RATING_ICON_NAMES } from '@components/ui/icons';
import './ratingSelector.styles.scss';
import type { RatingSelectorProps } from './ratingSelector.types';
export function RatingSelector({ value, onChange }: RatingSelectorProps) {
  return (
    <div>
      <p className="margin-bottom-small text-color font-extrabold">¿Qué te ha parecido?</p>
      <div className="flex flex-wrap gap-small margin-bottom-large rating-selector-container" role="radiogroup" aria-label="¿Qué te ha parecido?">
        {RESTAURANT_RATING_OPTIONS.map((rating) => (
          <button
            type="button"
            role="radio"
            aria-checked={value === rating.value}
            aria-label={rating.label}
            className={classNames('flex', 'align-items-center', 'gap-small', 'border-default', 'radius-pill', 'text-muted', 'font-size-xs', 'background-soft-sand', 'rating-selector-button', { ['background-soft-green text-secondary rating-selector-selected']: value === rating.value })}
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
