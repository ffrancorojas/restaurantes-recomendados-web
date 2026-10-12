import { styles } from './textField.styles';
import type { TextFieldProps } from './textField.types';
export function TextField({ error, label, value, onChange, ...inputProps }: TextFieldProps) {
  return (
    <label style={styles.field}>
      {label && <span>{label}</span>}
      <input
        {...inputProps}
        style={{ ...styles.input, ...(error ? styles.inputError : {}) }}
        value={value}
        onChange={(event) => onChange({ value: event.target.value })}
      />
      {error && (
        <span role="alert" style={styles.error}>
          {error}
        </span>
      )}
    </label>
  );
}
