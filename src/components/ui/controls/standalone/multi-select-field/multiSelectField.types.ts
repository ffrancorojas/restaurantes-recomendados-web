export type MultiSelectOption<T extends string> = { value: T; label: string };
export type MultiSelectFieldChangeParams<T extends string> = { value: T[] };
export type MultiSelectFieldProps<T extends string> = {
  className?: string;
  label: string;
  value: T[];
  options: readonly MultiSelectOption<T>[];
  emptyLabel: string;
  clearLabel?: string;
  onChange: (params: MultiSelectFieldChangeParams<T>) => void;
};
