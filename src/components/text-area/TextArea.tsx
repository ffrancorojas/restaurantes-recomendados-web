import { styles } from './textArea.styles';
import type { TextAreaProps } from './textArea.types';
export function TextArea({ label, value, onChange, ...textareaProps }: TextAreaProps) {
  return (
    <label style={styles.field}>
      {label}
      <textarea
        {...textareaProps}
        style={styles.textarea}
        value={value}
        onChange={(event) => onChange({ value: event.target.value })}
      />
    </label>
  );
}
