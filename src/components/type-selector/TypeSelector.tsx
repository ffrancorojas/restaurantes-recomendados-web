import { RESTAURANT_TYPES } from '@contracts';
import { styles } from './typeSelector.styles';
import type { TypeSelectorProps } from './typeSelector.types';

export function TypeSelector({ value, onChange }: TypeSelectorProps) {
  return (
    <div style={styles.container}>
      {RESTAURANT_TYPES.map((type) => (
        <button
          type="button"
          style={{ ...styles.button, ...(value.includes(type) ? styles.selected : {}) }}
          key={type}
          onClick={() =>
            onChange({
              value: value.includes(type)
                ? value.filter((item) => item !== type)
                : [...value, type],
            })
          }
        >
          {type}
        </button>
      ))}
    </div>
  );
}
