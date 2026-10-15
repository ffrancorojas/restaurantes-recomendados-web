export type SelectOption = { value: string; label: string };
export type SelectFieldChangeParams = { value: string };
export type SelectFieldProps = {
  className?: string;
  emptyValueLabel?: string;
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (params: SelectFieldChangeParams) => void;
};
