import { FormControlLabel } from '@mui/material';
import { Switch } from '@components/ui/controls/standalone/switch';
import type { VisitedFilterProps } from './visitedFilter.types';
export function VisitedFilter({ value, onChange }: VisitedFilterProps) {
  return (
    <div className="flex background-surface radius-md border-default filter-row text-color justify-content-space-between padding-inline-small">
      <FormControlLabel
        label="Solo visitados"
        labelPlacement="start"
        control={<Switch checked={value} onChange={({ checked }) => onChange({ checked })} />}
      />
    </div>
  );
}
