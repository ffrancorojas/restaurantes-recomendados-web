import { styles } from './textField.styles';
import type { TextFieldProps } from './textField.types';
export function TextField({ label, value, onChange, ...inputProps }: TextFieldProps) {
  return (
    <label style={styles.field}>
      {label && <span>{label}</span>}
      <input
        {...inputProps}
        style={styles.input}
        value={value}
        onChange={(event) => onChange({ value: event.target.value })}
      />
    </label>
  );
}
