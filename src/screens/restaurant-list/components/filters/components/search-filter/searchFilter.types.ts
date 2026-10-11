export type SearchFilterChangeParams = { value: string };
export type SearchFilterProps = {
  value: string;
  onChange: (params: SearchFilterChangeParams) => void;
};
