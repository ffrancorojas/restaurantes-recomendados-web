import { styles } from './selectField.styles';
import type { SelectFieldProps } from './selectField.types';
export function SelectField({ label, value, options, onChange }: SelectFieldProps) {
  return (
    <label style={styles.field}>
      {label}
      <select
        style={styles.select}
        value={value}
        onChange={(event) => onChange({ value: event.target.value })}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
