export type CheckboxChangeParams = { checked: boolean };
export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (params: CheckboxChangeParams) => void;
};
