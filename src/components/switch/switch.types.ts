export type SwitchChangeParams = { checked: boolean };
export type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (params: SwitchChangeParams) => void;
};
