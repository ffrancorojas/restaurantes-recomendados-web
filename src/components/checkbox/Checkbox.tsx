import { styles } from './checkbox.styles';
import type { CheckboxProps } from './checkbox.types';
export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label style={styles.field}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange({ checked: event.target.checked })}
      />{' '}
      {label}
    </label>
  );
}
