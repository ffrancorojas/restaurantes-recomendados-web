export type VisitedFilterChangeParams = { checked: boolean };
export type VisitedFilterProps = {
  value: boolean;
  onChange: (params: VisitedFilterChangeParams) => void;
};
