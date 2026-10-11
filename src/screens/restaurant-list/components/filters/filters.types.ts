export type FiltersQueryChangeParams = { value: string };
export type FiltersVisitedChangeParams = { checked: boolean };
export type FiltersProps = {
  query: string;
  onlyVisited: boolean;
  onQueryChange: (params: FiltersQueryChangeParams) => void;
  onVisitedChange: (params: FiltersVisitedChangeParams) => void;
};
